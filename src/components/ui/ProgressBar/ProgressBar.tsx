import { memo } from 'react'
import clsx from 'clsx'
import styles from './ProgressBar.module.less'

interface ProgressBarProps {
  /** 0–100. */
  value: number
  className?: string
}

/** Generic horizontal progress track + fill. */
const ProgressBar = memo(({ value, className }: ProgressBarProps) => (
  <div
    className={clsx(styles.track, className)}
    role="progressbar"
    aria-valuenow={Math.round(value)}
    aria-valuemin={0}
    aria-valuemax={100}
  >
    <div className={styles.fill} style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
  </div>
))

ProgressBar.displayName = 'ProgressBar'

export default ProgressBar
