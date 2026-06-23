import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Typography, Tag } from 'antd'
import { ArrowLeft, Eye, Calendar, User } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { getArticleById } from '@/api/articles'
import { formatDate } from '@/utils/helpers'
import type { Article } from '@/types'

const { Title, Paragraph } = Typography

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true)
      try {
        if (id) {
          const data = await getArticleById(parseInt(id))
          setArticle(data)
        }
      } catch (error) {
        console.error('Failed to fetch article:', error)
      }
      setLoading(false)
    }
    fetchArticle()
  }, [id])

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

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">{t('article.title')}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button onClick={() => navigate('/articles')} className="mb-8">
          <ArrowLeft className="w-4 h-4 mr-1" />
          {t('common.search')}
        </Button>

        <article className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex items-center gap-4 mb-4">
            <Tag color="purple">{article.category}</Tag>
            <span className="flex items-center gap-1 text-gray-500 text-sm">
              <Calendar className="w-4 h-4" />
              {formatDate(article.publish_time, locale)}
            </span>
          </div>

          <Title level={1} className="mb-6">{article.title}</Title>

          <div className="flex items-center gap-6 mb-8 text-gray-500">
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {article.author}
            </span>
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {article.views} {t('article.views')}
            </span>
          </div>

          <div className="prose prose-lg">
            <Paragraph className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {article.content}
            </Paragraph>
          </div>
        </article>
      </div>
    </div>
  )
}

export default ArticleDetail
