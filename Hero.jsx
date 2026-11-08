import { motion } from 'framer-motion';
import { Github, Linkedin, Download } from 'lucide-react';
import useTyping from '../hooks/useTyping';
import { profile, roles } from '../data/profile';

export default function Hero() {
  const text = useTyping(roles);
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/30 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blue-600/30 blur-[120px]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I’m <span className="gradient-text">{profile.name}</span>, MERN Stack Developer.
          </h1>
          <p className="mt-6 h-8 text-xl text-slate-300" aria-label={roles.join(', ')}>
            <span aria-hidden="true">{text}<span className="animate-pulse text-violet-400">|</span></span>
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="btn btn-primary">View My Projects</a>
            <a href={profile.resume} download className="btn btn-ghost"><Download size={18} /> Download Resume</a>
          </div>
          <div className="mt-8 flex gap-4">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-400 transition hover:text-white"><Github /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-400 transition hover:text-white"><Linkedin /></a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="flex justify-center">
          <div className="rounded-[2rem] bg-gradient-to-br from-violet-500 to-blue-500 p-1 shadow-2xl shadow-violet-900/40">
            <img src="/profile.jpg" alt="Portrait of Wajahat Hussain" width="720" height="960" fetchPriority="high" className="h-[26rem] w-72 rounded-[1.8rem] object-cover object-top sm:h-[30rem] sm:w-80" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
