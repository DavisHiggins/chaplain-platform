import { motion } from 'framer-motion'
import { iconMap } from './icons'

export default function PrincipleCard({ item, delay = 0 }) {
  const Icon = iconMap[item.icon]

  return (
    <motion.div
      className="principleCard"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.42, delay }}
      whileHover={{ y: -6, rotateX: 1.5, rotateY: -1.5 }}
    >
      <div className="iconBox">
        <Icon size={21} />
      </div>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </motion.div>
  )
}
