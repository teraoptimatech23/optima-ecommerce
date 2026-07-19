import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, History, PackageOpen } from 'lucide-react'
import MainLayout from '../../../layouts/MainLayout/MainLayout'
import IconButton from '../../../components/ui/IconButton/IconButton'
import Badge from '../../../components/ui/Badge/Badge'
import SearchInput from '../../../components/ui/SearchInput/SearchInput'
import FilterButton from '../../../components/ui/FilterButton/FilterButton'
import CategoryTab from '../../../components/ui/CategoryTab/CategoryTab'
import HistoryCard from '../../../components/ui/HistoryCard/HistoryCard'
import EmptyState from '../../../components/ui/EmptyState/EmptyState'
import type { TransactionStatus } from '../../../components/ui/StatusBadge/StatusBadge'
import { transactions } from '../../../mock/history'
import styles from './HistoryTransaction.module.less'

type StatusFilter = TransactionStatus | 'all'

const STATUS_TABS: { label: string; value: StatusFilter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Completed', value: 'completed' },
  { label: 'Pending', value: 'pending' },
  { label: 'Cancelled', value: 'cancelled' },
]

/**
 * Order history, reachable from the Profile tab. Filtering (status tabs +
 * search) is local component state — this page has no query-param
 * contract of its own to preserve, unlike the Products page. Tapping a
 * transaction is a placeholder for now (no /history/:id page exists yet
 * per TASK-010's scope), so HistoryCard is rendered without an onClick.
 */
const HistoryTransaction = () => {
  const navigate = useNavigate()
  const [activeStatus, setActiveStatus] = useState<StatusFilter>('all')
  const [searchValue, setSearchValue] = useState('')

  const filtered = useMemo(() => {
    const term = searchValue.trim().toLowerCase()
    return transactions.filter((transaction) => {
      const matchesStatus =
        activeStatus === 'all' || transaction.status === activeStatus
      const matchesSearch =
        !term || transaction.orderId.toLowerCase().includes(term)
      return matchesStatus && matchesSearch
    })
  }, [activeStatus, searchValue])

  const clearFilters = () => {
    setActiveStatus('all')
    setSearchValue('')
  }

  return (
    <MainLayout
      header={
        <div className={styles.header}>
          <IconButton
            icon={<ChevronLeft size={22} strokeWidth={2} />}
            aria-label="Go back"
            onClick={() => navigate(-1)}
          />
          <h1 className={styles.title}>History Transaction</h1>
          <div className={styles.iconWrap}>
            <IconButton
              icon={<History size={22} strokeWidth={2} />}
              aria-label="Recent activity, 2 unread"
            />
            <Badge count={2} className={styles.badge} />
          </div>
        </div>
      }
    >
      <div className={styles.searchRow}>
        <SearchInput
          placeholder="Search transactions, orders..."
          aria-label="Search transactions, orders"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <FilterButton />
      </div>

      <div className={styles.tabRow}>
        {STATUS_TABS.map((tab) => (
          <CategoryTab
            key={tab.value}
            label={tab.label}
            active={tab.value === activeStatus}
            onClick={() => setActiveStatus(tab.value)}
          />
        ))}
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          icon={<PackageOpen size={48} strokeWidth={1.5} />}
          title="No transactions found"
          description="Try adjusting your search or filters to find what you're looking for."
          actionLabel="Clear Filters"
          onAction={clearFilters}
        />
      ) : (
        <ul className={styles.list}>
          {filtered.map((transaction) => (
            <li key={transaction.id}>
              <HistoryCard
                orderId={transaction.orderId}
                date={transaction.date}
                time={transaction.time}
                products={transaction.products}
                total={transaction.total}
                paymentBrand={transaction.paymentBrand}
                last4={transaction.last4}
                status={transaction.status}
              />
            </li>
          ))}
        </ul>
      )}
    </MainLayout>
  )
}

export default HistoryTransaction
