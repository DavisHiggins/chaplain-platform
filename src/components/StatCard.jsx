import { motion } from 'framer-motion'

export default function StatCard({ value, label, delay = 0 }) {
  return (
    <motion.div
      className="statCard"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -5 }}
    >
      <div>{value}</div>
      <span>{label}</span>
    </motion.div>
  )
}
