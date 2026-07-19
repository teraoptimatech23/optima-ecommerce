import { memo } from 'react'
import clsx from 'clsx'
import styles from './Badge.module.less'

interface BadgeProps {
  /** Rendered as-is; callers cap large counts (e.g. "9+") before passing in. */
  count: number | string
  className?: string
}

/** Small purple pill for notification/cart counts, meant to overlay an icon. */
const Badge = memo(({ count, className }: BadgeProps) => (
  <span className={clsx(styles.badge, className)} aria-hidden="true">
    {count}
  </span>
))

Badge.displayName = 'Badge'

export default Badge
