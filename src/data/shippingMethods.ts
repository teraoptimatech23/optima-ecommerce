export interface ShippingMethod {
  id: string
  label: string
  duration: string
  price: number
}

// Matches docs/design/E-checkout.png's shipping method sheet exactly.
export const shippingMethods: ShippingMethod[] = [
  { id: 'jne-regular', label: 'JNE Regular', duration: '3-5 days', price: 5 },
  { id: 'jt-express', label: 'J&T Express', duration: '2-4 days', price: 7 },
  { id: 'sicepat-reg', label: 'SiCepat REG', duration: '2-4 days', price: 6 },
  { id: 'anteraja', label: 'AnterAja', duration: '2-3 days', price: 8 },
]

export const DEFAULT_SHIPPING_METHOD_ID = shippingMethods[0].id

// Flat estimate shown on Cart/Summary before a shipping method is chosen at
// Checkout — matches E-summary.png's $10.00 placeholder value.
export const ESTIMATED_SHIPPING_FEE = 10
