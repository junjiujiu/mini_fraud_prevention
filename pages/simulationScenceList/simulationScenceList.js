// pages/simulationScenceList/simulationScenceList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagelist:[{
      imageUrl:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimagepphcloud.thepaper.cn%2Fpph%2Fimage%2F150%2F585%2F505.jpg&refer=http%3A%2F%2Fimagepphcloud.thepaper.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654251500&t=8f484625ee0973f3bfe44bb07f9d1950',
      content:'冒充领导',
     },{
      // imageUrl:'https://s3.bmp.ovh/imgs/2022/05/04/75f95bba8413075b.png',
      imageUrl:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180921%2F8094a72fc7204da08b14b7e2860d6d37.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654263776&t=a96c3ff667dc5e11ae805bed92a0a1d7',
      content:'盗号',
     },{
      imageUrl:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fshilian.com%2Fuploads%2Fuploads%2F2021%2F0117%2Fd2egkqanixi.jpg&refer=http%3A%2F%2Fshilian.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654263487&t=6f369877914a982f02cb55c60bb84c2d',
      content:'网购客服退款',
     },{
      imageUrl:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20200508%2Feff98fb46a7c4404a1f9ec01a47dbcb3.jpeg%3Fx-oss-process%3Dimage%2Fresize%2Cw_780&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654263535&t=c9c7207fd84a0b852052d1a20baf03a9',
      content:'杀猪盘', 
     },{
      imageUrl:'https://i.bmp.ovh/imgs/2022/05/04/cb816caf78b155e9.png',
      content:'各平台刷单', 
     },{
      imageUrl:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.njwtqx.com%2Fupload%2Fimage%2F2017-03-15%2F148954465436873.jpg&refer=http%3A%2F%2Fwww.njwtqx.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654264239&t=9f9466c46cbe1598308c3eafd296cccc',
      content:'中奖', 
     },{
      imageUrl:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.uczzd.cn%2F14123302777676408900.jpg%3Fid%3D0%26from%3Dexport&refer=http%3A%2F%2Fimage.uczzd.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654264567&t=5dd90d5e87abbcce30b01833c728bbd5',
      content:'冒充警察', 
     }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  pretendLeader(){
    wx.navigateTo({
      url: '/pages/simulationScence/simulationScence',
    })
  }
})