import { useState, useMemo } from 'react'
import { Row, Col, Select, Input, Typography } from 'antd'
import ProductCard from '@/components/ProductCard'
import { useTranslation } from '@/hooks/useTranslation'
import { mockProducts, productSubCategories } from '@/data'
import type { Product } from '@/types'

const { Title } = Typography
const { Search } = Input

const Products = () => {
  const { t, i18n } = useTranslation()
  const [category, setCategory] = useState('')
  const [subCategory, setSubCategory] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const categories = [
    { value: 'printer', label: t('product.category') === 'Category' ? '3D打印设备' : t('product.category') },
    { value: 'material', label: '打印耗材' },
  ]

  const currentLang = i18n.language

  const subCategories = productSubCategories as Record<string, { id: string; name: { [key: string]: string } }[]>

  const filteredProducts = useMemo(() => {
    let result: Product[] = [...mockProducts]

    if (category) {
      result = result.filter((p) => p.category === category)
    }

    if (subCategory) {
      result = result.filter((p) => p.subCategory === subCategory)
    }

    if (searchValue) {
      const searchLower = searchValue.toLowerCase()
      result = result.filter((p) => {
        const name = typeof p.name === 'string' ? p.name : (p.name as Record<string, string>)[currentLang]
        const desc = typeof p.description === 'string' ? p.description : (p.description as Record<string, string>)[currentLang]
        return (name?.toLowerCase().includes(searchLower) || desc?.toLowerCase().includes(searchLower))
      })
    }

    return result
  }, [category, subCategory, searchValue, currentLang])

  const getSubCategoryOptions = () => {
    if (!category) return []
    return (subCategories[category] || []).map((item) => ({
      value: item.id,
      label: item.name[currentLang] || item.name.en,
    }))
  }

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
                  options={getSubCategoryOptions()}
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

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">{t('product.name')}</p>
          </div>
        ) : (
          <Row gutter={[16, 16]}>
            {filteredProducts.map((product) => (
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
