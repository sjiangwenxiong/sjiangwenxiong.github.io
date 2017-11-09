// manageadd.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        addrLists:{}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        

      console.log(12);
      var that = this;
      //调用应用实例的方法获取全局数据
      // app.getUserInfo(function (userInfo) {
      //   //更新数据
      //   that.setData({
      //     userInfo: userInfo
      //   })
      // });

      console.log(12);
      //获取用户地址
      wx.request({
        url: 'http://meijiasong.dev/api/address',
        data: {},
        method: 'GET',
        success: function (res) {
          that.setData({
            addrLists: res.data.data
          })
        }
      })
    },
    //设置默认
    setDefault:function(event) {
      let that = this;
      var id = event.currentTarget.dataset.id;
      wx.request({
        url:`http://meijiasong.dev/api/address/${id}`,
        data:{is_default:1},
        method: 'PUT',
        success: function (res) {
          wx.showToast({
            title: res.data.info,
            icon: res.data.status == 1 ? 'success' : 'fail',
            duration: 2000
          });
          if (res.data.status == 1) {
            let address = that.data.addrLists;
            address.map( (item, index) => {
              if (id == item.id) {
                item.is_default = 1
              } else {
                item.is_default = 0
              }
              return item;
            });
            that.setData({
              addrLists: address
            })
          }
        }
      })  
    },
    //删除地址
    addrDelete: function (event) {
      let that = this;
      var id = event.currentTarget.dataset.id;
      wx.request({
        url: `http://meijiasong.dev/api/address/${id}`,
        data: {},
        method: 'DELETE',
        success: function (res) {
          wx.showToast({
            title: res.data.info,
            icon: res.data.status == 1 ? 'success': 'fail',
            duration: 2000
          })
          if (res.data.status == 1) {
            let address = that.data.addrLists;
            address.map((item, index) => {
              if (id == item.id) {
                address.splice(index, 1);
              }        
            });
            that.setData({
              addrLists: address
            })
          }
        }
      })
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