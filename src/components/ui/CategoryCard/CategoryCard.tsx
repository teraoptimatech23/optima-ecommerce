import { memo } from 'react'
import type { ReactNode } from 'react'
import clsx from 'clsx'
import styles from './CategoryCard.module.less'

export type CategoryAccent = 'lavender' | 'mint' | 'blush' | 'peach'

interface CategoryCardProps {
  icon: ReactNode
  label: string
  accent: CategoryAccent
  active?: boolean
  onClick?: () => void
}

/** Icon chip + label used in the Home category rail. */
const CategoryCard = memo(
  ({ icon, label, accent, active = false, onClick }: CategoryCardProps) => (
    <button
      type="button"
      className={styles.card}
      onClick={onClick}
      aria-pressed={active}
    >
      <span
        className={clsx(styles.iconWrap, styles[accent], {
          [styles.active]: active,
        })}
      >
        {icon}
      </span>
      <span className={styles.label}>{label}</span>
    </button>
  ),
)

CategoryCard.displayName = 'CategoryCard'

export default CategoryCard
