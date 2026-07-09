const app = getApp()
const util = require('../../utils/util.js')
const config = require('../../utils/config.js')

Page({
  data: {
    categoryId: '',
    categoryName: '',
    toolId: '',
    toolName: '',
    toolList: [],
    currentTool: null,
    inputValue: '',
    selectedOptions: {},
    isProcessing: false,
    resultData: null,
    showUnlockModal: false,
    disclaimer: '',
    pageType: ''
  },

  onLoad: function (options) {
    const { categoryId, toolId } = options
    this.setData({
      categoryId: categoryId || '',
      toolId: toolId || ''
    })
    this.initToolData()
  },

  onShareAppMessage: function () {
    return {
      title: `${this.data.toolName || '全能AI工具助手'} - 免费实用工具箱`,
      path: `/pages/tool/tool?categoryId=${this.data.categoryId}&toolId=${this.data.toolId}`,
      imageUrl: ''
    }
  },

  initToolData: function () {
    const categories = app.globalData.toolCategories
    const category = categories.find(c => c.id === this.data.categoryId)

    if (!category) {
      util.showToast('工具分类不存在')
      return
    }

    this.setData({
      categoryName: category.name,
      toolList: category.children
    })

    wx.setNavigationBarTitle({
      title: category.name
    })

    if (this.data.toolId) {
      const tool = category.children.find(t => t.id === this.data.toolId)
      if (tool) {
        this.setCurrentTool(tool)
      }
    }

    this.setDisclaimer()
  },

  setCurrentTool: function (tool) {
    this.setData({
      currentTool: tool,
      toolId: tool.id,
      toolName: tool.name,
      inputValue: '',
      selectedOptions: {},
      resultData: null
    })
    wx.setNavigationBarTitle({
      title: tool.name
    })
  },

  setDisclaimer: function () {
    let disclaimer = ''
    const categoryId = this.data.categoryId
    const toolId = this.data.toolId

    if (categoryId === 'finance-calc' || categoryId === 'decor-calc') {
      disclaimer = config.COMPLIANCE.FINANCE_DISCLAIMER
    } else if (categoryId === 'ai-image') {
      disclaimer = config.COMPLIANCE.IMAGE_DISCLAIMER
    } else if (categoryId === 'ai-copy') {
      disclaimer = config.COMPLIANCE.AI_DISCLAIMER
    } else if (categoryId === 'health-tool') {
      disclaimer = config.COMPLIANCE.HEALTH_DISCLAIMER
    }

    if (toolId === 'name-generator') {
      disclaimer = config.COMPLIANCE.NAME_DISCLAIMER
    } else if (toolId === 'horoscope') {
      disclaimer = config.COMPLIANCE.HOROSCOPE_DISCLAIMER
    }

    this.setData({ disclaimer })
  },

  onToolSelect: function (e) {
    const { toolId } = e.currentTarget.dataset
    const tool = this.data.toolList.find(t => t.id === toolId)
    if (tool) {
      this.setCurrentTool(tool)
      app.saveUsageRecord({
        toolId: this.data.categoryId,
        toolName: this.data.categoryName,
        subToolId: tool.id,
        subToolName: tool.name
      })
    }
  },

  onInputChange: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },

  onOptionSelect: function (e) {
    const { optionKey, optionValue } = e.currentTarget.dataset
    const selectedOptions = { ...this.data.selectedOptions }
    selectedOptions[optionKey] = optionValue
    this.setData({ selectedOptions })
  },

  onProcess: function () {
    if (this.data.isProcessing) return

    const toolId = this.data.toolId
    const categoryId = this.data.categoryId

    if (categoryId === 'ai-copy') {
      this.processAICopy()
    } else if (categoryId === 'ai-image') {
      this.processAIImage()
    } else if (categoryId === 'decor-calc') {
      this.processDecorCalc()
    } else if (categoryId === 'finance-calc') {
      this.processFinanceCalc()
    } else if (categoryId === 'health-tool') {
      this.processHealthTool()
    } else if (categoryId === 'efficiency-tool') {
      this.processEfficiencyTool()
    }
  },

  processAICopy: function () {
    const inputValue = this.data.inputValue.trim()
    if (!inputValue && this.data.toolId !== 'name-generator') {
      util.showToast('请输入关键词或需求')
      return
    }

    this.setData({ isProcessing: true })

    setTimeout(() => {
      const result = this.generateMockCopyResult()
      this.setData({
        isProcessing: false,
        resultData: result
      })
      this.goToResult()
    }, 1500)
  },

  generateMockCopyResult: function () {
    const toolId = this.data.toolId
    const input = this.data.inputValue || '示例'
    let results = []

    switch (toolId) {
      case 'moments':
        results = [
          `${input}的美好时光，记录生活中的小确幸✨ #生活记录 #今日份`,
          `生活不止眼前的苟且，还有${input}和远方。愿你眼里有光，心中有爱❤️`,
          `今天的${input}格外美好，愿所有的美好都如期而至🌸 #美好生活`
        ]
        break
      case 'video-script':
        results = [
          {
            title: `${input}短视频脚本`,
            duration: '30秒',
            scenes: [
              { time: '0-5秒', content: `开场：展示${input}的精彩画面，吸引注意力` },
              { time: '5-15秒', content: `主体：详细介绍${input}的特点和优势` },
              { time: '15-25秒', content: `互动：引导观众点赞关注，参与讨论` },
              { time: '25-30秒', content: `结尾：总结${input}的价值，呼吁行动` }
            ]
          }
        ]
        break
      case 'wedding':
        results = [
          `尊敬的各位来宾，大家好！\n\n今天是我和${input}大喜的日子，感谢各位百忙之中前来参加我们的婚礼。\n\n从相识到相知，从相爱到相守，我们一起走过了许多美好的时光。感谢命运让我们相遇，感谢彼此的陪伴与支持。\n\n未来的日子里，我们会携手共进，共同创造美好的生活。\n\n最后，再次感谢各位的到来，希望大家今天吃得开心，玩得尽兴！`,
        ]
        break
      case 'work-report':
        results = [
          {
            title: `${input}工作汇报`,
            sections: [
              { title: '一、工作完成情况', content: `本月主要围绕${input}展开工作，完成了以下任务...` },
              { title: '二、工作成果', content: `通过${input}项目，取得了以下成果...` },
              { title: '三、存在问题', content: '在工作过程中，也发现了一些问题...' },
              { title: '四、下一步计划', content: '针对以上问题，下一步计划...' }
            ]
          }
        ]
        break
      case 'name-generator':
        const surnames = ['张', '王', '李', '赵', '刘', '陈', '杨', '黄']
        const characters = ['宇', '轩', '涵', '诗', '雅', '馨', '泽', '瑞', '浩', '琪']
        const styles = ['文艺清新', '阳光大气', '温婉知性', '睿智沉稳']
        for (let i = 0; i < 10; i++) {
          const surname = surnames[Math.floor(Math.random() * surnames.length)]
          const char1 = characters[Math.floor(Math.random() * characters.length)]
          const char2 = characters[Math.floor(Math.random() * characters.length)]
          const style = styles[Math.floor(Math.random() * styles.length)]
          results.push({
            name: surname + char1 + char2,
            meaning: `${style}风格，寓意美好`,
            isFree: i < 3
          })
        }
        break
      case 'horoscope':
        const zodiacs = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
        const luckyColors = ['红色', '蓝色', '绿色', '金色', '白色', '紫色', '粉色', '黑色', '橙色', '银色']
        const fortunes = ['整体运势不错，各方面都比较顺利。', '今天桃花运旺盛，适合社交活动。', '工作上会有新的机遇，要好好把握。', '财运亨通，可能会有意外收获。', '心情愉悦，适合学习新技能。', '注意身体健康，保持规律作息。']
        const zodiac = input && zodiacs.find(z => z.includes(input)) || zodiacs[Math.floor(Math.random() * zodiacs.length)]
        results = {
          zodiac: zodiac,
          date: new Date().toISOString().split('T')[0],
          overall: fortunes[Math.floor(Math.random() * fortunes.length)],
          love: '爱情运势：' + fortunes[Math.floor(Math.random() * fortunes.length)],
          career: '事业运势：' + fortunes[Math.floor(Math.random() * fortunes.length)],
          wealth: '财富运势：' + fortunes[Math.floor(Math.random() * fortunes.length)],
          health: '健康运势：' + fortunes[Math.floor(Math.random() * fortunes.length)],
          luckyColor: luckyColors[Math.floor(Math.random() * luckyColors.length)],
          luckyNumber: Math.floor(Math.random() * 100) + 1,
          isFree: true
        }
        break
      case 'acrostic-poem':
        const chars = input.split('')
        if (chars.length < 2 || chars.length > 8) {
          results = { error: '请输入2-8个汉字' }
        } else {
          const poemLines = []
          const poemTemplates = [
            ['春风拂面', '花开满园', '月明如水', '思念如潮', '山水相依', '云雾缭绕', '星辰闪烁', '岁月静好'],
            ['红日东升', '霞光万道', '云卷云舒', '风起云涌', '雨过天晴', '彩虹桥横', '夕阳西下', '夜幕降临'],
            ['青山绿水', '白草红叶', '黄花满地', '绿树成荫', '碧波荡漾', '银装素裹', '金碧辉煌', '紫气东来']
          ]
          const template = poemTemplates[Math.floor(Math.random() * poemTemplates.length)]
          chars.forEach((char, index) => {
            const line = char + template[index % template.length].substring(1)
            poemLines.push(line)
          })
          results = {
            title: `${input}藏头诗`,
            lines: poemLines,
            isFree: true
          }
        }
        break
    }

    return {
      type: 'copy',
      toolId: toolId,
      toolName: this.data.toolName,
      results: results,
      isFree: true
    }
  },

  processAIImage: function () {
    const toolId = this.data.toolId
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const tempFilePath = res.tempFiles[0].tempFilePath
        this.setData({ isProcessing: true })

        setTimeout(() => {
          const result = {
            type: 'image',
            toolId: toolId,
            toolName: this.data.toolName,
            originalImage: tempFilePath,
            processedImage: tempFilePath,
            isFree: true,
            isHD: false
          }
          this.setData({
            isProcessing: false,
            resultData: result
          })
          this.goToResult()
        }, 2000)
      },
      fail: () => {
        util.showToast('取消选择')
      }
    })
  },

  processDecorCalc: function () {
    const inputValue = this.data.inputValue
    if (!inputValue) {
      util.showToast('请输入面积数据')
      return
    }

    const area = parseFloat(inputValue)
    if (isNaN(area) || area <= 0) {
      util.showToast('请输入有效的面积')
      return
    }

    this.setData({ isProcessing: true })

    setTimeout(() => {
      const result = this.calculateDecorResult(area)
      this.setData({
        isProcessing: false,
        resultData: result
      })
      this.goToResult()
    }, 500)
  },

  calculateDecorResult: function (area) {
    const toolId = this.data.toolId
    let result = {
      type: 'calculator',
      toolId: toolId,
      toolName: this.data.toolName,
      input: { area: area },
      isFree: true
    }

    switch (toolId) {
      case 'tile':
        const tileSize = 0.6 * 0.6
        const baseCount = Math.ceil(area / tileSize)
        const lossRate = 0.05
        const totalCount = Math.ceil(baseCount * (1 + lossRate))
        result.data = {
          tileCount: totalCount,
          baseCount: baseCount,
          lossCount: totalCount - baseCount,
          lossRate: lossRate * 100,
          unit: '块',
          suggestion: '建议购买时多预留5%的损耗量'
        }
        break
      case 'paint':
        const paintPerSquare = 0.15
        const totalPaint = (area * paintPerSquare).toFixed(1)
        const bucketSize = 5
        const bucketCount = Math.ceil(totalPaint / bucketSize)
        result.data = {
          totalPaint: totalPaint,
          bucketCount: bucketCount,
          bucketSize: bucketSize,
          unit: '升',
          coats: 2,
          suggestion: '以上按涂刷2遍计算，实际用量因墙面情况可能有所不同'
        }
        break
      case 'water-electric':
        const perSquareCost = 120
        const totalCost = area * perSquareCost
        result.data = {
          totalCost: totalCost.toFixed(0),
          perSquareCost: perSquareCost,
          materialRatio: '约55%材料，45%人工',
          suggestion: '以上为参考价格，实际费用根据装修档次和材料选择会有差异'
        }
        break
      case 'public-area':
        const publicRate = 0.2
        const publicArea = area * publicRate
        const usableArea = area - publicArea
        result.data = {
          totalArea: area,
          publicArea: publicArea.toFixed(2),
          usableArea: usableArea.toFixed(2),
          publicRate: (publicRate * 100).toFixed(0),
          suggestion: '公摊率一般在18%-25%之间，具体以实际楼盘为准'
        }
        break
    }

    return result
  },

  processFinanceCalc: function () {
    const inputValue = this.data.inputValue
    if (!inputValue) {
      util.showToast('请输入数值')
      return
    }

    const amount = parseFloat(inputValue)
    if (isNaN(amount) || amount <= 0) {
      util.showToast('请输入有效数值')
      return
    }

    this.setData({ isProcessing: true })

    setTimeout(() => {
      const result = this.calculateFinanceResult(amount)
      this.setData({
        isProcessing: false,
        resultData: result
      })
      this.goToResult()
    }, 500)
  },

  calculateFinanceResult: function (amount) {
    const toolId = this.data.toolId
    let result = {
      type: 'calculator',
      toolId: toolId,
      toolName: this.data.toolName,
      input: { amount: amount },
      isFree: true
    }

    switch (toolId) {
      case 'tax': {
        const threshold = 5000
        const taxable = Math.max(0, amount - threshold)
        let tax = 0
        if (taxable <= 3000) {
          tax = taxable * 0.03
        } else if (taxable <= 12000) {
          tax = taxable * 0.1 - 210
        } else if (taxable <= 25000) {
          tax = taxable * 0.2 - 1410
        } else if (taxable <= 35000) {
          tax = taxable * 0.25 - 2660
        }
        result.data = {
          monthlySalary: amount,
          threshold: threshold,
          taxableIncome: taxable.toFixed(2),
          tax: tax.toFixed(2),
          actualIncome: (amount - tax).toFixed(2),
          suggestion: '以上为月度个税估算，未包含专项附加扣除'
        }
        break
      }
      case 'mortgage': {
        const rate = 0.042
        const years = 30
        const months = years * 12
        const monthlyRate = rate / 12
        const monthlyPayment = (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)
        const totalPayment = monthlyPayment * months
        const totalInterest = totalPayment - amount
        result.data = {
          loanAmount: amount,
          years: years,
          rate: (rate * 100).toFixed(2),
          monthlyPayment: monthlyPayment.toFixed(2),
          totalPayment: totalPayment.toFixed(2),
          totalInterest: totalInterest.toFixed(2),
          suggestion: '以上为等额本息估算，实际以银行审批为准'
        }
        break
      }
      case 'fund': {
        const monthlyInvest = 1000
        const annualRate = 0.08
        const years = 10
        const months = years * 12
        const monthlyRate = annualRate / 12
        const futureValue = monthlyInvest * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate)
        const totalInvest = monthlyInvest * months
        const totalReturn = futureValue - totalInvest
        result.data = {
          monthlyInvest: monthlyInvest,
          years: years,
          annualRate: (annualRate * 100).toFixed(2),
          futureValue: futureValue.toFixed(2),
          totalInvest: totalInvest.toFixed(2),
          totalReturn: totalReturn.toFixed(2),
          suggestion: '以上为复利估算，实际收益因市场波动会有差异'
        }
        break
      }
      case 'exchange': {
        const rateUSD = 7.25
        const rateEUR = 7.85
        const rateJPY = 0.048
        const rateGBP = 9.15
        result.data = {
          amount: amount,
          fromCurrency: '人民币 CNY',
          rates: [
            { currency: '美元 USD', rate: (1 / rateUSD).toFixed(4), amount: (amount / rateUSD).toFixed(2) },
            { currency: '欧元 EUR', rate: (1 / rateEUR).toFixed(4), amount: (amount / rateEUR).toFixed(2) },
            { currency: '日元 JPY', rate: (1 / rateJPY).toFixed(4), amount: (amount / rateJPY).toFixed(2) },
            { currency: '英镑 GBP', rate: (1 / rateGBP).toFixed(4), amount: (amount / rateGBP).toFixed(2) }
          ],
          suggestion: '汇率为模拟参考值，实际以银行实时汇率为准'
        }
        break
      }
      case 'prepay-mortgage': {
        const { loanAmount: prepayLoan, years: prepayYears, rate: prepayRate, prepayAmount, paidMonths } = this.data.selectedOptions
        const loanAmt = (prepayLoan || amount) * 10000
        const yrs = parseFloat(prepayYears) || 30
        const rt = parseFloat(prepayRate) / 100 || 0.042
        const prepay = parseFloat(prepayAmount) * 10000 || 100000
        const paid = parseInt(paidMonths) || 12

        const monthlyRate = rt / 12
        const totalMonths = yrs * 12
        const monthlyPayment = (loanAmt * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1)

        let remainingPrincipal = loanAmt
        let totalInterestPaid = 0
        for (let i = 0; i < paid; i++) {
          const interest = remainingPrincipal * monthlyRate
          const principal = monthlyPayment - interest
          totalInterestPaid += interest
          remainingPrincipal -= principal
        }

        const newRemaining = remainingPrincipal - prepay
        const newMonths = Math.ceil(Math.log(monthlyPayment / (monthlyPayment - newRemaining * monthlyRate)) / Math.log(1 + monthlyRate))
        const savedMonths = totalMonths - paid - newMonths
        const savedInterest = monthlyPayment * (totalMonths - paid) - (prepay + monthlyPayment * newMonths)

        result.data = {
          loanAmount: (loanAmt / 10000).toFixed(0) + '万',
          years: yrs + '年',
          rate: (rt * 100).toFixed(2) + '%',
          monthlyPayment: monthlyPayment.toFixed(2),
          paidMonths: paid + '个月',
          prepayAmount: (prepay / 10000).toFixed(0) + '万',
          remainingPrincipal: (remainingPrincipal / 10000).toFixed(2) + '万',
          savedMonths: savedMonths + '个月',
          savedInterest: (savedInterest / 10000).toFixed(2) + '万',
          suggestion: '以上为等额本息估算，实际以银行为准，建议提前咨询银行违约金政策'
        }
        break
      }
      case 'fuel-calc': {
        const { distance, fuelPrice, fuelConsumption } = this.data.selectedOptions
        const dist = parseFloat(distance) || amount
        const price = parseFloat(fuelPrice) || 7.5
        const consumption = parseFloat(fuelConsumption) || 8

        const totalFuel = (dist * consumption / 100).toFixed(2)
        const totalCost = (totalFuel * price).toFixed(2)
        const perKmCost = (totalCost / dist).toFixed(2)

        result.data = {
          distance: dist + '公里',
          fuelPrice: price + '元/升',
          fuelConsumption: consumption + 'L/100km',
          totalFuel: totalFuel + '升',
          totalCost: totalCost + '元',
          perKmCost: perKmCost + '元/公里',
          suggestion: '以上为估算值，实际油耗受路况、驾驶习惯等因素影响'
        }
        break
      }
    }

    return result
  },

  processHealthTool: function () {
    const toolId = this.data.toolId
    const inputValue = this.data.inputValue

    if (toolId === 'bmi') {
      const { height, weight } = this.data.selectedOptions
      if (!height || !weight) {
        util.showToast('请输入身高和体重')
        return
      }
      const h = parseFloat(height) / 100
      const w = parseFloat(weight)
      if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
        util.showToast('请输入有效的数值')
        return
      }

      this.setData({ isProcessing: true })
      setTimeout(() => {
        const bmi = (w / (h * h)).toFixed(1)
        let level = ''
        let levelColor = ''
        let suggestion = ''

        if (bmi < 18.5) {
          level = '偏瘦'
          levelColor = '#3498DB'
          suggestion = '建议适当增加营养摄入，保持规律作息，适量进行力量训练。'
        } else if (bmi < 24) {
          level = '正常'
          levelColor = '#27AE60'
          suggestion = '体重处于正常范围，继续保持健康的饮食和运动习惯。'
        } else if (bmi < 28) {
          level = '偏胖'
          levelColor = '#F39C12'
          suggestion = '建议适当控制饮食，增加有氧运动，保持健康的生活方式。'
        } else {
          level = '肥胖'
          levelColor = '#E74C3C'
          suggestion = '建议在医生指导下进行科学减重，注意饮食控制和运动锻炼。'
        }

        const result = {
          type: 'health',
          toolId: toolId,
          toolName: this.data.toolName,
          data: {
            bmi: bmi,
            level: level,
            levelColor: levelColor,
            height: height,
            weight: weight,
            suggestion: suggestion,
            standard: 'BMI正常范围：18.5 - 23.9'
          },
          isFree: true
        }

        this.setData({
          isProcessing: false,
          resultData: result
        })
        this.goToResult()
      }, 500)
    }
  },

  processEfficiencyTool: function () {
    const toolId = this.data.toolId
    const inputValue = this.data.inputValue

    if (toolId === 'word-count') {
      if (!inputValue) {
        util.showToast('请输入要统计的文字')
        return
      }

      this.setData({ isProcessing: true })
      setTimeout(() => {
        const text = inputValue
        const charCount = text.length
        const charCountNoSpace = text.replace(/\s/g, '').length
        const chineseCount = (text.match(/[\u4e00-\u9fa5]/g) || []).length
        const englishCount = (text.match(/[a-zA-Z]/g) || []).length
        const numberCount = (text.match(/[0-9]/g) || []).length
        const lineCount = text.split('\n').length
        const paragraphCount = text.split(/\n\s*\n/).filter(p => p.trim()).length || 1

        const result = {
          type: 'efficiency',
          toolId: toolId,
          toolName: this.data.toolName,
          data: {
            charCount: charCount,
            charCountNoSpace: charCountNoSpace,
            chineseCount: chineseCount,
            englishCount: englishCount,
            numberCount: numberCount,
            lineCount: lineCount,
            paragraphCount: paragraphCount
          },
          isFree: true
        }

        this.setData({
          isProcessing: false,
          resultData: result
        })
        this.goToResult()
      }, 300)
    } else if (toolId === 'date-calc') {
      const { date1, date2, calcType } = this.data.selectedOptions

      if (calcType === 'diff') {
        if (!date1 || !date2) {
          util.showToast('请选择两个日期')
          return
        }

        this.setData({ isProcessing: true })
        setTimeout(() => {
          const d1 = new Date(date1)
          const d2 = new Date(date2)
          const diffTime = Math.abs(d2 - d1)
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
          const diffWeeks = Math.floor(diffDays / 7)
          const diffMonths = Math.floor(diffDays / 30)

          const result = {
            type: 'efficiency',
            toolId: toolId,
            toolName: this.data.toolName,
            data: {
              calcType: 'diff',
              date1: date1,
              date2: date2,
              diffDays: diffDays,
              diffWeeks: diffWeeks,
              diffMonths: diffMonths,
              suggestion: `两个日期相差 ${diffDays} 天`
            },
            isFree: true
          }

          this.setData({
            isProcessing: false,
            resultData: result
          })
          this.goToResult()
        }, 300)
      } else {
        if (!date1) {
          util.showToast('请选择起始日期')
          return
        }
        const days = parseInt(inputValue)
        if (isNaN(days)) {
          util.showToast('请输入天数')
          return
        }

        this.setData({ isProcessing: true })
        setTimeout(() => {
          const d = new Date(date1)
          d.setDate(d.getDate() + days)
          const resultDate = d.toISOString().split('T')[0]

          const result = {
            type: 'efficiency',
            toolId: toolId,
            toolName: this.data.toolName,
            data: {
              calcType: 'add',
              startDate: date1,
              addDays: days,
              resultDate: resultDate,
              suggestion: `${days} 天后是 ${resultDate}`
            },
            isFree: true
          }

          this.setData({
            isProcessing: false,
            resultData: result
          })
          this.goToResult()
        }, 300)
      }
    }
  },

  onDateChange: function (e) {
    const { field } = e.currentTarget.dataset
    const selectedOptions = { ...this.data.selectedOptions }
    selectedOptions[field] = e.detail.value
    this.setData({ selectedOptions })
  },

  onCalcTypeChange: function (e) {
    const selectedOptions = { ...this.data.selectedOptions }
    selectedOptions.calcType = e.detail.value
    this.setData({ selectedOptions })
  },

  onHealthInputChange: function (e) {
    const { field } = e.currentTarget.dataset
    const selectedOptions = { ...this.data.selectedOptions }
    selectedOptions[field] = e.detail.value
    this.setData({ selectedOptions })
  },

  goToResult: function () {
    const resultData = encodeURIComponent(JSON.stringify(this.data.resultData))
    util.navigateTo(`/pages/result/result?data=${resultData}`)
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
      this.setData({ showUnlockModal: false })
      return
    }
    this.hideUnlockModal()
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

  stopPropagation: function () {}
})