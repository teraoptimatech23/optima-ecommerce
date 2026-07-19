import { memo } from 'react'
import type { ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'
import clsx from 'clsx'
import styles from './ProfileMenuItem.module.less'

interface ProfileMenuItemProps {
  icon: ReactNode
  label: string
  /** 'danger' is used for the Log Out row. @default 'default' */
  tone?: 'default' | 'danger'
  onClick?: () => void
}

/** One row in a ProfileMenuSection: icon chip, label, and a trailing chevron. */
const ProfileMenuItem = memo(
  ({ icon, label, tone = 'default', onClick }: ProfileMenuItemProps) => (
    <button type="button" className={styles.item} onClick={onClick}>
      <span className={clsx(styles.iconChip, tone === 'danger' && styles.danger)}>
        {icon}
      </span>
      <span className={clsx(styles.label, tone === 'danger' && styles.dangerLabel)}>
        {label}
      </span>
      <ChevronRight size={18} strokeWidth={2} className={styles.chevron} />
    </button>
  ),
)

ProfileMenuItem.displayName = 'ProfileMenuItem'

export default ProfileMenuItem
