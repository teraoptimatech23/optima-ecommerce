export interface ProfileData {
  name: string
  email: string
  membership: string
  /** Empty until real photo upload exists — Avatar falls back to initials. */
  avatar: string
  orders: number
  wishlist: number
  coupons: number
  points: number
  ordersToPay: number
  ordersToShip: number
  ordersToReceive: number
}

// Mirrors docs/design/E-profile.png's sample account. Replace with a real
// `GET /api/profile` response once a backend exists.
export const profileData: ProfileData = {
  name: 'Tera Optima',
  email: 'tera.optima@mail.com',
  membership: 'Gold Member',
  avatar: '',
  orders: 12,
  wishlist: 8,
  coupons: 5,
  points: 120,
  ordersToPay: 2,
  ordersToShip: 1,
  ordersToReceive: 1,
}
