//index.js
var server = require('../modules/server')
var app = getApp()
Page({
  data: {
    list: [],
    type: ""
  },
  onLoad: function (option) {
    this.setData({
      type: option.type
    })
    wx.login({
      success: function (loginCode) {
        console.log(loginCode)
        //调用request请求api转换登录凭证  
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wxfddafff0fa8aa3c0&secret=fb0792dc74a9e0ebcb7be963a3f65169&grant_type=authorization_code&js_code=' + loginCode.code,
          header: {
            'content-type': 'application/json'
          },
          success: function (res) {
            console.log(res) //获取openid  
          }
        })
        wx.getUserInfo({
          withCredentials: true,
          success: function (res) {
            console.log(res)
          }
        })
      }
    })
    var that = this;
    wx.request({
      url: 'https://wxfw.17lotto.com/F/lottery/' + option.type,
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      data: server.getData({}),
      success: function (res) {
        var rows = res.data.data.rows;
        res.data.data.rows.forEach(ele => ele.result = ele.result.split(','))
        that.setData({
          list: rows
        })
      }
    })
  },
})
