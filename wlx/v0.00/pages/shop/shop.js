// shop.js
var R = require('../../requests/index');
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
      oauth: {},
      hasOauth: false,
      logo:'/assets/logo.png',
      notice:'新客户首购桶装水需付桶押金30元每个，不用可退。',
      image: ['/assets/logo.png', '/assets/logo.png', '/assets/logo.png'],
      shopInfo:{},
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
      this.intervalInit = setInterval(this.init, 500);
    },
    init() { 
      if (this.data.hasOauth) {
        clearInterval(this.intervalInit)
        var that = this;
        R.get_shop_info(that, (res) => {
          that.setData({
            shopInfo: res.data.data,
            logo: res.data.data.logo,
            images: res.data.data.pictures
          })
        }),
        R.get_shop_notice(that, (res) => {
          that.setData({
            notice: res.data.data.value
          })
        })
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