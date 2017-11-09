// index.js
var R = require('../../requests/index');
Page({
    data: { 
      short_notice: '新客户首购桶装水需付桶押金30元每个，不用可退',
      notice: '新客户首购桶装水需付桶押金30元每个，不用可退',
      shopInfo: { logo: '/assets/logo.png', name: '美家送', tel:'0572-2076662'},
      goods:[],
      toView: '0',
      scrollTop: 100,
      foodCounts: 0,
      totalPrice: 0,// 总价格
      totalCount: 0, // 总商品数
      carArray: [],
      minPrice: 0,//起送價格
      payDesc: '',
      deliveryPrice: 4,//配送費
      fold: true,
      selectFoods: [{ price: 20, count: 2 }],
      cartShow: 'none'
    },
    // selectFoods: function (event) {
    //     var food = event.currentTarget.dataset.food;
    //     console.log(food);
    //     console.log(this.data.goods)
    //     let foods = [];
    //     this.data.goods.forEach((good) => {
    //         good.foods.forEach((food) => {
    //             // console.log(food)
    //             if (food.sellCount) {
    //                 foods.push(food);
    //                 console.log(foods);
    //             }
    //         })
    //     })
    // },
    //一键拨号
    callmeTap: function () {
      var that = this;
      wx.makePhoneCall({
        phoneNumber: that.data.shopInfo.tel
      })
    },

    selectMenu: function (e) {
        var index = e.currentTarget.dataset.itemIndex;
        this.setData({
            toView: 'order' + index.toString()
        })
        console.log(this.data.toView);
    },
    //移除商品
    decreaseCart: function (e) {
        var index = e.currentTarget.dataset.itemIndex;
        var parentIndex = e.currentTarget.dataset.parentindex;
        this.data.goods.forEach((good) => {
            good.foods.forEach((food) => {
                var num = this.data.goods[parentIndex].foods[index].Count;
                var mark = 'a' + index + 'b' + parentIndex
                if (food.Count > 0) {
                    this.data.goods[parentIndex].foods[index].Count--
                    var price = this.data.goods[parentIndex].foods[index].price;
                    var obj = { price: price, num: num, mark: mark, name: name, index: index, parentIndex: parentIndex };
                    var carArray1 = this.data.carArray.filter(item => item.mark != mark);
                    carArray1.push(obj);
                    console.log(carArray1);
                    this.setData({
                        carArray: carArray1,
                        goods: this.data.goods
                    })
                    this.calTotalPrice()
                    this.setData({
                        payDesc: this.payDesc()
                    })
                }
                if (num > 0) {
                    var carArray1 = this.data.carArray.filter(item => item.num > 0)
                    console.log(carArray1)
                    this.setData({
                        carArray: carArray1,
                    })
                }
            })
        })
    },
    decreaseShopCart: function (e) {
        this.decreaseCart(e);
    },
    //添加到购物车
    addCart(e) {
        var index = e.currentTarget.dataset.itemIndex;
        var parentIndex = e.currentTarget.dataset.parentindex;
        this.data.goods[parentIndex].foods[index].Count++;
        var mark = 'a' + index + 'b' + parentIndex
        var price = this.data.goods[parentIndex].foods[index].price;
        var num = this.data.goods[parentIndex].foods[index].Count;
        var name = this.data.goods[parentIndex].foods[index].name;
        var obj = { price: price, num: num, mark: mark, name: name, index: index, parentIndex: parentIndex };
        var carArray1 = this.data.carArray.filter(item => item.mark != mark)
        carArray1.push(obj)
        console.log(carArray1);
        this.setData({
            carArray: carArray1,
            goods: this.data.goods
        })
        this.calTotalPrice();
        this.setData({
            payDesc: this.payDesc()
        })
    },
    addShopCart: function (e) {
        this.addCart(e);
    },
    //计算总价
    calTotalPrice: function () {
        var carArray = this.data.carArray;
        var totalPrice = 0;
        var totalCount = 0;
        for (var i = 0; i < carArray.length; i++) {
            totalPrice += carArray[i].price * carArray[i].num;
            totalCount += carArray[i].num
        }
        this.setData({
            totalPrice: totalPrice,
            totalCount: totalCount,
            //payDesc: this.payDesc()
        });
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
        if (this.data.totalPrice < this.data.minPrice) {
            return;
        }
        // window.alert('支付' + this.totalPrice + '元');
        //确认支付逻辑
        var resultType = "success";
        wx.redirectTo({
            url: '../goods/pay/pay?resultType=' + resultType
        })
    },
    //彈起購物車
    toggleList: function () {
        if (!this.data.totalCount) {
            return;
        }
        this.setData({
            fold: !this.data.fold,
        })
        var fold = this.data.fold
        //console.log(this.data.fold);
        this.cartShow(fold)
    },
    cartShow: function (fold) {
        console.log(fold);
        if (fold == false) {
            this.setData({
                cartShow: 'block',
            })
        } else {
            this.setData({
                cartShow: 'none',
            })
        }
        console.log(this.data.cartShow);
    },
    listShow() {
        if (!this.data.totalCount) {
            this.data.fold = true;
            return false;
        }
        let show = !this.fold;
        // if (show) {
        //     this.$nextTick(() => {
        //         if (!this.scroll) {
        //             this.scroll = new BScroll(this.$refs.listContent, {
        //                 click: true
        //             });
        //         } else {
        //             this.scroll.refresh();
        //         }
        //     });
        // }
        return show;
    },
    onLoad: function (options) {
        this.setData({
            payDesc: this.payDesc()
        });
        var that = this;
        // 商家信息
        R.get_shop_info((res) => {
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
        R.get_shop_notice((res) => {
          console.log(res);
          that.setData({
            notice: res.data.data.value,
            short_notice: res.data.data.short_value,
          })
        });
        //商品列表
        R.get_shop_goods((res) => {
          if (res.data.status == 1) {
            console.log(res.data.data);
            that.setData({
              goods: res.data.data
            })
          } else {
            that.setData({
              goods: R.default_goods
            })
          }         
        });
    },
    onReady: function () {
        // 页面渲染完成
    },
    onShow: function () {
      // 页面显示
      
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
