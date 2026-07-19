import type { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './BottomSheet.module.less'

interface BottomSheetProps {
  open: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

/**
 * Modal sheet anchored to the bottom of the page. Deliberately `position:
 * absolute` against the page's own (relatively-positioned) root, not
 * `position: fixed` against the real viewport — `fixed` would cover the
 * whole browser window and escape the centered desktop frame, the same
 * class of bug fixed elsewhere in this app (see BottomNavigation). The
 * consuming page's root element must be `position: relative`.
 */
const BottomSheet = ({ open, onClose, title, children }: BottomSheetProps) => (
  <AnimatePresence>
    {open ? (
      <>
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        />
        <motion.div
          className={styles.sheet}
          role="dialog"
          aria-modal="true"
          aria-label={title}
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <span className={styles.handle} aria-hidden="true" />
          <h2 className={styles.title}>{title}</h2>
          {children}
        </motion.div>
      </>
    ) : null}
  </AnimatePresence>
)

export default BottomSheet
