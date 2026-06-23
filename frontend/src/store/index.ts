import { configureStore } from '@reduxjs/toolkit'
import i18nReducer from './slices/i18n'
import cartReducer from './slices/cart'
import userReducer from './slices/user'

export const store = configureStore({
  reducer: {
    i18n: i18nReducer,
    cart: cartReducer,
    user: userReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
