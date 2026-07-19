import { memo } from 'react'
import type { ReactNode } from 'react'
import clsx from 'clsx'
import styles from './ProfileMenuSection.module.less'

interface ProfileMenuSectionProps {
  children: ReactNode
  className?: string
}

/** Card wrapper for a list of ProfileMenuItem rows, with hairline dividers between them. */
const ProfileMenuSection = memo(({ children, className }: ProfileMenuSectionProps) => (
  <div className={clsx(styles.section, className)}>{children}</div>
))

ProfileMenuSection.displayName = 'ProfileMenuSection'

export default ProfileMenuSection
