import banner1 from '../assets/images/product/banner1.png'
import banner2 from '../assets/images/product/banner2.png'
import banner3 from '../assets/images/product/banner3.png'

export interface Banner {
  id: string
  eyebrow: string
  title: string
  ctaLabel: string
  image: string
}

export const banners: Banner[] = [
  {
    id: 'b1',
    eyebrow: 'Special Offer',
    title: 'Up to 50% off Everything',
    ctaLabel: 'Shop Now',
    image: banner1,
  },
  {
    id: 'b2',
    eyebrow: 'New Arrivals',
    title: 'Fresh Styles Just Dropped',
    ctaLabel: 'Explore',
    image: banner2,
  },
  {
    id: 'b3',
    eyebrow: 'Free Shipping',
    title: 'On All Orders Over $50',
    ctaLabel: 'Shop Now',
    image: banner3,
  },
]
