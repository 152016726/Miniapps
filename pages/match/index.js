//index.js
//获取应用实例
var server = require('../modules/server')
var app = getApp();
console.log(app);
Page({
  data: {
    list: [],
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    },
    mainImg: '../../images/match.jpg'
  },
  //事件处理函数
  onReady: function () {

  }
})
