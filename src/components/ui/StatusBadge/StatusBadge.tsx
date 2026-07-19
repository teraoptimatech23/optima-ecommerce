import { memo } from 'react'
import clsx from 'clsx'
import styles from './StatusBadge.module.less'

export type TransactionStatus = 'completed' | 'pending' | 'cancelled'

const STATUS_LABEL: Record<TransactionStatus, string> = {
  completed: 'Completed',
  pending: 'Pending',
  cancelled: 'Cancelled',
}

interface StatusBadgeProps {
  status: TransactionStatus
  className?: string
}

/** Colored status pill (order history, and future order-tracking screens). */
const StatusBadge = memo(({ status, className }: StatusBadgeProps) => (
  <span className={clsx(styles.badge, styles[status], className)}>
    {STATUS_LABEL[status]}
  </span>
))

StatusBadge.displayName = 'StatusBadge'

export default StatusBadge
