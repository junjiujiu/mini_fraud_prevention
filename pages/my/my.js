// pages/my/my.js
const network = require("../../assets/js/network")
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getThisUserInfo()
  },

  // 获取用户信息
  getThisUserInfo:function(){
    network.http("/user/"+app.globalData.userid,"GET",{},res=>{
      if(res.data.code==0){
        this.setData({
          userInfo:res.data.data
        })
        app.globalData.userInfo = res.data.data
        console.log(this.data.userInfo)
        // 如果被诈骗指数为空的话显示0
        if(this.data.userInfo.swindledNum==null){
          this.data.userInfo.swindledNum = 0
          this.setData({
            userInfo:this.data.userInfo
          })
        }
      }
    })
  },

  // 用户识别过的信息跳转
  identified_SMS_btn:function(){
    wx.navigateTo({
      url: '/pages/identifiedSMS/identifiedSMS', 
    })
  },
  
})