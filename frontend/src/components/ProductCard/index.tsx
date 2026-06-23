import { Card, Button, Tag } from 'antd'
import { ShoppingCart, Eye } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '@/store/slices/cart'
import { useTranslation } from '@/hooks/useTranslation'
import { formatPrice } from '@/utils/helpers'
import type { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const currentLang = i18n.language

  const getName = () => {
    return typeof product.name === 'string' ? product.name : (product.name as Record<string, string>)[currentLang] || product.name.en
  }

  const getDescription = () => {
    return typeof product.description === 'string' ? product.description : (product.description as Record<string, string>)[currentLang] || product.description.en
  }

  const handleAddToCart = () => {
    dispatch(addToCart({
      product_id: typeof product.id === 'number' ? product.id : parseInt(product.id),
      name: getName(),
      price: product.price,
      quantity: 1,
      image: product.images[0] || '',
    }))
  }

  const handleViewDetail = () => {
    navigate(`/products/${product.id}`)
  }

  const locale = {
    'zh': 'zh-CN',
    'en': 'en-US',
    'fr': 'fr-FR',
    'ru': 'ru-RU',
    'es': 'es-ES',
  }[currentLang] || 'zh-CN'

  return (
    <Card
      hoverable
      cover={
        <div className="aspect-square bg-gray-100 flex items-center justify-center">
          <img
            alt={getName()}
            src={product.images[0] || 'https://via.placeholder.com/300x300'}
            className="w-full h-full object-contain p-4"
            onError={(e) => {
              ;(e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x300'
            }}
          />
        </div>
      }
      actions={[
        <Button onClick={handleViewDetail} key="view">
          <Eye className="w-4 h-4 mr-1" />
          {t('product.specs')}
        </Button>,
        <Button type="primary" onClick={handleAddToCart} key="cart">
          <ShoppingCart className="w-4 h-4 mr-1" />
          {t('product.addCart')}
        </Button>,
      ]}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="text-lg font-semibold text-gray-900 truncate flex-1">
          {getName()}
        </h3>
        <Tag color="blue">{product.subCategory || product.sub_category}</Tag>
      </div>
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
        {getDescription()}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-primary-600">
          {formatPrice(product.price, locale)}
        </span>
        <span className={`text-sm ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
          {product.stock > 0 ? `${t('product.stock')}: ${product.stock}` : `${t('product.stock')}: 0`}
        </span>
      </div>
    </Card>
  )
}

export default ProductCard
