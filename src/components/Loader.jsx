import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import pdtCrest from '../assets/pdt-crest.png'

export default function Loader() {
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo('.loaderGrid', { opacity: 0 }, { opacity: 0.18, duration: 0.35 })
        .fromTo('.loaderHalo', { opacity: 0, scale: 0.64 }, { opacity: 0.78, scale: 1, duration: 0.72 }, 0.05)
        .fromTo('.loaderMark', { opacity: 0, y: 18, scale: 0.88 }, { opacity: 1, y: 0, scale: 1, duration: 0.7 }, 0.16)
        .fromTo('.loaderCrest', { opacity: 0, scale: 0.82, filter: 'blur(10px)' }, { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.62 }, 0.28)
        .fromTo('.loaderTitle span', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.36 }, 0.7)
        .fromTo('.loaderTitle strong', { opacity: 0, y: 12, clipPath: 'inset(0 0 100% 0)' }, { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 0.5 }, 0.82)
        .fromTo('.loaderLine', { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.62 }, 0.96)
        .to('.loaderHalo', { scale: 1.08, opacity: 0.55, duration: 0.42, ease: 'sine.inOut' }, 1.2)
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <motion.div
      ref={rootRef}
      className="loaderOverlay"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="loaderGrid" />
      <div className="loaderHalo" />
      <div className="loaderMark">
        <img src={pdtCrest} alt="Phi Delta Theta crest" className="loaderCrest" />
      </div>
      <div className="loaderTitle">
        <span>Phi Delta Theta</span>
        <strong>Chaplain Platform</strong>
      </div>
      <div className="loaderLine" />
    </motion.div>
  )
}
