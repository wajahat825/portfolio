import Section from './Section';
import { profile } from '../data/profile';

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-3xl space-y-4 text-lg leading-relaxed">
        <p>I’m a MERN stack developer based in {profile.location} with 1 year of experience building full-stack web applications. I enjoy turning an idea into something people can actually use, from the first database schema to the final interface.</p>
        <p>On the frontend I work with React.js, Tailwind CSS and Bootstrap. On the backend I build REST APIs with Node.js and Express.js, store data in MongoDB with Mongoose, and secure routes with JWT authentication.</p>
        <p>I care about creating scalable, user-friendly applications with clean, maintainable code. I’m open to full-time roles and freelance projects.</p>
      </div>
    </Section>
  );
}
