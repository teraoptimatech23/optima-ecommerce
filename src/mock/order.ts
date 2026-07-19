export interface OrderConfirmation {
  orderId: string
  estimatedDelivery: string
}

// Shown on Payment's post-purchase success screen. Replace with the real
// created-order response once checkout has a backend — see Payment.tsx.
export const mockOrderConfirmation: OrderConfirmation = {
  orderId: '#SLY-250701-00253',
  estimatedDelivery: 'Jul 5 – Jul 8, 2025',
}
