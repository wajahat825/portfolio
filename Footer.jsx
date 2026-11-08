import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-white"><Github size={20} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white"><Linkedin size={20} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-white"><Mail size={20} /></a>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="btn btn-ghost !px-4 !py-2 text-sm"><ArrowUp size={16} /> Back to Top</button>
        </div>
      </div>
    </footer>
  );
}
