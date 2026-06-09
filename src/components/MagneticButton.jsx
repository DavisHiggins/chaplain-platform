import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function MagneticButton({
  as = 'button',
  children,
  className = '',
  href,
  onClick,
  type = 'button',
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 260, damping: 20 })
  const springY = useSpring(y, { stiffness: 260, damping: 20 })
  const glowX = useTransform(springX, [-18, 18], ['25%', '75%'])
  const glowY = useTransform(springY, [-18, 18], ['25%', '75%'])
  const Component = motion[as]

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    x.set((event.clientX - rect.left - rect.width / 2) * 0.18)
    y.set((event.clientY - rect.top - rect.height / 2) * 0.18)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <Component
      href={href}
      type={as === 'button' ? type : undefined}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`magneticButton ${className}`}
      style={{
        x: springX,
        y: springY,
        '--glow-x': glowX,
        '--glow-y': glowY,
      }}
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.985 }}
    >
      <span className="magneticGlow" />
      <span className="magneticContent">{children}</span>
    </Component>
  )
}
