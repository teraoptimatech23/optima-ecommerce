import { memo } from 'react'
import { Trash2 } from 'lucide-react'
import Price from '../Price/Price'
import QuantitySelector from '../QuantitySelector/QuantitySelector'
import styles from './CartItem.module.less'

interface CartItemProps {
  image: string
  title: string
  size: string
  color: string
  price: number
  quantity: number
  /** Omit to render a read-only row (e.g. the Summary review step). */
  onRemove?: () => void
  onIncrease?: () => void
  onDecrease?: () => void
  minReached?: boolean
}

/** A single cart line: image, title, size/color, price, and quantity. */
const CartItem = memo(
  ({
    image,
    title,
    size,
    color,
    price,
    quantity,
    onRemove,
    onIncrease,
    onDecrease,
    minReached,
  }: CartItemProps) => {
    const editable = Boolean(onIncrease && onDecrease)

    return (
      <li className={styles.item}>
        <img src={image} alt="" className={styles.image} />

        <div className={styles.body}>
          <div className={styles.top}>
            <h3 className={styles.title}>{title}</h3>
            {onRemove ? (
              <button
                type="button"
                className={styles.remove}
                aria-label={`Remove ${title} from cart`}
                onClick={onRemove}
              >
                <Trash2 size={18} strokeWidth={2} />
              </button>
            ) : null}
          </div>

          <p className={styles.variant}>
            Size {size} • {color}
          </p>

          <Price value={price} className={styles.price} />

          {editable ? (
            <QuantitySelector
              value={quantity}
              onIncrease={onIncrease!}
              onDecrease={onDecrease!}
              minReached={minReached}
            />
          ) : (
            <span className={styles.qtyReadOnly}>Qty: {quantity}</span>
          )}
        </div>
      </li>
    )
  },
)

CartItem.displayName = 'CartItem'

export default CartItem
