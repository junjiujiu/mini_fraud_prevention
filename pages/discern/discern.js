// pages/discern/discern.js
const app = getApp()
const network = require("../../assets/js/network")
const util = require("../../assets/js/util")
Page({

  data: {
    messageInfo:"",
    showModal: false,
    percentage:"",
  },

  onLoad: function (options) {
    
  },
  // 点击识别按钮
  SetMessageData(e){
    // 判断输入内容是否为空
    if(e.detail.value.message_textarea==""){
      util.showToast("短信内容不能为空！")
    }
    else{
      // 提交该条短信的诈骗指数
      network.http("/recognition/","POST",{
        userid:app.globalData.userid,
        messageInfo:e.detail.value.message_textarea
      },res=>{
        if(res.data.code==0){
          console.log(res.data.data)
          console.log(res.data.data.percentage)
          // this.data.percentage = res.data.data.percentage
          this.data.messageInfo = ""
          this.setData({
            messageInfo:this.data.messageInfo,
            percentage:res.data.data.percentage,
            showModal: true
          })
        }
      })
    }
  },
  closeDialogue: function() { 
    this.setData({
    showModal: false
    })
   },
  // 国家反诈中心详细页
  fraudCenter:function(){
    wx.navigateTo({
      url: '/pages/fraudCenterDetail/fraudCenterDetail',
    })
  }
})