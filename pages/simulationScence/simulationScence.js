const app = getApp();
let inputVal = '';  //输入框的内容，未发
let msgList = [];   //聊天记录，已发
let windowWidth = wx.getSystemInfoSync().windowWidth;  //可使用屏幕宽度
let windowHeight = wx.getSystemInfoSync().windowHeight;//可使用屏幕高度
let keyHeight = 0; //键盘弹起高度
var checkValue = [];//顶部复选框所选状态显示 数组
var items;//复选弹框数组
var kindStr;//复选的选项

/**
 * 初始化数据
 */
function initData(that) {
  inputVal = '';
  msgList = [
    {
      speaker: 'server',
      contentType: 'text',
      content: '你好，我是李华'
    },{
      speaker: 'hint',
      contentType: 'text',
      content: '以上是打招呼的内容'
    },{
      speaker: 'hint',
      contentType: 'text',
      content: '你已添加了心如止水，现在可以开始聊天了。'
    },{
      speaker: 'server',
      contentType: 'text',
      content: '你好'
    },
  ]
  that.setData({
    msgList,
    inputVal
  })
}
 
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    scrollHeight: '100vh', //这个高度一定要有
    inputBottom: 0,
    inputVal: '',
    picHead: "",
    fpTypeText:'',
    checkValue: [],// 
    isDep: false,// 显隐复选列表
    items1:[{
      name:'你好，李经理',
      checked:false,
      value:'1'
    },{
      name:'你好，你是产品部门李经理吗？',
      checked:false,
      value:'2'
    }],
    items2:[{
      name:'好的好的，经理有什么需要帮忙的嘛？',
      checked:false,
      value:'1'
    },{
      name:'收到',
      checked:false,
      value:'2'
    },{
      name:'好的，经理',
      checked:false,
      value:'3'
    }],
    items3:[{
      name:'嗯嗯，有空的，您说',
      checked:false,
      value:'1'
    },{
      name:'是什么事啊？',
      checked:false,
      value:'2'
    },{
      name:'今天比较忙，这两天都忙着加班，可能没有时间',
      checked:false,
      value:'3'
    },{
      name:'您先说是什么事',
      checked:false,
      value:'3'
    }],
    items4:[{
      name:'那您开完会我们电话联系',
      checked:false,
      value:'1'
    },{
      name:'好的，好的，您说',
      checked:false,
      value:'2'
    },{
      name:'那您发信息说吧',
      checked:false,
      value:'3'
    }],
    items5:[{
      name:'抱歉，我现在身上也没有可周转的钱',
      checked:false,
      value:'1'
    },{
      name:'没问题，需要怎么安排',
      checked:false,
      value:'2'
    },{
      name:'骗子吧，谁家领导会找员工转钱啊',
      checked:false,
      value:'3'
    },{
      name:'您同学是哪个公司的啊',
      checked:false,
      value:'3'
    }],
    items6:[{
      name:'抱歉，我现在身上也没有可周转的钱',
      checked:false,
      value:'1'
    },{
      name:'好的，我知道了。那我给你个银行卡号。',
      checked:false,
      value:'2'
    },{
      name:'支付宝账户可以吗？',
      checked:false,
      value:'3'
    }],
    items7:[{
      name:'这样，还需要其他的啥吗？',
      checked:false,
      value:'1'
    },{
      name:'这是我常用的银行卡',
      checked:false,
      value:'2'
    },{
      name:'这个可以吗',
      checked:false,
      value:'3'
    }],
    items8:[{
      name:'不对吧，这个账号好像是有问题',
      checked:false,
      value:'1'
    },{
      name:'那我先去给这个账号汇款，一会联系',
      checked:false,
      value:'2'
    },{
      name:'好的，那两点半联系',
      checked:false,
      value:'3'
    },{
      name:'您这漏洞太大啊，我已经联系警方了，骗子别想跑',
      checked:false,
      value:'3'
    }],
    items9:[{
      name:'好的。',
      checked:false,
      value:'1'
    }],
    items10:[{
      name:'已经转过去了，请查收',
      checked:false,
      value:'1'
    },{
      name:'我的钱不够，所以还没转',
      checked:false,
      value:'2'
    }],
    items11:[{
      name:'这样？我看一下',
      checked:false,
      value:'1'
    },{
      name:'好的好的，我这边查看一下',
      checked:false,
      value:'2'
    },{
      name:'不对啊，一直没收到入账信息，是不是有什么问题啊',
      checked:false,
      value:'3'
    }],
    items12:[{
      name:'不对，再延迟也没这么久！！',
      checked:false,
      value:'1'
    },{
      name:'延迟也太长了',
      checked:false,
      value:'2'
    },{
      name:'报警',
      checked:false,
      value:'3'
    },{
      name:'好的，那我明天再看看',
      checked:false,
      value:'3'
    }],
    items13:[{
      name:'再一次拨打电话',
      checked:false,
      value:'1'
    }],
  },
 
  onLoad: function (options) {
    initData(this);
    this.setData({
      picHead: app.globalData.userInfo.avatarUrl,
    });
    console.log(this.data.msgList)
    var that = this;
      var items = that.data.items1
    that.setData({
      checkValue: checkValue,//顶部复选框 选中的值显示
      checkboxArr: items//复选框弹框 字典赋值
    })
  },
 
  // // 获取聚焦,键盘弹起
  // focus: function(e) {
  //   keyHeight = e.detail.height;
  //   this.setData({
  //     scrollHeight: (windowHeight - keyHeight) + 'px'
  //   });
  //   this.setData({
  //     toView: 'msg-' + (msgList.length - 1),
  //     inputBottom: keyHeight + 'px'
  //   })
  // },
 
  // //失去聚焦(软键盘消失)
  // blur: function(e) {
  //   this.setData({
  //     scrollHeight: '100vh',
  //     inputBottom: 0
  //   })
  //   this.setData({
  //     toView: 'msg-' + (msgList.length - 1)
  //   })
 
  // },
 
  // // 发送点击监听
  // sendClick: function(e) {
  //   msgList.push({
  //     speaker: 'customer',
  //     contentType: 'text',
  //     content: e.detail.value
  //   })
  //   inputVal = '';
  //   this.setData({
  //     msgList,
  //     inputVal
  //   });
  // },
 
  // // nav栏返回
  // onClickLeft() {
  //   wx.reLaunch({
  //     url: '/pages/message/message',
  //   })
  // },

  isDep: function () {  //控制 弹框的显隐
    this.setData({//弹框显示，地图隐藏
      isDep: true,
      mapHide: true
    })
  },
  // 确定按钮
  confirm: function () {
    var that = this;
    checkValue = [];
    var fpTypeText = '';
    kindStr = [];
    checkValue = that.data.checkboxArr.map(item => {
      if (item.checked) {
        kindStr.push(item.value);
        fpTypeText += item.name + ',';
        return { name: item.name }
      }
    })
    fpTypeText = fpTypeText.substring(0, fpTypeText.length - 1);//去掉数组中最后一个逗号
    console.log(fpTypeText)
    that.setData({
      isDep: false,
      fpTypeText: fpTypeText,
      checkValue: checkValue
    })

    // 添加自己的选择
    msgList.push({
      speaker: 'customer',
      contentType: 'text',
      content: fpTypeText
    })
    console.log(msgList)
    // 添加对面的话 
    if(msgList.length==5){
      msgList.push({
        speaker: 'server',
        contentType: 'text',
        content: "是的，这是我的个人微信，备注一下，方便以后联系"
      })
      var items = this.data.items2
    }
    else if(msgList.length==7){
      msgList.push({
        speaker: 'hint',
        contentType: 'text',
        content: "中午 11:51"
      })
      msgList.push({
        speaker: 'server',
        contentType: 'text',
        content: "现在有空吗？有点事托你办一下"
      })
      msgList.push({
        speaker: 'server',
        contentType: 'text',
        content: "临时有个会议还没来得及安排"
      })
      var items = this.data.items3
    }
    else if(msgList.length==11){
      msgList.push({
        speaker: 'customer',
        contentType: 'text',
        content: "您这边方便通话吗?"
      })
      msgList.push({
        speaker: 'img1',
        contentType: 'text',
        content: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180228%2F0885e49c164e4076968bf1853d609f10.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654316481&t=3c4b73d19e23192d2b4472de5bba0a60"
      })
      msgList.push({
        speaker: 'server',
        contentType: 'text',
        content: "在开会，可能不太方便"
      })
      var items = this.data.items4
    }
    else if(msgList.length==15){
      msgList.push({
        speaker: 'server',
        contentType: 'text',
        content: "是这样，我想安排个款到你那里过渡一下?"
      })
      msgList.push({
        speaker: 'server',
        contentType: 'text',
        content: "你再帮我安排给我同学"
      })
      msgList.push({
        speaker: 'server',
        contentType: 'text',
        content: "是这样的，同学公司急需些资金周转，我想转你卡上然后通过你帮忙转到我同学公司。        同学那边我也好说这笔资金是暂借朋友的应急，这样方便日后收回容易些。也顺便还我同学一个人情"
      })
      msgList.push({
        speaker: 'hint',
        contentType: 'text',
        content: "中午 12:03"
      })
      var items = this.data.items5
    }
    else if(msgList.length==20){
      msgList.push({
        speaker: 'hint',
        contentType: 'text',
        content: "中午 12:15"
      })
      msgList.push({
        speaker: 'server',
        contentType: 'text',
        content: "可能需要你一个银行卡号"
      })
      var items = this.data.items6
    }
    else if(msgList.length==23){
      msgList.push({
        speaker: 'server',
        contentType: 'text',
        content: "你把你的账号拍过来给我，我安排给你"
      })
      msgList.push({
        speaker: 'server',
        contentType: 'text',
        content: "再以你的名义转给他"
      })
      msgList.push({
        speaker: 'img2',
        contentType: 'text',
        content: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinakd20210206ac%2F270%2Fw640h430%2F20210206%2Fc314-kirmaiu4084475.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654319119&t=dd42a21000664229955ecd971f677bd2"
      })
      var items = this.data.items7
    }
    else if(msgList.length==27){
      msgList.push({
        speaker: 'server',
        contentType: 'text',
        content: "可以，我现在安排给你转过去"
      })
      msgList.push({
        speaker: 'server',
        contentType: 'text',
        content: "弄好之后给你回电"
      })
      msgList.push({
        speaker: 'server',
        contentType: 'text',
        content: "两点半你那边方便电话吗？"
      })
      msgList.push({
        speaker: 'server',
        contentType: 'text',
        content: "方便的话我两点半会议结束"
      })
      msgList.push({
        speaker: 'server',
        contentType: 'text',
        content: "李勇   6216695000017714938   中国银行"
      })
      var items = this.data.items8
    }
    else if(msgList.length==33){
      msgList.push({
        speaker: 'server',
        contentType: 'text',
        content: "你帮我安排转过去就可以"
      })
      msgList.push({
        speaker: 'server',
        contentType: 'text',
        content: "好了单子发给我给对方查收过目一下"
      })
      var items = this.data.items9
    }
    else if(msgList.length==36){
      msgList.push({
        speaker: 'server',
        contentType: 'text',
        content: "好了吗？"
      })
      msgList.push({
        speaker: 'hint',
        contentType: 'text',
        content: "下午 1:51"
      })
      msgList.push({
        speaker: 'server',
        contentType: 'text',
        content: "收到回复"
      })
      msgList.push({
        speaker: 'hint',
        contentType: 'text',
        content: "下午 2:01"
      })
      msgList.push({
        speaker: 'server',
        contentType: 'text',
        content: "什么情况了"
      })
      msgList.push({
        speaker: 'hint',
        contentType: 'text',
        content: "下午 2:09"
      })
      var items = this.data.items10
    }
    else if(msgList.length==43){
      msgList.push({
        speaker: 'img3',
        contentType: 'text',
        content: "https://s3.bmp.ovh/imgs/2022/05/05/681b1b77465ea7cb.png"
      })
      msgList.push({
        speaker: 'img3',
        contentType: 'text',
        content: "https://s3.bmp.ovh/imgs/2022/05/05/411a003686c987de.png"
      })
      msgList.push({
        speaker: 'img3',
        contentType: 'text',
        content: "https://s3.bmp.ovh/imgs/2022/05/05/681b1b77465ea7cb.png"
      })
      msgList.push({
        speaker: 'server',
        contentType: 'text',
        content: "好的，我现在通知对方了"
      })
      msgList.push({
        speaker: 'server',
        contentType: 'text',
        content: "多有麻烦了"
      })
      msgList.push({
        speaker: 'hint',
        contentType: 'text',
        content: "下午 5:09"
      })
      msgList.push({
        speaker: 'server',
        contentType: 'text',
        content: "在吗？"
      })
      msgList.push({
        speaker: 'server',
        contentType: 'text',
        content: "这边已经收到，我把钱已经转到你账户了，你注意查收"
      })
      var items = this.data.items11
    }
    else if(msgList.length==52){
      msgList.push({
        speaker: 'server',
        contentType: 'text',
        content: "不可能啊，我这边已经汇款过去了"
      })
      msgList.push({
        speaker: 'img1',
        contentType: 'text',
        content: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181224%2F9d4f1197a4e341ec8a244ba283360bfa.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654322555&t=b11c7a41ff0b74f4d04612b4d0d1359f"
      })
      msgList.push({
        speaker: 'server',
        contentType: 'text',
        content: "你看，这边已经汇款成功"
      })
      msgList.push({
        speaker: 'server',
        contentType: 'text',
        content: "你再看看，如果还不行，可能是跨行汇款有延迟时间，你明天下午再看看"
      })
      var items = this.data.items12
    }
    else if(msgList.length==57){
      msgList.push({
        speaker: 'customer',
        contentType: 'text',
        content: "经理，还是没有到账诶，怎么回事啊？"
      })
      msgList.push({
        speaker: 'hint',
        contentType: 'text',
        content: "早上 10:13"
      })
      msgList.push({
        speaker: 'server',
        contentType: 'text',
        content: "要24小时呢，我昨天下午三点过转的，你下午再看看"
      })
      msgList.push({
        speaker: 'customer',
        contentType: 'text',
        content: "好的"
      })
      msgList.push({
        speaker: 'hint',
        contentType: 'text',
        content: "下午 3:45"
      })
      msgList.push({
        speaker: 'customer',
        contentType: 'text',
        content: "经理，在吗？"
      })
      msgList.push({
        speaker: 'customer',
        contentType: 'text',
        content: "没有到账"
      })
      msgList.push({
        speaker: 'customer',
        contentType: 'text',
        content: "李经理？"
      })
      msgList.push({
        speaker: 'customer',
        contentType: 'text',
        content: "在吗？？"
      })
      msgList.push({
        speaker: 'hint',
        contentType: 'text',
        content: "下午 3:56"
      })
      msgList.push({
        speaker: 'customer',
        contentType: 'text',
        content: "对方无应答"
      })
      
      msgList.push({
        speaker: 'hint',
        contentType: 'text',
        content: "下午 4:01"
      })
      msgList.push({
        speaker: 'customer',
        contentType: 'text',
        content: "对方忙线中"
      })
      var items = this.data.items13
    }
    // else if(msgList.length==71){

    // }
    inputVal = '';
    that.setData({
      msgList,
      inputVal,
      checkboxArr:items
    });

  },


  //取消按钮
  cancel: function () {
    this.setData({
      isDep: false,
      mapHide: false
    })
  },

  //取消提示按钮
  cancel_cancle: function () {
    wx.navigateTo({
      url: '/pages/simulationScenceList/simulationScenceList',
    })
  },

  // 弹框选事件
  checkbox: function (e) {
    console.log(e)
    var idx = e.currentTarget.dataset.index;//获取当前点击的下标
    var checkboxArr = this.data.checkboxArr;//选项集合
    var valCur = checkboxArr[idx].value;
    console.log(valCur)
    for (var i = 0; i < checkboxArr.length; i++) {
      // if (valCur == '1') {//当前选择了 全部
      //   checkboxArr[0].checked = false;
      //   checkboxArr[idx].checked = !checkboxArr[idx].checked;//改变当前选中的checked值
      // } else {
      //   checkboxArr[i].checked = false;
      //   checkboxArr[idx].checked = !checkboxArr[idx].checked;//改变当前选中的checked值
      // }
      if (checkboxArr[i].value == valCur){
        for (var j = 0; j < checkboxArr.length; j++) {
          if (checkboxArr[j].checked && j != i) {
            checkboxArr[j].checked = false;
            }
        }
        checkboxArr[i].checked = !(checkboxArr[i].checked);
        console.log("-----:" ,checkboxArr);
      }
    }
    this.setData({
      checkboxArr: checkboxArr
    });
    console.log(this.data.checkboxArr)
  },

  
  scroll: function (event) {
    console.log(event.detail.scrollTop)
    this.setData({
      scrollTop: event.detail.scrollTop
    });
  },
})