import { memo, useState } from 'react'
import { Calendar, ChevronRight } from 'lucide-react'
import StatusBadge from '../StatusBadge/StatusBadge'
import type { TransactionStatus } from '../StatusBadge/StatusBadge'
import Price from '../Price/Price'
import HistoryItemsCollapse from '../HistoryItemsCollapse/HistoryItemsCollapse'
import { MastercardIcon, VisaIcon } from '../../icons/BrandIcons'
import type { TransactionProduct } from '../../../mock/history'
import styles from './HistoryCard.module.less'

interface HistoryCardProps {
  orderId: string
  date: string
  time: string
  products: TransactionProduct[]
  total: number
  paymentBrand: 'Visa' | 'Mastercard'
  last4: string
  status: TransactionStatus
  onClick?: () => void
}

/**
 * One order in the transaction history list. Single-product orders render
 * exactly as before (just the preview button). Orders with more than one
 * product get an additional expandable section — see HistoryItemsCollapse —
 * listing everything after the first product, which stays inline as before.
 * Card chrome (border/radius/shadow) moved from the preview button onto
 * this outer wrapper so the toggle button can sit beside it without
 * nesting one button inside another.
 */
const HistoryCard = memo(
  ({
    orderId,
    date,
    time,
    products,
    total,
    paymentBrand,
    last4,
    status,
    onClick,
  }: HistoryCardProps) => {
    const [expanded, setExpanded] = useState(false)
    const [firstProduct, ...restProducts] = products
    const hasMultipleProducts = products.length > 1

    return (
      <div className={styles.card}>
        <button type="button" className={styles.preview} onClick={onClick}>
          <img src={firstProduct.image} alt="" className={styles.image} />

          <div className={styles.info}>
            <div className={styles.topRow}>
              <span className={styles.label}>Order ID</span>
              <StatusBadge status={status} />
            </div>

            <p className={styles.orderId}>{orderId}</p>

            {hasMultipleProducts ? (
              <p className={styles.productName}>{firstProduct.name}</p>
            ) : null}

            <p className={styles.meta}>
              <Calendar size={14} strokeWidth={2} />
              {date} • {time}
            </p>

            <p className={styles.meta}>
              {products.length} {products.length === 1 ? 'Item' : 'Items'}
            </p>

            <Price value={total} tone="primary" className={styles.total} />

            <p className={styles.payment}>
              Paid with
              {paymentBrand === 'Visa' ? (
                <VisaIcon size={28} />
              ) : (
                <MastercardIcon size={16} />
              )}
              •••• {last4}
            </p>
          </div>

          <ChevronRight size={18} strokeWidth={2} className={styles.chevron} />
        </button>

        {hasMultipleProducts ? (
          <HistoryItemsCollapse
            products={restProducts}
            expanded={expanded}
            onToggle={() => setExpanded((prev) => !prev)}
          />
        ) : null}
      </div>
    )
  },
)

HistoryCard.displayName = 'HistoryCard'

export default HistoryCard
