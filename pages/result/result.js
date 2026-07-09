const app = getApp()
const util = require('../../utils/util.js')
const config = require('../../utils/config.js')

Page({
  data: {
    resultData: null,
    showUnlockModal: false,
    disclaimer: '',
    isUnlocked: false
  },

  onLoad: function (options) {
    if (options.data) {
      try {
        const resultData = JSON.parse(decodeURIComponent(options.data))
        this.setData({ resultData })
        this.setDisclaimer()
        this.checkUnlockStatus()
        wx.setNavigationBarTitle({
          title: resultData.toolName || '结果'
        })
      } catch (e) {
        console.error('解析结果数据失败:', e)
        util.showToast('数据加载失败')
      }
    }
  },

  onShow: function () {
    this.checkUnlockStatus()
  },

  onShareAppMessage: function () {
    if (app.globalData.unlockStatus.dailyShare) {
      return {
        title: '我发现了一个超好用的工具！',
        path: '/pages/index/index'
      }
    }
    return {
      title: `${this.data.resultData?.toolName || '全能AI工具助手'} - 免费实用工具箱`,
      path: '/pages/index/index',
      imageUrl: ''
    }
  },

  setDisclaimer: function () {
    const resultData = this.data.resultData
    if (!resultData) return

    let disclaimer = ''
    const type = resultData.type
    const toolId = resultData.toolId

    if (type === 'calculator') {
      disclaimer = config.COMPLIANCE.FINANCE_DISCLAIMER
    } else if (type === 'image') {
      disclaimer = config.COMPLIANCE.IMAGE_DISCLAIMER
    } else if (type === 'copy') {
      disclaimer = config.COMPLIANCE.AI_DISCLAIMER
      if (toolId === 'name-generator') {
        disclaimer = config.COMPLIANCE.NAME_DISCLAIMER
      } else if (toolId === 'horoscope') {
        disclaimer = config.COMPLIANCE.HOROSCOPE_DISCLAIMER
      }
    } else if (type === 'health') {
      disclaimer = config.COMPLIANCE.HEALTH_DISCLAIMER
    }

    this.setData({ disclaimer })
  },

  checkUnlockStatus: function () {
    const isUnlocked = app.canUnlock()
    this.setData({ isUnlocked })
  },

  onCopy: function (e) {
    const { text } = e.currentTarget.dataset
    if (text) {
      util.copyToClipboard(text)
    }
  },

  onCopyAll: function () {
    const resultData = this.data.resultData
    if (!resultData) return

    let text = ''
    const type = resultData.type
    const toolId = resultData.toolId

    if (type === 'copy') {
      if (toolId === 'video-script' || toolId === 'work-report') {
        const result = resultData.results[0]
        text = result.title + '\n\n'
        if (result.scenes) {
          result.scenes.forEach(scene => {
            text += `【${scene.time}】${scene.content}\n\n`
          })
        } else if (result.sections) {
          result.sections.forEach(section => {
            text += section.title + '\n' + section.content + '\n\n'
          })
        }
      } else if (toolId === 'wedding') {
        text = resultData.results[0]
      } else if (toolId === 'name-generator') {
        text = resultData.results.filter(r => r.isFree).map(r => r.name).join('、')
      } else if (toolId === 'horoscope') {
        const r = resultData.results
        text = `${r.zodiac}今日运势\n`
        text += `日期：${r.date}\n\n`
        text += `${r.overall}\n\n`
        text += `${r.love}\n`
        text += `${r.career}\n`
        text += `${r.wealth}\n`
        text += `${r.health}\n\n`
        text += `幸运颜色：${r.luckyColor}\n`
        text += `幸运数字：${r.luckyNumber}`
      } else if (toolId === 'acrostic-poem') {
        const r = resultData.results
        text = `${r.title}\n\n`
        r.lines.forEach(line => {
          text += line + '\n'
        })
      } else {
        text = resultData.results.join('\n\n')
      }
    } else if (type === 'efficiency' && toolId === 'word-count') {
      const d = resultData.data
      text = `字数统计结果\n`
      text += `总字符数：${d.charCount}\n`
      text += `不含空格：${d.charCountNoSpace}\n`
      text += `中文字符：${d.chineseCount}\n`
      text += `英文字符：${d.englishCount}\n`
      text += `数字字符：${d.numberCount}\n`
      text += `行数：${d.lineCount}\n`
      text += `段落数：${d.paragraphCount}`
    }

    if (text) {
      util.copyToClipboard(text)
    }
  },

  onSaveImage: function () {
    const resultData = this.data.resultData
    if (!resultData || resultData.type !== 'image') return

    if (!this.data.isUnlocked) {
      this.showUnlock()
      return
    }

    util.saveImageToPhotosAlbum(resultData.processedImage)
  },

  onExport: function () {
    if (!this.data.isUnlocked) {
      this.showUnlock()
      return
    }
    util.showToast('导出功能开发中')
  },

  showUnlock: function () {
    this.setData({ showUnlockModal: true })
  },

  hideUnlockModal: function () {
    this.setData({ showUnlockModal: false })
  },

  onShareUnlock: function () {
    if (app.globalData.unlockStatus.dailyShare) {
      util.showToast('今日已通过分享解锁')
      this.setData({ showUnlockModal: false, isUnlocked: true })
      return
    }
    this.hideUnlockModal()
    wx.showShareMenu({
      withShareTicket: true
    })
  },

  onVideoUnlock: function () {
    const rewardedVideoAd = app.globalData.adConfig.rewardedVideoAd
    if (rewardedVideoAd) {
      rewardedVideoAd.show().catch(err => {
        console.log('激励视频展示失败:', err)
        util.showToast('广告加载中，请稍后再试')
      })
    } else {
      util.showToast('广告加载中，请稍后再试')
    }
    this.setData({ showUnlockModal: false })
  },

  onMaskClick: function () {
    this.setData({ showUnlockModal: false })
  },

  stopPropagation: function () {},

  onUseAgain: function () {
    wx.navigateBack()
  },

  goHome: function () {
    wx.switchTab({
      url: '/pages/index/index'
    })
  }
})