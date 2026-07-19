import { memo } from 'react'
import clsx from 'clsx'
import Rating from '../Rating/Rating'
import styles from './RatingBadge.module.less'

interface RatingBadgeProps {
  value: number
  /** Number of reviews, shown muted in parentheses. */
  count: number
  className?: string
}

/** Bordered pill pairing a dark-star Rating with a muted review count. */
const RatingBadge = memo(({ value, count, className }: RatingBadgeProps) => (
  <span className={clsx(styles.badge, className)}>
    <Rating value={value} tone="dark" />
    <span className={styles.count}>({count})</span>
  </span>
))

RatingBadge.displayName = 'RatingBadge'

export default RatingBadge
