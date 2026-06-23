export type LocalizedString = {
  zh: string
  en: string
  fr: string
  ru: string
  es: string
}

export interface Product {
  id: string | number
  name: string | LocalizedString
  category: string
  subCategory?: string
  sub_category?: string
  price: number
  originalPrice?: number
  description: string | LocalizedString
  specs: Record<string, string | number>
  features?: string[]
  applications?: string[]
  images: string[]
  stock: number
  sales?: number
  rating?: number
  reviews?: number
  is_active?: boolean
  createdAt?: string
  created_at?: string
  updated_at?: string
}

export interface Article {
  id: string | number
  title: string | LocalizedString
  summary?: string | LocalizedString
  content: string | LocalizedString
  category: string | LocalizedString
  author: string | LocalizedString
  publish_time?: string
  views: number
  createdAt?: string
  created_at?: string
  image?: string
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
