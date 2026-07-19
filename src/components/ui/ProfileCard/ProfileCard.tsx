import { memo } from 'react'
import { Camera, ChevronRight, Crown } from 'lucide-react'
import Avatar from '../Avatar/Avatar'
import styles from './ProfileCard.module.less'

interface ProfileCardProps {
  name: string
  email: string
  membership: string
  avatar?: string
  /** Opens account details (e.g. Personal Information). */
  onClick?: () => void
}

/**
 * Profile summary row: avatar with a UI-only camera button, identity +
 * membership badge, and a chevron that opens account details. The camera
 * button is a sibling of the identity button (not nested inside it), so it
 * never triggers the row's own navigation.
 */
const ProfileCard = memo(
  ({ name, email, membership, avatar, onClick }: ProfileCardProps) => (
    <div className={styles.card}>
      <div className={styles.avatarWrap}>
        <Avatar src={avatar} name={name} size="lg" />
        <button type="button" className={styles.cameraButton} aria-label="Change photo">
          <Camera size={16} strokeWidth={2} />
        </button>
      </div>

      <button type="button" className={styles.infoButton} onClick={onClick}>
        <span className={styles.info}>
          <span className={styles.name}>{name}</span>
          <span className={styles.email}>{email}</span>
          <span className={styles.membership}>
            <Crown size={16} strokeWidth={2} />
            {membership}
          </span>
        </span>
        <ChevronRight size={20} strokeWidth={2} className={styles.chevron} />
      </button>
    </div>
  ),
)

ProfileCard.displayName = 'ProfileCard'

export default ProfileCard
