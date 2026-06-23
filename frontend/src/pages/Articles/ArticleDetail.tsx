import { useParams, useNavigate } from 'react-router-dom'
import { Button, Typography, Tag } from 'antd'
import { ArrowLeft, Eye, Calendar, User } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { mockArticles } from '@/data'
import { formatDate } from '@/utils/helpers'

const { Title, Paragraph } = Typography

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()

  const currentLang = i18n.language

  const article = mockArticles.find((a) => a.id === id) || null

  const getLocalizedText = (text: string | Record<string, string> | undefined) => {
    if (!text) return ''
    return typeof text === 'string' ? text : text[currentLang] || text.en
  }

  const locale = {
    'zh': 'zh-CN',
    'en': 'en-US',
    'fr': 'fr-FR',
    'ru': 'ru-RU',
    'es': 'es-ES',
  }[currentLang] || 'zh-CN'

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Article not found</p>
      </div>
    )
  }

  const title = getLocalizedText(article.title)
  const category = getLocalizedText(article.category)
  const author = getLocalizedText(article.author)
  const content = getLocalizedText(article.content)

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button onClick={() => navigate('/articles')} className="mb-8">
          <ArrowLeft className="w-4 h-4 mr-1" />
          {t('common.search')}
        </Button>

        <article className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex items-center gap-4 mb-4">
            <Tag color="purple">{category}</Tag>
            <span className="flex items-center gap-1 text-gray-500 text-sm">
              <Calendar className="w-4 h-4" />
              {formatDate(article.publish_time || article.createdAt || '', locale)}
            </span>
          </div>

          <Title level={1} className="mb-6">{title}</Title>

          <div className="flex items-center gap-6 mb-8 text-gray-500">
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {author}
            </span>
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {article.views} {t('article.views')}
            </span>
          </div>

          <div className="prose prose-lg">
            <Paragraph className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </article>
      </div>
    </div>
  )
}

export default ArticleDetail
