// index.js

const network = require("../../assets/js/network")
const app = getApp()

Page({
  data: {
    userInfo: {},
    recentNews:[],
    // hasUserInfo: false,
    blank:"\t",
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    this.onLoginWx()
    this.getRecentNews()
  },
  // 近期新闻
  getRecentNews:function(){
    network.http("/news/recentNews","GET",{type:1},res=>{
      if(res.data.code==0){
        // console.log(res.data.data)
        this.setData({
          recentNews:res.data.data
        })
        console.log("this.data.recentNews"+this.data.recentNews)
        // 循环新闻列表
        let that = this
        for(var index = 0;index < this.data.recentNews.length;index++){
          // console.log(this.data.recentNews[index].createTime)
          let recentNews_createTime = this.data.recentNews[index].createTime
          // 更换T为空格
          recentNews_createTime = recentNews_createTime.replace(/T/g,this.data.blank)
          this.data.recentNews[index].createTime = recentNews_createTime
        }
        that.setData({
          recentNews:this.data.recentNews
        })
        // console.log("新闻列表"+this.data.recentNews)
      }
    })
  },
  // 登录逻辑
  onLoginWx:function(){
    let that = this
    // if(app.globalData.hasUserInfo==false){
      wx.login({
        success(res){
          network.http("/user/login","POST",{
            code:res.code
          },res =>{
            if(res.data.code==0){
              that.setData({
                userid : res.data.data.userid
              })
              app.globalData.userid = res.data.data.userid
              // 查询某个id的基本用户信息
              network.http("/user/"+app.globalData.userid,"GET",{},res=>{
                if(res.data.code==0){
                  that.setData({
                    userInfo:res.data.data
                  })
                  app.globalData.userInfo = res.data.data
                  console.log(that.data.userInfo)
                  // 获取新闻信息
                }
                // this.getRecentNews()
              })
            }
            // 如果没有授权则跳转授权界面
            else{
              wx.navigateTo({
                url: '/pages/authorization/authorization',
              })
            }
          })
        }
      })
  },

  // 单击跳转详情页
  recentNewsInfo:function(e){
    console.log(e)
    app.globalData.oneRecentNewsInfo = e.currentTarget.dataset.act
    console.log(app.globalData.oneRecentNewsInfo)
    wx.navigateTo({
      url: '/pages/recentNewsInfo/recentNewsInfo',
    })

  },
  // 跳转使用说明
  instructions(){
    wx.navigateTo({
      url: '/pages/instructions/instructions',
    })
  },

  // 诈骗测试跳转
  fraud_test_btn(){
    wx.navigateTo({
      url: '/pages/fraudtest/fraudtest',
    })
  },

  // 情景模拟跳转
  scenario_btn(){
    wx.navigateTo({
      url: '/pages/scenarioSimulation/scenarioSimulation',
    })
  }
})
