import { memo } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, ChevronRight, Clock, Play } from 'lucide-react'
import ProgressBar from '../ProgressBar/ProgressBar'
import styles from './ContinueLearningCard.module.less'

interface ContinueLearningCardProps {
  to: string
  thumbnail: string
  title: string
  instructor: string
  /** 0–100. */
  progress: number
  remainingTime: string
  totalLessons: number
}

/** The user's in-progress course: thumbnail, progress bar, and remaining-time/lesson meta. */
const ContinueLearningCard = memo(
  ({
    to,
    thumbnail,
    title,
    instructor,
    progress,
    remainingTime,
    totalLessons,
  }: ContinueLearningCardProps) => (
    <div className={styles.card}>
      {/* Full-card click target, same pattern as ProductCard's overlayLink. */}
      <Link to={to} className={styles.overlayLink} aria-label={title} />

      <div className={styles.thumbnailWrap}>
        <img src={thumbnail} alt="" loading="lazy" className={styles.thumbnail} />
        <span className={styles.playButton} aria-hidden="true">
          <Play size={14} strokeWidth={2} fill="currentColor" />
        </span>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.instructor}>By {instructor}</p>

        <div className={styles.progressRow}>
          <ProgressBar value={progress} className={styles.progressBar} />
          <span className={styles.progressLabel}>{Math.round(progress)}%</span>
        </div>

        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <Clock size={14} strokeWidth={2} />
            {remainingTime}
          </span>
          <span className={styles.metaDivider} aria-hidden="true" />
          <span className={styles.metaItem}>
            <BookOpen size={14} strokeWidth={2} />
            {totalLessons} Lessons
          </span>
        </div>
      </div>

      <span className={styles.chevron} aria-hidden="true">
        <ChevronRight size={20} strokeWidth={2} />
      </span>
    </div>
  ),
)

ContinueLearningCard.displayName = 'ContinueLearningCard'

export default ContinueLearningCard
