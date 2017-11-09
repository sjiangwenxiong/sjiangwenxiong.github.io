// topup.js
var app = getApp();
var S = require('../../requests/cart');
var R = require('../../requests/index');
var Pay = require('../../requests/pay');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    oauth: {},
    hasOauth: false,
    userData: {},
    balance:'0.00',
    cards:{},
    default_key: 0,
    logs:{},
    merchant_id: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.showLoading({
      title: '加载中',
    })
    // 授权
    if (app.globalData.oauth) {
      this.setData({
        oauth: app.globalData.oauth,
        hasOauth: true
      })
    } else {
      app.getAccessTokenReadyCallback = res => {
        this.setData({
          oauth: res.data,
          hasOauth: true,
        })
      }
    }
    R.get_recharge(that);
  },
  checkCard: function (e) {
      var that = this;
      var key = e.currentTarget.dataset.index;
      that.setData({
        default_key:key
      });
  },
  //充值
  onPay: function (e) {
      var that = this;
      var key = that.data.default_key;
      var cards = that.data.cards;
      if (!cards) {
        wx.showModal({
          title: '提示',
          content: `暂未选择任一充值卡`,
        })
        return;
      }
      var card = {
        id: cards[key]['id'],
        old_name: cards[key]['name'],
        price:cards[key]['price'],
        name: '充值卡' + cards[key]['name'] + '元',
        attributes: cards[key]['characters'],
        number: 1,
      };
      var datas = { amount: cards[key]['price'], total: cards[key]['price'], discount: 0, inte: 0, send_time: '', type:1, cart: card, remarks:'充值' };

      S.submit_order(that, datas, (res) => {
        var prepay_id = res.data.data.prepay_id;
        Pay.wx_notify(that, prepay_id, 1);//微信回调    
      });
  },

  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.intervalInit = setInterval(this.init, 3000);
  },
  init() {
    var that = this;
    if (that.data.hasOauth) {
      clearInterval(that.intervalInit)
      R.getUserData(that);
      //充值记录
      R.get_balances(that, (res) => {
        that.setData({
          logs: res.data.data,
          balance: res.data.balance
        });
        wx.hideLoading()
      });
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  }
})