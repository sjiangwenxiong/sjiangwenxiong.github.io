var R = require('../../requests/index');
var S = require('../../requests/cart');
var app = getApp();
Page({
    data: {
        oauth: {},
        hasOauth: false,
        cartArray: [],           // 购物车列表
        hasList: false,          // 列表是否有数据
        totalPrice: '0.00',      // 总价，初始为0
        totalCount: 0,         
        selectAllStatus: false,   // 全选状态，默认全选
        selectObj:[],//选中商品的集合rowId
        obj: {
            name: "hello"
        }
    },
    onLoad: function (options) {
      wx.showLoading({
        title: '加载中',
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
      wx.hideLoading();
    },
    onReady: function () {
      wx.getSystemInfo({
        success: (res) => {
          this.setData({
            windowHeight: res.windowHeight
          })
        }
      })
    },
    init() {
      var that = this;
      console.log(this.data.hasOauth);
      if (this.data.hasOauth) {
        clearInterval(this.intervalInit)
        S.get_shop_carts(this);//购物车   
      }
    },
    onShow() {
        this.intervalInit = setInterval(this.init, 500);
       
        this.setData({
            hasList: true,
        });
        // this.getTotalPrice();
    },
    /**
     * 当前商品选中事件
     */
    selectList(e) {

        var carts = this.data.cartArray;
        var index = e.currentTarget.dataset.index;
        var status = e.currentTarget.dataset.status;
        var selectAllStatus = this.data.selectAllStatus;
        var totalCount = this.data.totalCount;
        var selectCount = 0;
        var cartsCount = 0;

        for (var key in carts) { //统计选中数量
          if (carts[key].selected) { selectCount++; }
          cartsCount++;
        }

        if (status == 1 ) { 
          //不选中
          carts[index].selected = false;  
          selectAllStatus = false; 
        }else {
          //选中
          carts[index].selected = true;
          selectAllStatus = selectCount + 1 == cartsCount ? true : false;         
        }

        this.setData({
          cartArray: carts,
          selectAllStatus: selectAllStatus
        });
        this.getTotalPrice();
    },
    /*
    * 获取被选中的商品
    */
    get_select_carts() {
        // rowId
      var selectObj = [];
      var carts = this.data.cartArray;
      for (var key in carts) { //统计选中数量
        if (carts[key].selected) { selectObj.push(key); }
      }
      return selectObj;
    },
    /**
     * 清空
     */
    empty() {
        // let index = e.currentTarget.dataset.index;
      let selectObj = this.get_select_carts();
      if (selectObj.length == 0) {
        this.showMsg('请选择要删除的商品');
      } else {
        this.deleteCart(selectObj);
      }

      
    },
    /**
     * 删除
     */
    deleteCart(obj) {
      let carts = this.data.cartArray;
      let count = this.data.totalCount;

      let datas = { rowIds: obj };
      S.deleteCart(this, datas);
    },
    /**
     * 结算
     */
    account() {
        let selectObj = this.get_select_carts();
        if (selectObj.length == 0) {
          this.showMsg('请选择要删除的商品');
        } else {
          try {
            wx.setStorageSync('selectCart', selectObj);
            wx.navigateTo({
              url: '../orders/balance?status=0'
            });
          } catch (e) {
          }
        } 
    },
    /**
     * 提示语
     */
    showMsg(msg) {
      wx.showModal({
        title: '提示',
        content: msg,
        showCancel:false,
        success: function (res) {
          //
        }
      })
    },
    /**
     * 购物车全选事件、全不选
     */
    selectAll() {
        let selectAllStatus = this.data.selectAllStatus;
        let carts = this.data.cartArray;
        selectAllStatus = !selectAllStatus;
        for (var key in carts) {
          carts[key].selected = selectAllStatus;
        }

        this.setData({
            selectAllStatus: selectAllStatus,
            cartArray:carts
        });
        this.getTotalPrice();
    },

    /**
     * 购物车--添加
     */
    addCount(e) {
        let index = e.currentTarget.dataset.index;
        let carts = this.data.cartArray;
        let num = carts[index].qty;
        num = num + 1;
        carts[index].qty = num;
        this.setData({
            cartArray: carts
        });
        this.getTotalPrice();
        S.change_cart_num(this, e, 1);
    },

    /**
     * 购物车--减少 
     */
    minusCount(e) {
      let index = e.currentTarget.dataset.index;
      let carts = this.data.cartArray;
      let num = carts[index].qty;
      let selectObj = [];
      var that = this;
      if (num == 1) {
        //删除该购物车商品--弹窗
        wx.showModal({
          title: '提示',
          content: '确定要删除该商品？',
          success: function (res) {
            if (res.confirm) {
              //删除
              selectObj.push(index);
              that.deleteCart (selectObj);
              // console.log('用户点击确定')
            } else if (res.cancel) {
              // console.log('用户点击取消')
            }
          }
        })
      } else {
        num = num - 1;
        carts[index].qty = num;
        this.setData({
          cartArray: carts
        });
        this.getTotalPrice();
      } 
      S.change_cart_num(this, e, 0);
    },

    /**
     * 计算总价
     */
    getTotalPrice() {
        let carts = this.data.cartArray;                  // 获取购物车列表
        let count = this.data.totalCount;
        let total = 0;
        for (var key in carts) {
          if (carts[key].selected || this.data.selectAllStatus) {                     // 判断选中才会计算价格
            total += carts[key].qty * carts[key].price;   // 所有价格加起来
          }
        }
        this.setData({                                // 最后赋值到data中渲染到页面
            totalPrice: total.toFixed(2)
        });
    }

})