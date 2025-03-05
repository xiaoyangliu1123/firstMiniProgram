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
  }
}) 