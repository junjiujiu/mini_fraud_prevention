// pages/classicCaseInfo/classicCaseInfo.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    thisClassicCaseInfo:{},
    classicCaseImg:"",
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      thisClassicCaseInfo:app.globalData.oneClassicCase
    })
    console.log(this.data.thisClassicCaseInfo)
    let classicCaseImg1 = ""
    classicCaseImg1 = this.data.thisClassicCaseInfo.img
    console.log(classicCaseImg1)
    var classicCase_oneImg = classicCaseImg1
    var img=classicCase_oneImg.split("||||")
    let tempArray = [];
    for (var i = 0; i < img.length; i++) {
      const item = {id: i+1, img: img[i]};
      tempArray.push(item);
   }
    console.log(tempArray)
    this.setData({
      classicCaseImg:tempArray
    })
    for(var j=0;j<this.data.classicCaseImg.length;j++){
    console.log(this.data.classicCaseImg[j].img)
    }
  },

})