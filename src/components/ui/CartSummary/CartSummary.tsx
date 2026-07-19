import { memo } from 'react'
import Price from '../Price/Price'
import PrimaryButton from '../Button/PrimaryButton'
import styles from './CartSummary.module.less'

interface CartSummaryProps {
  itemCount: number
  total: number
  savings: number
  disabled: boolean
  onCheckout: () => void
}

/** Bottom cart card: selected-items total + Checkout action, side by side. */
const CartSummary = memo(
  ({ itemCount, total, savings, disabled, onCheckout }: CartSummaryProps) => (
    <div className={styles.card}>
      <div className={styles.info}>
        <span className={styles.label}>
          Total ({itemCount} {itemCount === 1 ? 'item' : 'items'})
        </span>
        <Price value={total} tone="primary" size="display" />
        {savings > 0 ? (
          <span className={styles.savings}>You saved ${savings.toFixed(2)}</span>
        ) : null}
      </div>

      <div className={styles.buttonWrap}>
        <PrimaryButton onClick={onCheckout} disabled={disabled}>
          Checkout
        </PrimaryButton>
      </div>
    </div>
  ),
)

CartSummary.displayName = 'CartSummary'

export default CartSummary
