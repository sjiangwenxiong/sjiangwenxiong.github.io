// myorder.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
      default_status:0,
      orders:{}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        var status = options.status;
        var info = '';
        if (status != 0) {
          info = '?status=' + status;
        }
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function (userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        });
        wx.request({
          url: `http://meijiasong.dev/api/orders` + info,
          data:{},
          method:'GET',
          success: function (res) {
            that.setData({
              orders:res.data.data,
              default_status:status
            });
          }
        })
    },
    //订单筛选
    checkStatus: function (e) {
      var that = this;
      var status = e.currentTarget.dataset.status;
      var info = '';
      if (status != 0) {
        info = '?status='+ status;
      }
      wx.request({
        url: `http://meijiasong.dev/api/orders` + info,
        data:{},
        method:'GET',
        success: function (res) {
            that.setData({
              orders: res.data.data,
              default_status:status
            })
          }
      })
    },
    //订单操作
    operateOrder: function (e) {
      var that = this;
      var id = e.currentTarget.dataset.id;
      var status = e.currentTarget.dataset.status;
      wx.request({
        url: `http://meijiasong.dev/api/orders/${id}`,
        data: { id: id, status: status },
        method: 'PUT',
        success: function (res) {
          wx.showToast({
            title: res.data.info,
            icon: res.data.status == 1 ? 'true' : 'false',
            duration: 2000
          });
          if (res.data.status == 1) {
            let orders = that.data.orders;
            orders.map((item, index) => {
              if (id == item.id) {
                item.status = status;
              }
              return item;
            });
            that.setData({
              orders: orders
            })
          }
        }
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