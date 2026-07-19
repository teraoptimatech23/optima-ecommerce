import { memo } from 'react'
import { Minus, Plus } from 'lucide-react'
import styles from './QuantitySelector.module.less'

interface QuantitySelectorProps {
  value: number
  onIncrease: () => void
  onDecrease: () => void
  /** Disables the decrease button (e.g. at a quantity floor of 1). @default value <= 1 */
  minReached?: boolean
}

/** Stepper for line-item quantity: [-] value [+]. */
const QuantitySelector = memo(
  ({ value, onIncrease, onDecrease, minReached }: QuantitySelectorProps) => (
    <div className={styles.stepper} role="group" aria-label="Quantity">
      <button
        type="button"
        className={styles.button}
        aria-label="Decrease quantity"
        disabled={minReached ?? value <= 1}
        onClick={onDecrease}
      >
        <Minus size={14} strokeWidth={2.5} />
      </button>
      <span className={styles.value}>{value}</span>
      <button
        type="button"
        className={styles.button}
        aria-label="Increase quantity"
        onClick={onIncrease}
      >
        <Plus size={14} strokeWidth={2.5} />
      </button>
    </div>
  ),
)

QuantitySelector.displayName = 'QuantitySelector'

export default QuantitySelector
