import { memo } from 'react'
import type { ReactNode } from 'react'
import styles from './StatisticCard.module.less'

export interface Statistic {
  icon: ReactNode
  value: number | string
  label: string
}

interface StatisticCardProps {
  stats: Statistic[]
}

/** Row of key account metrics (orders, wishlist, coupons, points, ...) in a shared card. */
const StatisticCard = memo(({ stats }: StatisticCardProps) => (
  <div className={styles.card}>
    {stats.map((stat) => (
      <div key={stat.label} className={styles.item}>
        <span className={styles.icon}>{stat.icon}</span>
        <span className={styles.value}>{stat.value}</span>
        <span className={styles.label}>{stat.label}</span>
      </div>
    ))}
  </div>
))

StatisticCard.displayName = 'StatisticCard'

export default StatisticCard
