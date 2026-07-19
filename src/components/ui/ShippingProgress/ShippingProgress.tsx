import { memo } from 'react'
import { Gift } from 'lucide-react'
import clsx from 'clsx'
import ProgressBar from '../ProgressBar/ProgressBar'
import styles from './ShippingProgress.module.less'

interface ShippingProgressProps {
  /** Remaining amount to reach free shipping; 0 means it's been reached. */
  amountRemaining: number
  /** 0–100. */
  progress: number
  className?: string
}

/** Purple-tinted "you're $X away from free shipping" banner + progress bar. */
const ShippingProgress = memo(
  ({ amountRemaining, progress, className }: ShippingProgressProps) => (
    <div className={clsx(styles.banner, className)}>
      <Gift size={20} strokeWidth={2} className={styles.icon} />
      <p className={styles.message}>
        {amountRemaining > 0 ? (
          <>You are ${amountRemaining.toFixed(2)} away from free shipping!</>
        ) : (
          <>You've unlocked free shipping!</>
        )}
      </p>
      <ProgressBar value={progress} className={styles.progress} />
    </div>
  ),
)

ShippingProgress.displayName = 'ShippingProgress'

export default ShippingProgress
