import type { ReactNode } from 'react'
import { Footprints, Grid2x2, Shirt, ShoppingBag, Venus } from 'lucide-react'
import type { CategoryAccent } from '../components/ui/CategoryCard/CategoryCard'

export interface Category {
  id: string
  label: string
  icon: ReactNode
  accent: CategoryAccent
}

export const categories: Category[] = [
  {
    id: 'all',
    label: 'All',
    icon: <Grid2x2 size={26} strokeWidth={2} />,
    accent: 'lavender',
  },
  {
    id: 'men',
    label: 'Men',
    icon: <Shirt size={26} strokeWidth={2} />,
    accent: 'mint',
  },
  {
    id: 'women',
    label: 'Women',
    icon: <Venus size={26} strokeWidth={2} />,
    accent: 'blush',
  },
  {
    id: 'shoes',
    label: 'Shoes',
    icon: <Footprints size={26} strokeWidth={2} />,
    accent: 'mint',
  },
  {
    id: 'bags',
    label: 'Bags',
    icon: <ShoppingBag size={26} strokeWidth={2} />,
    accent: 'peach',
  },
]
