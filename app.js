App({
  onLaunch: function () {
    this.initUserData()
    this.initAdConfig()
  },

  onShow: function () {
    this.updateDailyUnlockStatus()
  },

  onHide: function () {
  },

  globalData: {
    userInfo: null,
    unlockStatus: {
      dailyShare: false,
      videoCount: 0,
      lastUnlockDate: ''
    },
    adConfig: {
      bannerAd: null,
      interstitialAd: null,
      rewardedVideoAd: null,
      showInterstitialCount: 0,
      lastInterstitialTime: 0
    },
    usageRecords: [],
    toolCategories: [
      {
        id: 'ai-copy',
        name: 'AI文案生成',
        icon: 'copy',
        color: '#4A90D9',
        desc: '朋友圈文案、短视频脚本、婚礼致辞、起名工具、星座运势、藏头诗',
        children: [
          { id: 'moments', name: '朋友圈文案', icon: 'moments' },
          { id: 'video-script', name: '短视频脚本', icon: 'video' },
          { id: 'wedding', name: '婚礼致辞', icon: 'wedding' },
          { id: 'work-report', name: '职场汇报', icon: 'report' },
          { id: 'name-generator', name: '起名工具', icon: 'name' },
          { id: 'horoscope', name: '星座运势', icon: 'horoscope' },
          { id: 'acrostic-poem', name: '藏头诗生成', icon: 'poem' }
        ]
      },
      {
        id: 'ai-image',
        name: 'AI图片处理',
        icon: 'image',
        color: '#E74C3C',
        desc: '证件照换底色、图片去水印、表情包生成、证件裁剪、头像美化',
        children: [
          { id: 'id-bg', name: '证件照换底色', icon: 'id-bg' },
          { id: 'frame', name: '图片加相框', icon: 'frame' },
          { id: 'remove-watermark', name: '图片去水印', icon: 'watermark' },
          { id: 'id-crop', name: '证件裁剪', icon: 'crop' },
          { id: 'avatar-beauty', name: '头像美化', icon: 'beauty' },
          { id: 'meme-generator', name: '表情包生成', icon: 'meme' }
        ]
      },
      {
        id: 'health-tool',
        name: '健康工具',
        icon: 'health',
        color: '#9B59B6',
        desc: 'BMI身体质量指数计算、健康建议',
        children: [
          { id: 'bmi', name: 'BMI计算器', icon: 'bmi' }
        ]
      },
      {
        id: 'efficiency-tool',
        name: '效率工具',
        icon: 'efficiency',
        color: '#1ABC9C',
        desc: '日期天数计算、字数统计、实用小工具',
        children: [
          { id: 'date-calc', name: '日期计算器', icon: 'date' },
          { id: 'word-count', name: '字数统计', icon: 'word' }
        ]
      },
      {
        id: 'decor-calc',
        name: '装修计算器',
        icon: 'decor',
        color: '#27AE60',
        desc: '瓷砖用量、乳胶漆用量、水电报价估算、公摊面积测算',
        children: [
          { id: 'tile', name: '瓷砖用量', icon: 'tile' },
          { id: 'paint', name: '乳胶漆用量', icon: 'paint' },
          { id: 'water-electric', name: '水电报价', icon: 'electric' },
          { id: 'public-area', name: '公摊面积', icon: 'area' }
        ]
      },
      {
        id: 'finance-calc',
        name: '财务计算器',
        icon: 'finance',
        color: '#F39C12',
        desc: '个税计算、房贷计算、提前还款、油耗计算、基金定投、汇率换算',
        children: [
          { id: 'tax', name: '个税计算', icon: 'tax' },
          { id: 'mortgage', name: '房贷计算', icon: 'mortgage' },
          { id: 'prepay-mortgage', name: '提前还款', icon: 'prepay' },
          { id: 'fuel-calc', name: '油耗计算器', icon: 'fuel' },
          { id: 'fund', name: '基金定投', icon: 'fund' },
          { id: 'exchange', name: '汇率换算', icon: 'exchange' }
        ]
      }
    ]
  },

  initUserData: function () {
    try {
      const userInfo = wx.getStorageSync('userInfo')
      const unlockStatus = wx.getStorageSync('unlockStatus')
      const usageRecords = wx.getStorageSync('usageRecords')

      if (userInfo) this.globalData.userInfo = userInfo
      if (unlockStatus) this.globalData.unlockStatus = unlockStatus
      if (usageRecords) this.globalData.usageRecords = usageRecords
    } catch (e) {
      console.error('读取用户数据失败:', e)
    }
  },

  initAdConfig: function () {
    if (wx.createBannerAd) {
      this.globalData.adConfig.bannerAd = wx.createBannerAd({
        adUnitId: '',
        style: {
          bottom: 0,
          left: 0,
          width: 375
        }
      })

      this.globalData.adConfig.bannerAd.onLoad(() => {
        console.log('Banner广告加载成功')
      })

      this.globalData.adConfig.bannerAd.onError(err => {
        console.error('Banner广告加载失败:', err)
      })
    }

    if (wx.createInterstitialAd) {
      this.globalData.adConfig.interstitialAd = wx.createInterstitialAd({
        adUnitId: ''
      })

      this.globalData.adConfig.interstitialAd.onLoad(() => {
        console.log('插屏广告加载成功')
      })

      this.globalData.adConfig.interstitialAd.onError(err => {
        console.error('插屏广告加载失败:', err)
      })
    }

    if (wx.createRewardedVideoAd) {
      this.globalData.adConfig.rewardedVideoAd = wx.createRewardedVideoAd({
        adUnitId: ''
      })

      this.globalData.adConfig.rewardedVideoAd.onLoad(() => {
        console.log('激励视频广告加载成功')
      })

      this.globalData.adConfig.rewardedVideoAd.onError(err => {
        console.error('激励视频广告加载失败:', err)
      })

      this.globalData.adConfig.rewardedVideoAd.onClose((res) => {
        if (res && res.isEnded) {
          this.unlockByVideo()
        }
      })
    }
  },

  updateDailyUnlockStatus: function () {
    const today = new Date().toISOString().split('T')[0]
    const lastUnlockDate = this.globalData.unlockStatus.lastUnlockDate

    if (lastUnlockDate !== today) {
      this.globalData.unlockStatus = {
        dailyShare: false,
        videoCount: 0,
        lastUnlockDate: today
      }
      this.saveUnlockStatus()
    }
  },

  unlockByShare: function () {
    const today = new Date().toISOString().split('T')[0]
    this.globalData.unlockStatus.dailyShare = true
    this.globalData.unlockStatus.lastUnlockDate = today
    this.saveUnlockStatus()
    wx.showToast({
      title: '分享解锁成功',
      icon: 'success'
    })
  },

  unlockByVideo: function () {
    this.globalData.unlockStatus.videoCount = Math.min(
      this.globalData.unlockStatus.videoCount + 1,
      5
    )
    this.saveUnlockStatus()
    wx.showToast({
      title: '观看成功，已解锁',
      icon: 'success'
    })
  },

  saveUnlockStatus: function () {
    try {
      wx.setStorageSync('unlockStatus', this.globalData.unlockStatus)
    } catch (e) {
      console.error('保存解锁状态失败:', e)
    }
  },

  saveUsageRecord: function (record) {
    const newRecord = {
      id: Date.now(),
      toolId: record.toolId,
      toolName: record.toolName,
      subToolId: record.subToolId,
      subToolName: record.subToolName,
      createTime: new Date().toISOString()
    }
    this.globalData.usageRecords.unshift(newRecord)
    if (this.globalData.usageRecords.length > 50) {
      this.globalData.usageRecords = this.globalData.usageRecords.slice(0, 50)
    }
    try {
      wx.setStorageSync('usageRecords', this.globalData.usageRecords)
    } catch (e) {
      console.error('保存使用记录失败:', e)
    }
  },

  canUnlock: function () {
    return this.globalData.unlockStatus.dailyShare || 
           this.globalData.unlockStatus.videoCount > 0
  },

  consumeVideoUnlock: function () {
    if (this.globalData.unlockStatus.videoCount > 0) {
      this.globalData.unlockStatus.videoCount--
      this.saveUnlockStatus()
      return true
    }
    return false
  }
})