import { memo, useCallback, useState } from 'react'
import { Bookmark } from 'lucide-react'
import clsx from 'clsx'
import IconButton from '../IconButton/IconButton'
import styles from './BookmarkButton.module.less'

interface BookmarkButtonProps {
  className?: string
}

/**
 * Floating toggle for saving a course — mirrors ProductCard's wishlist
 * button (same floating IconButton + local toggle state), reused here so
 * CourseCard doesn't duplicate that pattern.
 */
const BookmarkButton = memo(({ className }: BookmarkButtonProps) => {
  const [bookmarked, setBookmarked] = useState(false)
  const toggle = useCallback(() => setBookmarked((prev) => !prev), [])

  return (
    <IconButton
      icon={
        <Bookmark size={18} strokeWidth={2} fill={bookmarked ? 'currentColor' : 'none'} />
      }
      variant="floating"
      className={clsx(styles.button, { [styles.active]: bookmarked }, className)}
      aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
      aria-pressed={bookmarked}
      onClick={toggle}
    />
  )
})

BookmarkButton.displayName = 'BookmarkButton'

export default BookmarkButton
