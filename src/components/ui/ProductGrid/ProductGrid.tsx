import { memo } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import type { ProductCardBadge } from '../ProductCard/ProductCard'
import type { Product } from '../../../data/products'
import styles from './ProductGrid.module.less'

interface ProductGridProps {
  products: Product[]
  /** Optional per-product merchandising badge, keyed by product id. */
  badges?: Record<string, ProductCardBadge>
}

/** 2-column product tile grid, shared by any screen that lists products. */
const ProductGrid = memo(({ products, badges }: ProductGridProps) => (
  <div className={styles.grid}>
    {products.map((product) => (
      <ProductCard
        key={product.id}
        id={product.id}
        image={product.image}
        title={product.title}
        category={product.category}
        price={product.price}
        rating={product.rating}
        badge={badges?.[product.id]}
      />
    ))}
  </div>
))

ProductGrid.displayName = 'ProductGrid'

export default ProductGrid
