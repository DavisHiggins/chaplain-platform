import { motion } from 'framer-motion'
import { BookOpen, CalendarDays, Clock, Cross, Shield, Target } from 'lucide-react'
import PageShell from '../components/PageShell'
import MagneticButton from '../components/MagneticButton'
import PrincipleCard from '../components/PrincipleCard'
import Reveal from '../components/Reveal'
import StatCard from '../components/StatCard'
import { HOME_COPY, PRINCIPLES } from '../data/content'
import pdtCrest from '../assets/pdt-crest.png'
import unccLogo from '../assets/uncc-logo.png'

export default function HomePage({ setActivePage, currentStudy }) {
  const heroItems = [
    { className: 'heroBadge', content: <><Cross size={16} />{HOME_COPY.badge}</> },
    { className: 'heroTitleWrap', content: <h1>{HOME_COPY.title}</h1> },
    { className: 'heroSubTitle', content: HOME_COPY.subtitle },
    { className: 'heroLead', content: HOME_COPY.lead },
  ]

  return (
    <PageShell className="homeShell">
      <section className="heroStage">
        <motion.div
          className="heroGlow heroGlowOne heroStageGlow"
          animate={{ scale: [1, 1.08, 1], opacity: [0.58, 0.84, 0.58] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="heroGlow heroGlowTwo heroStageGlow"
          animate={{ scale: [1.05, 1, 1.05], opacity: [0.5, 0.78, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="heroBeam" />

        <div className="heroStageContent">
          <div className="heroText">
            {heroItems.map((item, index) => (
              <motion.div
                className={item.className}
                key={item.className}
                initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.58, delay: 0.1 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {item.content}
              </motion.div>
            ))}

            <motion.div
              className="heroChips"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.54 }}
            >
              {HOME_COPY.chips.map((chip) => <span key={chip}>{chip}</span>)}
            </motion.div>
            <motion.div
              className="heroActions"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.64 }}
            >
              <MagneticButton onClick={() => setActivePage('scripture')} className="primaryBtn">
                View Scripture Plan
                <BookOpen size={17} />
              </MagneticButton>
              <MagneticButton onClick={() => setActivePage('calendar')} className="secondaryBtn">
                Open Calendar
                <CalendarDays size={17} />
              </MagneticButton>
            </motion.div>
          </div>

          <motion.div
            className="heroCommand"
            initial={{ opacity: 0, x: 34, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="heroOrbital">
              <motion.img
                src={unccLogo}
                alt="UNC Charlotte logo"
                className="unccWatermark"
                animate={{ y: [0, -8, 0], rotate: [0, 1, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="crestPanel"
                whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
                transition={{ type: 'spring', stiffness: 180, damping: 18 }}
              >
                <div className="crestRing" />
                <img src={pdtCrest} alt="Phi Delta Theta crest" className="crestImg" />
                <div className="crestInfo">
                  <div className="smallLabel">This Week's Message</div>
                  <h3>{currentStudy.title}</h3>
                  <p>{currentStudy.passage}</p>
                </div>
              </motion.div>
            </div>

            <div className="heroScriptureDossier">
              <div className="dossierHeader">
                <div className="iconBox goldIcon">
                  <Shield size={20} />
                </div>
                <div>
                  <div className="smallLabel">Current Scripture</div>
                  <strong>{currentStudy.book}</strong>
                </div>
              </div>
              <h2>{currentStudy.title}</h2>
              <div className="passageBadge">{currentStudy.passage}</div>
              <p>{currentStudy.summary}</p>
              <div className="dossierMeta">
                <span>{currentStudy.theme}</span>
                <span>Bible Study</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="statGrid">
        {HOME_COPY.stats.map((stat, index) => (
          <StatCard key={stat.value} value={stat.value} label={stat.label} delay={0.08 * index} />
        ))}
      </div>

      <div className="gridTwo mt24">
        <Reveal className="glassCard largePad">
          <div className="cardTopline">
            <Target size={17} />
            {HOME_COPY.mission.label}
          </div>
          <h2>{HOME_COPY.mission.title}</h2>
          <p>{HOME_COPY.mission.text}</p>
        </Reveal>
        <Reveal className="glassCard largePad" delay={0.08}>
          <div className="cardTopline">
            <Clock size={17} />
            {HOME_COPY.structure.label}
          </div>
          <h2>{HOME_COPY.structure.title}</h2>
          <p>{HOME_COPY.structure.text}</p>
        </Reveal>
      </div>

      <div className="principleGrid mt24">
        {PRINCIPLES.map((item, index) => (
          <PrincipleCard key={item.title} item={item} delay={0.06 * index} />
        ))}
      </div>
    </PageShell>
  )
}
