import { useSelector, useDispatch } from 'react-redux'
import { Button, Card, Typography, Empty } from 'antd'
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { updateQuantity, removeFromCart, clearCart } from '@/store/slices/cart'
import { formatPrice } from '@/utils/helpers'
import type { RootState } from '@/store'

const { Title } = Typography

const Cart = () => {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootState) => state.cart.items)

  const locale = {
    'zh': 'zh-CN',
    'en': 'en-US',
    'fr': 'fr-FR',
    'ru': 'ru-RU',
    'es': 'es-ES',
  }[i18n.language] || 'zh-CN'

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleCheckout = () => {
    alert('Checkout functionality will be implemented')
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <Empty
              description={t('cart.empty')}
              image={<ShoppingCart className="w-16 h-16" />}
            />
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Title level={1} className="mb-8">{t('cart.title')}</Title>

        <Card className="mb-8">
          <div className="flex justify-end mb-4">
            <Button
              type="text"
              danger
              onClick={() => dispatch(clearCart())}
            >
              <Trash2 className="w-4 h-4 mr-1" />
              {t('cart.empty')}
            </Button>
          </div>

          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.product_id}
                className="flex items-center gap-4 p-4 border-b last:border-b-0"
              >
                <img
                  src={item.image || 'https://via.placeholder.com/100x100'}
                  alt={item.name}
                  className="w-20 h-20 object-contain bg-gray-100"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-primary-600 font-bold">
                    {formatPrice(item.price, locale)}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded">
                    <Button
                      type="text"
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            productId: item.product_id,
                            quantity: item.quantity - 1,
                          })
                        )
                      }
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-12 text-center">{item.quantity}</span>
                    <Button
                      type="text"
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            productId: item.product_id,
                            quantity: item.quantity + 1,
                          })
                        )
                      }
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">
                      {formatPrice(item.price * item.quantity, locale)}
                    </p>
                    <Button
                      type="text"
                      danger
                      onClick={() => dispatch(removeFromCart(item.product_id))}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="float-right w-80">
          <h3 className="text-lg font-semibold mb-4">{t('cart.total')}</h3>
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">{t('cart.total')}</span>
            <span className="text-2xl font-bold text-primary-600">
              {formatPrice(total, locale)}
            </span>
          </div>
          <Button
            type="primary"
            size="large"
            className="w-full"
            onClick={handleCheckout}
          >
            {t('cart.checkout')}
          </Button>
        </Card>
      </div>
    </div>
  )
}

export default Cart
