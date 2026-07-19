import { forwardRef, memo } from 'react'
import type { InputHTMLAttributes } from 'react'
import { Search } from 'lucide-react'
import clsx from 'clsx'
import styles from './SearchInput.module.less'

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>

/** Pill search field with a leading search icon (no label — standalone, e.g. Home). */
const SearchInput = memo(
  forwardRef<HTMLInputElement, SearchInputProps>(
    ({ className, type = 'search', ...rest }, ref) => (
      <div className={clsx(styles.wrap, className)}>
        <Search size={20} strokeWidth={2} className={styles.icon} />
        <input ref={ref} type={type} className={styles.input} {...rest} />
      </div>
    ),
  ),
)

SearchInput.displayName = 'SearchInput'

export default SearchInput
