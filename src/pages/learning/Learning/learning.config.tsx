import type { ReactNode } from 'react'
import { Camera, Grid2x2, Laptop, MoreHorizontal, Palette, TrendingUp } from 'lucide-react'

/** Keyed by LearningCategory.id (src/mock/learning.ts) — icons live here, not in the mock data, per this repo's data/icon split convention (see profile.config.tsx). */
export const CATEGORY_ICONS: Record<string, ReactNode> = {
  all: <Grid2x2 size={26} strokeWidth={2} />,
  technology: <Laptop size={26} strokeWidth={2} />,
  design: <Palette size={26} strokeWidth={2} />,
  business: <TrendingUp size={26} strokeWidth={2} />,
  photography: <Camera size={26} strokeWidth={2} />,
  more: <MoreHorizontal size={26} strokeWidth={2} />,
}
