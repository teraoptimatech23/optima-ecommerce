import { memo } from 'react'
import clsx from 'clsx'
import styles from './SizeSelector.module.less'

type SizeValue = string | number

interface SizeSelectorProps {
  sizes: SizeValue[]
  /** Currently selected size, or null when none is chosen. */
  value: SizeValue | null
  onChange: (size: SizeValue) => void
}

/** Row of selectable size chips; the active chip is filled with the brand color. */
const SizeSelector = memo(({ sizes, value, onChange }: SizeSelectorProps) => (
  <div className={styles.row} role="group" aria-label="Select size">
    {sizes.map((size) => {
      const selected = size === value
      return (
        <button
          key={size}
          type="button"
          className={clsx(styles.size, selected && styles.selected)}
          aria-pressed={selected}
          onClick={() => onChange(size)}
        >
          {size}
        </button>
      )
    })}
  </div>
))

SizeSelector.displayName = 'SizeSelector'

export default SizeSelector
