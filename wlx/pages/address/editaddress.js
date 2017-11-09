// editaddress.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    addrInfo:{},
    hasLocation: false,
    address: '',
    longitude: '',
    latitude: '',
    // region: ['广东省', '广州市', '海珠区'],
    // customItem: '全部'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var addrId = options.id;
    that.setData({
      id: addrId
    })


    wx.request({
      url: `http://meijiasong.dev/api/address/${addrId}`,
      data: {},
      method: 'GET',
      success: function (res) {
        console.log(res.data.data);
        that.setData({
          // region: res.data.data.areas,
          address: res.data.data.areas,
          longitude: res.data.data.longitude,
          latitude: res.data.data.latitude,
          addrInfo: res.data.data,    
        })

      }
    });
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
    var that = this;
    var id = that.data.id;
    var formDatas = e.detail.value;

    wx.request({
      url: `http://meijiasong.dev/api/address/${id}`,
      data: {
        latitude: that.data.latitude,
        longitude: that.data.longitude,
        areas: that.data.address,
        ...formDatas
      },
      method: 'PUT',
      success: function (res) {
        console.log(res.data.info);
        wx.showToast({
          title: res.data.info,
          icon: res.data.status == 1 ? 'success' : 'fail',
          duration: 2000
        })
        if (res.data.status == 1) {
          wx.navigateTo({
            url: '../address/manageadd',
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