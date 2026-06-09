import { motion } from 'framer-motion'
import { formatDate } from '../utils/date'

export default function ScriptureCard({ item, status, delay = 0 }) {
  return (
    <motion.div
      className={`timelineItem status${status}`}
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.38, delay }}
    >
      <div className="timelineRail">
        <div className="weekBubble">{item.week}</div>
      </div>
      <div className="timelineContent">
        <div className="timelineMeta">
          <span className="dateBadge">{formatDate(item.date)}</span>
          <strong className="statusBadge">{status}</strong>
        </div>
        <h3>{item.title}</h3>
        <div className="scriptureBadgeRow">
          <span>{item.passage}</span>
          <span>{item.book}</span>
          <span>{item.theme}</span>
        </div>
        <p>{item.summary}</p>
      </div>
    </motion.div>
  )
}
