import { memo } from 'react'
import type { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'
import styles from './OutlineButton.module.less'

type OutlineButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

/** Full-width secondary action button: purple border/text on a white surface. */
const OutlineButton = memo(
  ({ disabled, className, children, type = 'button', ...rest }: OutlineButtonProps) => (
    <button
      type={type}
      className={clsx(styles.button, className)}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  ),
)

OutlineButton.displayName = 'OutlineButton'

export default OutlineButton
