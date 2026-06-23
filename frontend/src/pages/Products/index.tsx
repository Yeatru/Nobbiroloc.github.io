import { useState, useEffect } from 'react'
import { Row, Col, Select, Input, Typography, Tag } from 'antd'
import ProductCard from '@/components/ProductCard'
import { useTranslation } from '@/hooks/useTranslation'
import { getProducts } from '@/api/products'
import type { Product } from '@/types'

const { Title } = Typography
const { Search } = Input

const Products = () => {
  const { t } = useTranslation()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState('')
  const [subCategory, setSubCategory] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const categories = [
    { value: 'device', label: '3D打印设备' },
    { value: 'material', label: '打印耗材' },
  ]

  const subCategories: Record<string, { value: string; label: string }[]> = {
    device: [
      { value: 'fdm', label: 'FDM桌面级' },
      { value: 'sla', label: 'SLA光固化' },
      { value: 'sls', label: 'SLS激光烧结' },
      { value: 'industrial', label: '工业级' },
    ],
    material: [
      { value: 'pla', label: 'PLA耗材' },
      { value: 'abs', label: 'ABS耗材' },
      { value: 'petg', label: 'PETG耗材' },
      { value: 'resin', label: '光敏树脂' },
      { value: 'metal', label: '金属粉末' },
    ],
  }

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const data = await getProducts({
          category,
          sub_category: subCategory,
        })
        let filtered = data
        if (searchValue) {
          filtered = data.filter(
            (p) =>
              p.name.toLowerCase().includes(searchValue.toLowerCase()) ||
              p.description.toLowerCase().includes(searchValue.toLowerCase())
          )
        }
        setProducts(filtered)
      } catch (error) {
        console.error('Failed to fetch products:', error)
      }
      setLoading(false)
    }
    fetchProducts()
  }, [category, subCategory, searchValue])

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Title level={1} className="mb-8">{t('common.products')}</Title>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex flex-wrap gap-4">
              <Select
                placeholder={t('product.category')}
                value={category}
                onChange={setCategory}
                style={{ width: 160 }}
                options={categories}
                allowClear
              />
              {category && (
                <Select
                  placeholder={t('product.subCategory')}
                  value={subCategory}
                  onChange={setSubCategory}
                  style={{ width: 160 }}
                  options={subCategories[category] || []}
                  allowClear
                />
              )}
            </div>
            <Search
              placeholder={t('header.searchPlaceholder')}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              style={{ width: 300 }}
            />
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <Tag color="processing">Loading...</Tag>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">{t('product.name')}</p>
          </div>
        ) : (
          <Row gutter={[16, 16]}>
            {products.map((product) => (
              <Col key={product.id} xs={24} sm={12} md={6}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  )
}

export default Products
