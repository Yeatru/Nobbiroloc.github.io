import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Table, Button, Typography, Tag } from 'antd'
import { Package, ArrowLeft } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { getOrders } from '@/api/orders'
import { formatPrice, formatDate, getStatusText, getStatusColor } from '@/utils/helpers'
import type { RootState } from '@/store'
import type { Order } from '@/types'

const { Title } = Typography

const OrderList = () => {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn)
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login')
      return
    }

    const fetchOrders = async () => {
      setLoading(true)
      try {
        const data = await getOrders()
        setOrders(data)
      } catch (error) {
        console.error('Failed to fetch orders:', error)
      }
      setLoading(false)
    }
    fetchOrders()
  }, [isLoggedIn, navigate])

  const locale = {
    'zh': 'zh-CN',
    'en': 'en-US',
    'fr': 'fr-FR',
    'ru': 'ru-RU',
    'es': 'es-ES',
  }[i18n.language] || 'zh-CN'

  const columns = [
    {
      title: t('order.orderNo'),
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: t('order.createTime'),
      dataIndex: 'created_at',
      key: 'created_at',
      render: (text: string) => formatDate(text, locale),
    },
    {
      title: t('order.status'),
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={getStatusColor(status)}>
          {getStatusText(status, t)}
        </Tag>
      ),
    },
    {
      title: t('order.totalPrice'),
      dataIndex: 'total_price',
      key: 'total_price',
      render: (price: number) => formatPrice(price, locale),
    },
    {
      title: t('common.search'),
      key: 'action',
      render: (_: unknown, record: Order) => (
        <Button onClick={() => navigate(`/user/orders/${record.id}`)}>
          {t('order.detail')}
        </Button>
      ),
    },
  ]

  if (!isLoggedIn) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button onClick={() => navigate('/user')} className="mb-8">
          <ArrowLeft className="w-4 h-4 mr-1" />
          {t('common.search')}
        </Button>

        <Title level={1} className="mb-8">{t('order.title')}</Title>

        {loading ? (
          <div className="text-center py-12">
            <Tag color="processing">Loading...</Tag>
          </div>
        ) : orders.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">{t('user.orders')}</p>
          </div>
        ) : (
          <Table
            dataSource={orders}
            columns={columns}
            rowKey="id"
            pagination={{ pageSize: 10 }}
          />
        )}
      </div>
    </div>
  )
}

export default OrderList
