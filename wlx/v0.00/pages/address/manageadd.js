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
      addrLists:{}
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
      
    },
    //设置默认
    setDefault:function(event) {
      R.default_address(this, event);
    },
    //删除地址
    addrDelete: function (event) {
      R.delete_address(this, event);
    },
    //添加地址
    addrCreate: function () {
      wx.navigateTo({
        url: '../address/addaddress'
      })
    },
    addrInfo: function (event) {
      var id = event.currentTarget.dataset.id;
      wx.navigateTo({
        url: '../address/editaddress?id='+id,
      })
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
      var that = this;
      if (this.data.hasOauth) {
        clearInterval(this.intervalInit)
        //获取用户地址列表
        R.get_address(this);
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