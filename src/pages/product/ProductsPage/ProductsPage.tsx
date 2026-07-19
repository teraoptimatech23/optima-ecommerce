import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Bell, ChevronLeft, PackageSearch } from 'lucide-react'
import MainLayout from '../../../layouts/MainLayout/MainLayout'
import IconButton from '../../../components/ui/IconButton/IconButton'
import Badge from '../../../components/ui/Badge/Badge'
import SearchInput from '../../../components/ui/SearchInput/SearchInput'
import FilterButton from '../../../components/ui/FilterButton/FilterButton'
import CategoryTab from '../../../components/ui/CategoryTab/CategoryTab'
import SortSelector from '../../../components/ui/SortSelector/SortSelector'
import ProductGrid from '../../../components/ui/ProductGrid/ProductGrid'
import EmptyState from '../../../components/ui/EmptyState/EmptyState'
import type { ProductCardBadge } from '../../../components/ui/ProductCard/ProductCard'
import { getProducts } from '../../../services/product.service'
import { filterAndSortProducts } from '../../../utils/productFilters'
import styles from './ProductsPage.module.less'

const CATEGORY_TABS = ['All', 'Men', 'Women', 'Shoes', 'Bags', 'Accessories']

// Presentational-only merchandising labels for this listing — not part of
// the product catalog/business data, so they live here rather than in
// data/products.ts.
const PRODUCT_BADGES: Record<string, ProductCardBadge> = {
  p1: { label: 'Best Seller', icon: true },
  p2: { label: 'New' },
  p3: { label: 'Best Seller', icon: true },
  p5: { label: 'New' },
}

/**
 * The single entry point for browsing the catalog. Every discovery
 * feature (Home's search, category rail, "See all" links, the bottom nav's
 * Categories tab, ...) routes here with query params — never to a
 * feature-specific page — so there is exactly one browsing experience and
 * exactly one place that knows how to filter/sort it (see
 * utils/productFilters.ts). The URL is the source of truth for filter
 * state, not component state, so filters survive navigation and back/
 * forward and are shareable/bookmarkable.
 */
const ProductsPage = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const categoryParam = searchParams.get('category') ?? 'all'
  const searchParam = searchParams.get('search') ?? ''
  const sortParam = searchParams.get('sort') ?? 'popular'

  // Locally-controlled input for instant typing feedback; committed to the
  // URL on a short debounce so keystrokes don't spam history entries while
  // the URL stays the actual source of truth. When `searchParam` changes
  // from outside this component (e.g. arriving from Home's search box, or
  // browser back/forward), resync `searchInput` to match — done here as a
  // render-time adjustment rather than an effect, per React's guidance for
  // "adjusting state when a prop changes" (avoids an extra render pass).
  const [searchInput, setSearchInput] = useState(searchParam)
  const [syncedSearchParam, setSyncedSearchParam] = useState(searchParam)
  if (searchParam !== syncedSearchParam) {
    setSyncedSearchParam(searchParam)
    setSearchInput(searchParam)
  }

  useEffect(() => {
    if (searchInput === searchParam) return
    const handle = setTimeout(() => {
      const next = new URLSearchParams(searchParams)
      if (searchInput) next.set('search', searchInput)
      else next.delete('search')
      setSearchParams(next, { replace: true })
    }, 300)
    return () => clearTimeout(handle)
    // Only re-run when the debounced value itself changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput])

  const updateParam = (key: string, value: string) => {
    const next = new URLSearchParams(searchParams)
    if (!value || value === 'all' || value === 'popular') next.delete(key)
    else next.set(key, value)
    setSearchParams(next)
  }

  const clearFilters = () => {
    setSearchInput('')
    setSearchParams({})
  }

  const products = useMemo(() => getProducts(), [])
  const filtered = useMemo(
    () =>
      filterAndSortProducts(products, {
        category: categoryParam,
        search: searchParam,
        sort: sortParam,
      }),
    [products, categoryParam, searchParam, sortParam],
  )

  return (
    <MainLayout
      header={
        <div className={styles.header}>
          <IconButton
            icon={<ChevronLeft size={22} strokeWidth={2} />}
            aria-label="Go back"
            onClick={() => navigate(-1)}
          />
          <h1 className={styles.title}>All Products</h1>
          <div className={styles.bellWrap}>
            <IconButton
              icon={<Bell size={22} strokeWidth={2} />}
              aria-label="Notifications, 2 unread"
            />
            <Badge count={2} className={styles.badge} />
          </div>
        </div>
      }
    >
      <div className={styles.searchRow}>
        <SearchInput
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          placeholder="Search for products, brands..."
          aria-label="Search for products, brands"
        />
        <FilterButton />
      </div>

      <div className={styles.tabRow}>
        {CATEGORY_TABS.map((tab) => (
          <CategoryTab
            key={tab}
            label={tab}
            active={tab.toLowerCase() === categoryParam.toLowerCase()}
            onClick={() => updateParam('category', tab.toLowerCase())}
          />
        ))}
      </div>

      <div className={styles.sortRow}>
        <SortSelector
          value={sortParam}
          onChange={(value) => updateParam('sort', value)}
        />
        <span className={styles.count}>{filtered.length} Products</span>
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          icon={<PackageSearch size={48} strokeWidth={1.5} />}
          title="No products found"
          description="Try adjusting your search or filters to find what you're looking for."
          actionLabel="Clear Filters"
          onAction={clearFilters}
        />
      ) : (
        <ProductGrid products={filtered} badges={PRODUCT_BADGES} />
      )}
    </MainLayout>
  )
}

export default ProductsPage
