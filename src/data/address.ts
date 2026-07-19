export interface Address {
  name: string
  street: string
  city: string
  country: string
  phone: string
}

// Street/city/country are dummy data — no address book exists yet. The
// name/phone are overridden with the authenticated user's own info in
// Checkout, tying this to the real (mock) auth session instead of a
// disconnected fictional shopper.
export const MOCK_SHIPPING_ADDRESS: Address = {
  name: 'Tera',
  street: '4517 Washington Ave.',
  city: 'Manchester, Kentucky 39495',
  country: 'United States',
  phone: '081211112222',
}
