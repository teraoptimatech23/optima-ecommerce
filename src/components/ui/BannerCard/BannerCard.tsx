import { memo } from 'react'
import { Sparkles } from 'lucide-react'
import styles from './BannerCard.module.less'

interface BannerCardProps {
  image: string
  eyebrow: string
  title: string
  ctaLabel: string
  onCtaClick?: () => void
}

/**
 * Promo banner slide: full-bleed photo with a scrim, headline, and a
 * compact CTA pill. `.banner` keeps its original gradient as the
 * `background`, so it shows as a placeholder backdrop (no flash of white)
 * until the image finishes loading.
 */
const BannerCard = memo(
  ({ image, eyebrow, title, ctaLabel, onCtaClick }: BannerCardProps) => (
    <div className={styles.banner}>
      <img src={image} alt="" loading="lazy" className={styles.image} />
      <span className={styles.overlay} aria-hidden="true" />

      <Sparkles size={20} strokeWidth={2} className={styles.sparkleTop} />
      <Sparkles size={14} strokeWidth={2} className={styles.sparkleBottom} />

      <div className={styles.content}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 className={styles.title}>{title}</h2>

        <button type="button" className={styles.cta} onClick={onCtaClick}>
          {ctaLabel}
        </button>
      </div>
    </div>
  ),
)

BannerCard.displayName = 'BannerCard'

export default BannerCard
