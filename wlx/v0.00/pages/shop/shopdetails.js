// shopdetails.js
var R = require('../../requests/index');
var S = require('../../requests/cart');
var app = getApp();
var app = getApp();
Page({
    data: {
      movies: ['/assets/shop_banner1.png', '/assets/shop_banner1.png', '/assets/shop_banner1.png'],
      default_key:0,
      default_price:'0.00',
      info:{},
      showModalStatus: false
    },
    //切换商品规格
    changeCart: function (e) {
      var that = this;
      var key = e.currentTarget.dataset.key;
      var products = that.data.info.product;
      that.setData({
        default_key: key,
        default_price: products[key].price,
      })
    },
    //加入购物车--弹窗
    powerDrawer: function (e) {
        var currentStatu = e.currentTarget.dataset.statu;
        this.util(currentStatu)
    },
    /**
     * 加购物车
     */
    addCart() {
      var that = this;
      var key = that.data.default_key;
      var products = that.data.info.product;
      var good = products[key];
      S.addCartSingle(that, good.shelf_id, good.id, (res) => {
        console.log(res);
          wx.showToast({
            title: '成功加入购物车',
            icon: 'success',
            duration: 2000
          })
      });
    },
    //加入购物车--数据
    powerDrawerAgain: function (e) {
        //cards
        var that = this;
        var key = that.data.default_key;
        var products = that.data.info.product;
        var good = products[key];
        var card = {
          'id': good.id,
          'attributes': that.data.info.attributes + ':' + good.characters,
          'number':1,
          'points': good.points,
          'image': that.data.info.image
        }        
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
                );
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
      var that = this;
      var id = options.id ? options.id : 9;
      R.get_shop_detail(id, (res) => {
        // console.log(res);
        that.setData({
          info: res.data.data,
          default_price: res.data.data.product[0].price,
          movies: res.data.data.image
        })
      })
    },
})

