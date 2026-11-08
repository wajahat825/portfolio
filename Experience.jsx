import { motion } from 'framer-motion';
import Section from './Section';
import { timeline } from '../data/profile';

export default function Experience() {
  return (
    <Section id="experience" title="Experience and Education">
      <ol className="relative ml-3 border-l border-white/15">
        {timeline.map((t) => (
          <motion.li key={t.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-10 ml-6">
            <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />
            <p className="text-sm text-violet-300">{t.type} · {t.period}</p>
            <h3 className="text-xl font-semibold text-white">{t.title}</h3>
            <p>{t.place}</p>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
