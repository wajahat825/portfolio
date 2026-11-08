import { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import Section from './Section';
import { profile } from '../data/profile';

const API = import.meta.env.VITE_API_URL || '';
const empty = { name: '', email: '', subject: '', message: '' };
const fields = [
  { key: 'name', label: 'Name', type: 'text', autoComplete: 'name' },
  { key: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
  { key: 'subject', label: 'Subject', type: 'text' },
  { key: 'message', label: 'Message', type: 'textarea' },
];

function validate(f) {
  const e = {};
  if (f.name.trim().length < 2) e.name = 'Please enter your name.';
  if (!/^\S+@\S+\.\S+$/.test(f.email)) e.email = 'Please enter a valid email address.';
  if (f.subject.trim().length < 3) e.subject = 'Please add a subject.';
  if (f.message.trim().length < 10) e.message = 'Your message must be at least 10 characters.';
  return e;
}

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  async function onSubmit(ev) {
    ev.preventDefault();
    const e = validate(form);
    setErrors(e);
    if (Object.keys(e).length) return;
    setStatus({ type: 'loading' });
    try {
      const res = await fetch(`${API}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Something went wrong. Please try again.');
      setStatus({ type: 'success', text: 'Thanks! Your message has been sent.' });
      setForm(empty);
    } catch (err) {
      setStatus({ type: 'error', text: err.message });
    }
  }

  const input = 'w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-slate-500';
  return (
    <Section id="contact" title="Get In Touch">
      <div className="grid gap-12 md:grid-cols-5">
        <div className="space-y-4 md:col-span-2">
          <p>Have a project in mind or a role to discuss? Send a message and I’ll get back to you.</p>
          <a href={`mailto:${profile.email}`} className="flex items-center gap-3 break-all text-white hover:text-violet-300"><Mail size={20} className="shrink-0" /> {profile.email}</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white hover:text-violet-300"><Github size={20} /> GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white hover:text-violet-300"><Linkedin size={20} /> LinkedIn</a>
        </div>
        <form onSubmit={onSubmit} noValidate className="space-y-4 md:col-span-3">
          {fields.map((f) => (
            <div key={f.key}>
              <label htmlFor={f.key} className="mb-1 block text-sm text-slate-300">{f.label}</label>
              {f.type === 'textarea' ? (
                <textarea id={f.key} rows={5} value={form[f.key]} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} aria-invalid={!!errors[f.key]} aria-describedby={`${f.key}-err`} className={input} />
              ) : (
                <input id={f.key} type={f.type} autoComplete={f.autoComplete} value={form[f.key]} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} aria-invalid={!!errors[f.key]} aria-describedby={`${f.key}-err`} className={input} />
              )}
              <p id={`${f.key}-err`} className="mt-1 min-h-5 text-sm text-red-400">{errors[f.key]}</p>
            </div>
          ))}
          <button type="submit" disabled={status?.type === 'loading'} className="btn btn-primary disabled:opacity-60">
            <Send size={18} /> {status?.type === 'loading' ? 'Sending…' : 'Send Message'}
          </button>
          <p role="status" className={`text-sm ${status?.type === 'success' ? 'text-emerald-400' : 'text-red-400'}`}>
            {status?.type === 'success' || status?.type === 'error' ? status.text : ''}
          </p>
        </form>
      </div>
    </Section>
  );
}
