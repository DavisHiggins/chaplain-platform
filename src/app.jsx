import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Background from './components/Background'
import Header from './components/Header'
import Loader from './components/Loader'
import PageTransition from './components/PageTransition'
import AboutPage from './pages/AboutPage'
import CalendarPage from './pages/CalendarPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ScripturePage from './pages/ScripturePage'
import { getUpcomingStudy } from './utils/date'
import './styles/global.css'

export default function App() {
  const [activePage, setActivePage] = useState('home')
  const [loading, setLoading] = useState(true)
  const currentStudy = useMemo(() => getUpcomingStudy(new Date()), [])

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1850)
    return () => window.clearTimeout(timer)
  }, [])

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage setActivePage={setActivePage} currentStudy={currentStudy} />
      case 'calendar':
        return <CalendarPage />
      case 'scripture':
        return <ScripturePage currentStudy={currentStudy} />
      case 'about':
        return <AboutPage />
      case 'contact':
        return <ContactPage />
      default:
        return <HomePage setActivePage={setActivePage} currentStudy={currentStudy} />
    }
  }

  return (
    <div className="appRoot">
      <Background />
      <AnimatePresence>{loading ? <Loader key="loader" /> : null}</AnimatePresence>
      <div className={loading ? 'siteFrame loadingSite' : 'siteFrame'}>
        <Header activePage={activePage} setActivePage={setActivePage} />
        <main>
          <AnimatePresence mode="wait">
            <PageTransition key={activePage}>{renderPage()}</PageTransition>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}
