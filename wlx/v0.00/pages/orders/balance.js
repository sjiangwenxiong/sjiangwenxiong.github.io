// balance.js
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
      address:{},
      totalPrice:'0.00',
      totalCount:'0.00',
      totalAmount:'0.00',
      popErrorMsg:'',
      orderArr:{},
      is_today:1,
      isClick: 1,
      isShow: 1,
      sendDate:'立即送达 （大约 12:35）',
      weeks:{},
      times:{},
      timesIndex:0,
      multiArray:[],
      multiIndex:2, 
      payIds:[],
      payNames: [],
      payIndex:1, 
      cartArray:[],
      status:1,
      remarks:'',

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      var that = this;
      wx.showLoading({
        title: '加载中',
      })
      this.setData({
        status:options.status
      });
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
      
    },
    onShow() {
      this.intervalInit = setInterval(this.init, 500);
    },
    init () {
      var that = this;
      R.getUserData(that);//用户信息
      
      R.get_pays(that);// 支付方式
      var datas = {};
      if (this.data.hasOauth) {
        clearInterval(this.intervalInit)

        R.get_default_address(that);//默认地址
        if(that.data.status == 0) {
          var selectObj = wx.getStorageSync('selectCart')
          if (selectObj) {
            datas = { rowIds: selectObj };
          }
        }
        
        R.order_integral(that, datas); // 订单积分、价格统计
        // if (that.data.cartArray.length == 0) {
        //   wx.navigateTo({
        //     url: '../shop/index'
        //   })
        // }
        R.sendtimes(that);// 配送时间段 
      }
      wx.hideLoading();
    },
    //跳转地址页面
    changeArrderss: function () {
      wx.navigateTo({
        url: '../address/manageadd'
      })
    },
    ohShitfadeOut() {
       var fadeOutTimeout = setTimeout(() => {
          this.setData({ popErrorMsg: '' });
          clearTimeout(fadeOutTimeout);
       }, 2000);
    },
    bindPickerChange: function (e) {
      // console.log('picker发送选择改变，携带值为', e.detail.value)
      var that = this;
      that.setData({
        payIndex: e.detail.value
      })
    },
    bindMultiPickerChange: function (e) {
      console.log(e.detail.value);
      var that = this;
      var times = that.data.times;
      var weeks = that.data.weeks;   
      var index = that.data.timesIndex;
      var time = times[index];
      var value = e.detail.value;
      console.log(weeks[value[0]] + ' ' + time[value[1]]);
      that.setData({
        sendDate: weeks[value[0]] + ' ' + time[value[1]]
      })
    },
    bindMultiPickerColumnChange: function (e) {
      var that = this;
      var index = that.data.timesIndex;
      var timesIndex = index;
      var times =  that.data.times; 
      var weeks = that.data.weeks;      
           
      if (e.detail.column == 0) {
        timesIndex = e.detail.value > 0 ? 1 : 0;
      } 
      if (index != timesIndex) {
        that.setData({
          timesIndex: timesIndex,
          multiArray: [weeks, times[timesIndex]],
        });
      }
    },
    /**
     * 备注
     */
    addText(e) {
      this.setData({
        remarks:e.detail.value
      })
    },
    /**
     * 提交订单
     */
    orderSubmit: function (e) {
        var that = this;
        var address = that.data.address;//地址
        var total = that.data.totalPrice; //总价
        var sendfee = address.sendfee;//配送费用限制
        var send_time = that.data.sendDate; //配送时间
        var payIndex = that.data.payIndex;
        var pay_id = that.data.payIds[that.data.payIndex]; //支付方式
        // console.log(pay_id, that.data.payIndex);
        var amount = payIndex == 1 ? that.data.totalAmount : that.data.totalPrice; //实际价格
        var discount = payIndex == 1 ? that.data.orderArr.money : 0; //优惠
        
        var inte = that.data.orderArr.inte; //兑换积分
        var selectObj = '';
        
        // if (pay_id == 1 && total < user.balance) {
          //
        // }
        if (that.data.status == 0) {
          selectObj = wx.getStorageSync('selectCart')
        }
        if (!address) {
          that.setData({
            popErrorMsg: '请先选址收货地址'
          });
          this.ohShitfadeOut(); 
          return false;
        }
        if (sendfee > amount) {
          that.setData({
            popErrorMsg: '订单总价小于配送标准'
          });
          this.ohShitfadeOut();
          return false;
        }
        
        var datas = { amount: amount, total: total, pay_id: pay_id, discount: discount, inte: inte, send_time: send_time, rowIds: selectObj, remarks: that.data.remarks};
        S.submit_order(that, datas, (res) => {
          if (res.data.status == 0) {
            wx.showModal({
              title: '提示',
              content: '您的余额不足，请使用其他支付方式',
              showCancel: true,
              success: function (ress) {
                if (ress.confirm) {
                  wx.navigateTo({
                    url: '../order/balance'
                  })
                }
              }
            })
          } else {
            pay_id == 2 ? Pay.wx_notify(that, res.data.data.prepay_id, 2) : Pay.other_pay(that, res); 
          }      
        });
        
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

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

    },
})
