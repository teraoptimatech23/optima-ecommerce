import { memo } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Clock } from 'lucide-react'
import clsx from 'clsx'
import Rating from '../Rating/Rating'
import BookmarkButton from '../BookmarkButton/BookmarkButton'
import styles from './CourseCard.module.less'

interface CourseCardProps {
  to: string
  thumbnail: string
  title: string
  instructor: string
  rating: number
  reviewCount: number
  difficulty: string
  duration: string
  totalLessons: number
  className?: string
}

/** Compact review-count display, e.g. 1200 -> "1.2k". */
const formatReviewCount = (count: number) =>
  count >= 1000 ? `${(count / 1000).toFixed(1)}k` : `${count}`

/** Course tile for the "Recommended for You" rail: thumbnail, bookmark, title, instructor, rating, difficulty, duration + lessons. */
const CourseCard = memo(
  ({
    to,
    thumbnail,
    title,
    instructor,
    rating,
    reviewCount,
    difficulty,
    duration,
    totalLessons,
    className,
  }: CourseCardProps) => (
    <article className={clsx(styles.card, className)}>
      {/* Full-card click target, same pattern as ProductCard's overlayLink. */}
      <Link to={to} className={styles.overlayLink} aria-label={title} />

      <div className={styles.thumbnailWrap}>
        <img src={thumbnail} alt="" loading="lazy" className={styles.thumbnail} />
        <BookmarkButton className={styles.bookmark} />
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.instructor}>By {instructor}</p>

        <div className={styles.ratingRow}>
          <Rating value={rating} />
          <span className={styles.reviewCount}>({formatReviewCount(reviewCount)})</span>
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.difficulty}>{difficulty}</span>
        </div>

        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <Clock size={14} strokeWidth={2} />
            {duration}
          </span>
          <span className={styles.metaItem}>
            <BookOpen size={14} strokeWidth={2} />
            {totalLessons} Lessons
          </span>
        </div>
      </div>
    </article>
  ),
)

CourseCard.displayName = 'CourseCard'

export default CourseCard
