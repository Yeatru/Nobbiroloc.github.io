const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${year}-${formatNumber(month)}-${formatNumber(day)}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

const showToast = (title, icon = 'none', duration = 2000) => {
  wx.showToast({
    title: title,
    icon: icon,
    duration: duration
  })
}

const showLoading = (title = '加载中...') => {
  wx.showLoading({
    title: title,
    mask: true
  })
}

const hideLoading = () => {
  wx.hideLoading()
}

const showModal = (title, content, options = {}) => {
  return new Promise((resolve) => {
    wx.showModal({
      title: title,
      content: content,
      confirmColor: '#4A90D9',
      ...options,
      success(res) {
        resolve(res)
      },
      fail() {
        resolve({ confirm: false, cancel: true })
      }
    })
  })
}

const navigateTo = (url) => {
  wx.navigateTo({
    url: url,
    fail(err) {
      console.error('页面跳转失败:', err)
    }
  })
}

const redirectTo = (url) => {
  wx.redirectTo({
    url: url,
    fail(err) {
      console.error('页面重定向失败:', err)
    }
  })
}

const switchTab = (url) => {
  wx.switchTab({
    url: url,
    fail(err) {
      console.error('Tab切换失败:', err)
    }
  })
}

const setStorageSync = (key, value) => {
  try {
    wx.setStorageSync(key, value)
    return true
  } catch (e) {
    console.error('存储数据失败:', e)
    return false
  }
}

const getStorageSync = (key, defaultValue = null) => {
  try {
    const value = wx.getStorageSync(key)
    return value !== '' ? value : defaultValue
  } catch (e) {
    console.error('读取数据失败:', e)
    return defaultValue
  }
}

const removeStorageSync = (key) => {
  try {
    wx.removeStorageSync(key)
    return true
  } catch (e) {
    console.error('删除数据失败:', e)
    return false
  }
}

const copyToClipboard = (text) => {
  wx.setClipboardData({
    data: text,
    success() {
      showToast('复制成功', 'success')
    },
    fail() {
      showToast('复制失败')
    }
  })
}

const saveImageToPhotosAlbum = (filePath) => {
  return new Promise((resolve, reject) => {
    wx.saveImageToPhotosAlbum({
      filePath: filePath,
      success(res) {
        showToast('保存成功', 'success')
        resolve(res)
      },
      fail(err) {
        if (err.errMsg.includes('auth deny')) {
          showModal('提示', '需要您授权保存图片到相册，请前往设置开启权限', {
            confirmText: '去设置',
            success(res) {
              if (res.confirm) {
                wx.openSetting()
              }
            }
          })
        } else {
          showToast('保存失败')
        }
        reject(err)
      }
    })
  })
}

const getRandomId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

const throttle = (func, limit) => {
  let inThrottle
  return function() {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

const generateRandomString = (length = 8) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

module.exports = {
  formatTime,
  formatDate,
  formatNumber,
  showToast,
  showLoading,
  hideLoading,
  showModal,
  navigateTo,
  redirectTo,
  switchTab,
  setStorageSync,
  getStorageSync,
  removeStorageSync,
  copyToClipboard,
  saveImageToPhotosAlbum,
  getRandomId,
  debounce,
  throttle,
  formatFileSize,
  generateRandomString
}