import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { SlidersHorizontal } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'
import MainLayout from '../../../layouts/MainLayout/MainLayout'
import Header from '../../../components/ui/Header/Header'
import SearchInput from '../../../components/ui/SearchInput/SearchInput'
import IconButton from '../../../components/ui/IconButton/IconButton'
import BannerCard from '../../../components/ui/BannerCard/BannerCard'
import CategoryCard from '../../../components/ui/CategoryCard/CategoryCard'
import ProductGrid from '../../../components/ui/ProductGrid/ProductGrid'
import { banners } from '../../../data/banners'
import { categories } from '../../../data/categories'
import { products } from '../../../data/products'
import styles from './Home.module.less'

const Home = () => {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('')

  // Search and category selection are both product-discovery entry points —
  // per the app's architecture, they hand off to the single Products page
  // (query params) rather than filtering anything locally on Home.
  const submitSearch = () => {
    const term = searchValue.trim()
    if (!term) return
    navigate(`/products?search=${encodeURIComponent(term)}`)
  }

  const goToCategory = (categoryId: string) => {
    navigate(categoryId === 'all' ? '/products' : `/products?category=${categoryId}`)
  }

  return (
    <MainLayout
      header={
        <Header notificationCount={1} onNotificationClick={() => navigate('/history')} />
      }
    >
      <div className={styles.searchRow}>
        <SearchInput
          placeholder="Search for products, brands..."
          aria-label="Search for products, brands"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') submitSearch()
          }}
        />
        <IconButton
          icon={<SlidersHorizontal size={20} strokeWidth={2} />}
          aria-label="Filter search results"
        />
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop
        className={styles.bannerSwiper}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <BannerCard
              image={banner.image}
              eyebrow={banner.eyebrow}
              title={banner.title}
              ctaLabel={banner.ctaLabel}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Categories</h2>
          <Link to="/products" className={styles.seeAll}>
            See all
          </Link>
        </div>
        <div className={styles.categoryRow}>
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              icon={category.icon}
              label={category.label}
              accent={category.accent}
              active={category.id === 'all'}
              onClick={() => goToCategory(category.id)}
            />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Recommended for you</h2>
          <Link to="/products" className={styles.seeAll}>
            See all
          </Link>
        </div>
        <ProductGrid products={products} />
      </section>
    </MainLayout>
  )
}

export default Home
