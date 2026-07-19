import { memo } from 'react'
import type { ReactNode } from 'react'
import clsx from 'clsx'
import styles from './CategoryChip.module.less'

interface CategoryChipProps {
  icon: ReactNode
  label: string
  active?: boolean
  onClick?: () => void
}

/**
 * Icon chip + label used in the Learning category rail. Structurally
 * matches Home's CategoryCard (64px icon box + label) but with its own
 * white/shadow default and lavender/primary active state, per
 * docs/design/E-Learning.png — Home's CategoryCard always shows a colored
 * pastel background, which doesn't match this design's mostly-white row.
 */
const CategoryChip = memo(
  ({ icon, label, active = false, onClick }: CategoryChipProps) => (
    <button
      type="button"
      className={styles.chip}
      onClick={onClick}
      aria-pressed={active}
    >
      <span className={clsx(styles.iconWrap, { [styles.active]: active })}>
        {icon}
      </span>
      <span className={styles.label}>{label}</span>
    </button>
  ),
)

CategoryChip.displayName = 'CategoryChip'

export default CategoryChip
