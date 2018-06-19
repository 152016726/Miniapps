//index.js
//获取应用实例
var server = require('../modules/server');
var app = getApp();
Page({
  data: {
    list: [],
    photolist:[],
    moreSrc:"../../images/more.png",
    activityNameSrc:"../../images/ball.png",
    activityIntroSrc:"../../images/text.png",
    activityTime:"../../images/time.png",
    typeSrc:"../../images/type.png",
    citySrc:"../../images/address.png",
    personSrc:"../../images/person.png"
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
  addPicture: function () {
    var _this=this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        _this.data.photolist=tempFilePaths;
        _this.setData({
          photolist: _this.data.photolist
        })
      }
    })
  },
  pushInfo: function () {
    wx.switchTab({
      url: '../index/index'
    })
  }
})
