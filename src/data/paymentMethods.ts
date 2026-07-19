export interface PaymentMethod {
  id: string
  brand: 'Visa' | 'Mastercard'
  last4: string
  isDefault?: boolean
}

// Matches docs/design/E-checkout.png's payment method sheet exactly.
export const paymentMethods: PaymentMethod[] = [
  { id: 'visa-4242', brand: 'Visa', last4: '4242', isDefault: true },
  { id: 'mastercard-8888', brand: 'Mastercard', last4: '8888' },
]

export const DEFAULT_PAYMENT_METHOD_ID = paymentMethods[0].id
