import { memo } from 'react'
import { Trash2 } from 'lucide-react'
import Price from '../Price/Price'
import QuantitySelector from '../QuantitySelector/QuantitySelector'
import SelectionCheckbox from '../SelectionCheckbox/SelectionCheckbox'
import styles from './CartLineItem.module.less'

interface CartLineItemProps {
  image: string
  title: string
  size: string
  color: string
  price: number
  quantity: number
  lineTotal: number
  selected: boolean
  onSelectChange: () => void
  onRemove: () => void
  onIncrease: () => void
  onDecrease: () => void
}

/**
 * Editable, selectable cart row for the Cart page specifically (checkbox +
 * quantity stepper + remove). Distinct from the shared read-only `CartItem`
 * used by the Summary review step, which must keep its current appearance.
 */
const CartLineItem = memo(
  ({
    image,
    title,
    size,
    color,
    price,
    quantity,
    lineTotal,
    selected,
    onSelectChange,
    onRemove,
    onIncrease,
    onDecrease,
  }: CartLineItemProps) => (
    <li className={styles.card}>
      <SelectionCheckbox
        checked={selected}
        onChange={onSelectChange}
        ariaLabel={`Select ${title}`}
        className={styles.checkbox}
      />

      <img src={image} alt="" className={styles.image} />

      <div className={styles.info}>
        <div className={styles.row}>
          <h3 className={styles.title}>{title}</h3>
          <button
            type="button"
            className={styles.remove}
            aria-label={`Remove ${title} from cart`}
            onClick={onRemove}
          >
            <Trash2 size={18} strokeWidth={2} />
          </button>
        </div>

        <div className={styles.row}>
          <p className={styles.variant}>
            Size {size} • {color}
          </p>
          <QuantitySelector
            value={quantity}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
          />
        </div>

        <div className={styles.row}>
          <Price value={price} />
          <Price value={lineTotal} tone="primary" className={styles.lineTotal} />
        </div>
      </div>
    </li>
  ),
)

CartLineItem.displayName = 'CartLineItem'

export default CartLineItem
