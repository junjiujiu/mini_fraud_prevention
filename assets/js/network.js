// const fraudurl = "http://192.168.31.240:8080/applet/api"
const fraudurl = "http://82.156.24.143:9000/applet/api"
var app = getApp()

module.exports={
  http:http,
  fraudurl:fraudurl,
}
// 网络请求
function http(url, method, data, succ, fail, com) {
  wx.request({
    url: fraudurl + url,
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