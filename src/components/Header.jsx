import { motion } from 'framer-motion'
import { NAV_ITEMS } from '../data/content'
import { iconMap } from './icons'
import pdtCrest from '../assets/pdt-crest.png'

export default function Header({ activePage, setActivePage }) {
  const activeTitle = NAV_ITEMS.find((item) => item.key === activePage)?.label || 'Home'

  return (
    <header className="siteHeader">
      <div className="headerInner">
        <button className="brand" type="button" onClick={() => setActivePage('home')} aria-label="Go to Home">
          <div className="brandLogo">
            <img src={pdtCrest} alt="Phi Delta Theta crest" />
          </div>
          <div className="brandText">
            <div className="brandTitle">Phi Delta Theta</div>
            <div className="brandSub">NC Epsilon - Chaplain</div>
          </div>
        </button>

        <nav className="nav" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => {
            const Icon = iconMap[item.icon]
            const active = activePage === item.key
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => setActivePage(item.key)}
                className={active ? 'activeNav' : ''}
              >
                {active ? <motion.span className="navIndicator" layoutId="navIndicator" /> : null}
                <Icon size={16} />
                {item.label}
              </button>
            )
          })}
        </nav>

        <div className="mobileCurrent">{activeTitle}</div>
      </div>

      <div className="mobileNav" aria-label="Mobile navigation">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => setActivePage(item.key)}
            className={activePage === item.key ? 'activeNav' : ''}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  )
}
