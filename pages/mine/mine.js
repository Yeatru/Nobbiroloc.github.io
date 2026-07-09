const app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {
    usageRecords: [],
    showWelfareModal: false,
    unlockStatus: {
      dailyShare: false,
      videoCount: 0
    },
    menuItems: [
      { id: 'help', icon: '❓', name: '帮助中心', desc: '常见问题解答' },
      { id: 'feedback', icon: '💬', name: '意见反馈', desc: '告诉我们你的想法' },
      { id: 'about', icon: 'ℹ️', name: '关于我们', desc: '了解更多信息' }
    ]
  },

  onLoad: function (options) {
    this.loadData()
  },

  onShow: function () {
    this.loadData()
  },

  loadData: function () {
    this.setData({
      usageRecords: app.globalData.usageRecords.slice(0, 10),
      unlockStatus: app.globalData.unlockStatus
    })
  },

  onRecordClick: function (e) {
    const { toolId, subToolId } = e.currentTarget.dataset
    util.navigateTo(`/pages/tool/tool?categoryId=${toolId}&toolId=${subToolId}`)
  },

  onMenuClick: function (e) {
    const { menuId } = e.currentTarget.dataset
    switch (menuId) {
      case 'help':
        util.showToast('帮助中心开发中')
        break
      case 'feedback':
        util.showToast('意见反馈开发中')
        break
      case 'about':
        this.showAbout()
        break
    }
  },

  showAbout: function () {
    util.showModal('关于我们', '全能AI工具助手 v1.0.0\n\n一款集AI文案生成、图片处理、装修计算、财务计算于一体的实用工具箱。\n\n如有问题请联系客服。', {
      showCancel: false,
      confirmText: '知道了'
    })
  },

  showWelfare: function () {
    this.setData({ showWelfareModal: true })
  },

  hideWelfareModal: function () {
    this.setData({ showWelfareModal: false })
  },

  onWelfareMaskClick: function () {
    this.setData({ showWelfareModal: false })
  },

  stopPropagation: function () {},

  formatTime: function (timeStr) {
    if (!timeStr) return ''
    const date = new Date(timeStr)
    const now = new Date()
    const diff = now - date

    if (diff < 60000) return '刚刚'
    if (diff < 3600000) return Math.floor(diff / 60000) + '分钟前'
    if (diff < 86400000) return Math.floor(diff / 3600000) + '小时前'
    if (diff < 604800000) return Math.floor(diff / 86400000) + '天前'

    return `${date.getMonth() + 1}/${date.getDate()}`
  },

  onShareAppMessage: function () {
    return {
      title: '全能AI工具助手 - 免费实用工具箱',
      path: '/pages/index/index',
      imageUrl: ''
    }
  }
})