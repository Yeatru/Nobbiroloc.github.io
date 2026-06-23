import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, Input, Button, Badge } from 'antd'
import { Search, ShoppingCart, User, LogOut, Printer } from 'lucide-react'
import LanguageSwitch from '../LanguageSwitch'
import { useTranslation } from '@/hooks/useTranslation'
import { logout } from '@/store/slices/user'
import type { RootState } from '@/store'

const Header = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('')
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn)

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }

  const handleSearch = () => {
    if (searchValue.trim()) {
      navigate(`/products?search=${searchValue}`)
    }
  }

  const navItems = [
    { key: 'home', label: t('common.home'), path: '/' },
    { key: 'products', label: t('common.products'), path: '/products' },
    { key: 'articles', label: t('common.articles'), path: '/articles' },
    { key: 'support', label: t('common.support'), path: '/support' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Printer className="w-8 h-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900">{t('header.logo')}</span>
          </Link>

          <nav className="hidden md:flex items-center">
            <Menu mode="horizontal" items={navItems.map(item => ({
              key: item.key,
              label: <Link to={item.path}>{item.label}</Link>,
            }))} />
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center">
              <Input
                placeholder={t('header.searchPlaceholder')}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onPressEnter={handleSearch}
                style={{ width: 200 }}
                prefix={<Search className="w-4 h-4" />}
              />
              <Button onClick={handleSearch} className="ml-2">{t('common.search')}</Button>
            </div>

            <LanguageSwitch />

            <Badge count={cartCount} showZero>
              <Button
                type="text"
                onClick={() => navigate('/cart')}
                className="relative"
              >
                <ShoppingCart className="w-6 h-6" />
              </Button>
            </Badge>

            {isLoggedIn ? (
              <div className="flex items-center gap-2">
                <Button type="text" onClick={() => navigate('/user')}>
                  <User className="w-5 h-5" />
                  <span className="hidden sm:inline">{t('header.profile')}</span>
                </Button>
                <Button type="text" onClick={handleLogout}>
                  <LogOut className="w-5 h-5" />
                  <span className="hidden sm:inline">{t('header.logout')}</span>
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Button type="text" onClick={() => navigate('/login')}>
                  {t('header.login')}
                </Button>
                <Button onClick={() => navigate('/register')}>
                  {t('header.register')}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
