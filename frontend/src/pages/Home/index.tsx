import { useState, useEffect } from 'react'
import { Carousel, Row, Col, Button, Typography } from 'antd'
import { ArrowRight, Printer, Layers, Zap, Award } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import ProductCard from '@/components/ProductCard'
import ArticleCard from '@/components/ArticleCard'
import { useTranslation } from '@/hooks/useTranslation'
import { getProducts } from '@/api/products'
import { getArticles } from '@/api/articles'
import type { Product, Article } from '@/types'

const { Title, Paragraph } = Typography

const Home = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [products, setProducts] = useState<Product[]>([])
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productData, articleData] = await Promise.all([
          getProducts(),
          getArticles(),
        ])
        setProducts(productData.slice(0, 4))
        setArticles(articleData.slice(0, 3))
      } catch (error) {
        console.error('Failed to fetch data:', error)
      }
    }
    fetchData()
  }, [])

  const features = [
    { icon: Printer, title: t('common.products'), description: '高品质3D打印设备' },
    { icon: Layers, title: t('product.specs'), description: '丰富的耗材选择' },
    { icon: Zap, title: '快速交付', description: '全球快速配送服务' },
    { icon: Award, title: '品质保障', description: '专业售后服务支持' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Carousel autoplay className="mb-12">
        <div className="relative h-96 bg-gradient-to-r from-primary-600 to-blue-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white">
              <Title level={1} className="text-4xl md:text-5xl font-bold mb-4">
                {t('header.logo')}
              </Title>
              <Paragraph className="text-xl mb-6">
                {t('common.contact')}
              </Paragraph>
              <Button size="large" onClick={() => navigate('/products')}>
                {t('common.products')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
        <div className="relative h-96 bg-gradient-to-r from-blue-500 to-cyan-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white">
              <Title level={1} className="text-4xl md:text-5xl font-bold mb-4">
                {t('product.specs')}
              </Title>
              <Paragraph className="text-xl mb-6">
                专业级3D打印技术参数，满足各种需求
              </Paragraph>
              <Button size="large" onClick={() => navigate('/products')}>
                {t('common.products')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
        <div className="relative h-96 bg-gradient-to-r from-cyan-400 to-teal-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white">
              <Title level={1} className="text-4xl md:text-5xl font-bold mb-4">
                {t('article.title')}
              </Title>
              <Paragraph className="text-xl mb-6">
                获取最新3D打印行业资讯和技术教程
              </Paragraph>
              <Button size="large" onClick={() => navigate('/articles')}>
                {t('common.articles')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </Carousel>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Row gutter={16}>
          {features.map((feature, index) => (
            <Col key={index} xs={24} sm={12} md={6}>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center justify-between mb-8">
          <Title level={2}>{t('common.products')}</Title>
          <Button onClick={() => navigate('/products')}>
            {t('common.search')}
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
        <Row gutter={[16, 16]}>
          {products.map((product) => (
            <Col key={product.id} xs={24} sm={12} md={6}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center justify-between mb-8">
          <Title level={2}>{t('article.title')}</Title>
          <Button onClick={() => navigate('/articles')}>
            {t('article.readMore')}
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
        <Row gutter={[16, 16]}>
          {articles.map((article) => (
            <Col key={article.id} xs={24} sm={12} md={8}>
              <ArticleCard article={article} />
            </Col>
          ))}
        </Row>
      </section>
    </div>
  )
}

export default Home
