Page({
  data: {
    historyList: []
  },

  onShow() {
    // 每次显示页面时刷新历史记录
    this.loadHistory()
  },

  loadHistory() {
    const history = wx.getStorageSync('polish_history') || []
    this.setData({
      historyList: history
    })
  },

  // 格式化时间戳
  formatTime(timestamp) {
    const date = new Date(timestamp)
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`
  }
}) 