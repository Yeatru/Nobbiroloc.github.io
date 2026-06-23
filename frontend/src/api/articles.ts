import api from './index'
import type { Article } from '@/types'

export const getArticles = async (category?: string): Promise<Article[]> => {
  const params = new URLSearchParams()
  if (category) params.set('category', category)

  const response = await api.get('/articles', { params })
  return response.data
}

export const getArticleById = async (id: number): Promise<Article> => {
  const response = await api.get(`/articles/${id}`)
  return response.data
}

export const createArticle = async (article: Omit<Article, 'id' | 'views' | 'created_at'>): Promise<Article> => {
  const response = await api.post('/articles', article)
  return response.data
}

export const updateArticle = async (id: number, article: Partial<Article>): Promise<Article> => {
  const response = await api.put(`/articles/${id}`, article)
  return response.data
}

export const deleteArticle = async (id: number): Promise<void> => {
  await api.delete(`/articles/${id}`)
}
