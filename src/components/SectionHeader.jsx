import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      className="sectionHeader"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45 }}
    >
      <div className="eyebrow">
        <Sparkles size={14} />
        {eyebrow}
      </div>
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </motion.div>
  )
}
