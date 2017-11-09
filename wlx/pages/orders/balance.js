// balance.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
      oauth: {},
      hasOauth: false,
      address:{},
      total:0,
      amount:0,
      popErrorMsg:'',
      cards: {},
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
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
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
      // 支付方式
      if (app.globalData.payArr) {   
        this.setData({
          payIDs: app.globalData.payArr[0],
          payNames: app.globalData.payArr[1],
          haspayArr: true
        })
      } else {
        app.getPayArrReadyCallback = res => {
          this.setData({
            payIDs: res.data.data[0],
            payNames: res.data.data[1],
            haspayArr: true,
          })
        }
      }
      
    },
    onShow() {
      this.intervalInit = setInterval(this.init, 500);
    },
    init () {
      console.log(45);
      var that = this;
      if (this.data.hasOauth) {
        clearInterval(this.intervalInit)
        wx.request({
          url: `http://meijiasong.dev/api/address/default`,
          data: {},
          method: 'GET',
          success: function (res) {
            that.setData({
              address: res.data.data,
            });
          }
        }),
        // 订单积分、价格统计
        wx.request({
          url: `http://meijiasong.dev/api/orders/integral`,
          data: {},
          header: {
            'Authorization': 'Bearer ' + app.globalData.oauth.access_token
          },
          method: 'POST',
          success: function (res) {
            console.log(res.data.data)
            that.setData({
              orderArr: res.data.data,
              isShow: res.data.data.is_show
            })
          }
        }),
        // 配送时间段
        wx.request({
          url: `http://meijiasong.dev/api/orders/sendtimes`,
          data: {},
          header: {
            'Authorization': 'Bearer ' + app.globalData.oauth.access_token
          },
          method: 'GET',
          success: function (res) {
            var sendtime = '';
            var times = res.data.data.times;
            var time = times[0];
            var weeks = res.data.data.weeks;
            if (res.data.data.istoday == 1) {
              sendtime = '立即送达 （大约' + res.data.data.time + '）';
            } else {
              sendtime = weeks[0] + ' ' + time[0];
            }
            that.setData({
              sendDate: sendtime,
              weeks:weeks,
              times:times,
              multiArray: [weeks, time],
             
            });
            wx.hideLoading()
          }
        }); 
      }
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
      console.log(e.detail.value)
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
      
      // console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    },
    orderSubmit: function (e) {
        var that = this;
        var address = that.data.address;
        var amount = that.data.amount;
        var sendfee = address.sendfee;
        var send_time = that.data.sendDate;
        var pay_id = that.data.payIds[that.data.payIndex];
        if (pay_id == 2) {
          // 抵扣积分？
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
