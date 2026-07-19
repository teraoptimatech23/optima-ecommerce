import { memo } from 'react'
import { Check } from 'lucide-react'
import clsx from 'clsx'
import styles from './SelectionCheckbox.module.less'

interface SelectionCheckboxProps {
  checked: boolean
  onChange: () => void
  ariaLabel: string
  className?: string
}

/** Square checkbox used for cart multi-selection (item rows, "Select All"). */
const SelectionCheckbox = memo(
  ({ checked, onChange, ariaLabel, className }: SelectionCheckboxProps) => (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      aria-label={ariaLabel}
      className={clsx(styles.box, checked && styles.checked, className)}
      onClick={onChange}
    >
      {checked ? <Check size={16} strokeWidth={3} /> : null}
    </button>
  ),
)

SelectionCheckbox.displayName = 'SelectionCheckbox'

export default SelectionCheckbox
