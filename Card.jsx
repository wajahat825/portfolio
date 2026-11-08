import { motion } from 'framer-motion';

export default function Card({ children, className = '' }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-violet-500/50 ${className}`}
    >
      {children}
    </motion.div>
  );
}
