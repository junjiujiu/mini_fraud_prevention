// pages/identifiedSMS/identifiedSMS.js
const app = getApp()
const network = require("../../assets/js/network")
Page({

  data: {
    isHasIdentifiedSMS:1,
    myMessage:[]
  },

  onLoad(options) {
    console.log(app.globalData.userid)
    // 获取当前用户识别过的短信
    network.http("/recognition/userhas","GET",{userid:app.globalData.userid},res=>{
      if(res.data.code==0){
        console.log(res.data)
        this.setData({
          myMessage:res.data.data
        })
        console.log(this.data.myMessage)
      }
    })
  },

})