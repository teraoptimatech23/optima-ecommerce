import type { ReactNode } from 'react'
import BottomNavigation from '../../components/ui/BottomNavigation/BottomNavigation'
import styles from './MainLayout.module.less'

interface MainLayoutProps {
  /** Fixed top bar; omit for screens that don't have a header. */
  header?: ReactNode
  /** Fixed bar between the scrollable content and the bottom nav (e.g. Cart's checkout summary); omit for screens that don't need one. */
  footer?: ReactNode
  /** Set false to hide the bottom nav — for secondary screens reached by drilling in, not by a nav tab. @default true */
  showBottomNavigation?: boolean
  children: ReactNode
}

/**
 * App shell for the main (post-auth) screens: an optional fixed header, a
 * single scrollable content region, an optional fixed footer, and the
 * persistent bottom navigation. Only the content region scrolls — the
 * header, footer, and nav stay put. Pages rendered here must NOT render
 * their own BottomNavigation. Auth screens use AuthLayout instead and are
 * not wrapped by this.
 */
const MainLayout = ({
  header,
  footer,
  showBottomNavigation = true,
  children,
}: MainLayoutProps) => (
  <div className={styles.layout}>
    {header ? <div className={styles.header}>{header}</div> : null}
    <main className={styles.content}>{children}</main>
    {footer ? <div className={styles.footer}>{footer}</div> : null}
    {showBottomNavigation ? <BottomNavigation /> : null}
  </div>
)

export default MainLayout
