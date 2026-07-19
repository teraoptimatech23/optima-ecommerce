import { memo } from 'react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './SocialButton.module.less'

interface SocialButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
  label: string
}

/** Outlined "continue with <provider>" button. */
const SocialButton = memo(
  ({ icon, label, className, type = 'button', ...rest }: SocialButtonProps) => (
    <button type={type} className={clsx(styles.button, className)} {...rest}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.label}>{label}</span>
    </button>
  ),
)

SocialButton.displayName = 'SocialButton'

export default SocialButton
