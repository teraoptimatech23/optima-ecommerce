import { memo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { GraduationCap, Grid2x2, Home, ShoppingCart, User } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import clsx from 'clsx'
import Badge from '../Badge/Badge'
import { useCart } from '../../../hooks/useCart'
import styles from './BottomNavigation.module.less'

interface NavItem {
  to: string
  label: string
  Icon: LucideIcon
  /** Other routes this tab should also show as active for (e.g. Profile's
   * sub-pages). Defaults to just `to` when omitted. */
  activePaths?: string[]
}

const NAV_ITEMS: NavItem[] = [
  { to: '/home', label: 'Home', Icon: Home },
  { to: '/products', label: 'Product', Icon: Grid2x2 },
  { to: '/learning', label: 'Learning', Icon: GraduationCap },
  { to: '/cart', label: 'Cart', Icon: ShoppingCart },
  { to: '/profile', label: 'Profile', Icon: User, activePaths: ['/profile', '/history'] },
]

/**
 * Fixed 5-tab app-shell navigation; active tab is driven by the current
 * route. Uses `Link` + manual path matching (rather than `NavLink`'s
 * built-in isActive) so a tab can stay highlighted across a small set of
 * related pages — e.g. Profile stays active on /history, one of its
 * sub-pages, without matching unrelated routes that merely share a prefix.
 * The Cart tab's badge reads live from the shared cart store, so it updates
 * the instant any page adds, removes, or changes an item.
 */
const BottomNavigation = memo(() => {
  const { itemCount } = useCart()
  const { pathname } = useLocation()

  return (
    <nav className={styles.nav}>
      {NAV_ITEMS.map(({ to, label, Icon, activePaths }) => {
        const isActive = (activePaths ?? [to]).includes(pathname)
        return (
          <Link
            key={to}
            to={to}
            className={clsx(styles.item, { [styles.active]: isActive })}
            aria-current={isActive ? 'page' : undefined}
          >
            <span className={styles.iconWrap}>
              <Icon size={24} strokeWidth={2} />
              {to === '/cart' && itemCount > 0 ? (
                <Badge count={itemCount} className={styles.badge} />
              ) : null}
            </span>
            <span className={styles.label}>{label}</span>
            <span className={styles.dot} aria-hidden="true" />
          </Link>
        )
      })}
    </nav>
  )
})

BottomNavigation.displayName = 'BottomNavigation'

export default BottomNavigation
