import { useMemo } from 'react'
import { useCartStore } from '../store/cart.store'
import { getProductById } from '../services/product.service'
import { FREE_SHIPPING_THRESHOLD, MOCK_CART_DISCOUNT } from '../data/pricing'
import { ESTIMATED_SHIPPING_FEE, shippingMethods } from '../data/shippingMethods'
import { paymentMethods } from '../data/paymentMethods'
import type { Product } from '../data/products'

export interface CartLine {
  productId: string
  size: string
  quantity: number
  product: Product
  lineTotal: number
}

/**
 * The one shared read/write surface for cart data. Every page that shows
 * cart contents or totals (Cart, Summary, Checkout, Payment, the bottom-nav
 * badge) calls this instead of touching the store or product catalog
 * directly, so they can never drift into inconsistent totals.
 *
 * `shipping`/`total` here always use the flat pre-checkout estimate (what
 * Cart and Summary show, matching the designs). Checkout and Payment — where
 * the user has actually chosen a shipping method — derive their own live
 * total from `subtotal`, `discount`, and `selectedShippingMethod.price`.
 */
export function useCart() {
  const items = useCartStore((state) => state.items)
  const shippingMethodId = useCartStore((state) => state.shippingMethodId)
  const paymentMethodId = useCartStore((state) => state.paymentMethodId)
  const addItem = useCartStore((state) => state.addItem)
  const removeItem = useCartStore((state) => state.removeItem)
  const increaseQuantity = useCartStore((state) => state.increaseQuantity)
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity)
  const setShippingMethod = useCartStore((state) => state.setShippingMethod)
  const setPaymentMethod = useCartStore((state) => state.setPaymentMethod)
  const clearCart = useCartStore((state) => state.clearCart)

  const lines = useMemo<CartLine[]>(
    () =>
      items.flatMap((item) => {
        const product = getProductById(item.productId)
        return product
          ? [{ ...item, product, lineTotal: product.price * item.quantity }]
          : []
      }),
    [items],
  )

  const itemCount = useMemo(
    () => lines.reduce((sum, line) => sum + line.quantity, 0),
    [lines],
  )

  const subtotal = useMemo(
    () => lines.reduce((sum, line) => sum + line.lineTotal, 0),
    [lines],
  )

  const isEmpty = lines.length === 0

  const selectedShippingMethod = useMemo(
    () => shippingMethods.find((method) => method.id === shippingMethodId),
    [shippingMethodId],
  )

  const selectedPaymentMethod = useMemo(
    () => paymentMethods.find((method) => method.id === paymentMethodId),
    [paymentMethodId],
  )

  const shipping = isEmpty ? 0 : ESTIMATED_SHIPPING_FEE
  const discount = isEmpty ? 0 : MOCK_CART_DISCOUNT
  const total = Math.max(0, subtotal + shipping - discount)

  const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal)
  const freeShippingProgress = Math.min(
    100,
    (subtotal / FREE_SHIPPING_THRESHOLD) * 100,
  )

  return {
    lines,
    itemCount,
    isEmpty,
    subtotal,
    shipping,
    discount,
    total,
    amountToFreeShipping,
    freeShippingProgress,
    selectedShippingMethod,
    selectedPaymentMethod,
    addItem,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    setShippingMethod,
    setPaymentMethod,
    clearCart,
  }
}
