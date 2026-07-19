import { memo } from 'react'
import clsx from 'clsx'
import styles from './OrderSummary.module.less'

interface OrderSummaryProps {
  subtotal: number
  shipping: number
  discount: number
  total: number
  className?: string
}

/** Subtotal / Shipping / Discount / Total breakdown, shared across the cart flow. */
const OrderSummary = memo(
  ({ subtotal, shipping, discount, total, className }: OrderSummaryProps) => (
    <div className={clsx(styles.card, className)}>
      <h2 className={styles.title}>Order Summary</h2>

      <div className={styles.row}>
        <span className={styles.label}>Subtotal</span>
        <span className={styles.value}>${subtotal.toFixed(2)}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.label}>Shipping</span>
        <span className={styles.value}>${shipping.toFixed(2)}</span>
      </div>
      {discount > 0 ? (
        <div className={styles.row}>
          <span className={styles.label}>Discount</span>
          <span className={styles.discount}>- ${discount.toFixed(2)}</span>
        </div>
      ) : null}

      <div className={styles.divider} />

      <div className={styles.row}>
        <span className={styles.totalLabel}>Total</span>
        <span className={styles.totalValue}>${total.toFixed(2)}</span>
      </div>
    </div>
  ),
)

OrderSummary.displayName = 'OrderSummary'

export default OrderSummary
