import { memo } from 'react'
import type { ButtonHTMLAttributes } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import clsx from 'clsx'
import styles from './FilterButton.module.less'

type FilterButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

/** Outlined icon+label pill that opens a filter panel (e.g. Products page). */
const FilterButton = memo(
  ({ className, type = 'button', children, ...rest }: FilterButtonProps) => (
    <button type={type} className={clsx(styles.button, className)} {...rest}>
      <SlidersHorizontal size={16} strokeWidth={2} />
      {children ?? 'Filter'}
    </button>
  ),
)

FilterButton.displayName = 'FilterButton'

export default FilterButton
