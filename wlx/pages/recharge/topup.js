// topup.js
var R = require('../../requests/index');
var genRandStrNum = require('../../utils/util').genRandStrNum;
var MD5 = require('../../utils/md5');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    oauth: {},
    hasOauth: false,
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
    wx.showLoading({
      title: '加载中',
    })
    var that = this;
    // 授权
    if (app.globalData.oauth) {
      that.setData({
        oauth: app.globalData.oauth,
        hasOauth: true
      })
      // //缓存
      // wx.setStorage({
      //   key:"access_token",
      //   data: app.globalData.oauth.access_token
      // });
    } else {
      app.getAccessTokenReadyCallback = res => {
        that.setData({
          oauth: res.data,
          hasOauth: true,
        })
      }
    }
    wx.request({
      url: `http://meijiasong.dev/api/recharge`,
      data: {},
      method: 'GET',
      success: function (res) {
        that.setData({
          cards: res.data.data,
          balance: res.data.balance
        })
      }
    })
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
      var products = [];
      let card = {
        id: cards[key]['id'],
        name: '充值卡'+ cards[key]['name']+'元',
        price: cards[key]['price'],
        attributes: cards[key]['characters'],
        number: 1,
      }
      products.push(card);
      let data = {
        products: products, pay_id: 2, type: 1, amount: card.price, total: card.price
      };
      //创建订单
      R.user_add_order(data, that.data.oauth.access_token, (res) => {
        console.log(res);
        if (res.statusCode === 201) {
          console.log(res.data);
          let obj = {
            timeStamp: (Date.now() / 1000).toString().slice(0, 10),
            nonceStr: genRandStrNum(),
            package: `prepay_id=${res.data.data.prepay_id}`, // 来自于统一下单接口
            signType: 'MD5',
            paySign: ''
          }

          console.log(obj);
          var paySign = this.calcPaySign(obj);
          console.log(paySign);
          Object.assign(obj, {
            paySign: paySign,
            success: function (res) {
              console.log('succeded', res);
              if (res.errMsg == 'requestPayment:ok') {
                that.setData({ obj: null });
                wx.showToast({
                  title: '支付成功',
                  icon: 'success',
                  duration: 2000,
                  success: function () {
                    wx.redirectTo({
                      url: '/pages/orders/submit'
                    });
                  }
                });
              }
            },
            fail: function (err) {
              console.log('failed', err);
              if (err.errMsg == 'requestPayment:fail cancel') {
                wx.showModal({
                  title: '支付提示',
                  content: '支付取消了',
                  confirmText: '我知道了'
                });
              } else {
                wx.showModal({
                  title: '支付提示',
                  content: err.errMsg,
                  showCancel: false,
                  confirmText: '我知道了'
                })
              }
            }
          });
          console.log(obj);
          wx.requestPayment(obj);
        } else if (res.statusCode === 400) {
          console.log(res);
          wx.showModal({
            title: '支付提示',
            content: res.data.amount[0] || res.data.info[0],
          })
        }
      })
  },

  calcPaySign: function (obj) {
    let { timeStamp, nonceStr, signType } = obj;
    // 固定为小程序申请的密钥
    var key = 'MppHnaVWw5mvm5wHvp833WA35h3pZArH';

    var stringSignTemp = `appId=wx7b1271f152ecda86&nonceStr=${nonceStr}&package=${obj.package}&signType=${signType}&timeStamp=${timeStamp}&key=${key}`;
    console.log(stringSignTemp);
    return MD5(stringSignTemp).toUpperCase();
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
      wx.request({
        url: `http://meijiasong.dev/api/users/balance`,
        header: {
          'Authorization': 'Bearer ' + app.globalData.oauth.access_token
        },
        data: {},
        method: 'GET',
        success: function (res) {
          that.setData({
            logs: res.data.data,
            balance: res.data.balance
          });
          wx.hideLoading()
        }
        
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