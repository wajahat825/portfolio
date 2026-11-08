import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import Section from './Section';
import { skills } from '../data/profile';

export default function Skills() {
  return (
    <Section id="skills" title="Technical Skills">
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {skills.map((s, i) => (
          <motion.li
            key={s}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white hover:border-violet-500/60"
          >
            <Code2 size={18} className="shrink-0 text-violet-400" /> {s}
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
