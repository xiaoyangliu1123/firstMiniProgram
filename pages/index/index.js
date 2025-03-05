import { polishText } from '../../services/api'

Page({
  data: {
    inputText: '',
    polishedText: '',
    tags: [],
    loading: false,
    showPage: true
  },

  onLoad: function() {
    console.log('页面加载')
  },

  onShow: function() {
    console.log('页面显示')
  },

  onReady: function() {
    console.log('页面就绪')
  },

  // 输入框内容变化处理
  handleInput: function(e) {
    this.setData({
      inputText: e.detail.value
    })
  },

  // 提交文本进行润色
  async handlePolish() {
    if (!this.data.inputText.trim()) {
      wx.showToast({
        title: '请输入文本内容',
        icon: 'none'
      })
      return
    }

    this.setData({ loading: true })

    try {
      const result = await polishText(this.data.inputText)
      
      // 保存到历史记录
      this.saveToHistory({
        original: this.data.inputText,
        polished: result.text,
        tags: result.tags,
        timestamp: new Date().getTime()
      })

      this.setData({
        polishedText: result.text,
        tags: result.tags
      })
    } catch (error) {
      wx.showToast({
        title: '润色失败，请重试',
        icon: 'none'
      })
      console.error('润色失败:', error)
    } finally {
      this.setData({ loading: false })
    }
  },

  // 保存到历史记录
  saveToHistory(record) {
    const history = wx.getStorageSync('polish_history') || [];
    history.unshift(record);
    wx.setStorageSync('polish_history', history);
  }
}); 