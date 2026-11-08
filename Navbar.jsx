import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { profile } from '../data/profile';

const links = ['About', 'Skills', 'Projects', 'Experience', 'Services', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="font-bold text-white">{profile.name}</a>
        <ul className="hidden gap-8 md:flex">
          {links.map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} className="text-sm text-slate-300 transition hover:text-white">{l}</a></li>
          ))}
        </ul>
        <button className="text-white md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-white/10 px-6 md:hidden">
            {links.map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block py-3 text-slate-200">{l}</a></li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
