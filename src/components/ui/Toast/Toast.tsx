import { memo, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import styles from './Toast.module.less'

interface ToastProps {
  open: boolean
  message: string
  onClose: () => void
  /** @default 2200 */
  duration?: number
}

// Mirrors the fade-out transition duration — see BottomSheet's identically
// named constant for why unmounting is timer-driven rather than left to
// AnimatePresence's exit-complete detection.
const FADE_OUT_MS = 200

/**
 * Transient confirmation pill (e.g. "Link copied successfully"). Positioned
 * `absolute` against the consuming page's own relatively-positioned frame,
 * same reasoning as BottomSheet — never `fixed`, which would escape the
 * centered desktop app card.
 */
const Toast = memo(({ open, message, onClose, duration = 2200 }: ToastProps) => {
  const [rendered, setRendered] = useState(open)

  if (open && !rendered) {
    setRendered(true)
  }

  useEffect(() => {
    if (!open) return
    const timer = setTimeout(onClose, duration)
    return () => clearTimeout(timer)
  }, [open, duration, onClose])

  useEffect(() => {
    if (open) return
    const timer = setTimeout(() => setRendered(false), FADE_OUT_MS)
    return () => clearTimeout(timer)
  }, [open])

  if (!rendered) return null

  return (
    <motion.div
      className={styles.toast}
      role="status"
      aria-live="polite"
      initial={{ opacity: 0, y: 12, x: '-50%' }}
      animate={{ opacity: open ? 1 : 0, y: open ? 0 : 12, x: '-50%' }}
      transition={{ duration: 0.2 }}
    >
      <CheckCircle2 size={18} strokeWidth={2} className={styles.icon} />
      <span>{message}</span>
    </motion.div>
  )
})

Toast.displayName = 'Toast'

export default Toast
