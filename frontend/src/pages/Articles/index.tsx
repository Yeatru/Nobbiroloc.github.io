import { useState, useEffect } from 'react'
import { Row, Col, Select, Typography } from 'antd'
import ArticleCard from '@/components/ArticleCard'
import { useTranslation } from '@/hooks/useTranslation'
import { getArticles } from '@/api/articles'
import type { Article } from '@/types'

const { Title } = Typography

const Articles = () => {
  const { t } = useTranslation()
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState('')

  const categories = [
    { value: '', label: t('article.category') },
    { value: 'industry', label: '行业动态' },
    { value: 'tech', label: '技术教程' },
    { value: 'case', label: '应用案例' },
    { value: 'new', label: '新品发布' },
  ]

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true)
      try {
        const data = await getArticles(category || undefined)
        setArticles(data)
      } catch (error) {
        console.error('Failed to fetch articles:', error)
      }
      setLoading(false)
    }
    fetchArticles()
  }, [category])

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <Title level={1}>{t('article.title')}</Title>
          <Select
            placeholder={t('article.category')}
            value={category}
            onChange={setCategory}
            style={{ width: 160 }}
            options={categories}
          />
        </div>

        {loading ? (
          <div className="text-center py-12">
            <Typography.Text>Loading...</Typography.Text>
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-12">
            <Typography.Text className="text-gray-500">No articles found</Typography.Text>
          </div>
        ) : (
          <Row gutter={[16, 16]}>
            {articles.map((article) => (
              <Col key={article.id} xs={24} sm={12} md={8}>
                <ArticleCard article={article} />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  )
}

export default Articles
