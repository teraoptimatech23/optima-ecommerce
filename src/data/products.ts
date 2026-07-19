import nike from '../assets/images/product/nike.png';
import nikeclub from '../assets/images/product/nikeclub.png';
import pants from '../assets/images/product/pants.png';
import bag from '../assets/images/product/bag.png';
import hoodie from '../assets/images/product/hoodie.png';
import s2 from '../assets/images/product/s1.png';
import s3 from '../assets/images/product/s2.png';
import s4 from '../assets/images/product/s3.png';
import s5 from '../assets/images/product/s4.png';
import p2 from '../assets/images/product/p2.png';
import p3 from '../assets/images/product/p3.png';
import p4 from '../assets/images/product/p4.png';
import h2 from '../assets/images/product/h2.png';
import h3 from '../assets/images/product/h3.png';
import b2 from '../assets/images/product/b2.png';
import b3 from '../assets/images/product/b3.png';

export interface Product {
  id: string
  title: string
  category: string
  price: number
  rating: number
  /** Hero thumbnail shown in cards. */
  image: string
  reviewCount: number
  /** Size options appropriate to the product (shoe sizes, S–XL, "One Size", ...). */
  sizes: string[]
  color: string
  description: string
  /** Gallery frames for the detail view. No real photography ships yet. */
  images: string[]
}

export const products: Product[] = [
  {
    id: 'p1',
    title: "Nike Air Force 1 '07",
    category: "Men's Shoes",
    price: 120,
    rating: 4.8,
    image: nike,
    reviewCount: 230,
    sizes: ['7', '8', '9', '10', '11', '12'],
    color: 'White',
    description:
      "The radiance lives on in the Nike Air Force 1 '07, the b-ball original that puts a fresh spin on what you know best: crisp leather, bold details, and the perfect amount of flash to make you shine. Fresh, clean, and true to its roots, it's the everyday icon that never goes out of style.",
    images: [
      nike,
      s2,
      s3,
      s4,
      s5,
    ],
  },
  {
    id: 'p2',
    title: 'Oversize Hoodie',
    category: "Women's Hoodie",
    price: 49,
    rating: 4.7,
    image: hoodie,
    reviewCount: 148,
    sizes: ['S', 'M', 'L', 'XL'],
    color: 'Purple',
    description:
      'A relaxed, drop-shoulder hoodie cut from heavyweight brushed-back fleece. Soft on the inside, structured on the outside, and roomy enough to layer all season long.',
    images: [
      hoodie,
      h2,
      h3
    ],
  },
  {
    id: 'p3',
    title: 'Classic Leather Bag',
    category: "Women's Bags",
    price: 89,
    rating: 4.6,
    image: bag,
    reviewCount: 96,
    sizes: ['One Size'],
    color: 'Cognac',
    description:
      'A timeless everyday carry in full-grain leather with a soft suede lining. Roomy enough for the essentials, refined enough to dress up or down.',
    images: [
      bag,
      b2,
      b3
    ],
  },
  {
    id: 'p4',
    title: 'Slim Fit Chinos',
    category: "Men's Pants",
    price: 65,
    rating: 4.5,
    image: pants,
    reviewCount: 173,
    sizes: ['30', '32', '34', '36'],
    color: 'Teal',
    description:
      'Tailored slim-fit chinos in a stretch cotton twill that moves with you. Clean lines from morning meetings to evening plans, with just the right amount of give.',
    images: [
      pants,
      p2,
      p3,
      p4
    ],
  },
  {
    id: 'p5',
    title: 'Nike Club Cap',
    category: "Men's Accessories",
    price: 25,
    rating: 4.6,
    image: nikeclub,
    reviewCount: 64,
    sizes: ['M'],
    color: 'Black',
    description:
      'A classic six-panel cap in structured cotton twill with an embroidered swoosh and an adjustable back strap for a just-right fit.',
    images: [
      nikeclub,
      s5,
      s4,
      s2,
      s3,
    ],
  },
]
