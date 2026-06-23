import api from './index'
import type { User } from '@/types'

export interface LoginData {
  username: string
  password: string
}

export interface RegisterData {
  username: string
  password: string
  email?: string
  phone?: string
}

export const login = async (data: LoginData): Promise<{ user: User; token: string }> => {
  const response = await api.post('/users/login', data)
  return response.data
}

export const register = async (data: RegisterData): Promise<User> => {
  const response = await api.post('/users/register', data)
  return response.data
}

export const getProfile = async (): Promise<User> => {
  const response = await api.get('/users/profile')
  return response.data
}

export const updateProfile = async (data: Partial<User>): Promise<User> => {
  const response = await api.put('/users/profile', data)
  return response.data
}

export const changePassword = async (data: { oldPassword: string; newPassword: string }): Promise<void> => {
  await api.put('/users/password', data)
}
