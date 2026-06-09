import { motion } from 'framer-motion'
import PageShell from '../components/PageShell'
import PrincipleCard from '../components/PrincipleCard'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import { ABOUT_COPY, PAGE_COPY, PRINCIPLES } from '../data/content'
import newerHeadshot from '../assets/newerheadshot.jpg'
import pdtLetters from '../assets/pdt-letters.png'
import pdtShield from '../assets/pdt-shield.png'

export default function AboutPage() {
  return (
    <PageShell>
      <SectionHeader {...PAGE_COPY.about} />

      <div className="aboutHero leadershipHero">
        <motion.div
          className="headshotFrame"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="headshotGlow" />
          <img src={newerHeadshot} alt="Davis Higgins headshot" />
        </motion.div>
        <motion.div
          className="aboutText"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <div className="smallLabel">{ABOUT_COPY.role}</div>
          <h2>{ABOUT_COPY.name}</h2>
          <p>{ABOUT_COPY.bio}</p>
          <div className="aboutTags">
            {ABOUT_COPY.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <div className="leadershipMarkRow">
            <img src={pdtShield} alt="Phi Delta Theta shield" />
            <img src={pdtLetters} alt="Phi Delta Theta letters" />
          </div>
        </motion.div>
      </div>

      <div className="principleGrid mt24">
        {PRINCIPLES.map((item, index) => (
          <PrincipleCard key={item.title} item={item} delay={0.06 * index} />
        ))}
      </div>

      <div className="gridTwo mt24">
        <Reveal className="glassCard largePad identityCard">
          <img src={pdtShield} alt="Phi Delta Theta shield" className="identityLogo shieldLogo" />
          <h2>{ABOUT_COPY.brotherhood.title}</h2>
          <p>{ABOUT_COPY.brotherhood.text}</p>
        </Reveal>
        <Reveal className="glassCard largePad identityCard logoShowcase" delay={0.08}>
          <img src={pdtLetters} alt="Phi Delta Theta letters" className="identityLogo lettersLogo" />
          <h2>{ABOUT_COPY.chapter.title}</h2>
          <p>{ABOUT_COPY.chapter.text}</p>
        </Reveal>
      </div>
    </PageShell>
  )
}
