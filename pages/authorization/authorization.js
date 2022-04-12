// pages/authorization/authorization.js
const network = require("../../assets/js/network")
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    thisuserInfo:{},
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    console.log(this.data.userInfo)
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    let that = this
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        })
        app.globalData.userInfo = this.data.userInfo
        app.globalData.hasUserInfo = true
        console.log(this.data.userInfo)
        console.log(app.globalData.userInfo)
        wx.login({
          success(res){
            console.log(res.code)
            console.log(app.globalData.userInfo)
            // 用户注册
            network.http("/user/","POST",{
              code:res.code,
              userName:app.globalData.userInfo.nickName,
              avatarUrl:app.globalData.userInfo.avatarUrl
            },res=>{
              if(res.data.code==0){
                that.setData({
                  thisuserInfo: res.data.data
                })
                console.log(res.data)
                app.globalData.userid = res.data.data.id
                app.globalData.userInfo = res.data.data
                console.log(app.globalData.userid)
                wx.navigateBack({
                  delta: 1,
                })
              } 
              else if(res.data.code==-4){
                wx.login({
                  success(res){
                    network.http("/user/login","POST",{
                      code:res.code
                    },res =>{
                      if(res.data.code==0){
                        // 用户注册后将全局user进行保存当前用户的数据
                        // app.globalData.user = res.data.data
                        that.setData({
                          userid : res.data.data.userid
                        })
                        app.globalData.userid = res.data.data.userid
                        console.log(that.data.userid)
                        wx.navigateBack({
                          delta: 1,
                        })
                      }
                    })
                  }
                })
              }
            })
          }
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})