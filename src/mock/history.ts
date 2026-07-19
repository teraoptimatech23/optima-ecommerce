import type { TransactionStatus } from '../components/ui/StatusBadge/StatusBadge'
import shoesImage from '../assets/images/products/shoes.svg'
import hoodieImage from '../assets/images/products/hoodie.svg'
import backpackImage from '../assets/images/products/backpack.svg'
import tshirtImage from '../assets/images/products/tshirt.svg'
import bagImage from '../assets/images/products/bag.svg'
import capImage from '../assets/images/products/cap.svg'
import s2 from '../assets/images/product/s1.png';
import s3 from '../assets/images/product/s2.png';
import s4 from '../assets/images/product/s3.png';
import s5 from '../assets/images/product/s4.png';
import p2 from '../assets/images/product/p2.png';
import p3 from '../assets/images/product/p3.png';
import p4 from '../assets/images/product/p4.png';
import h2 from '../assets/images/product/h2.png';
import h3 from '../assets/images/product/h3.png';
import b2 from '../assets/images/product/b2.png';
import b3 from '../assets/images/product/b3.png';

export interface TransactionProduct {
  id: string
  name: string
  image: string
  /** e.g. "Size 9 • White". Omit when the product has no variant. */
  variant?: string
  quantity: number
}

export interface Transaction {
  id: string
  orderId: string
  date: string
  time: string
  total: number
  paymentBrand: 'Visa' | 'Mastercard'
  last4: string
  status: TransactionStatus
  /** One order's line items — always at least one. HistoryCard shows the
   * first inline and, when there's more than one, an expandable list for
   * the rest (see HistoryItemsCollapse). */
  products: TransactionProduct[]
}
 
// Reuses the existing product-style illustrations (not the catalog's
// gradient placeholders) so the list resembles a real order history.
// Explicitly placed at src/mock/ per TASK-010 (the rest of the app's dummy
// data lives in src/data/ — that task named the path directly). Line items
// are self-contained mock data, not joined against data/products.ts, same
// as the rest of this file always has been.
export const transactions: Transaction[] = [
  {
    id: 't1',
    orderId: '#OPT-250701-00253',
    date: 'Jul 1, 2025',
    time: '10:30 AM',
    total: 120,
    paymentBrand: 'Visa',
    last4: '4242',
    status: 'completed',
    products: [
      { id: 't1-p1', name: "Nike Air Force 1 '07", image: s2, variant: 'Size 9 • White', quantity: 1 },
    ],
  },
  {
    id: 't2',
    orderId: '#OPT-250630-00187',
    date: 'Jun 30, 2025',
    time: '03:15 PM',
    total: 49,
    paymentBrand: 'Mastercard',
    last4: '8888',
    status: 'completed',
    products: [
      { id: 't2-p1', name: 'Oversize Hoodie', image: h3, variant: 'Size M • Purple', quantity: 1 },
    ],
  },
  {
    id: 't3',
    orderId: '#OPT-250629-00152',
    date: 'Jun 29, 2025',
    time: '09:45 AM',
    total: 154,
    paymentBrand: 'Visa',
    last4: '4242',
    status: 'pending',
    products: [
      { id: 't3-p1', name: 'Classic Leather Bag', image: b2, variant: 'One Size • Cognac', quantity: 1 },
      { id: 't3-p2', name: 'Urban Backpack', image: h3, variant: 'One Size • Grey', quantity: 1 },
    ],
  },
  {
    id: 't4',
    orderId: '#OPT-250628-00098',
    date: 'Jun 28, 2025',
    time: '02:20 PM',
    total: 25,
    paymentBrand: 'Visa',
    last4: '4242',
    status: 'cancelled',
    products: [
      { id: 't4-p1', name: 'Basic Tee', image: b2, variant: 'Size S • White', quantity: 1 },
    ],
  },
  {
    id: 't5',
    orderId: '#OPT-250627-00075',
    date: 'Jun 27, 2025',
    time: '11:05 AM',
    total: 89,
    paymentBrand: 'Mastercard',
    last4: '8888',
    status: 'completed',
    products: [
      { id: 't5-p1', name: 'Classic Leather Bag', image: s4, variant: 'One Size • Cognac', quantity: 1 },
    ],
  },
  {
    id: 't6',
    orderId: '#OPT-250625-00061',
    date: 'Jun 25, 2025',
    time: '04:40 PM',
    total: 115,
    paymentBrand: 'Visa',
    last4: '4242',
    status: 'completed',
    products: [
      { id: 't6-p1', name: 'Nike Club Cap', image: h2, variant: 'One Size • Black', quantity: 1 },
      { id: 't6-p2', name: 'Basic Tee', image: s4, variant: 'Size L • Black', quantity: 1 },
      { id: 't6-p3', name: 'Basic Hoodie', image: p2, variant: 'Size L • Grey', quantity: 1 },
    ],
  },
  {
    id: 't7',
    orderId: '#OPT-250622-00043',
    date: 'Jun 22, 2025',
    time: '01:10 PM',
    total: 240,
    paymentBrand: 'Mastercard',
    last4: '8888',
    status: 'pending',
    products: [
      { id: 't7-p1', name: "Nike Air Force 1 '07", image: s5, variant: 'Size 10 • White', quantity: 1 },
      { id: 't7-p2', name: "Nike Air Force 1 '07", image: p4, variant: 'Size 8 • White', quantity: 1 },
    ],
  },
  {
    id: 't8',
    orderId: '#OPT-250618-00029',
    date: 'Jun 18, 2025',
    time: '05:50 PM',
    total: 49,
    paymentBrand: 'Visa',
    last4: '4242',
    status: 'cancelled',
    products: [
      { id: 't8-p1', name: 'Oversize Hoodie', image: p2, variant: 'Size M • Purple', quantity: 1 },
    ],
  },
  {
    id: 't9',
    orderId: '#OPT-250615-00012',
    date: 'Jun 15, 2025',
    time: '08:15 AM',
    total: 356,
    paymentBrand: 'Mastercard',
    last4: '8888',
    status: 'completed',
    products: [
      { id: 't9-p1', name: 'Classic Leather Bag', image: b2, variant: 'One Size • Cognac', quantity: 1 },
      { id: 't9-p2', name: 'Urban Backpack', image: p4, variant: 'One Size • Black', quantity: 1 },
      { id: 't9-p3', name: 'Basic Tee', image: s4, variant: 'Size M • White', quantity: 2 },
      { id: 't9-p4', name: 'Nike Club Cap', image: h3, variant: 'One Size • Black', quantity: 1 },
      { id: 't9-p5', name: 'Basic Hoodie', image: h2, variant: 'Size L • Grey', quantity: 1 },
    ],
  },
  {
    id: 't10',
    orderId: '#OPT-250610-00004',
    date: 'Jun 10, 2025',
    time: '12:00 PM',
    total: 685,
    paymentBrand: 'Visa',
    last4: '4242',
    status: 'completed',
    products: [
      { id: 't10-p1', name: "Nike Air Force 1 '07", image: s3, variant: 'Size 9 • White', quantity: 1 },
      { id: 't10-p2', name: "Nike Air Force 1 '07", image: s4, variant: 'Size 10 • Black', quantity: 1 },
      { id: 't10-p3', name: 'Oversize Hoodie', image: p3, variant: 'Size M • Purple', quantity: 1 },
      { id: 't10-p4', name: 'Basic Hoodie', image: p4, variant: 'Size L • Grey', quantity: 1 },
      { id: 't10-p5', name: 'Classic Leather Bag', image: s5, variant: 'One Size • Cognac', quantity: 1 },
      { id: 't10-p6', name: 'Urban Backpack', image: b3, variant: 'One Size • Black', quantity: 1 },
      { id: 't10-p7', name: 'Basic Tee', image: b2, variant: 'Size S • White', quantity: 2 },
      { id: 't10-p8', name: 'Basic Tee', image: s2, variant: 'Size M • Black', quantity: 1 },
      { id: 't10-p9', name: 'Nike Club Cap', image: p2, variant: 'One Size • Black', quantity: 1 },
      { id: 't10-p10', name: 'Nike Club Cap', image: p3, variant: 'One Size • Grey', quantity: 1 },
    ],
  },
]
