import { memo } from 'react'
import clsx from 'clsx'
import styles from './Logo.module.less'

interface LogoProps {
  className?: string
}

/** "Optima" wordmark with the brand's purple accent dot. */
const Logo = memo(({ className }: LogoProps) => (
  <div className={clsx(styles.logo, className)} role="img" aria-label="Optima">
    <span>Optima</span>
    <span className={styles.dot} aria-hidden="true">
      .
    </span>
  </div>
))

Logo.displayName = 'Logo'

export default Logo
