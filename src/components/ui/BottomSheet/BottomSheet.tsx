import { useEffect, useRef, useState } from 'react'
import type { KeyboardEvent as ReactKeyboardEvent, ReactNode } from 'react'
import { motion, useDragControls } from 'framer-motion'
import styles from './BottomSheet.module.less'

interface BottomSheetProps {
  open: boolean
  onClose: () => void
  title: string
  subtitle?: string
  children: ReactNode
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

// Mirrors the sheet's close-transition duration. Unmounting is driven by
// this timer rather than AnimatePresence's exit-complete detection, which
// does not reliably fire for this transform in the installed framer-motion
// version — without it the sheet plays its slide-down animation but the
// (invisible, off-screen) DOM node never gets removed.
const CLOSE_ANIMATION_MS = 250

/**
 * Modal sheet anchored to the bottom of the page. Deliberately `position:
 * absolute` against the page's own (relatively-positioned) root, not
 * `position: fixed` against the real viewport — `fixed` would cover the
 * whole browser window and escape the centered desktop frame, the same
 * class of bug fixed elsewhere in this app (see BottomNavigation). The
 * consuming page's root element must be `position: relative`.
 *
 * Drag-to-close is scoped to the handle (via `dragListener={false}` +
 * `dragControls`) rather than the whole sheet, so bottom sheets with a
 * long scrollable option list (Shipping/Payment method) keep normal touch
 * scrolling instead of the drag gesture hijacking it.
 */
const BottomSheet = ({ open, onClose, title, subtitle, children }: BottomSheetProps) => {
  const [rendered, setRendered] = useState(open)
  const sheetRef = useRef<HTMLDivElement>(null)
  const dragControls = useDragControls()

  // Opening is immediate: adjust state during render (React's documented
  // pattern for this) rather than via an effect, so the sheet mounts on
  // the same render `open` flips true. Closing stays effect-driven since
  // it must wait out the close animation before unmounting.
  if (open && !rendered) {
    setRendered(true)
  }

  useEffect(() => {
    if (open) return
    const timer = setTimeout(() => setRendered(false), CLOSE_ANIMATION_MS)
    return () => clearTimeout(timer)
  }, [open])

  useEffect(() => {
    if (!open) return

    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    const previouslyFocused = document.activeElement as HTMLElement | null
    sheetRef.current?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR)?.focus()

    return () => {
      document.body.style.overflow = overflow
      previouslyFocused?.focus?.()
    }
  }, [open])

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      event.stopPropagation()
      onClose()
      return
    }

    if (event.key !== 'Tab' || !sheetRef.current) return

    const focusable = sheetRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
    if (focusable.length === 0) return

    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  if (!rendered) return null

  return (
    <>
      <motion.div
        className={styles.backdrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      />
      <motion.div
        ref={sheetRef}
        className={styles.sheet}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onKeyDown={handleKeyDown}
        initial={{ y: '100%' }}
        animate={{ y: open ? 0 : '100%' }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        drag="y"
        dragListener={false}
        dragControls={dragControls}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 0.5 }}
        onDragEnd={(_, info) => {
          if (info.offset.y > 80 || info.velocity.y > 500) onClose()
        }}
      >
        <span
          className={styles.handle}
          aria-hidden="true"
          onPointerDown={(event) => dragControls.start(event)}
        />
        <h2 className={styles.title}>{title}</h2>
        {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
        {children}
      </motion.div>
    </>
  )
}

export default BottomSheet
