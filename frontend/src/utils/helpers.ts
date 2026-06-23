export const formatPrice = (price: number, locale: string = 'zh-CN'): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}

export const formatDate = (dateString: string, locale: string = 'zh-CN'): string => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export const formatDateTime = (dateString: string, locale: string = 'zh-CN'): string => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

export const getStatusText = (status: string, t: (key: string) => string): string => {
  const statusMap: Record<string, string> = {
    pending: t('order.pending'),
    paid: t('order.paid'),
    shipped: t('order.shipped'),
    completed: t('order.completed'),
    cancelled: t('order.cancelled'),
  }
  return statusMap[status] || status
}

export const getStatusColor = (status: string): string => {
  const colorMap: Record<string, string> = {
    pending: 'warning',
    paid: 'info',
    shipped: 'primary',
    completed: 'success',
    cancelled: 'error',
  }
  return colorMap[status] || 'default'
}
