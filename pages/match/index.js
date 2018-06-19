//index.js
//获取应用实例
var server = require('../modules/server')
var app = getApp();
Page({
  data: {
    imgIdx:0,
    list: [],
    stsData: {
      activeIdx: 0,
    },
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    },
    mainImg_f: '../../images/match_f.jpg',
    mainImg_b: '../../images/match_b.jpg'
  },
  tapFn: function (e) {
    this.setData({
      imgIdx: e.currentTarget.dataset.index,
      stsData: {
        activeIdx: e.currentTarget.dataset.index
      }
    })
  },
  //事件处理函数
  onReady: function () {

  }
},
)
