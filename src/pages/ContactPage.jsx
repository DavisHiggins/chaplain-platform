import { MessageCircle, PhoneCall } from 'lucide-react'
import PageShell from '../components/PageShell'
import MagneticButton from '../components/MagneticButton'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import { CONTACT_COPY, PAGE_COPY } from '../data/content'

export default function ContactPage() {
  return (
    <PageShell>
      <SectionHeader {...PAGE_COPY.contact} />

      <div className="contactHero supportHero">
        <Reveal className="contactMainCard">
          <div className="contactSignal" />
          <div className="contactIconWrap">
            <PhoneCall size={34} />
          </div>
          <div className="smallLabel">{CONTACT_COPY.label}</div>
          <h2>{CONTACT_COPY.title}</h2>
          <p>{CONTACT_COPY.text}</p>
          <MagneticButton as="a" className="phoneButton" href={CONTACT_COPY.phoneHref}>
            <PhoneCall size={20} />
            <span>{CONTACT_COPY.phoneLabel}</span>
          </MagneticButton>
        </Reveal>

        <div className="contactSideStack">
          {CONTACT_COPY.cards.map((card, index) => (
            <Reveal className="contactMiniCard" key={card.title} delay={index * 0.06}>
              <div className="contactStep">{index + 1}</div>
              <div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="contactBottomCard mt24">
        <div className="cardTopline">
          <MessageCircle size={17} />
          {CONTACT_COPY.openConversation.label}
        </div>
        <h2>{CONTACT_COPY.openConversation.title}</h2>
        <p>{CONTACT_COPY.openConversation.text}</p>
      </Reveal>
    </PageShell>
  )
}
