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
    console.log('页面加载状态:', this.data);
    this.setData({
      showPage: true,
      inputText: ''
    });
    console.log('页面加载完成，当前状态:', this.data);
  },

  onShow: function() {
    if (!this.data.showPage) {
      this.setData({
        showPage: true
      });
    }
  },

  // 输入框内容变化处理
  handleInput(e) {
    this.setData({
      inputText: e.detail.value
    });
  },

  // 提交文本进行润色
  handlePolish() {
    if (!this.data.inputText) return;
    this.setData({
      polishedText: '润色后的文本：' + this.data.inputText
    });
  },

  // 保存到历史记录
  saveToHistory(record) {
    const history = wx.getStorageSync('polish_history') || [];
    history.unshift(record);
    wx.setStorageSync('polish_history', history);
  }
}); 