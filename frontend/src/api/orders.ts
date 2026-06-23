import api from './index'
import type { Order, CartItem } from '@/types'

export interface CreateOrderData {
  items: CartItem[]
  total_price: number
  payment_method?: string
}

export const getOrders = async (): Promise<Order[]> => {
  const response = await api.get('/orders')
  return response.data
}

export const getOrderById = async (id: string): Promise<Order> => {
  const response = await api.get(`/orders/${id}`)
  return response.data
}

export const createOrder = async (data: CreateOrderData): Promise<Order> => {
  const response = await api.post('/orders', data)
  return response.data
}

export const updateOrderStatus = async (id: string, status: Order['status']): Promise<Order> => {
  const response = await api.put(`/orders/${id}/status`, { status })
  return response.data
}
