import { memo } from 'react'
import type { ReactNode } from 'react'
import Badge from '../Badge/Badge'
import styles from './OrderShortcut.module.less'

interface OrderShortcutProps {
  icon: ReactNode
  label: string
  /** Omit to render no badge. */
  badgeCount?: number
  onClick?: () => void
}

/** One entry in the "My Orders" status row (To Pay, To Ship, Completed, ...). */
const OrderShortcut = memo(
  ({ icon, label, badgeCount, onClick }: OrderShortcutProps) => (
    <button type="button" className={styles.item} onClick={onClick}>
      <span className={styles.iconWrap}>
        {icon}
        {badgeCount ? <Badge count={badgeCount} className={styles.badge} /> : null}
      </span>
      <span className={styles.label}>{label}</span>
    </button>
  ),
)

OrderShortcut.displayName = 'OrderShortcut'

export default OrderShortcut
