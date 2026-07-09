const app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {
    banners: [],
    hotTools: [],
    toolCategories: [],
    showWelfareModal: false,
    searchKeyword: '',
    interstitialCount: 0
  },

  onLoad: function (options) {
    this.initData()
  },

  onShow: function () {
    this.loadHotTools()
    this.maybeShowInterstitial()
  },

  onPullDownRefresh: function () {
    this.initData()
    wx.stopPullDownRefresh()
  },

  onShareAppMessage: function () {
    return {
      title: '全能AI工具助手 - 免费实用工具箱',
      path: '/pages/index/index',
      imageUrl: ''
    }
  },

  initData: function () {
    const toolCategories = app.globalData.toolCategories
    this.setData({
      toolCategories: toolCategories
    })
    this.loadHotTools()
  },

  loadHotTools: function () {
    const hotTools = [
      { id: 'id-bg', name: '证件照换底色', icon: 'id-bg', color: '#E74C3C', categoryId: 'ai-image', categoryName: 'AI图片处理' },
      { id: 'remove-watermark', name: '图片去水印', icon: 'watermark', color: '#E74C3C', categoryId: 'ai-image', categoryName: 'AI图片处理' },
      { id: 'moments', name: '朋友圈文案', icon: 'moments', color: '#4A90D9', categoryId: 'ai-copy', categoryName: 'AI文案生成' },
      { id: 'name-generator', name: '起名工具', icon: 'name', color: '#4A90D9', categoryId: 'ai-copy', categoryName: 'AI文案生成' },
      { id: 'mortgage', name: '房贷计算', icon: 'mortgage', color: '#F39C12', categoryId: 'finance-calc', categoryName: '财务计算器' },
      { id: 'tax', name: '个税计算', icon: 'tax', color: '#F39C12', categoryId: 'finance-calc', categoryName: '财务计算器' },
      { id: 'tile', name: '瓷砖用量', icon: 'tile', color: '#27AE60', categoryId: 'decor-calc', categoryName: '装修计算器' },
      { id: 'paint', name: '乳胶漆用量', icon: 'paint', color: '#27AE60', categoryId: 'decor-calc', categoryName: '装修计算器' }
    ]
    this.setData({ hotTools })
  },

  onToolClick: function (e) {
    const { toolId, toolName, categoryId, categoryName } = e.currentTarget.dataset
    this.saveUsageRecord(categoryId, categoryName, toolId, toolName)
    util.navigateTo(`/pages/tool/tool?categoryId=${categoryId}&toolId=${toolId}`)
  },

  onCategoryClick: function (e) {
    const { categoryId } = e.currentTarget.dataset
    util.navigateTo(`/pages/tool/tool?categoryId=${categoryId}`)
  },

  saveUsageRecord: function (categoryId, categoryName, toolId, toolName) {
    app.saveUsageRecord({
      toolId: categoryId,
      toolName: categoryName,
      subToolId: toolId,
      subToolName: toolName
    })
  },

  onSearchInput: function (e) {
    this.setData({
      searchKeyword: e.detail.value
    })
  },

  onSearch: function () {
    const keyword = this.data.searchKeyword.trim()
    if (!keyword) {
      util.showToast('请输入搜索关键词')
      return
    }

    let found = null
    const categories = this.data.toolCategories

    for (let i = 0; i < categories.length; i++) {
      const category = categories[i]
      for (let j = 0; j < category.children.length; j++) {
        const tool = category.children[j]
        if (tool.name.includes(keyword) || category.name.includes(keyword)) {
          found = {
            categoryId: category.id,
            categoryName: category.name,
            toolId: tool.id,
            toolName: tool.name
          }
          break
        }
      }
      if (found) break
    }

    if (found) {
      this.saveUsageRecord(found.categoryId, found.categoryName, found.toolId, found.toolName)
      util.navigateTo(`/pages/tool/tool?categoryId=${found.categoryId}&toolId=${found.toolId}`)
    } else {
      util.showToast('未找到相关工具')
    }
  },

  maybeShowInterstitial: function () {
    const adConfig = app.globalData.adConfig
    if (!adConfig.interstitialAd) return

    this.data.interstitialCount++
    if (this.data.interstitialCount % 3 === 0) {
      const now = Date.now()
      if (now - adConfig.lastInterstitialTime > 60000) {
        adConfig.interstitialAd.show().catch(err => {
          console.log('插屏广告展示失败:', err)
        })
        adConfig.lastInterstitialTime = now
      }
    }
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

  stopPropagation: function () {}
})