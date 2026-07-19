import { Link, useNavigate } from 'react-router-dom'
import { History } from 'lucide-react'
import clsx from 'clsx'
import MainLayout from '../../../layouts/MainLayout/MainLayout'
import IconButton from '../../../components/ui/IconButton/IconButton'
import Badge from '../../../components/ui/Badge/Badge'
import ProfileCard from '../../../components/ui/ProfileCard/ProfileCard'
import StatisticCard from '../../../components/ui/StatisticCard/StatisticCard'
import OrderShortcut from '../../../components/ui/OrderShortcut/OrderShortcut'
import ProfileMenuSection from '../../../components/ui/ProfileMenuSection/ProfileMenuSection'
import ProfileMenuItem from '../../../components/ui/ProfileMenuItem/ProfileMenuItem'
import LogoutCard from '../../../components/ui/LogoutCard/LogoutCard'
import { profileData } from '../../../mock/profile'
import { ACCOUNT_MENU_ITEMS, ORDER_SHORTCUTS, STATISTICS } from './profile.config'
import styles from './Profile.module.less'

/**
 * Account dashboard / navigation hub reached from the bottom nav's Profile
 * tab. Almost every row here routes into a screen that doesn't exist yet,
 * so it leans on the shared Placeholder page (see TASK-011) rather than
 * inventing a stub page per destination.
 */
const Profile = () => {
  const navigate = useNavigate()

  return (
    <MainLayout
      header={
        <div className={styles.header}>
          <h1 className={styles.title}>Profile</h1>
          <div className={styles.iconWrap}>
            <IconButton
              icon={<History size={22} strokeWidth={2} />}
              aria-label="Recent activity, 2 unread"
              onClick={() => navigate('/history')}
            />
            <Badge count={2} className={styles.badge} />
          </div>
        </div>
      }
    >
      <div className={styles.summary}>
        <ProfileCard
          name={profileData.name}
          email={profileData.email}
          membership={profileData.membership}
          avatar={profileData.avatar}
          onClick={() => navigate('/profile/personal-information')}
        />
        <StatisticCard stats={STATISTICS} />
      </div>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>My Orders</h2>
          <Link to="/history" className={styles.seeAll}>
            View All
          </Link>
        </div>
        <div className={styles.ordersCard}>
          {ORDER_SHORTCUTS.map((item) => (
            <OrderShortcut
              key={item.key}
              icon={item.icon}
              label={item.label}
              badgeCount={item.badgeCount}
              onClick={() => navigate(item.to)}
            />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={clsx(styles.sectionTitle, styles.accountTitle)}>Account</h2>
        <ProfileMenuSection>
          {ACCOUNT_MENU_ITEMS.map((item) => (
            <ProfileMenuItem
              key={item.key}
              icon={item.icon}
              label={item.label}
              onClick={() => navigate(item.to)}
            />
          ))}
        </ProfileMenuSection>
      </section>

      <section className={styles.section}>
        <LogoutCard />
      </section>
    </MainLayout>
  )
}

export default Profile
