// pages/recentNewsInfo/recentNewsInfo.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    thisRecentNewsInfo:{}

  },

  onLoad(options) {
    this.setData({
      thisRecentNewsInfo:app.globalData.oneRecentNewsInfo
    })
    console.log(this.data.thisRecentNewsInfo)
    
  }
})