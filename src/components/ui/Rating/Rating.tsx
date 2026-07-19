import { memo } from 'react'
import { Star } from 'lucide-react'
import clsx from 'clsx'
import styles from './Rating.module.less'

interface RatingProps {
  /** 0–5 average rating. */
  value: number
  /** Star color: 'gold' for cards, 'dark' when it sits in a neutral badge. @default 'gold' */
  tone?: 'gold' | 'dark'
  className?: string
}

/** Filled star + numeric average, e.g. for ProductCard and reviews. */
const Rating = memo(({ value, tone = 'gold', className }: RatingProps) => (
  <span className={clsx(styles.rating, className)}>
    <Star
      size={14}
      strokeWidth={2}
      fill="currentColor"
      className={clsx(styles.star, tone === 'dark' && styles.starDark)}
    />
    {value.toFixed(1)}
  </span>
))

Rating.displayName = 'Rating'

export default Rating
