import { Link, useNavigate } from 'react-router-dom'
import MainLayout from '../../../layouts/MainLayout/MainLayout'
import Header from '../../../components/ui/Header/Header'
import SearchInput from '../../../components/ui/SearchInput/SearchInput'
import LearningBanner from '../../../components/ui/LearningBanner/LearningBanner'
import CategoryChip from '../../../components/ui/CategoryChip/CategoryChip'
import ContinueLearningCard from '../../../components/ui/ContinueLearningCard/ContinueLearningCard'
import CourseCard from '../../../components/ui/CourseCard/CourseCard'
import {
  continueLearningCourse,
  learningBanner,
  learningCategories,
  recommendedCourses,
} from '../../../mock/learning'
import { CATEGORY_ICONS } from './learning.config'
import styles from './Learning.module.less'

/**
 * Main hub for educational content, reached from the bottom nav's Learning
 * tab. Course browsing/enrollment doesn't exist yet, so every destination
 * here (Explore Courses, Continue Learning, each recommended course) opens
 * the shared Placeholder page (see TASK-011) rather than a real course flow.
 */
const Learning = () => {
  const navigate = useNavigate()

  return (
    <MainLayout
      header={
        <Header
          title=""
          subtitle="Keep learning, grow every day."
          notificationCount={2}
          onNotificationClick={() => navigate('/history')}
        />
      }
    >
      <div className={styles.searchRow}>
        <SearchInput
          placeholder="Search courses, topics, or skills..."
          aria-label="Search courses, topics, or skills"
        />
      </div>

      <LearningBanner
        eyebrow={learningBanner.eyebrow}
        title={learningBanner.title}
        subtitle={learningBanner.subtitle}
        ctaLabel={learningBanner.ctaLabel}
        onCtaClick={() => navigate('/learning/explore')}
      />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Categories</h2>
        <div className={styles.categoryRow}>
          {learningCategories.map((category) => (
            <CategoryChip
              key={category.id}
              icon={CATEGORY_ICONS[category.id]}
              label={category.label}
              active={category.id === 'all'}
            />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Continue Learning</h2>
          <Link to="/learning/continue" className={styles.seeAll}>
            View All
          </Link>
        </div>
        <ContinueLearningCard
          to={`/learning/courses/${continueLearningCourse.id}`}
          thumbnail={continueLearningCourse.thumbnail}
          title={continueLearningCourse.title}
          instructor={continueLearningCourse.instructor}
          progress={continueLearningCourse.progress}
          remainingTime={continueLearningCourse.remainingTime}
          totalLessons={continueLearningCourse.totalLessons}
        />
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Recommended for You</h2>
          <Link to="/learning/recommended" className={styles.seeAll}>
            View All
          </Link>
        </div>
        <div className={styles.courseRow}>
          {recommendedCourses.map((course) => (
            <CourseCard
              key={course.id}
              to={`/learning/courses/${course.id}`}
              thumbnail={course.thumbnail}
              title={course.title}
              instructor={course.instructor}
              rating={course.rating}
              reviewCount={course.reviewCount}
              difficulty={course.difficulty}
              duration={course.duration}
              totalLessons={course.totalLessons}
            />
          ))}
        </div>
      </section>
    </MainLayout>
  )
}

export default Learning
