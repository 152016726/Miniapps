//index.js
//获取应用实例
var server = require('../modules/server')
var app = getApp();
console.log(app);
Page({
  data: {
    list: []
  },
  //事件处理函数
  onReady: function () {
    var that = this;
    wx.request({
      url: 'https://wxfw.17lotto.com/F/lottery', //仅为示例，并非真实的接口地址
      data: server.getData({}),
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      success: function (res) {
        console.log('success..............');
        //that.data.list=res.data.data
        that.setData({
          list: res.data.data,
          //list: res.data.data.filter(function (ele, index) { return index == 0 || index ==2})
        })
      }
    })
  },
  bindViewTap: function (e) {
    wx.navigateTo({
      url: '../detail/index?type=' + e.currentTarget.dataset.index
    })
  },
})
