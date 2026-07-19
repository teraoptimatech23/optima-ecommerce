import { useNavigate } from 'react-router-dom'
import { ChevronLeft, ShoppingBag } from 'lucide-react'
import IconButton from '../../../components/ui/IconButton/IconButton'
import CartItem from '../../../components/ui/CartItem/CartItem'
import OrderSummary from '../../../components/ui/OrderSummary/OrderSummary'
import PrimaryButton from '../../../components/ui/Button/PrimaryButton'
import { useCart } from '../../../hooks/useCart'
import styles from './Summary.module.less'

/** Read-only order review between Cart (editable) and Checkout (payment/shipping). */
const Summary = () => {
  const navigate = useNavigate()
  const { lines, isEmpty, subtotal, shipping, discount, total } = useCart()

  return (
    <div className={styles.screen}>
      <div className={styles.header}>
        <IconButton
          icon={<ChevronLeft size={22} strokeWidth={2} />}
          aria-label="Go back"
          onClick={() => navigate(-1)}
        />
        <h1 className={styles.headerTitle}>Order Summary</h1>
      </div>

      <div className={styles.scroll}>
        {isEmpty ? (
          <div className={styles.empty}>
            <ShoppingBag size={48} strokeWidth={1.5} className={styles.emptyIcon} />
            <p className={styles.emptyText}>Your cart is empty</p>
            <PrimaryButton onClick={() => navigate('/home')}>
              Start Shopping
            </PrimaryButton>
          </div>
        ) : (
          <>
            <ul className={styles.list}>
              {lines.map((line) => (
                <CartItem
                  key={`${line.productId}-${line.size}`}
                  image={line.product.image}
                  title={line.product.title}
                  size={line.size}
                  color={line.product.color}
                  price={line.product.price}
                  quantity={line.quantity}
                />
              ))}
            </ul>

            <OrderSummary
              subtotal={subtotal}
              shipping={shipping}
              discount={discount}
              total={total}
              className={styles.summary}
            />
          </>
        )}
      </div>

      {isEmpty ? null : (
        <div className={styles.actionBar}>
          <PrimaryButton onClick={() => navigate('/checkout')}>
            Continue to Checkout
          </PrimaryButton>
        </div>
      )}
    </div>
  )
}

export default Summary
