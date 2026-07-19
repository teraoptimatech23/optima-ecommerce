import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { DEFAULT_PAYMENT_METHOD_ID } from '../data/paymentMethods'
import { DEFAULT_SHIPPING_METHOD_ID } from '../data/shippingMethods'

export interface CartLineItem {
  productId: string
  size: string
  quantity: number
}

interface CartState {
  items: CartLineItem[]
  shippingMethodId: string
  paymentMethodId: string
  addItem: (productId: string, size: string, quantity?: number) => void
  removeItem: (productId: string, size: string) => void
  increaseQuantity: (productId: string, size: string) => void
  decreaseQuantity: (productId: string, size: string) => void
  setShippingMethod: (id: string) => void
  setPaymentMethod: (id: string) => void
  clearCart: () => void
}

const isSameLine = (item: CartLineItem, productId: string, size: string) =>
  item.productId === productId && item.size === size

/**
 * The single source of truth for "what's in the cart" and the in-progress
 * checkout selections. Only ids + quantity are stored here — never a copy
 * of product title/price/image — so every page (Cart, Summary, Checkout,
 * Payment, the bottom-nav badge) joins against the product catalog at read
 * time via `useCart()`. A change from any one page is instantly visible
 * everywhere else because they all subscribe to this same store. Persisted
 * so the cart survives a page refresh.
 */
export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      shippingMethodId: DEFAULT_SHIPPING_METHOD_ID,
      paymentMethodId: DEFAULT_PAYMENT_METHOD_ID,

      addItem: (productId, size, quantity = 1) =>
        set((state) => {
          const existing = state.items.find((item) =>
            isSameLine(item, productId, size),
          )
          if (existing) {
            return {
              items: state.items.map((item) =>
                isSameLine(item, productId, size)
                  ? { ...item, quantity: item.quantity + quantity }
                  : item,
              ),
            }
          }
          return { items: [...state.items, { productId, size, quantity }] }
        }),

      removeItem: (productId, size) =>
        set((state) => ({
          items: state.items.filter((item) => !isSameLine(item, productId, size)),
        })),

      increaseQuantity: (productId, size) =>
        set((state) => ({
          items: state.items.map((item) =>
            isSameLine(item, productId, size)
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        })),

      decreaseQuantity: (productId, size) =>
        set((state) => ({
          items: state.items.map((item) =>
            isSameLine(item, productId, size)
              ? { ...item, quantity: Math.max(1, item.quantity - 1) }
              : item,
          ),
        })),

      setShippingMethod: (id) => set({ shippingMethodId: id }),
      setPaymentMethod: (id) => set({ paymentMethodId: id }),

      clearCart: () =>
        set({
          items: [],
          shippingMethodId: DEFAULT_SHIPPING_METHOD_ID,
          paymentMethodId: DEFAULT_PAYMENT_METHOD_ID,
        }),
    }),
    { name: 'optima-cart' },
  ),
)
