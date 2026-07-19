import type { ReactNode } from 'react'
import {
  Bell,
  CheckCircle2,
  CreditCard,
  Heart,
  HelpCircle,
  MapPin,
  Package,
  Receipt,
  ShieldCheck,
  ShoppingBag,
  Star,
  Ticket,
  Truck,
  User,
  XCircle,
} from 'lucide-react'
import type { Statistic } from '../../../components/ui/StatisticCard/StatisticCard'
import { profileData } from '../../../mock/profile'

export interface OrderShortcutConfig {
  key: string
  icon: ReactNode
  label: string
  to: string
  badgeCount?: number
}

export interface AccountMenuConfig {
  key: string
  icon: ReactNode
  label: string
  to: string
}

export const STATISTICS: Statistic[] = [
  { icon: <ShoppingBag size={24} strokeWidth={2} />, value: profileData.orders, label: 'Orders' },
  { icon: <Heart size={24} strokeWidth={2} />, value: profileData.wishlist, label: 'Wishlist' },
  { icon: <Ticket size={24} strokeWidth={2} />, value: profileData.coupons, label: 'Coupons' },
  { icon: <Star size={24} strokeWidth={2} />, value: profileData.points, label: 'Points' },
]

// To Pay/Ship/Receive don't have real order-tracking screens yet, so they
// route to the shared Placeholder page (see TASK-011); Completed/Cancelled
// reuse History Transaction, which already lists every order status.
export const ORDER_SHORTCUTS: OrderShortcutConfig[] = [
  {
    key: 'to-pay',
    icon: <Receipt size={26} strokeWidth={1.75} />,
    label: 'To Pay',
    to: '/orders/to-pay',
    badgeCount: profileData.ordersToPay,
  },
  {
    key: 'to-ship',
    icon: <Package size={26} strokeWidth={1.75} />,
    label: 'To Ship',
    to: '/orders/to-ship',
    badgeCount: profileData.ordersToShip,
  },
  {
    key: 'to-receive',
    icon: <Truck size={26} strokeWidth={1.75} />,
    label: 'To Receive',
    to: '/orders/to-receive',
    badgeCount: profileData.ordersToReceive,
  },
  { key: 'completed', icon: <CheckCircle2 size={26} strokeWidth={1.75} />, label: 'Completed', to: '/history' },
  { key: 'cancelled', icon: <XCircle size={26} strokeWidth={1.75} />, label: 'Cancelled', to: '/history' },
]

// Addresses reuses the /address placeholder route already wired for
// TASK-011 instead of a near-duplicate route; Notifications intentionally
// routes to History Transaction per TASK-012's navigation spec.
export const ACCOUNT_MENU_ITEMS: AccountMenuConfig[] = [
  {
    key: 'personal-information',
    icon: <User size={20} strokeWidth={2} />,
    label: 'Personal Information',
    to: '/profile/personal-information',
  },
  { key: 'addresses', icon: <MapPin size={20} strokeWidth={2} />, label: 'Addresses', to: '/address' },
  {
    key: 'payment-methods',
    icon: <CreditCard size={20} strokeWidth={2} />,
    label: 'Payment Methods',
    to: '/profile/payment-methods',
  },
  {
    key: 'security',
    icon: <ShieldCheck size={20} strokeWidth={2} />,
    label: 'Security',
    to: '/profile/security',
  },
  { key: 'notifications', icon: <Bell size={20} strokeWidth={2} />, label: 'Notifications', to: '/history' },
  {
    key: 'help-center',
    icon: <HelpCircle size={20} strokeWidth={2} />,
    label: 'Help Center',
    to: '/profile/help-center',
  },
]
