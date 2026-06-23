export interface Product {
  id: number
  name: string
  category: string
  sub_category: string
  price: number
  description: string
  specs: Record<string, string | number>
  images: string[]
  stock: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Article {
  id: number
  title: string
  content: string
  category: string
  author: string
  publish_time: string
  views: number
  created_at: string
}

export interface User {
  id: number
  username: string
  phone: string
  email: string
  avatar?: string
  created_at: string
  updated_at: string
}

export interface CartItem {
  product_id: number
  name: string
  price: number
  quantity: number
  image: string
}

export interface Order {
  id: string
  user_id: number
  items: CartItem[]
  total_price: number
  status: 'pending' | 'paid' | 'shipped' | 'completed' | 'cancelled'
  payment_method?: string
  created_at: string
}

export interface Language {
  code: string
  name: string
  label: string
}

export interface FilterOptions {
  category?: string
  sub_category?: string
  price_min?: number
  price_max?: number
}
