import { memo } from 'react'
import type { ReactNode } from 'react'
import { ArrowLeft, Home } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import MainLayout from '../../../layouts/MainLayout/MainLayout'
import PrimaryButton from '../../../components/ui/Button/PrimaryButton'
import OutlineButton from '../../../components/ui/Button/OutlineButton'
import placeholderIllustration from '../../../assets/images/placeholder-empty.svg'
import styles from './Placeholder.module.less'

interface PlaceholderProps {
  /** @default 'Coming Soon' */
  title?: string
  /** @default 'This feature is currently under development. Please check back in a future update.' */
  description?: string
  /** @default 'Back to Home' */
  buttonText?: string
  /** Primary action. @default navigate('/home') */
  buttonAction?: () => void
  /** Set null to hide the secondary button entirely. @default 'Go Back' */
  secondaryButtonText?: string | null
  /** Secondary action. @default navigate(-1) */
  secondaryButtonAction?: () => void
  /** Swap in a different graphic; defaults to the shared empty-box illustration. */
  illustration?: ReactNode
  /** Show the bottom nav when opened from a primary tab; hide it for screens reached by drilling in. @default false */
  showBottomNavigation?: boolean
}

/**
 * Generic "not built yet" screen for any route that doesn't have a real
 * feature behind it (notifications, settings, vouchers, reviews, address,
 * ...). Fully prop-driven so the same component can be dropped into any
 * route with route-specific copy/actions — it never hardcodes a route
 * itself.
 */
const Placeholder = memo(
  ({
    title = 'Coming Soon',
    description = 'This feature is currently under development. Please check back in a future update.',
    buttonText = 'Back to Home',
    buttonAction,
    secondaryButtonText = 'Go Back',
    secondaryButtonAction,
    illustration,
    showBottomNavigation = false,
  }: PlaceholderProps) => {
    const navigate = useNavigate()

    return (
      <MainLayout showBottomNavigation={showBottomNavigation}>
        <div className={styles.wrap}>
          <div className={styles.illustration}>
            {illustration ?? <img src={placeholderIllustration} alt="" />}
          </div>

          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>

          <div className={styles.actions}>
            <PrimaryButton
              className={styles.actionButton}
              onClick={buttonAction ?? (() => navigate('/home'))}
            >
              <Home size={20} strokeWidth={2} />
              {buttonText}
            </PrimaryButton>
            {secondaryButtonText ? (
              <OutlineButton
                className={styles.actionButton}
                onClick={secondaryButtonAction ?? (() => navigate(-1))}
              >
                <ArrowLeft size={20} strokeWidth={2} />
                {secondaryButtonText}
              </OutlineButton>
            ) : null}
          </div>
        </div>
      </MainLayout>
    )
  },
)

Placeholder.displayName = 'Placeholder'

export default Placeholder
