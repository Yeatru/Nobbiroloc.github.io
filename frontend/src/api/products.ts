import api from './index'
import type { Product, FilterOptions } from '@/types'

export const getProducts = async (filters?: FilterOptions): Promise<Product[]> => {
  const params = new URLSearchParams()
  if (filters?.category) params.set('category', filters.category)
  if (filters?.sub_category) params.set('sub_category', filters.sub_category)
  if (filters?.price_min) params.set('price_min', filters.price_min.toString())
  if (filters?.price_max) params.set('price_max', filters.price_max.toString())

  const response = await api.get('/products', { params })
  return response.data
}

export const getProductById = async (id: number): Promise<Product> => {
  const response = await api.get(`/products/${id}`)
  return response.data
}

export const createProduct = async (product: Omit<Product, 'id' | 'created_at' | 'updated_at'>): Promise<Product> => {
  const response = await api.post('/products', product)
  return response.data
}

export const updateProduct = async (id: number, product: Partial<Product>): Promise<Product> => {
  const response = await api.put(`/products/${id}`, product)
  return response.data
}

export const deleteProduct = async (id: number): Promise<void> => {
  await api.delete(`/products/${id}`)
}
