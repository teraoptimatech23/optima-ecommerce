import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle2, ChevronLeft, ChevronRight, Circle } from 'lucide-react'
import clsx from 'clsx'
import IconButton from '../../../components/ui/IconButton/IconButton'
import OrderSummary from '../../../components/ui/OrderSummary/OrderSummary'
import PrimaryButton from '../../../components/ui/Button/PrimaryButton'
import BottomSheet from '../../../components/ui/BottomSheet/BottomSheet'
import { useCart } from '../../../hooks/useCart'
import { useAuthStore } from '../../../store/auth.store'
import { shippingMethods } from '../../../data/shippingMethods'
import { paymentMethods } from '../../../data/paymentMethods'
import { MOCK_SHIPPING_ADDRESS } from '../../../data/address'
import styles from './Checkout.module.less'

const Checkout = () => {
  const navigate = useNavigate()
  const user = useAuthStore((state) => state.user)
  const [shippingSheetOpen, setShippingSheetOpen] = useState(false)
  const [paymentSheetOpen, setPaymentSheetOpen] = useState(false)
  const {
    subtotal,
    discount,
    selectedShippingMethod,
    selectedPaymentMethod,
    setShippingMethod,
    setPaymentMethod,
  } = useCart()

  // Live total once a real shipping method is chosen — distinct from Cart's
  // flat pre-checkout estimate (see useCart's doc comment).
  const shippingCost = selectedShippingMethod?.price ?? 0
  const total = Math.max(0, subtotal + shippingCost - discount)

  const address = {
    ...MOCK_SHIPPING_ADDRESS,
    name: user?.name ?? MOCK_SHIPPING_ADDRESS.name,
    phone: user?.phone ?? MOCK_SHIPPING_ADDRESS.phone,
  }

  return (
    <div className={styles.screen}>
      <div className={styles.header}>
        <IconButton
          icon={<ChevronLeft size={22} strokeWidth={2} />}
          aria-label="Go back"
          onClick={() => navigate(-1)}
        />
        <h1 className={styles.headerTitle}>Checkout</h1>
      </div>

      <div className={styles.scroll}>
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Shipping Address</h2>
            <span className={styles.changeLabel}>Change</span>
          </div>
          <div className={styles.addressCard}>
            <div className={styles.addressTop}>
              <span className={styles.addressName}>{address.name}</span>
              <span className={styles.defaultBadge}>Default</span>
            </div>
            <p className={styles.addressDetail}>{address.street}</p>
            <p className={styles.addressDetail}>{address.city}</p>
            <p className={styles.addressDetail}>{address.country}</p>
            <p className={styles.addressPhone}>{address.phone}</p>
          </div>
        </section>

        <button
          type="button"
          className={styles.pickerRow}
          onClick={() => setShippingSheetOpen(true)}
        >
          <div className={styles.pickerText}>
            <span className={styles.pickerLabel}>Shipping Method</span>
            <span className={styles.pickerValue}>
              {selectedShippingMethod
                ? `${selectedShippingMethod.label} (${selectedShippingMethod.duration}) • $${selectedShippingMethod.price.toFixed(2)}`
                : 'Select a method'}
            </span>
          </div>
          <ChevronRight size={20} strokeWidth={2} className={styles.chevron} />
        </button>

        <button
          type="button"
          className={styles.pickerRow}
          onClick={() => setPaymentSheetOpen(true)}
        >
          <div className={styles.pickerText}>
            <span className={styles.pickerLabel}>Payment Method</span>
            <span className={styles.pickerValue}>
              {selectedPaymentMethod
                ? `${selectedPaymentMethod.brand} •••• ${selectedPaymentMethod.last4}`
                : 'Select a payment method'}
            </span>
          </div>
          <ChevronRight size={20} strokeWidth={2} className={styles.chevron} />
        </button>

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
          onClick={() => navigate('/payment')}
          disabled={!selectedShippingMethod || !selectedPaymentMethod}
        >
          Continue to Payment
        </PrimaryButton>
      </div>

      <BottomSheet
        open={shippingSheetOpen}
        onClose={() => setShippingSheetOpen(false)}
        title="Shipping Method"
      >
        <div className={styles.optionList}>
          {shippingMethods.map((method) => {
            const selected = method.id === selectedShippingMethod?.id
            return (
              <button
                key={method.id}
                type="button"
                className={clsx(styles.optionCard, selected && styles.optionActive)}
                onClick={() => setShippingMethod(method.id)}
              >
                <div className={styles.optionLeft}>
                  {selected ? (
                    <CheckCircle2 size={20} strokeWidth={2} className={styles.radioActive} />
                  ) : (
                    <Circle size={20} strokeWidth={2} className={styles.radioInactive} />
                  )}
                  <div>
                    <span className={styles.optionName}>{method.label}</span>
                    <span className={styles.optionMeta}>{method.duration}</span>
                  </div>
                </div>
                <span className={styles.optionCost}>${method.price.toFixed(2)}</span>
              </button>
            )
          })}
        </div>
        <PrimaryButton
          className={styles.applyButton}
          onClick={() => setShippingSheetOpen(false)}
        >
          Apply
        </PrimaryButton>
      </BottomSheet>

      <BottomSheet
        open={paymentSheetOpen}
        onClose={() => setPaymentSheetOpen(false)}
        title="Payment Method"
      >
        <div className={styles.optionList}>
          {paymentMethods.map((method) => {
            const selected = method.id === selectedPaymentMethod?.id
            return (
              <button
                key={method.id}
                type="button"
                className={clsx(styles.optionCard, selected && styles.optionActive)}
                onClick={() => setPaymentMethod(method.id)}
              >
                <div className={styles.optionLeft}>
                  {selected ? (
                    <CheckCircle2 size={20} strokeWidth={2} className={styles.radioActive} />
                  ) : (
                    <Circle size={20} strokeWidth={2} className={styles.radioInactive} />
                  )}
                  <span className={styles.optionName}>
                    {method.brand} •••• {method.last4}
                  </span>
                </div>
                {method.isDefault ? (
                  <span className={styles.defaultBadge}>Default</span>
                ) : null}
              </button>
            )
          })}
        </div>
        <PrimaryButton
          className={styles.applyButton}
          onClick={() => setPaymentSheetOpen(false)}
        >
          Apply
        </PrimaryButton>
      </BottomSheet>
    </div>
  )
}

export default Checkout
