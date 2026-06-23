import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Select, SelectProps } from 'antd'
import { Globe } from 'lucide-react'
import { setLanguage } from '@/store/slices/i18n'
import { useTranslation } from '@/hooks/useTranslation'

const LanguageSwitch = () => {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)

  const languages: SelectProps['options'] = [
    { value: 'zh', label: t('language.zh') },
    { value: 'en', label: t('language.en') },
    { value: 'fr', label: t('language.fr') },
    { value: 'ru', label: t('language.ru') },
    { value: 'es', label: t('language.es') },
  ]

  const handleChange = (value: string) => {
    dispatch(setLanguage(value))
    i18n.changeLanguage(value)
    setOpen(false)
  }

  return (
    <div className="relative">
      <Select
        value={i18n.language}
        onChange={handleChange}
        options={languages}
        dropdownMatchSelectWidth={false}
        style={{ width: 120 }}
        open={open}
        onDropdownVisibleChange={setOpen}
        suffixIcon={<Globe className="w-4 h-4" />}
        className="bg-transparent border-none"
      />
    </div>
  )
}

export default LanguageSwitch
