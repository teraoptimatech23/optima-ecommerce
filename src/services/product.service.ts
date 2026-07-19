import { products } from '../data/products'
import type { Product } from '../data/products'

/**
 * Product catalog access. Pages must go through this, not `data/products`
 * directly, so the mock array is the single source of truth and swapping
 * in a real `GET /api/products` later only touches this file.
 */
export const getProducts = (): Product[] => products

export const getProductById = (id: string): Product | undefined =>
  products.find((product) => product.id === id)
