import { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CheckCircle2, ChevronLeft, Heart, Share, ShoppingBag } from 'lucide-react'
import clsx from 'clsx'
import 'swiper/css'
import IconButton from '../../../components/ui/IconButton/IconButton'
import RatingBadge from '../../../components/ui/RatingBadge/RatingBadge'
import Price from '../../../components/ui/Price/Price'
import SizeSelector from '../../../components/ui/SizeSelector/SizeSelector'
import PrimaryButton from '../../../components/ui/Button/PrimaryButton'
import BottomSheet from '../../../components/ui/BottomSheet/BottomSheet'
import ShareProductSheet from './ShareProductSheet'
import { getProductById } from '../../../services/product.service'
import { useCart } from '../../../hooks/useCart'
import styles from './ProductDetail.module.less'

const ProductDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [activeImage, setActiveImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [wishlisted, setWishlisted] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [successSheetOpen, setSuccessSheetOpen] = useState(false)
  const [shareSheetOpen, setShareSheetOpen] = useState(false)
  const { addItem } = useCart()

  const product = id ? getProductById(id) : undefined
  if (!product) return <Navigate to="/home" replace />

  const { title, category, price, rating, reviewCount, sizes, description, images } =
    product

  return (
    <div className={styles.screen}>
      <div className={styles.scroll}>
        <div className={styles.gallery}>
          <div className={styles.topBar}>
            <IconButton
              icon={<ChevronLeft size={22} strokeWidth={2} />}
              variant="floating"
              aria-label="Go back"
              onClick={() => navigate(-1)}
            />
            <div className={styles.topActions}>
              <IconButton
                icon={<Share size={20} strokeWidth={2} />}
                variant="floating"
                aria-label="Share product"
                onClick={() => setShareSheetOpen(true)}
              />
              <IconButton
                icon={
                  <Heart
                    size={20}
                    strokeWidth={2}
                    fill={wishlisted ? 'currentColor' : 'none'}
                  />
                }
                variant="floating"
                className={clsx(wishlisted && styles.wishlisted)}
                aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                aria-pressed={wishlisted}
                onClick={() => setWishlisted((prev) => !prev)}
              />
            </div>
          </div>

          <Swiper
            className={styles.swiper}
            onSlideChange={(swiper) => setActiveImage(swiper.activeIndex)}
          >
            {images.map((image, index) => (
              <SwiperSlide key={image}>
                <img
                  src={image}
                  alt={`${title} — view ${index + 1}`}
                  className={styles.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <span className={styles.counter}>
            {activeImage + 1}/{images.length}
          </span>
        </div>

        <div className={styles.info}>
          <div className={styles.titleRow}>
            <h1 className={styles.title}>{title}</h1>
            <RatingBadge value={rating} count={reviewCount} />
          </div>
          <p className={styles.category}>{category}</p>

          <Price
            value={price}
            tone="primary"
            size="display"
            className={styles.price}
          />

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Select Size</h2>
              <button type="button" className={styles.sizeGuide}>
                Size guide
              </button>
            </div>
            <SizeSelector
              sizes={sizes}
              value={selectedSize}
              onChange={(size) => setSelectedSize(size as string)}
            />
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Description</h2>
            <p className={clsx(styles.description, !expanded && styles.clamped)}>
              {description}
            </p>
            <button
              type="button"
              className={styles.readMore}
              aria-expanded={expanded}
              onClick={() => setExpanded((prev) => !prev)}
            >
              {expanded ? 'Read less' : 'Read more'}
            </button>
          </section>
        </div>
      </div>

      <div className={styles.actionBar}>
        <PrimaryButton
          className={styles.addToCart}
          aria-label="Add to Cart"
          disabled={selectedSize === null}
          onClick={() => {
            if (!selectedSize) return
            addItem(product.id, selectedSize)
            setSuccessSheetOpen(true)
          }}
        >
          <ShoppingBag size={20} strokeWidth={2} />
          Add to Cart
        </PrimaryButton>
      </div>

      <BottomSheet
        open={successSheetOpen}
        onClose={() => setSuccessSheetOpen(false)}
        title="Added to Cart"
      >
        <CheckCircle2 size={48} strokeWidth={1.5} className={styles.successIcon} />
        <p className={styles.successText}>{title} has been added to your cart.</p>

        <PrimaryButton onClick={() => navigate('/cart')}>View Cart</PrimaryButton>

        <button
          type="button"
          className={styles.continueShopping}
          onClick={() => navigate('/products')}
        >
          Continue Shopping
        </button>
      </BottomSheet>

      <ShareProductSheet
        open={shareSheetOpen}
        onClose={() => setShareSheetOpen(false)}
        productId={product.id}
      />
    </div>
  )
}

export default ProductDetail
