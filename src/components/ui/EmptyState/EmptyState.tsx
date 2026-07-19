import { memo } from 'react'
import type { ReactNode } from 'react'
import PrimaryButton from '../Button/PrimaryButton'
import styles from './EmptyState.module.less'

interface EmptyStateProps {
  icon: ReactNode
  title: string
  description: string
  actionLabel?: string
  onAction?: () => void
}

/** Generic "nothing here" state: icon, title, description, optional action. */
const EmptyState = memo(
  ({ icon, title, description, actionLabel, onAction }: EmptyStateProps) => (
    <div className={styles.wrap}>
      <span className={styles.icon}>{icon}</span>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      {actionLabel && onAction ? (
        <PrimaryButton className={styles.action} onClick={onAction}>
          {actionLabel}
        </PrimaryButton>
      ) : null}
    </div>
  ),
)

EmptyState.displayName = 'EmptyState'

export default EmptyState
