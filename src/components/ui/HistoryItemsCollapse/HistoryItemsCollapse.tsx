import { memo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import clsx from 'clsx'
import type { TransactionProduct } from '../../../mock/history'
import styles from './HistoryItemsCollapse.module.less'

interface HistoryItemsCollapseProps {
  /** Every product in the order except the one already shown in HistoryCard's compact preview. */
  products: TransactionProduct[]
  expanded: boolean
  onToggle: () => void
}

/**
 * Toggle + animated list of a multi-product order's remaining items,
 * rendered below HistoryCard's preview button. Card chrome (border/radius/
 * shadow) stays on HistoryCard itself so this reads as part of the same
 * surface, not a separate card.
 */
const HistoryItemsCollapse = memo(
  ({ products, expanded, onToggle }: HistoryItemsCollapseProps) => (
    <div className={styles.wrap}>
      <button
        type="button"
        className={styles.toggle}
        onClick={onToggle}
        aria-expanded={expanded}
      >
        <ChevronDown
          size={16}
          strokeWidth={2}
          className={clsx(styles.chevron, { [styles.chevronOpen]: expanded })}
        />
        {expanded
          ? 'Hide Items'
          : `Show ${products.length} More ${products.length === 1 ? 'Item' : 'Items'}`}
      </button>

      {/* Height animates on this padding-free wrapper (not .list itself),
          so height: 0 on collapse is truly 0 instead of settling at
          .list's own vertical padding. */}
      <AnimatePresence initial={false}>
        {expanded ? (
          <motion.div
            key="items"
            className={styles.listWrap}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <ul className={styles.list}>
              {products.map((product) => (
                <li key={product.id} className={styles.item}>
                  <img src={product.image} alt="" className={styles.itemImage} />
                  <div className={styles.itemInfo}>
                    <p className={styles.itemName}>{product.name}</p>
                    {product.variant ? (
                      <p className={styles.itemVariant}>{product.variant}</p>
                    ) : null}
                  </div>
                  <span className={styles.itemQty}>Qty {product.quantity}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  ),
)

HistoryItemsCollapse.displayName = 'HistoryItemsCollapse'

export default HistoryItemsCollapse
