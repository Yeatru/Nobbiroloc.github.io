import { Card, Tag } from 'antd'
import { Eye, Calendar, User } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from '@/hooks/useTranslation'
import { formatDate, truncateText } from '@/utils/helpers'
import type { Article } from '@/types'

interface ArticleCardProps {
  article: Article
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  const { i18n } = useTranslation()
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/articles/${article.id}`)
  }

  const locale = {
    'zh': 'zh-CN',
    'en': 'en-US',
    'fr': 'fr-FR',
    'ru': 'ru-RU',
    'es': 'es-ES',
  }[i18n.language] || 'zh-CN'

  return (
    <Card hoverable onClick={handleClick} className="cursor-pointer">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="text-lg font-semibold text-gray-900 hover:text-primary-600 transition-colors">
          {article.title}
        </h3>
        <Tag color="purple">{article.category}</Tag>
      </div>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {truncateText(article.content, 100)}
      </p>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <User className="w-4 h-4" />
            {article.author}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {formatDate(article.publish_time, locale)}
          </span>
        </div>
        <span className="flex items-center gap-1">
          <Eye className="w-4 h-4" />
          {article.views}
        </span>
      </div>
    </Card>
  )
}

export default ArticleCard
