import { memo } from 'react'
import clsx from 'clsx'
import styles from './Divider.module.less'

interface DividerProps {
  /** When set, renders the label centered between two hairlines. */
  label?: string
  className?: string
}

const Divider = memo(({ label, className }: DividerProps) =>
  label ? (
    <div className={clsx(styles.labelled, className)}>
      <span className={styles.line} aria-hidden="true" />
      <span className={styles.text}>{label}</span>
      <span className={styles.line} aria-hidden="true" />
    </div>
  ) : (
    <hr className={clsx(styles.plain, className)} />
  ),
)

Divider.displayName = 'Divider'

export default Divider
