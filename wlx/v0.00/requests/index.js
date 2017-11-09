let baseUrl = 'http://meijiasong.dev/api';
//是否开业时间
const checkOpen = (that) => {
  var access_token = that.data.oauth.access_token;
  wx.request({
    url: `${baseUrl}/checkopen`,
    data: {},
    method: 'GET',
    header: { 'Authorization': `Bearer ${access_token}` },
    success: function (res) {
      // typeof success == "function" && success(res);
      that.setData({
        showTime:res.data.data
      });
    }
  })
}
//商家信息
const get_shop_info = (that, success) => {
  var access_token = that.data.oauth.access_token;
  wx.request({
    url: `${baseUrl}/shop`,
    data: {},
    method: 'GET',
    header: { 'Authorization': `Bearer ${access_token}` },
    success: function (res) {
      typeof success == "function" && success(res);
    }
  })
}

//最新公告
const get_shop_notice = (that, success) => {
  var access_token = that.data.oauth.access_token;
  wx.request({
    url: `${baseUrl}/notice`,
    data: {},
    method: 'GET',
    header: { 'Authorization': `Bearer ${access_token}` },
    success: function (res) {
      typeof success == "function" && success(res);
    }
  })
}

//商品详情
const get_shop_detail = (id, success) => {
  var id = id;
  wx.request({
    url: `${baseUrl}/detail/${id}`,
    data: {},
    method: 'GET',
    success: function (res) {
      typeof success == "function" && success(res);
    }
  })
}
//充值卡列表
const get_recharge = (that) => {
  var access_token = that.data.oauth.access_token;
  wx.request({
    url: `${baseUrl}/recharge`,
    data: {},
    method: 'GET',
    header: { 'Authorization': `Bearer ${access_token}` },
    success: function (res) {
      that.setData({
        cards:res.data.data
      })
    }
  })
}

const get_integrals = (that, success) => {
  var access_token = that.data.oauth.access_token;
  wx.request({
       url: `${baseUrl}/users/integral`,
       header: {
         'Authorization': 'Bearer ' + access_token
       },
       data: {},
       method: 'GET',
       success: function (res) {
         typeof success == "function" && success(res);
       }
  })
}

const get_balances = (that, success) => {
  var access_token = that.data.oauth.access_token;
  wx.request({
       url: `${baseUrl}/users/balance`,
       header: {
         'Authorization': 'Bearer ' + access_token
       },
       data: {},
       method: 'GET',
       success: function (res) {
         typeof success == "function" && success(res);
       }
  })
}

const get_orders = (that, status) => {
  var access_token = that.data.oauth.access_token;
  var info = '';
  if (status != 0) {
    info = '?status=' + status;
  }
  wx.request({
      url: `${baseUrl}/orders` + info,
      data: {},
      method: 'GET',
      header: {
        'Authorization': 'Bearer ' + access_token
      },
      success: function success(res) {
        that.setData({
          orders: res.data.data,
          default_status: status
        });
        // typeof success == "function" && success(res);
      }
  });
}

const get_order_counts = (that) => {
    var access_token = that.data.oauth.access_token;
    wx.request({
     url:`${baseUrl}/orders/counts`,
     data:{},
     method:'GET',
     header: {
       'Authorization': 'Bearer ' + access_token
     },
     success: function (res) {
       that.setData({
         counts:res.data.data
       });
     }
   })
}

const get_order_info = (that) => {
    var id = that.data.id;
    var access_token = that.data.oauth.access_token;
    wx.request({
     url: `${baseUrl}/orders/${id}`,
     data:{},
     method:'GET',
     header: {
         'Authorization': 'Bearer ' + access_token
     },
     success: function (res) {
       that.setData({
         orderInfo:res.data.data
       });
     }
   })
}

const getUserData = (that) => {
  var access_token = that.data.oauth.access_token;
  wx.request({
     url:`${baseUrl}/users`,
     data:{},
     method:'GET',
     header: {
       'Authorization': 'Bearer ' + access_token
     },
     success: function (res) {
       that.setData({
         userData: res.data.data
       });
     }
  })
}

const operate_order = (that, e) => {
  var id = e.currentTarget.dataset.id;
  var status = e.currentTarget.dataset.status;
  var access_token = that.data.oauth.access_token;
  wx.request({
       url: `${baseUrl}/orders/${id}`,
       data: { id: id, status: status },
       method: 'PUT',
       header: {
         'Authorization': 'Bearer ' + access_token
       },
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
  });
}
const get_address = (that) => {
  var access_token = that.data.oauth.access_token;
  wx.request({
     url: `${baseUrl}/address`,
     data: {},
     method: 'GET',
     header: {
       'Authorization': 'Bearer ' + access_token
     },
     success: function (res) {
       that.setData({
         addrLists: res.data.data
       })
     }
   })
}

const add_address = (that, e) => {
    var access_token = that.data.oauth.access_token;
    var formDatas = e.detail.value;
    wx.request({
      url:`${baseUrl}/address`,
      data: {
        latitude: that.data.latitude,
        longitude: that.data.longitude,
        areas: that.data.address,
        ...formDatas
      },
      method:'POST',
      header: {
        'Authorization': 'Bearer ' + access_token
      },
      success: function (res) {
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
}

const edit_address = (that, e) => {
    var id = that.data.id;
    var formDatas = e.detail.value;
    var access_token = that.data.oauth.access_token;
    wx.request({
      url: `${baseUrl}/address/${id}`,
      data: {
        latitude: that.data.latitude,
        longitude: that.data.longitude,
        areas: that.data.address,
        ...formDatas
      },
      method: 'PUT',
      header: {
       'Authorization': 'Bearer ' + access_token
      },
      success: function (res) {
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
}
const default_address = (that, e) => {
  var id = e.currentTarget.dataset.id;
  var access_token = that.data.oauth.access_token;
  wx.request({
    url:`${baseUrl}/address/${id}`,
    data:{is_default:1},
    method: 'PUT',
    header: {
         'Authorization': 'Bearer ' + access_token
    },
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
}

const get_address_single = (that) => {
  var id = that.data.id;
  var access_token = that.data.oauth.access_token;
  wx.request({
      url: `${baseUrl}/address/${id}`,
      data: {},
      method: 'GET',
      header: {
       'Authorization': 'Bearer ' + access_token
     },
      success: function (res) {
        that.setData({
          address: res.data.data.areas,
          longitude: res.data.data.longitude,
          latitude: res.data.data.latitude,
          addrInfo: res.data.data,
        })
      }
  });
}

const delete_address = (that, e) => {
  var id = e.currentTarget.dataset.id;
  var access_token = that.data.oauth.access_token;
  wx.request({
    url: `${baseUrl}/address/${id}`,
    data: {},
    method: 'DELETE',
    header: {
       'Authorization': 'Bearer ' + access_token
    },
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
}

//添加订单，获取用户， 购物车
const user_add_order = (data, access_token, success) => {
  wx.request({
    url: `${baseUrl}/wechat`,
    data: data,
    method: 'POST',
    header: { 'Authorization': `Bearer ${access_token}` },
    success: function (res) {
      typeof success == "function" && success(res);
    }
  })
}

const get_pays = (that) => {
  wx.request({
     url: `${baseUrl}/pays`,
     data: {},
     method: 'GET',
     header: {
       'Authorization': 'Bearer ' + that.data.oauth.access_token
     },
     success: function (res) {
        that.setData({
            payIds: res.data.data[0],
            payNames: res.data.data[1],
            haspayArr: true,
        })
     }
   });
}
const get_default_address = (that) => {
  wx.request({
    url: `${baseUrl}/address/default`,
    data: {},
    method: 'GET',
    header: {
      'Authorization': 'Bearer ' + that.data.oauth.access_token
    },
    success: function (res) {
      that.setData({
        address: res.data.data,
      });
    }
  })
}

const order_integral = (that, data) => {
  wx.request({
     url: `${baseUrl}/orders/integral`,
     data: data,
     method: 'POST',
     header: {
       'Authorization': 'Bearer ' + that.data.oauth.access_token
     },
     success: function (res) {
       that.setData({
         totalPrice:res.data.data.total,
         totalAmount:res.data.data.amount,
         totalCount:res.data.count,
         orderArr: res.data.data,
         isShow: res.data.data.is_show,
         cartArray:res.data.carts,
       })
     }
   })
}
const sendtimes = (that) => {
  wx.request({
    url: `${baseUrl}/orders/sendtimes`,
    data: {},
    header: {
      'Authorization': 'Bearer ' + that.data.oauth.access_token
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
    }
  });
}
module.exports = {
  checkOpen:checkOpen,
  getUserData:getUserData,
  get_recharge:get_recharge,
  get_integrals:get_integrals,
  get_balances:get_balances,
  //order
  get_orders:get_orders,
  get_order_counts:get_order_counts,
  get_order_info:get_order_info,
  operate_order:operate_order,
  //ddress
  get_address:get_address,
  get_address_single:get_address_single,
  add_address:add_address,
  delete_address:delete_address,
  default_address:default_address,
  edit_address:edit_address,
  //shop
  user_add_order: user_add_order,
  get_shop_info: get_shop_info,
  get_shop_notice: get_shop_notice,
  get_shop_detail: get_shop_detail,
  get_pays:get_pays,
  get_default_address:get_default_address,
  order_integral:order_integral,
  sendtimes:sendtimes,
}
