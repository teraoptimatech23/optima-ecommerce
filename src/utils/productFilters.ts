import type { Product } from '../data/products'

export interface ProductFilterParams {
  category?: string
  search?: string
  sort?: string
  /**
   * Not yet backed by product data — recognized so the URL/UI contract is
   * stable, silently ignored until a matching field exists on `Product`.
   * Add a case to `filterAndSortProducts` when it does; no routing or page
   * changes are needed to wire a new filter in.
   */
  brand?: string
  discount?: string
}

const matchesCategory = (product: Product, category: string) =>
  category === 'all' ||
  product.category.toLowerCase().includes(category.toLowerCase())

const matchesSearch = (product: Product, search: string) => {
  const term = search.trim().toLowerCase()
  if (!term) return true
  return (
    product.title.toLowerCase().includes(term) ||
    product.category.toLowerCase().includes(term)
  )
}

const sortProducts = (products: Product[], sort: string): Product[] => {
  switch (sort) {
    case 'price-asc':
      return [...products].sort((a, b) => a.price - b.price)
    case 'price-desc':
      return [...products].sort((a, b) => b.price - a.price)
    case 'rating':
      return [...products].sort((a, b) => b.rating - a.rating)
    case 'newest':
      // No createdAt field yet — catalog order is newest-last, so reverse it.
      return [...products].reverse()
    case 'popular':
    default:
      return products
  }
}

/**
 * Single source of truth for applying the Products page's query-param
 * filters. Pure and framework-free so it's trivial to unit test and to
 * extend with new params (brand, price range, rating, ...) later without
 * touching routing or the page component's structure.
 */
export const filterAndSortProducts = (
  products: Product[],
  params: ProductFilterParams,
): Product[] => {
  const category = params.category ?? 'all'
  const search = params.search ?? ''
  const sort = params.sort ?? 'popular'

  const filtered = products.filter(
    (product) => matchesCategory(product, category) && matchesSearch(product, search),
  )

  return sortProducts(filtered, sort)
}
