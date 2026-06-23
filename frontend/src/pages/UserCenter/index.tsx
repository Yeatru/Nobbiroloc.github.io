import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Row, Col, Card, Button, Typography, Avatar } from 'antd'
import { User, Package, Heart, Settings, ShoppingCart, LogOut } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { getProfile } from '@/api/users'
import type { RootState } from '@/store'
import type { User as UserType } from '@/types'

const { Title } = Typography

const UserCenter = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn)
  const [user, setUser] = useState<UserType | null>(null)

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login')
      return
    }

    const fetchProfile = async () => {
      try {
        const data = await getProfile()
        setUser(data)
      } catch (error) {
        console.error('Failed to fetch profile:', error)
      }
    }
    fetchProfile()
  }, [isLoggedIn, navigate])

  const menuItems = [
    {
      icon: Package,
      title: t('user.orders'),
      description: '查看我的订单',
      path: '/user/orders',
    },
    {
      icon: Heart,
      title: t('user.favorites'),
      description: '收藏的商品',
      path: '/user/favorites',
    },
    {
      icon: ShoppingCart,
      title: t('header.cart'),
      description: '购物车',
      path: '/cart',
    },
    {
      icon: Settings,
      title: t('user.settings'),
      description: '账户设置',
      path: '/user/settings',
    },
  ]

  if (!isLoggedIn) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Title level={1} className="mb-8">{t('user.profile')}</Title>

        <Card className="mb-8">
          <div className="flex items-center gap-6">
            <Avatar size={120} icon={<User className="w-10 h-10" />} />
            <div>
              <Title level={2}>{user?.username || 'User'}</Title>
              <p className="text-gray-500">{user?.email}</p>
              <p className="text-gray-500">{user?.phone}</p>
            </div>
            <div className="ml-auto">
              <Button icon={<LogOut className="w-4 h-4" />} onClick={() => navigate('/login')}>
                {t('header.logout')}
              </Button>
            </div>
          </div>
        </Card>

        <Row gutter={[16, 16]}>
          {menuItems.map((item, index) => (
            <Col key={index} xs={24} sm={12} md={6}>
              <Card
                hoverable
                className="cursor-pointer"
                onClick={() => navigate(item.path)}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default UserCenter
