// index.js
var R = require('../../requests/index');
var S = require('../../requests/cart');
var app = getApp();
Page({
  data: {
    oauth: {},
    hasOauth: false,
    short_notice: '新客户首购桶装水需付桶押金30元每个，不用可退',
    notice: '新客户首购桶装水需付桶押金30元每个，不用可退',
    shopInfo: { logo: '/assets/logo.png', name: '美家送', tel: '0572-2076662' },
    showTime: false,//是否开业
    goods: [],//商品列
    cartArray: [],//购物车
    totalPrice: '0.00',// 总价格
    totalCount: 0, // 总商品数
    detail: false,
    toView: '0',
    scrollTop: 100,
    minPrice: '0',//起送價格
    payDesc: '',
    deliveryPrice: 4,//配送費
    fold: true,
    selectFoods: [{ price: 20, count: 2 }],
    cartShow: 'none',
    windowHeight: 0,
    position: [],
    info: {}   
  },
  //一键拨号
  callmeTap: function () {
    var that = this;
    wx.makePhoneCall({
      phoneNumber: that.data.shopInfo.tel
    })
  },
  //点击选择商品分类
  selectMenu: function (e) {
    var index = e.currentTarget.dataset.itemIndex;
    this.setData({
      toView: 'order' + index.toString()
    })
  },
  //减少商品
  decreaseCart: function (e) {
    var that = this; 
    S.decreaseCart(that, e);
  },
  //多规格--商品加购
  addSelectedCart() {
    if (this.data.default_key > -1) {
      this.addCart(this.data.prevE)
    }
  },
  //添加到购物车--多规格
  carpowerDrawer: function (e) {
    var that = this;
    S.carpowerDrawer(that, e);
  },
  //切换规格
  changeCart: function (e) {
    var that = this;
    S.changeCart(that, e);
  },
  //添加购物车
  addCart: function (e) {
    var that = this;
    S.addCart(that, e);
  },
  //计算总价
  // calTotalPrice: function () {
  //   var carArray = this.data.carArray;
  //   var totalPrice = 0;
  //   var totalCount = 0;
  //   for (var i = 0; i < carArray.length; i++) {
  //     totalPrice += carArray[i].price * carArray[i].num;
  //     totalCount += carArray[i].num
  //   }
  //   this.setData({
  //     totalPrice: totalPrice,
  //     totalCount: totalCount,
  //     //payDesc: this.payDesc()
  //   });
  // },
  //动画
  util2: function (currentStatu) {
    S.util2(this, currentStatu);
  },
  //差几元起送
  payDesc() {
    if (this.data.totalPrice === 0) {
      return `￥${this.data.minPrice}元起送`;
    } else if (this.data.totalPrice < this.data.minPrice) {
      let diff = this.data.minPrice - this.data.totalPrice;
      return '还差' + diff + '元起送';
    } else {
      return '去结算';
    }
  },
  //結算
  pay() {
    if (!this.data.showTime) {
      return;
    }
    if (this.data.totalPrice < this.data.minPrice) {
      return;
    }
    // window.alert('支付' + this.totalPrice + '元');
    //确认支付逻辑
    var resultType = "success";
    wx.redirectTo({
      url: '../orders/balance?status=1'
    })
  },
  //购物车弹起
  toggleList: function () {
    if (!this.data.totalCount) {
      return;
    }
    this.cartShow();
  },
  //购物车列表--展示/收起
  cartShow: function () {
    var fold = this.data.fold;
    if (fold == true) {
      //展开
      this.setData({
        cartShow: 'block',
        fold: !fold,
      });
    } else {
      //收起
      this.setData({
        cartShow: 'none',
        fold: !fold,
      })
    }
  },
  listShow() {
    if (!this.data.totalCount) {
      this.data.fold = true;
      return false;
    }
    let show = !this.fold;
    return show;
  },
  //清空购物车
  empty() {
    var that = this;
    S.empty(that);
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

    this.setData({
      payDesc: this.payDesc()
    });
    wx.hideLoading();
  },
  onReady: function () {
    this.audioCtx = wx.createAudioContext('myAudio');
    this.audioCtx.play();
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          windowHeight: res.windowHeight
        })
      }
    })
  },
  onShow() {
    this.intervalInit = setInterval(this.init, 500);
  },
  init() {
    var that = this;
    if (this.data.hasOauth) {
      var access_token = app.globalData.oauth.access_token;
      clearInterval(this.intervalInit)
      var that = this;
      R.checkOpen(that);//是否打烊
      // 商家信息
      R.get_shop_info(that, (res) => {
        if (res.data.status == 1) {
          that.setData({
            shopInfo: {
              logo: res.data.data.logo,
              name: res.data.data.shopname,
              tel: res.data.data.tel
            }
          })
        }
      });
      
      // 公告
      R.get_shop_notice(that, (res) => {
        that.setData({
          notice: res.data.data.value,
          short_notice: res.data.data.short_value,
        })
      });
      //商品列表
      S.get_shop_goods(that);
      //购物车
      // S.get_shop_carts(that); 
    }
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  powerDrawer: function (e) {
    var currentStatu = e.currentTarget.dataset.statu;
    this.util(currentStatu)
  },
  util: function (currentStatu) {
    /* 动画部分 */
    // 第1步：创建动画实例
    var animation = wx.createAnimation({
      duration: 200, //动画时长
      timingFunction: "linear", //线性
      delay: 0 //0则不延迟
    });

    // 第2步：这个动画实例赋给当前的动画实例
    this.animation = animation;

    // 第3步：执行第一组动画
    animation.opacity(0).rotateX(-100).step();

    // 第4步：导出动画对象赋给数据对象储存
    this.setData({
      animationData: animation.export()
    })

    // 第5步：设置定时器到指定时候后，执行第二组动画
    setTimeout(function () {
      // 执行第二组动画
      animation.opacity(1).rotateX(0).step();
      // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象
      this.setData({
        animationData: animation
      })

      //关闭
      if (currentStatu == "close") {
        this.setData(
          {
            showModalStatus: false
          }
        )
      }
    }.bind(this), 200)

    // 显示
    if (currentStatu == "open") {
      this.setData(
        {
          showModalStatus: true
        }
      );
    }
  }
})
