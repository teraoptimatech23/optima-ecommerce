import { memo } from 'react'
import { ChevronRight } from 'lucide-react'
import illustration from '../../../assets/images/learning-banner-illustration.svg'
import styles from './LearningBanner.module.less'

interface LearningBannerProps {
  eyebrow: string
  title: string
  subtitle: string
  ctaLabel: string
  onCtaClick?: () => void
}

/**
 * Learning's promotional hero: light lavender card + illustration, distinct
 * from Home's dark full-bleed photo BannerCard (this page's own design
 * reference uses a different treatment — see docs/design/E-Learning.png).
 * `title`/`subtitle` support embedded `\n` line breaks via `white-space:
 * pre-line`, so the exact copy line breaks live in the mock data, not markup.
 */
const LearningBanner = memo(
  ({ eyebrow, title, subtitle, ctaLabel, onCtaClick }: LearningBannerProps) => (
    <div className={styles.banner}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>

        <button type="button" className={styles.cta} onClick={onCtaClick}>
          {ctaLabel}
          <ChevronRight size={18} strokeWidth={2} />
        </button>
      </div>

      <img src={illustration} alt="" className={styles.illustration} />
    </div>
  ),
)

LearningBanner.displayName = 'LearningBanner'

export default LearningBanner
