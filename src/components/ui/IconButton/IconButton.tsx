import { memo } from 'react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './IconButton.module.less'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
  /** 'default' sits on a flat surface; 'floating' overlays imagery (white + shadow). @default 'default' */
  variant?: 'default' | 'floating'
}

/** Circular icon-only button (notification bell, search filter, wishlist toggle). */
const IconButton = memo(
  ({
    icon,
    variant = 'default',
    className,
    type = 'button',
    ...rest
  }: IconButtonProps) => (
    <button
      type={type}
      className={clsx(styles.button, styles[variant], className)}
      {...rest}
    >
      {icon}
    </button>
  ),
)

IconButton.displayName = 'IconButton'

export default IconButton
