import { memo } from 'react'
import { Bell } from 'lucide-react'
import IconButton from '../IconButton/IconButton'
import Badge from '../Badge/Badge'
import { useAuthStore } from '../../../store/auth.store'
import styles from './Header.module.less'

interface HeaderProps {
  /** Optional page title rendered above the greeting (e.g. Learning's "My Learning"). Home doesn't pass this. */
  title?: string
  /** @default "Let's start shopping today" (Home's copy) */
  subtitle?: string
  notificationCount?: number
  onNotificationClick?: () => void
}

/**
 * App-shell top bar: optional page title, personalized greeting (from the
 * auth store, replacing the old static "Optima" wordmark), and a
 * notification bell. Falls back to a bare "Hi 👋" when there's no
 * authenticated user.
 */
const Header = memo(
  ({
    title,
    subtitle = "Let's start shopping today",
    notificationCount = 0,
    onNotificationClick,
  }: HeaderProps) => {
    const user = useAuthStore((state) => state.user)

    return (
      <header className={styles.header}>
        <div className={styles.textBlock}>
          {title ? <h1 className={styles.pageTitle}>{title}</h1> : null}
          <p className={styles.hello}>Hi{user ? `, ${user.name}` : ', Optima'} 👋</p>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.bellWrap}>
          <IconButton
            icon={<Bell size={22} strokeWidth={2} />}
            aria-label={
              notificationCount > 0
                ? `Notifications, ${notificationCount} unread`
                : 'Notifications'
            }
            onClick={onNotificationClick}
          />
          {notificationCount > 0 ? (
            <Badge count={notificationCount} className={styles.badge} />
          ) : null}
        </div>
      </header>
    )
  },
)

Header.displayName = 'Header'

export default Header
