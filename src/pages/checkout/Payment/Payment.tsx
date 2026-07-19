import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Bell, Check, ChevronLeft } from 'lucide-react'
import IconButton from '../../../components/ui/IconButton/IconButton'
import OrderSummary from '../../../components/ui/OrderSummary/OrderSummary'
import PrimaryButton from '../../../components/ui/Button/PrimaryButton'
import Divider from '../../../components/ui/Divider/Divider'
import { useCart } from '../../../hooks/useCart'
import { mockOrderConfirmation } from '../../../mock/order'
import styles from './Payment.module.less'

/**
 * Final step of the flow. No design reference exists for this screen (only
 * Cart and Checkout have one) — kept deliberately minimal and consistent
 * with the rest of the app's visual language rather than inventing an
 * elaborate, unreferenced payment UI.
 */
const Payment = () => {
  const navigate = useNavigate()
  const {
    subtotal,
    discount,
    isEmpty,
    selectedShippingMethod,
    selectedPaymentMethod,
    clearCart,
  } = useCart()
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const shippingCost = selectedShippingMethod?.price ?? 0
  const total = Math.max(0, subtotal + shippingCost - discount)

  if (isEmpty && !isComplete) return <Navigate to="/cart" replace />

  const handlePay = () => {
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      setIsComplete(true)
      clearCart()
    }, 900)
  }

  if (isComplete) {
    return (
      <div className={styles.screen}>
        <div className={styles.successScreen}>
          <span className={styles.successIconWrap}>
            <Check size={56} strokeWidth={3} className={styles.successIcon} />
          </span>

          <h1 className={styles.successTitle}>Order Placed!</h1>
          <p className={styles.successText}>
            Your order has been placed successfully.
            <br />
            Thank you for shopping with us.
          </p>

          <div className={styles.orderCard}>
            <div className={styles.orderRow}>
              <span className={styles.orderLabel}>Order ID</span>
              <span className={styles.orderValue}>{mockOrderConfirmation.orderId}</span>
            </div>
            <Divider />
            <div className={styles.orderRow}>
              <span className={styles.orderLabel}>Estimated Delivery</span>
              <span className={styles.orderValue}>
                {mockOrderConfirmation.estimatedDelivery}
              </span>
            </div>
          </div>

          <div className={styles.updateCard}>
            <span className={styles.updateIconWrap}>
              <Bell size={20} strokeWidth={2} />
            </span>
            <div>
              <p className={styles.updateTitle}>We&apos;ll send you an update</p>
              <p className={styles.updateText}>
                You will receive an email and notification when your order status
                changes.
              </p>
            </div>
          </div>

          <PrimaryButton
            className={styles.viewOrderButton}
            onClick={() => navigate('/history')}
          >
            View Order
          </PrimaryButton>
          <button
            type="button"
            className={styles.backHome}
            onClick={() => navigate('/home')}
          >
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.screen}>
      <div className={styles.header}>
        <IconButton
          icon={<ChevronLeft size={22} strokeWidth={2} />}
          aria-label="Go back"
          onClick={() => navigate(-1)}
        />
        <h1 className={styles.headerTitle}>Payment</h1>
      </div>

      <div className={styles.scroll}>
        <div className={styles.methodCard}>
          <span className={styles.methodLabel}>Paying with</span>
          <span className={styles.methodValue}>
            {selectedPaymentMethod
              ? `${selectedPaymentMethod.brand} •••• ${selectedPaymentMethod.last4}`
              : 'No payment method selected'}
          </span>
        </div>

        <OrderSummary
          subtotal={subtotal}
          shipping={shippingCost}
          discount={discount}
          total={total}
          className={styles.summary}
        />
      </div>

      <div className={styles.actionBar}>
        <PrimaryButton
          onClick={handlePay}
          loading={isProcessing}
          disabled={!selectedPaymentMethod}
        >
          Pay Now · ${total.toFixed(2)}
        </PrimaryButton>
      </div>
    </div>
  )
}

export default Payment
