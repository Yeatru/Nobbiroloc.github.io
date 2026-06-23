import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { User } from '@/types'

interface UserState {
  user: User | null
  token: string | null
  isLoggedIn: boolean
}

const initialState: UserState = {
  user: null,
  token: localStorage.getItem('token') || null,
  isLoggedIn: !!localStorage.getItem('token'),
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.user = action.payload.user
      state.token = action.payload.token
      state.isLoggedIn = true
      localStorage.setItem('token', action.payload.token)
    },
    logout: (state) => {
      state.user = null
      state.token = null
      state.isLoggedIn = false
      localStorage.removeItem('token')
    },
    updateProfile: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload }
      }
    },
  },
})

export const { login, logout, updateProfile } = userSlice.actions
export default userSlice.reducer
