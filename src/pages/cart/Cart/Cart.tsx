import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShoppingBag, Trash2 } from 'lucide-react'
import MainLayout from '../../../layouts/MainLayout/MainLayout'
import IconButton from '../../../components/ui/IconButton/IconButton'
import SelectionCheckbox from '../../../components/ui/SelectionCheckbox/SelectionCheckbox'
import CartLineItem from '../../../components/ui/CartLineItem/CartLineItem'
import ShippingProgress from '../../../components/ui/ShippingProgress/ShippingProgress'
import CartSummary from '../../../components/ui/CartSummary/CartSummary'
import PrimaryButton from '../../../components/ui/Button/PrimaryButton'
import { useCart } from '../../../hooks/useCart'
import { ESTIMATED_SHIPPING_FEE } from '../../../data/shippingMethods'
import { FREE_SHIPPING_THRESHOLD, MOCK_CART_DISCOUNT } from '../../../data/pricing'
import styles from './Cart.module.less'

const lineKey = (productId: string, size: string) => `${productId}-${size}`

/**
 * Multi-select ("buy only selected items") is UI-only state scoped to this
 * page — it never touches the cart store. Everything it reads (lines,
 * add/remove/quantity actions) comes straight from the existing `useCart()`
 * hook; this only adds a client-side selection layer on top.
 */
const Cart = () => {
  const navigate = useNavigate()
  const {
    lines,
    isEmpty,
    clearCart,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
  } = useCart()

  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set())
  const knownKeysRef = useRef<Set<string>>(new Set())

  // Keep selection in sync with cart contents: newly added lines default to
  // selected, removed lines drop out automatically, existing selections are
  // preserved across quantity changes.
  useEffect(() => {
    const currentKeys = lines.map((line) => lineKey(line.productId, line.size))
    setSelectedKeys((prev) => {
      const next = new Set<string>()
      for (const key of currentKeys) {
        if (knownKeysRef.current.has(key)) {
          if (prev.has(key)) next.add(key)
        } else {
          next.add(key)
        }
      }
      return next
    })
    knownKeysRef.current = new Set(currentKeys)
  }, [lines])

  const selectedLines = lines.filter((line) =>
    selectedKeys.has(lineKey(line.productId, line.size)),
  )
  const hasSelection = selectedLines.length > 0
  const allSelected = lines.length > 0 && selectedKeys.size === lines.length

  const selectedSubtotal = selectedLines.reduce((sum, line) => sum + line.lineTotal, 0)
  const selectedShipping = hasSelection ? ESTIMATED_SHIPPING_FEE : 0
  const selectedDiscount = hasSelection ? MOCK_CART_DISCOUNT : 0
  const selectedTotal = Math.max(
    0,
    selectedSubtotal + selectedShipping - selectedDiscount,
  )
  const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - selectedSubtotal)
  const freeShippingProgress = Math.min(
    100,
    (selectedSubtotal / FREE_SHIPPING_THRESHOLD) * 100,
  )

  const toggleSelectAll = () => {
    setSelectedKeys(
      allSelected ? new Set() : new Set(lines.map((line) => lineKey(line.productId, line.size))),
    )
  }

  const toggleLine = (productId: string, size: string) => {
    const key = lineKey(productId, size)
    setSelectedKeys((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  const removeSelected = () => {
    selectedLines.forEach((line) => removeItem(line.productId, line.size))
  }

  const handleCheckout = () => {
    if (!hasSelection) return
    navigate('/summary')
  }

  return (
    <MainLayout
      footer={
        isEmpty ? undefined : (
          <CartSummary
            itemCount={selectedLines.length}
            total={selectedTotal}
            savings={selectedDiscount}
            disabled={!hasSelection}
            onCheckout={handleCheckout}
          />
        )
      }
    >
      <div className={styles.header}>
        <h1 className={styles.title}>My Cart ({lines.length})</h1>
        {isEmpty ? null : (
          <IconButton
            icon={<Trash2 size={18} strokeWidth={2} />}
            variant="floating"
            aria-label="Clear cart"
            onClick={clearCart}
          />
        )}
      </div>

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
          <ShippingProgress
            amountRemaining={amountToFreeShipping}
            progress={freeShippingProgress}
            className={styles.shippingProgress}
          />

          <div className={styles.selectionRow}>
            <div className={styles.selectAll}>
              <SelectionCheckbox
                checked={allSelected}
                onChange={toggleSelectAll}
                ariaLabel="Select all items"
              />
              <span className={styles.selectAllLabel}>Select All</span>
            </div>
            <button
              type="button"
              className={styles.removeSelected}
              disabled={!hasSelection}
              onClick={removeSelected}
            >
              Remove
            </button>
          </div>

          <ul className={styles.list}>
            {lines.map((line) => (
              <CartLineItem
                key={lineKey(line.productId, line.size)}
                image={line.product.image}
                title={line.product.title}
                size={line.size}
                color={line.product.color}
                price={line.product.price}
                quantity={line.quantity}
                lineTotal={line.lineTotal}
                selected={selectedKeys.has(lineKey(line.productId, line.size))}
                onSelectChange={() => toggleLine(line.productId, line.size)}
                onRemove={() => removeItem(line.productId, line.size)}
                onIncrease={() => increaseQuantity(line.productId, line.size)}
                onDecrease={() => decreaseQuantity(line.productId, line.size)}
              />
            ))}
          </ul>
        </>
      )}
    </MainLayout>
  )
}

export default Cart
