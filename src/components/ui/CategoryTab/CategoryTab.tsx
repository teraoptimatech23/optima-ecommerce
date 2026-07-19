import { memo } from 'react'
import clsx from 'clsx'
import styles from './CategoryTab.module.less'

interface CategoryTabProps {
  label: string
  active: boolean
  onClick: () => void
}

/** Pill tab used in horizontally-scrollable category filter rows. */
const CategoryTab = memo(({ label, active, onClick }: CategoryTabProps) => (
  <button
    type="button"
    className={clsx(styles.tab, active && styles.active)}
    aria-pressed={active}
    onClick={onClick}
  >
    {label}
  </button>
))

CategoryTab.displayName = 'CategoryTab'

export default CategoryTab
