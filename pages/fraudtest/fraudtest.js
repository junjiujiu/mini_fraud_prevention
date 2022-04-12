// pages/fraudtest/fraudtest.js
const app = getApp()
const network = require("../../assets/js/network")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal:false,//控制弹窗
    question_number:"",//题号
    showModal_fraudScore:false,//做完后总分弹窗控制
    showModal_oneanswer:false,//没做题弹窗控制
    fraudScroe:0,
    quest: [
      // 单选题
      // 第一题
      {
      id: 1,
      type: 1, //类型，1.单选，2.多选
      question: "1.接到自称是“公检法”工作人员电话，要核实你名下所有资金,转移到安全账户，你会怎么做?(单选）",
      answers: [{
        index: 'A',
        content: '按照电话操作',
        score:0
      }, {
        index: 'B',
        content: '这就是骗子,不要相信',
        score:100
      }]
    },
    // 第二题
     {
      id: 2,
      type: 1,
      question: "2.接到电话:某某(你的名字) ,知道我是谁吗?我现在急需一笔钱，借我用用，你会怎么做?(单选)",
      answers: [{
        index: 'A',
        content: '马上去银行汇款',
        score:0
      }, {
        index: 'B',
        content: '这就是骗子，不要相信',
        score:100
      }]
    },
    // 第三题
    {
      id: 3,
      type: 1, //类型，1.单选，2.多选
      question: "3.一天，你在微信上看到有人发布寻人启事。“求扩散。大宝，男，5岁，身高110cm……”你会转发吗？(单选）",
      answers: [{
        index: 'A',
        content: '会。见不得这种孩子被拐走丢的新闻，看着都心疼。转发一下多几个人看见，找到的希望就多一点。',
        score:100
      }, {
        index: 'B',
        content: '会。随手转发一下不费啥事儿，也不存在信息泄露的问题。',
        score:0
      }, {
        index: 'C',
        content: '不会。这种帖子见得多了，万一文字里隐藏着木马什么的就麻烦了。',
        score:0
      }, {
        index: 'D',
        content: '会。但不会随意拨打里面的联系方式。',
        score:100
      }]
    },
    // 第四题
    {
      id: 4,
      type: 1, //类型，1.单选，2.多选
      question: "4.你的手机有陌生来电，接听后听到“您好，我们是xx中级人民法院，我们查到您涉嫌洗钱，请提供你的资金账户信息，配合调查。”你会提供个人资金账户相关信息吗？(单选）",
      answers: [{
        index: 'A',
        content: '会。配合公检法调查，避免自己账户被坏人利用了都不知道，避免惹上官司。',
        score:0
      }, {
        index: 'B',
        content: '不会。谁知道是不是真正的公检法人员，挂断不理就是了。真要出事儿了肯定还会再打过来的，到时候再说。',
        score:0
      }, {
        index: 'C',
        content: '不会。但会去银行去查查自己的账户现状是否出现异常。',
        score:100
      }]
    },
    // 第五题
    {
      id: 5,
      type: 1, //类型，1.单选，2.多选
      question: "5.同学赵某为大一新生，最近刚学会通过网银绑定支付宝、微信进行购物，她开通哪种网银最恰当?(单选）",
      answers: [{
        index: 'A',
        content: '使用家人银行卡，不用自己再另外办',
        score:0
      }, {
        index: 'B',
        content: '使用本人学校统一开的卡，余额充沛',
        score:0
      }, {
        index: 'C',
        content: '使用同学银行卡，以免购物上当受骗',
        score:0
      }, {
        index: 'D',
        content: '自己专门办理一张银行卡，放入适当资金用于购物。',
        score:100
      }]
    },
    // 第六题
    {
      id: 6,
      type: 1, //类型，1.单选，2.多选
      question: "6.下列不属于涉嫌诈骗的是( )。(单选）",
      answers: [{
        index: 'A',
        content: '自称国家机关人员拨打某同学电话称“您涉嫌重大犯罪',
        score:0
      }, {
        index: 'B',
        content: '中国移动10086发短信通知某同学电话话费余额不足',
        score:100
      }, {
        index: 'C',
        content: '用电话指挥某同学通过ATM机转到所谓的“安全账号”',
        score:0
      }, {
        index: 'D',
        content: '以某同学个人信息进行恐吓威胁要求事主打“封口费”',
        score:0
      }]
    },
    // 第七题
    {
      id: 7,
      type: 1, //类型，1.单选，2.多选
      question: "7.学生熊某想在游戏里充值，此时他应该怎么办?(单选）",
      answers: [{
        index: 'A',
        content: '网上找人帮忙低价充值',
        score:0
      }, {
        index: 'B',
        content: '官方平台充值',
        score:100
      }, {
        index: 'C',
        content: '网上查找便宜充值平台”',
        score:0
      }, {
        index: 'D',
        content: '找游戏玩家充值”',
        score:0
      }]
    },
    // 第八题
    {
      id: 8,
      type: 1, //类型，1.单选，2.多选
      question: "8.春节期间，姚某收到一个朋友发来的微信红包，当领取时发现需要输入验证码,姚某应该怎么做？(单选）",
      answers: [{
        index: 'A',
        content: '微信红包不需要验证码，要谨慎',
        score:100
      }, {
        index: 'B',
        content: '发微信询问好友是否真的',
        score:0
      }, {
        index: 'C',
        content: '输入验证码',
        score:0
      }]
    },
    // 第九题
    {
      id: 9,
      type: 1, //类型，1.单选，2.多选
      question: "9.有效防止陷入诈骗的做法是()(单选）",
      answers: [{
        index: 'A',
        content: '接听来路不明的电话',
        score:0
      }, {
        index: 'B',
        content: '发微信询问好友是否真的',
        score:50
      }, {
        index: 'C',
        content: '接听来路不明的电话并透露家人及自己的信息',
        score:0
      },{
        index:'D',
        content:'打电话询问好友是否属实',
        score:100
      }]
    },
    // 第十题
    {
      id: 10,
      type: 1, //类型，1.单选，2.多选
      question: "10.当遭遇诈骗后，及时拨打哪个电话可挽回损失?(单选）",
      answers: [{
        index: 'A',
        content: '96110',
        score:100
      }, {
        index: 'B',
        content: '95110',
        score:0
      }, {
        index: 'C',
        content: '97110',
        score:0
      }, {
        index: 'D',
        content: '94110',
        score:0
      }]
    },
    // 第十一题
    {
      id: 11,
      type: 1, //类型，1.单选，2.多选
      question: "11.黄大嫂在XX农商银行孛畈支行办理汇款业务，支行行长及主管会计，却劝说黄大嫂终止该笔业务，可能是什么原因? (单选）",
      answers: [{
        index: 'A',
        content: '银行看不起山里人，故意刁难村妇',
        score:0
      }, {
        index: 'B',
        content: '四万八千多元存款太多了，需要预约',
        score:0
      }, {
        index: 'C',
        content: '黄大嫂很有可能被诈骗了”',
        score:100
      }, {
        index: 'D',
        content: '黄大嫂的钱来路不正',
        score:0
      }]
    },
    // 第十二题
    {
      id: 12,
      type: 1, //类型，1.单选，2.多选
      question: "12.XX市某女士在刷抖音时，看到了一条点赞加关注领红包的消息后，她真的领到了5元钱，接下来不可能发生的是?  (单选）",
      answers: [{
        index: 'A',
        content: '再点赞、再领钱，再点赞、再领钱',
        score:100
      }, {
        index: 'B',
        content: '被拉进刷单、抢单群',
        score:0
      }, {
        index: 'C',
        content: '刷单来的钱不能提现，需要充值黄金会员才能提现',
        score:0
      }, {
        index: 'D',
        content: '刷单的钱一去不复返',
        score:0
      }]
    },
    // 第十三题
    {
      id: 13,
      type: 1, //类型，1.单选，2.多选
      question: "13.当您的朋友突然通过微信或QQ向您借钱时，正确的做法是( )  (单选）",
      answers: [{
        index: 'A',
        content: '先让对方写个借条，拍照发过来留个依据再借',
        score:0
      }, {
        index: 'B',
        content: '朋友有困难，赶紧汇款帮忙',
        score:0
      }, {
        index: 'C',
        content: '换途径与好友联系，询问求证',
        score:100
      }, {
        index: 'D',
        content: '通过QQ聊天继续询问详情',
        score:0
      }]
    },
    // 第十四题
    {
      id: 14,
      type: 1, //类型，1.单选，2.多选
      question: "14.曾聪明忽然收到一- 条微信好友申请，- .名美女头像的人发来申请消息:聪明，我姐姐让我加你，有事请教- - 下。曾聪明看到对方直呼其名，而且是他姐姐让加的，便激动万分，请问，曾聪明接下来不可能会遇到什么?  (单选）",
      answers: [{
        index: 'A',
        content: '通过一番聊天，发现是自己的真名天女，很快结婚生子走上人生巅峰。',
        score:100
      }, {
        index: 'B',
        content: '不停地被拉进股票投资群、贵金属投资群，投资后发现被骗。',
        score:0
      }, {
        index: 'C',
        content: '聊完发现对方是个卖茶叶的上进姓，花2888元买了三斤茶叶',
        score:0
      }, {
        index: 'D',
        content: '原来对方是个支教老师，为了支持山区教育捐款4000元。',
        score:0
      }]
    },
    // 第十五题
    {
      id: 15,
      type: 1, //类型，1.单选，2.多选
      question: "15.李某接到短信，称其参与《创造营2021》栏目活动中了大奖,缴纳税金后即可领奖，正确的做法是( )  (单选）",
      answers: [{
        index: 'A',
        content: '与对方联系，并按提示汇入款项，等通知去领奖。',
        score:0
      }, {
        index: 'B',
        content: '查询短信电话，确认中奖再付款。',
        score:0
      }, {
        index: 'C',
        content: '对该短信置之不理，同时提醒同伴防范。',
        score:100
      }]
    },

    // 判断题
    // 第十六题
    {
      id: 16,
      type: 1, //类型，1.单选，2.多选
      question: "16.这天楼大爷接到一个电话，对方-接通就喊道: “爸，我捡到10万块钱，过两天给你寄回去，但是被我同事发现了，他要求分给他2万元，不给就要报警，你能不能先给我汇过来。”-想到儿子要出事，楼大爷便急忙到银行去汇钱了。[判断题]",
      answers: [{
        index: '',
        content: '  对',
        score:0
      }, {
        index: '',
        content: '  错',
        score:100
      }]
    },
    // 第十七题
    {
      id: 17,
      type: 1, //类型，1.单选，2.多选
      question: "17.赵某在手机上搜索贷款软件，并下载了贷款APP,通过客服的指示进行操作，并将自己的银行卡号、密码、验证码录入该APP。[判断题]",
      answers: [{
        index: '',
        content: '  对',
        score:0
      }, {
        index: '',
        content: '  错',
        score:100
      }]
    },
    // 十8题
    {
      id: 18,
      type: 1, //类型，1.单选，2.多选
      question: "18.张某在抖音认识了一个女孩，双方添加微信好友并发展为恋人关系，在恋爱一年后，女孩称要投资一个工程项目，而且利润丰富，要张某一起投资。张某表示同意出资，但将女孩微信删除。[判断题]",
      answers: [{
        index: '',
        content: '  对',
        score:100
      }, {
        index: '',
        content: '  错',
        score:0
      }]
    },
    // 十9题
    {
      id: 19,
      type: 1, //类型，1.单选，2.多选
      question: "19.王小姐接到020110的电话，对方告知王小姐因涉嫌毒品交易需要对王小姐的银行存款进行检验，王小姐根据对方的要求进行操作。[判断题]",
      answers: [{
        index: '',
        content: '  对',
        score:0
      }, {
        index: '',
        content: '  错',
        score:100
      }]
    },
    // 20题
    {
      id: 20,
      type: 1, //类型，1.单选，2.多选
      question: "20.退休教师孙某患有严重肩周炎，在网上搜索治疗肩周炎药物，发现一名为“解放军军医大学张教授”的网友对肩周疾病非常有研究，遂添加好友聊天，并从该人手中购买了多种药物。[判断题]",
      answers: [{
        index: '',
        content: '  对',
        score:0
      }, {
        index: '',
        content: '  错',
        score:100
      }]
    },
    // 21题
    {
      id: 21,
      type: 1, //类型，1.单选，2.多选
      question: "21.退休教师孙某患有严重肩周炎，在网上搜索治疗肩周炎药物，发现一名为“解放军军医大学张教授”的网友对肩周疾病非常有研究，遂添加好友聊天，并从该人手中购买了多种药物。[判断题]",
      answers: [{
        index: '',
        content: '  对',
        score:0
      }, {
        index: '',
        content: '  错',
        score:100
      }]
    },

    // 多选题
    // 第22题
    {
      id: 22,
      type: 2,
      question: "22.你的QQ或微信有人发信息问：“在么？最近出了点事儿，急需用钱，给哥们儿借点。”你仔细一看，是熟悉人的昵称和头像，因为出车祸、患重病等急事钱不凑手很着急。你会直接给借钱吗？(多选)",
      answers: [{
        index: 'A',
        content: '会。是平时常联系的熟人，谁还没个困难的时候，给朋友救急义不容辞。',
        score:0
      }, {
        index: 'B',
        content: '不会。估计是骗子，真要是到能开口借钱的关系，不会打电话或亲自来吗？',
        score:50
      }, {
        index: 'C',
        content: '不会。要先通过多种方式和本人核实后，如果是真的再量力而行能帮则帮。',
        score:50
      }]
    },
    // 23题
    {
      id: 23,
      type: 2,
      question: "23.你的朋友圈里有晒娃晒工作也有微商在发消息。一天，你在朋友圈看到有人发消息：“亲，正品海外代购，假一赔十，我家肯定是全网最低价。”海外代购的物品是你需要的，你会直接下单付款吗？(多选)",
      answers: [{
        index: 'A',
        content: '会。朋友圈经常代购的微商，可以尝试一下，毕竟平时网购也是没见面卖家啊。',
        score:0
      }, {
        index: 'B',
        content: '会。前提是先私聊，详细询问并要求对方出示有效证件，并将对话截图做保证。',
        score:50
      }, {
        index: 'C',
        content: '不会。不太信任朋友圈这些所谓正规微商，还是找现实中的熟人或熟人的朋友代购。',
        score:50
      }]
    },
    // 24题
    {
      id: 24,
      type: 2,
      question: "24.电信诈骗已经成为一一个完善的产业链条，骗子之间的分王也越来越明确，诈骗界的“黑话”语系也逐渐形成。下 列诈骗界的“黑话”与解释对应正确的是:(多选)",
      answers: [{
        index: 'A',
        content: '料:银行卡四件套信息',
        score:25
      }, {
        index: 'B',
        content: '水房:专门的洗钱集团',
        score:25
      }, {
        index: 'C',
        content: '菠菜:博彩的谐音，一般指博彩业',
        score:25
      }, {
        index: 'D',
        content: '猪蹄:主推的谐音，指博彩中介',
        score:25
      }]
    },
    // 25题
    {
      id: 25,
      type: 2,
      question: "25.王某收到陌生人电话，称有一款理财产品回报率高，便去银行汇款，银行工作人员怕其上当阻止，王某应该怎么办?(多选)",
      answers: [{
        index: 'A',
        content: '投诉该工作人员',
        score:0
      }, {
        index: 'B',
        content: '听取银行工作人员建议，谨慎考虑',
        score:50
      }, {
        index: 'C',
        content: '换一家银行汇入',
        score:0
      }, {
        index: 'D',
        content: '与公安机关联系，确认是否有诈骗嫌疑',
        score:50
      }]
    },
  ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

   // 点击问题答案触发事件
   answerSelected(e) {
    let outidx = e.currentTarget.dataset.outidx;
    let idx = e.currentTarget.dataset.idx;
    let question = this.data.quest[outidx];
    if (question.type == 1) {
      //单选
      for (let item of question.answers) {
        item.selected = false;
      }
      question.answers[idx].selected = true;
      this.setData({
        quest: this.data.quest
      });
    } else if (question.type == 2) {
      //多选
      question.answers[idx].selected = !question.answers[idx].selected;
      this.setData({
        quest: this.data.quest
      });
    }
  },
 
  // 点击提交按钮
  calculateScore:function(e) {
    console.log(e)
    let {
      quest
    } = this.data;
    //用来保存选中的答案
    console.log(quest)
    let answerSelected = [];
    let allscore = 0;
    for (let questItem of quest) {
      if (questItem.type == 1) { //处理单选题
        let isSelected = false;
        // console.log(questItem.answers)
        for (let answerItem of questItem.answers) {
          if (answerItem.selected) {
            //答案被选中
            isSelected = true;
            answerSelected.push(answerItem.score);
            allscore = allscore + answerItem.score;
          }
        }
        if (!isSelected) {
          //如果一个都没选
          console.log(answerSelected.index)
          answerSelected.push('');
          this.setData({
            showModal_oneanswer: true,
            question_number:questItem.id
          })
          console.log(this.data.question_number)
          return;
        }
      } 
      else { //处理多选题
        let multiAnswer = [];
        let isSelected = false;
        for (let answerItem of questItem.answers) {
          if (answerItem.selected) {
            //答案被选中
            console.log(answerItem)
            isSelected = true;
            multiAnswer.push(answerItem.score);
            allscore = allscore + answerItem.score;
          }
          else{
          }
        }
        // 如果选项都没有选择的话
        if(!isSelected){
          // console.log(questItem)
          this.setData({
            showModal_oneanswer: true,
            question_number:questItem.id
          })
          console.log(this.data.question_number)
          return;
        }
        answerSelected.push(multiAnswer.join(','));
      }
    }
    console.log(answerSelected);
    allscore = allscore/25  //取平均分
    console.log(allscore)
    allscore = 100-allscore  //取反
    allscore = allscore.toFixed()   //取整数
    this.data.fraudScroe = allscore
    console.log(allscore)
    // 打开提示用户是否提交数据弹窗
    this.setData({
      showModal: true,
      fraudScroe:this.data.fraudScroe
    })
    console.log(this.data.fraudScroe)
  },
// 确定提交答案吗？关闭弹窗
  setFraudScore:function(){
    this.setData({
      showModal: false,
      showModal_fraudScore:true,
      fraudScroe:this.data.fraudScroe
    })
  },
  //点击灰调部分关闭弹窗
  cancelSetFraudScore:function(){
    this.setData({
      showModal: false,
    })
  },

// 关闭总分数的弹窗
  closeDialogue: function() { 
    console.log(this.data.fraudScroe)
    network.http("/user/"+app.globalData.userid,"PUT",{
      Id:app.globalData.userid,
      swindledNum:this.data.fraudScroe
    },res=>{
      if(res.data.code==0){
        console.log(res.data.data)
        // 跳转我的页面查看被诈骗指数
        wx.switchTab({
          url: '/pages/my/my',
        })
      }
    })
   },
  //  关闭有题目没做的弹窗
   closeHintForOneAnswer(){
    this.setData({
      showModal_oneanswer: false
    })
   }
})