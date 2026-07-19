import { memo } from 'react'
import clsx from 'clsx'
import styles from './Price.module.less'

interface PriceProps {
  value: number
  /** Text color: neutral by default, or brand purple for a hero price. @default 'default' */
  tone?: 'default' | 'primary'
  /** Type scale: inline card size by default, or larger for a detail hero. @default 'default' */
  size?: 'default' | 'display'
  className?: string
}

/** Consistent currency formatting wherever a price is displayed. */
const Price = memo(
  ({ value, tone = 'default', size = 'default', className }: PriceProps) => (
    <span
      className={clsx(
        styles.price,
        tone === 'primary' && styles.primary,
        size === 'display' && styles.display,
        className,
      )}
    >
      ${value.toFixed(2)}
    </span>
  ),
)

Price.displayName = 'Price'

export default Price
