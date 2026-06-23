import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Row, Col, Button, Typography, Image, Tag, Descriptions } from 'antd'
import { ShoppingCart, ArrowLeft } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { getProductById } from '@/api/products'
import { addToCart } from '@/store/slices/cart'
import { formatPrice } from '@/utils/helpers'
import type { Product } from '@/types'

const { Title, Paragraph } = Typography

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true)
      try {
        if (id) {
          const data = await getProductById(parseInt(id))
          setProduct(data)
        }
      } catch (error) {
        console.error('Failed to fetch product:', error)
      }
      setLoading(false)
    }
    fetchProduct()
  }, [id])

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({
        product_id: product.id,
        name: product.name,
        price: product.price,
        quantity,
        image: product.images[0] || '',
      }))
    }
  }

  const handleBuyNow = () => {
    handleAddToCart()
    navigate('/cart')
  }

  const locale = {
    'zh': 'zh-CN',
    'en': 'en-US',
    'fr': 'fr-FR',
    'ru': 'ru-RU',
    'es': 'es-ES',
  }[i18n.language] || 'zh-CN'

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Tag color="processing">Loading...</Tag>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">{t('product.name')}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button onClick={() => navigate('/products')} className="mb-8">
          <ArrowLeft className="w-4 h-4 mr-1" />
          {t('common.search')}
        </Button>

        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Image.PreviewGroup>
              <Image
                src={product.images[0] || 'https://via.placeholder.com/600x600'}
                alt={product.name}
                className="w-full h-auto"
              />
              <div className="flex gap-2 mt-4 overflow-x-auto">
                {product.images.map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    width={100}
                    height={100}
                    className="cursor-pointer"
                  />
                ))}
              </div>
            </Image.PreviewGroup>
          </Col>

          <Col xs={24} md={12}>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <Tag color="blue">{product.sub_category}</Tag>
                  <Title level={2} className="mt-2">{product.name}</Title>
                </div>
                <Tag color={product.stock > 0 ? 'green' : 'red'}>
                  {product.stock > 0 ? `${t('product.stock')}: ${product.stock}` : 'Out of stock'}
                </Tag>
              </div>

              <Paragraph className="text-gray-600 mb-6">{product.description}</Paragraph>

              <div className="text-3xl font-bold text-primary-600 mb-6">
                {formatPrice(product.price, locale)}
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-gray-600">{t('cart.quantity')}:</span>
                <div className="flex items-center border rounded">
                  <Button
                    type="text"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button
                    type="text"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  type="primary"
                  size="large"
                  onClick={handleBuyNow}
                  className="flex-1"
                >
                  {t('product.buyNow')}
                </Button>
                <Button
                  size="large"
                  onClick={handleAddToCart}
                  className="flex-1"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {t('product.addCart')}
                </Button>
              </div>
            </div>
          </Col>
        </Row>

        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <Title level={3} className="mb-6">{t('product.specs')}</Title>
          <Descriptions bordered column={2}>
            {Object.entries(product.specs).map(([key, value]) => (
              <Descriptions.Item key={key} label={key}>
                {String(value)}
              </Descriptions.Item>
            ))}
          </Descriptions>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <Title level={3} className="mb-6">{t('product.features')}</Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Tag color="green">✓</Tag>
                  <span>高质量打印输出</span>
                </li>
                <li className="flex items-center gap-2">
                  <Tag color="green">✓</Tag>
                  <span>高精度定位系统</span>
                </li>
                <li className="flex items-center gap-2">
                  <Tag color="green">✓</Tag>
                  <span>智能温控技术</span>
                </li>
              </ul>
            </Col>
            <Col xs={24} md={12}>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Tag color="green">✓</Tag>
                  <span>静音运行设计</span>
                </li>
                <li className="flex items-center gap-2">
                  <Tag color="green">✓</Tag>
                  <span>远程监控功能</span>
                </li>
                <li className="flex items-center gap-2">
                  <Tag color="green">✓</Tag>
                  <span>一年质保服务</span>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
