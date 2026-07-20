import { productPlaceholder } from '../data/productPlaceholder';
import l1 from "../assets/images/learning/l1.png";
import l2 from "../assets/images/learning/l2.png";
import l3 from "../assets/images/learning/l3.png";
import l4 from "../assets/images/learning/l4.png";
import l5 from "../assets/images/learning/l5.png";

export interface LearningBannerData {
  eyebrow: string
  title: string
  subtitle: string
  ctaLabel: string
}

export interface LearningCategory {
  id: string
  label: string
}

export interface ContinueLearningCourse {
  id: string
  title: string
  instructor: string
  thumbnail: string
  /** 0–100. */
  progress: number
  remainingTime: string
  totalLessons: number
}

export type CourseDifficulty = 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels'

export interface RecommendedCourse {
  id: string
  title: string
  instructor: string
  thumbnail: string
  rating: number
  reviewCount: number
  difficulty: CourseDifficulty
  duration: string
  totalLessons: number
}

// Line breaks are embedded (`\n`) to match docs/design/E-Learning.png's
// exact copy — LearningBanner renders them via `white-space: pre-line`.
export const learningBanner: LearningBannerData = {
  eyebrow: 'Keep Learning',
  title: 'Upgrade your skills,\nunlock your future',
  subtitle: 'Learn anytime, anywhere\nand achieve your goals.',
  ctaLabel: 'Explore Courses',
}

export const learningCategories: LearningCategory[] = [
  { id: 'all', label: 'All Courses' },
  { id: 'technology', label: 'Technology' },
  { id: 'design', label: 'Design' },
  { id: 'business', label: 'Business' },
  { id: 'photography', label: 'Photography' },
  { id: 'more', label: 'More' },
]

export const continueLearningCourse: ContinueLearningCourse = {
  id: 'l1',
  title: 'Digital Photography Basics',
  instructor: 'Johnson Lee',
  thumbnail: l1,
  progress: 60,
  remainingTime: '2h 30m left',
  totalLessons: 12,
}

export const recommendedCourses: RecommendedCourse[] = [
  {
    id: 'l2',
    title: 'UI/UX Design Fundamentals',
    instructor: 'Sarah Chen',
    thumbnail: l2,
    rating: 4.8,
    reviewCount: 1200,
    difficulty: 'Beginner',
    duration: '8h 45m',
    totalLessons: 24,
  },
  {
    id: 'l3',
    title: 'Web Development for Beginners',
    instructor: 'David Kim',
    thumbnail: l3,
    rating: 4.7,
    reviewCount: 980,
    difficulty: 'Beginner',
    duration: '10h 15m',
    totalLessons: 28,
  },
  {
    id: 'l4',
    title: 'Drawing Essentials',
    instructor: 'Olivia Brown',
    thumbnail: l4,
    rating: 4.9,
    reviewCount: 1500,
    difficulty: 'All Levels',
    duration: '6h 30m',
    totalLessons: 18,
  },
  {
    id: 'l5',
    title: 'Digital Marketing Mastery',
    instructor: 'Michael Torres',
    thumbnail: l1,
    rating: 4.6,
    reviewCount: 740,
    difficulty: 'Intermediate',
    duration: '9h 20m',
    totalLessons: 22,
  },
  {
    id: 'l6',
    title: 'Photography Lighting Techniques',
    instructor: 'Johnson Lee',
    thumbnail: l5,
    rating: 4.8,
    reviewCount: 610,
    difficulty: 'Advanced',
    duration: '7h 10m',
    totalLessons: 16,
  },
  {
    id: 'l7',
    title: 'Business Strategy 101',
    instructor: 'Amanda Wells',
    thumbnail: l1,
    rating: 4.5,
    reviewCount: 890,
    difficulty: 'Beginner',
    duration: '11h 00m',
    totalLessons: 30,
  },
]
