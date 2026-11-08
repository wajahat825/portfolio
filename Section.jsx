import { motion } from 'framer-motion';

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-16 px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-2 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        <div className="mb-10 h-1 w-16 rounded bg-gradient-to-r from-violet-500 to-blue-500" />
        {children}
      </motion.div>
    </section>
  );
}
