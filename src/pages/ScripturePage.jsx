import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BookOpen, CheckCircle2, Clock, Shield } from 'lucide-react'
import PageShell from '../components/PageShell'
import ScriptureCard from '../components/ScriptureCard'
import SectionHeader from '../components/SectionHeader'
import { BOOKS, PAGE_COPY, SCRIPTURE_PLAN } from '../data/content'
import { classifyStudy, formatDate } from '../utils/date'
import pdtShield from '../assets/pdt-shield.png'

export default function ScripturePage({ currentStudy }) {
  const [innerTab, setInnerTab] = useState('week')

  return (
    <PageShell>
      <SectionHeader {...PAGE_COPY.scripture} />

      <div className="scriptureIntroPanel">
        <div className="scriptureIntroCopy">
          <div className="cardTopline">
            <Shield size={17} />
            Scripture Framework
          </div>
          <h2>{currentStudy.title}</h2>
          <p>{currentStudy.summary}</p>
        </div>
        <div className="scriptureIntroStats">
          <div><span>Book</span><strong>{currentStudy.book}</strong></div>
          <div><span>Theme</span><strong>{currentStudy.theme}</strong></div>
          <div><span>Passage</span><strong>{currentStudy.passage}</strong></div>
        </div>
      </div>

      <div className="bookGrid scriptureBookGrid">
        {BOOKS.map((book, index) => (
          <motion.div
            className="bookCard"
            key={book.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            whileHover={{ y: -7 }}
          >
            <div className="bookIndex">0{index + 1}</div>
            <div className="bookTitle">
              <BookOpen size={18} />
              {book.title}
            </div>
            <p>{book.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="tabCard mt24 roadmapShell">
        <div className="tabHeaderRow">
          <div>
            <div className="smallLabel">Roadmap View</div>
            <h2>{innerTab === 'week' ? "This Week's Scripture" : 'Scripture Library'}</h2>
          </div>
          <div className="innerTabs">
            <button
              type="button"
              className={innerTab === 'week' ? 'activeInnerTab' : ''}
              onClick={() => setInnerTab('week')}
            >
              This Week's Scripture
            </button>
            <button
              type="button"
              className={innerTab === 'plan' ? 'activeInnerTab' : ''}
              onClick={() => setInnerTab('plan')}
            >
              Scripture Library
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {innerTab === 'week' ? (
            <motion.div
              className="currentStudyCard premiumCurrentStudy"
              key="week"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.26 }}
            >
              <div className="currentStudyLeft">
                <div className="smallLabel">Upcoming Thursday - {formatDate(currentStudy.date)}</div>
                <h2>{currentStudy.title}</h2>
                <div className="passageBadge">{currentStudy.passage}</div>
                <p>{currentStudy.summary}</p>
                <div className="detailGrid">
                  <div><BookOpen size={16} /><span>Book</span><strong>{currentStudy.book}</strong></div>
                  <div><CheckCircle2 size={16} /><span>Theme</span><strong>{currentStudy.theme}</strong></div>
                  <div><Clock size={16} /><span>Meeting</span><strong>Bible Study</strong></div>
                </div>
              </div>
              <div className="currentStudyRight">
                <div className="shieldStage">
                  <img src={pdtShield} alt="Phi Delta Theta shield" />
                </div>
                <p>Switches to the next scheduled passage every Friday.</p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="timelineList premiumTimeline"
              key="plan"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.26 }}
            >
              {SCRIPTURE_PLAN.map((item, index) => (
                <ScriptureCard
                  key={item.week}
                  item={item}
                  status={classifyStudy(item, currentStudy)}
                  delay={Math.min(index * 0.025, 0.2)}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageShell>
  )
}
