import { memo } from 'react'
import type { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'
import styles from './PrimaryButton.module.less'

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
}

/** Full-width gradient primary action button. */
const PrimaryButton = memo(
  ({
    loading = false,
    disabled,
    className,
    children,
    type = 'button',
    ...rest
  }: PrimaryButtonProps) => (
    <button
      type={type}
      className={clsx(styles.button, className)}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      {children}
    </button>
  ),
)

PrimaryButton.displayName = 'PrimaryButton'

export default PrimaryButton
