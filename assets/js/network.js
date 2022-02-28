const fzpurl = "http://127.0.0.1:8037/fraud_prevention"
var app = getApp()

module.exports={
  http:http,
  fzpurl:fzpurl,
}
// 网络请求
function http(url, method, data, succ, fail, com) {
  // 小程序顶部显示Loading
  wx.request({
    url: fzpurl + url,
    method: method,
    data: data,
    header: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    // 成功后的回调
    success: res => {
      console.log(url + ' 返回的data:', res.data);
      if (succ) succ(res);
    },
    fail: err => {
      if (fail) fail(err);
    },
    complete: com => {
    }
  })
}