import { memo } from 'react'
import { ChevronDown } from 'lucide-react'
import styles from './SortSelector.module.less'

const SORT_OPTIONS = [
  { value: 'popular', label: 'Popular' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
] as const

interface SortSelectorProps {
  value: string
  onChange: (value: string) => void
}

/**
 * "Sort by [value]" control. A native <select> rather than a custom
 * dropdown — the reference design only shows its collapsed state, so a
 * native element covers the (unspecified) open-menu appearance without
 * inventing new visual chrome.
 */
const SortSelector = memo(({ value, onChange }: SortSelectorProps) => (
  <label className={styles.wrap}>
    Sort by
    <span className={styles.valueWrap}>
      <select
        className={styles.select}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label="Sort products by"
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown size={14} strokeWidth={2} className={styles.chevron} />
    </span>
  </label>
))

SortSelector.displayName = 'SortSelector'

export default SortSelector
