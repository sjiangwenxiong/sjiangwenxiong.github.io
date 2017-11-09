var app = getApp();
var S = require('../../requests/cart');
var R = require('../../requests/index');
Page({

    /**
     * 页面的初始数据
     */
    data: {
      oauth: {},
      hasOauth: false,
      hasLocation:false,
      address:'',
      longitude:'',
      latitude: '',
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        // wx.showLoading({
        //   title: '加载中',
        // })
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
    //获取经纬度
    chooseLocation: function (e) {  
        console.log(e)
        var that = this
        wx.chooseLocation({
          success: function (res) {
            if (res.errMsg == "chooseLocation:ok") {
              that.setData({
                hasLocation: true,
                address: res.address,
                longitude: res.longitude,
                latitude: res.latitude
              })
            }
          }
        })
    },
    bindRegionChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        region: e.detail.value
      })
    }, 
    formSubmit: function (e) {
      R.add_address(this, e);
      
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
      // this.intervalInit = setInterval(this.init, 500);
    },
    init() {
      var that = this;
      if (this.data.hasOauth) {
        clearInterval(this.intervalInit)
        R.getUserData(that);
      }
      wx.hideLoading();
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