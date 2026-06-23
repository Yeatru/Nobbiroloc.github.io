import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface I18nState {
  currentLanguage: string
  languages: { code: string; name: string; label: string }[]
}

const initialState: I18nState = {
  currentLanguage: 'zh',
  languages: [
    { code: 'zh', name: '中文', label: '中文' },
    { code: 'en', name: 'English', label: 'English' },
    { code: 'fr', name: 'Français', label: 'Français' },
    { code: 'ru', name: 'Русский', label: 'Русский' },
    { code: 'es', name: 'Español', label: 'Español' },
  ],
}

const i18nSlice = createSlice({
  name: 'i18n',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.currentLanguage = action.payload
      localStorage.setItem('language', action.payload)
    },
  },
})

export const { setLanguage } = i18nSlice.actions
export default i18nSlice.reducer
