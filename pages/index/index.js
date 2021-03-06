//index.js
//获取应用实例
var server = require('../modules/server');
var app = getApp();
Page({
  data: {
    list: [],
    imgSrc:"../../images/search.png",
    inputSrc:"../../images/searchInput.png",
    titleSrc:"../../images/title.png",
    awardSrc:"../../images/open.png",
    diySrc:"../../images/diy.png",
    imgUrls: [
      '../../images/banner1.png',
      '../../images/banner2.png',
      '../../images/banner3.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular:true
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
  goAward: function () {
    wx.navigateTo({
      url: '../award/index'
    })
  }
})
