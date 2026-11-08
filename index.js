import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import rateLimit from 'express-rate-limit';
import Message from './models/Message.js';

const app = express();
app.use(express.json({ limit: '10kb' }));
app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));

// ---- Database ----
const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio';
mongoose
  .connect(uri, { serverSelectionTimeoutMS: 5000 })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection failed:', err.message));

// ---- Email (optional: messages are saved to MongoDB even if SMTP is not set up) ----
const mailer = process.env.SMTP_USER
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_PORT === '465',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    })
  : null;

const escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 5, message: { error: 'Too many messages. Please try again later.' } });

app.get('/api/health', (_req, res) =>
  res.json({ ok: true, database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected' })
);

app.post('/api/contact', limiter, async (req, res) => {
  const { name = '', email = '', subject = '', message = '' } = req.body || {};
  if (name.trim().length < 2 || !/^\S+@\S+\.\S+$/.test(email) || subject.trim().length < 3 || message.trim().length < 10) {
    return res.status(400).json({ error: 'Please fill in all fields correctly.' });
  }
  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({ error: 'Database is unavailable. Please try again later.' });
  }
  try {
    await Message.create({ name, email, subject, message });
  } catch (err) {
    console.error('Save error:', err.message);
    return res.status(400).json({ error: 'Could not save your message. Please check the fields and try again.' });
  }
  if (mailer) {
    mailer
      .sendMail({
        from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_TO,
        replyTo: email,
        subject: `[Portfolio] ${subject.replace(/[\r\n]+/g, ' ')}`,
        text: `From: ${name} <${email}>\n\n${message}`,
        html: `<p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p><p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`,
      })
      .catch((err) => console.error('Email notification failed:', err.message));
  }
  res.json({ ok: true });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`API listening on http://localhost:${port}`));
