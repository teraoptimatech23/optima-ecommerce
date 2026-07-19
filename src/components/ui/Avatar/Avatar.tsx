import { memo } from 'react'
import clsx from 'clsx'
import styles from './Avatar.module.less'

interface AvatarProps {
  /** Photo URL; omit to fall back to initials on a gradient background. */
  src?: string
  /** Used for the initials fallback and the image's accessible name. */
  name: string
  /** @default 'lg' */
  size?: 'sm' | 'lg'
  className?: string
}

const getInitials = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')

/** Circular user photo, or initials on the brand gradient when no photo exists. */
const Avatar = memo(({ src, name, size = 'lg', className }: AvatarProps) => (
  <span className={clsx(styles.avatar, styles[size], className)}>
    {src ? (
      <img src={src} alt={name} className={styles.image} />
    ) : (
      <span className={styles.initials}>{getInitials(name)}</span>
    )}
  </span>
))

Avatar.displayName = 'Avatar'

export default Avatar
