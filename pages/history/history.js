Page({
  data: {
    historyList: []
  },
  onLoad: function() {
    this.loadHistory()
  },
  loadHistory: function() {
    const history = wx.getStorageSync('polish_history') || []
    this.setData({
      historyList: history
    })
  },
  formatTime: function(timestamp) {
    const date = new Date(timestamp)
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    const hour = date.getHours().toString().padStart(2, '0')
    const minute = date.getMinutes().toString().padStart(2, '0')
    return `${year}-${month}-${day} ${hour}:${minute}`
  }
}) 