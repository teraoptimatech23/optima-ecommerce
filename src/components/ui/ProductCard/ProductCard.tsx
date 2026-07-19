import { memo, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Star } from 'lucide-react'
import clsx from 'clsx'
import IconButton from '../IconButton/IconButton'
import Rating from '../Rating/Rating'
import Price from '../Price/Price'
import styles from './ProductCard.module.less'

export interface ProductCardBadge {
  label: string
  /** Shows a small star ahead of the label (e.g. "Best Seller"). @default false */
  icon?: boolean
}

interface ProductCardProps {
  id: string
  image: string
  title: string
  category: string
  price: number
  rating: number
  /** Optional merchandising pill over the image (e.g. "Best Seller", "New"). */
  badge?: ProductCardBadge
  className?: string
}

/** Product tile for grids/rails: image, wishlist toggle, title, category, price + rating. */
const ProductCard = memo(
  ({ id, image, title, category, price, rating, badge, className }: ProductCardProps) => {
    const [wishlisted, setWishlisted] = useState(false)
    const toggleWishlist = useCallback(() => setWishlisted((prev) => !prev), [])

    return (
      <article className={clsx(styles.card, className)}>
        {/* Overlay link makes the whole card open the product; the wishlist
            button sits above it (higher z-index) and stays independent. */}
        <Link
          to={`/products/${id}`}
          className={styles.overlayLink}
          aria-label={title}
        />
        <div className={styles.imageWrap}>
          {badge ? (
            <span className={styles.badge}>
              {badge.icon ? (
                <Star size={11} strokeWidth={2} fill="currentColor" />
              ) : null}
              {badge.label}
            </span>
          ) : null}
          <img src={image} alt="" loading="lazy" className={styles.image} />
          <IconButton
            icon={
              <Heart
                size={18}
                strokeWidth={2}
                fill={wishlisted ? 'currentColor' : 'none'}
              />
            }
            variant="floating"
            className={clsx(styles.wishlist, {
              [styles.wishlisted]: wishlisted,
            })}
            aria-label={
              wishlisted ? 'Remove from wishlist' : 'Add to wishlist'
            }
            aria-pressed={wishlisted}
            onClick={toggleWishlist}
          />
        </div>

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.category}>{category}</p>

        <div className={styles.footer}>
          <Price value={price} />
          <Rating value={rating} />
        </div>
      </article>
    )
  },
)

ProductCard.displayName = 'ProductCard'

export default ProductCard
