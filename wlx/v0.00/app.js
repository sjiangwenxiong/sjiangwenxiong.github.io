//app.js
App({
  onLaunch: function () {

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          url: `${this.globalData.host}${this.globalData.version}/register`,
          data: { code: res.code },
          method: 'POST',
          dataType: 'json',
          success: res => {
            if (this.registerReadyCallback) {
              this.registerReadyCallback(res)
            }
          }
        })
      }
    })



    this.registerReadyCallback = res => {
      let { openid } = res.data
      wx.request({
        url: `${this.globalData.host}/oauth/token`,
        data: {
          grant_type: 'password',
          client_id: this.globalData.client_id,
          client_secret: this.globalData.client_secret, // 6lCclMCZW8GDbTA2XETZ6AwyM1EeL64gQpk9luju
          username: openid,
          password: this.globalData.password,
          scope: '*'
        },
        method: 'POST',
        success: res => {
          this.globalData.oauth = res.data

          if (this.getAccessTokenReadyCallback) {
            this.getAccessTokenReadyCallback(res)
          }
        }
      });
    }

    // let that = this;
    // wx.request({
    //   url: `${this.globalData.host}/api/pays`,
    //   data: {},
    //   method: 'GET',
    //   success: function (res) {
    //     that.globalData.payArr = res.data.data;
    //     if (that.getPayArrReadyCallback) {
    //       that.getPayArrReadyCallback(res)
    //     }
    //   }
    // });
  },
  onShow: function() {
    // 获取用户信息
    wx.getSetting({
      success: res => {
        var that = this;
        if (!res.authSetting['scope.userInfo']) {
          wx.authorize({
            scope: 'scope.userInfo',
            success() {
              wx.getUserInfo({
                success: function (res) {
                  console.log(res)
                  var userInfo = res.userInfo
                  that.globalData.userInfo = res.userInfo
                  // 所以此处加入 callback 以防止这种情况
                  // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                  if (that.userInfoReadyCallback) {
                    that.userInfoReadyCallback(res)
                  }
                }
              })
            }
          })
        } else {
          wx.getUserInfo({
            success: function (res) {
              var userInfo = res.userInfo
              that.globalData.userInfo = res.userInfo
              // 所以此处加入 callback 以防止这种情况
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回

              console.log(that)
              if (that.userInfoReadyCallback) {
                that.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    });
  },
  globalData: {
    // payArr: null,
    userInfo: null,
    host: 'http://meijiasong.dev',
    version: '/api',
    uploads: 'uploads',
    accessToken: '',
    tokenType: '',
    client_id: '2',
    client_secret: 'tIkDbVH2WScN5KsVEIalCWVdfEqKYyR9BCVesa37',
    password: 'huishuoit',
    oauth: ''         
  }
})
