// pages/scenarioSimulation/scenarioSimulation.js
const network = require("../../assets/js/network")
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classicCase:[],
    blank:"\t",
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getclassicCase()
  },

  // 获取经典案例
  getclassicCase(){
    network.http("/news/recentNews","GET",{
      type:2
    },res=>{
      if(res.data.code==0){
        console.log(res.data.data)
        this.data.classicCase = res.data.data
        let that = this
        for(var index = 0;index < this.data.classicCase.length;index++){
          // console.log(this.data.recentNews[index].createTime)
          let classicCase_createTime = this.data.classicCase[index].createTime
          // 更换T为空格
          classicCase_createTime = classicCase_createTime.replace(/T/g,this.data.blank)
          this.data.classicCase[index].createTime = classicCase_createTime
        }
        that.setData({
          classicCase:this.data.classicCase
        })
        // console.log("新闻列表"+this.data.recentNews)
      }
    })
  },
 
  classicCaseInfo:function(e){
    console.log(e)
    app.globalData.oneClassicCase = e.currentTarget.dataset.act
    wx.navigateTo({
      url: '/pages/classicCaseInfo/classicCaseInfo',
    })
  },
  
  simulation(){
    wx.navigateTo({
      url: '/pages/simulationScenceList/simulationScenceList',
    })
  }
})