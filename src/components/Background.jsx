import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Background() {
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const x = useSpring(pointerX, { stiffness: 90, damping: 24, mass: 0.4 })
  const y = useSpring(pointerY, { stiffness: 90, damping: 24, mass: 0.4 })

  useEffect(() => {
    const handlePointerMove = (event) => {
      pointerX.set(event.clientX - 210)
      pointerY.set(event.clientY - 210)
    }

    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [pointerX, pointerY])

  return (
    <div className="backgroundSystem">
      <div className="bgGrid" />
      <motion.div
        className="bgGridFine"
        animate={{ backgroundPosition: ['0px 0px', '72px 72px'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="scanLine"
        animate={{ y: ['-12vh', '112vh'], opacity: [0, 0.42, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="noiseLayer" />
      <motion.div className="cursorLight" style={{ x, y }} />
      <motion.div
        className="ambientGlow ambientGlowBlue"
        animate={{ x: [0, 26, -10, 0], y: [0, -18, 14, 0], opacity: [0.42, 0.62, 0.48, 0.42] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="ambientGlow ambientGlowGold"
        animate={{ x: [0, -18, 20, 0], y: [0, 14, -16, 0], opacity: [0.22, 0.38, 0.28, 0.22] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="ambientGlow ambientGlowGreen"
        animate={{ x: [0, 18, -24, 0], y: [0, 20, -12, 0], opacity: [0.25, 0.42, 0.3, 0.25] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="floatingNodes">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}
