<template>
  <div class="new">
    <div class="swiper-img">
      <img src="../assets/img/new_banner.jpg" width="100%">
      <div>
        <div class="mask"><img src="../assets/img/mask.png" width="100%"></div>
      </div>
    </div>
    <div class="new-list">
      <div>
        <div class="left">
          <div class="nav">
            <div v-for="(item,index) in news_list" 
                 :class="{active:index==navIndex}"
                 @click="tabNav(index)">
              {{item.type}}
            </div>
          </div>
          <transition name="fade">
          <div class="content">
            <div v-for="item in showingList.slice(5*newsIndex,5+5*newsIndex)">
              <div class="logo"  :style="'background-image:url('+item.imgUrl+')'">
                <div>{{item.type}}</div>
              </div>
              <div class="detail">
                <p>{{item.title}}</p>
                <div class="msg">
                  <div :style="'background-image:url('+item.awatar+')'"></div>
                  <div>{{item.author}}</div>
                  <div>{{item.date}}</div>
                  <p style="clear:both;"></p>
                </div>
                <div class="art">{{item.content.slice(0,70)}}...</div>
                <div class="readed">阅读{{item.readed}}</div>
              </div>
              <div style="clear:both;"></div>
            </div>
            <div class="footer">
              <div>
                <span @click="toIndex">首页</span>
                <span @click="pageDown">上一页</span>
                <span v-for="(item,index) in indexList" 
                      :class="{active:index==newsIndex}" 
                      @click="chgPage(index)">
                  {{index+1}}
                </span>
                <span @click="pageUp">下一页</span>
                <span @click="toLastPage">尾页</span>
                <div style="clear:both;"></div>
              </div>       
            </div>
          </div>
          </transition>
        </div>
        <div class="right">
          <div class="top">
            <div>热门文章</div>
            <p v-for="(item,index) in hotList.slice(0,10)">
              <i :class="{active:index<3}">{{index+1}}</i>{{item.title}}
            </p>
          </div>
          <div class="bottom">
            <div>热点标签</div>
            <span v-for="item in hotLabel">{{item}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import news_list from "../api/news"
export default {
  data () {
    return {
      news_list:news_list,
      hotList:[],
      showingList:[],
      navIndex:0,
      newsIndex:0,
      indexList:["",""],
      hotLabel:["淘当铺","比特币","Uber新APP","网约车新政第一天","飞凡网","趣分期","理财相关","网银钱包","苹果iPhone8","网约车新政"]
    }
  },
  mounted(){
    $(".navbar-nav .active").removeClass("active")
    $(".navbar-nav li").eq(5).addClass("active")
    var newList=[]
    var hotList=[]
    var value=this.news_list
    for(var i=0;i<value.length;i++){
      for(var j=0;j<value[i].data.length;j++){
        newList.push(value[i].data[j])
        hotList.push(value[i].data[j])
      }
    }
    this.hotList=hotList.sort(function  (a,b) {
      return b.readed-a.readed
    })
    var chgDate=function(date){
      for(var i=0;i<date.length;i++){
        if(isNaN(date[i])){
          date=date.slice(0,i)+date.slice(i+1)
        }
      }
      return date
    }
    newList=newList.sort(function  (a,b) {
      return chgDate(b.date)-chgDate(a.date)
    })
    newList.length=10;
    if(!this.news_list.filter(function (a) {return a.type=="最新文章"}).length){
      this.news_list.unshift({
        type:"最新文章",
        data:newList
      })
    }
    this.showingList=newList
  },
  methods:{
    tabNav(index){
      this.navIndex=index
      this.showingList=news_list[index].data
      this.newsIndex=0
      var arr=[]
      arr.length=parseInt((this.showingList.length-1)/5+1)
      this.indexList=arr
    },
    chgPage(index){
      this.newsIndex=index
    },
    toIndex(){
      this.newsIndex=0
    },
    toLastPage(){
      console.log()
      this.newsIndex=parseInt((this.showingList.length-1)/5)
    },
    pageUp(){
      if(this.newsIndex<parseInt((this.showingList.length-1)/5)){
        this.newsIndex++
      }
    },
    pageDown(){
      if(this.newsIndex>0){
        this.newsIndex--
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.new .swiper-img{
  width: 100%;
  position: relative;
}
.new .swiper-img>div{
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  box-shadow: 1px 5px 15px rgba(0,0,0,.1) inset;
  color: #fff;
}
.new .swiper-img>div .mask{
  width: 16vw;
  margin: -3px auto 0;
}
.new .new-list{
  width: 100%;
  max-width: 1400px;
  margin: 1.5vw auto 0;
}
.new-list>div{
  width: 96%;
  margin: 0 auto;
}
.nav{
  margin-bottom: 15px;
}
.nav>div{
  display: inline-block;
  line-height: 50px;
  margin-right: 30px;
  font-size: 18px;
  cursor: pointer;
}
.nav .active{
  color: #108aed;
  border-bottom: 2px solid #108aed;
}
.new-list>div{
  position: relative;
}
.new-list .content{
  width: 67%;
  color: #333;
}
.new-list .content>div{
  padding: 30px 0;
  border-bottom: 1px solid #ddd;
  position: relative;
}
.new-list .logo{
  width: 200px;
  float: left;
  height: 150px;
  background-size: cover;
  background-position: center;
  position: relative;
}
.new-list .logo div{
  width: 65px;
  height: 20px;
  line-height: 20px;
  border-radius: 10px;
  background: rgba(0,0,0,.5);
  color: #fff;
  text-align: center;
  font-size: 12px;
  position: absolute;
  left: 10px;
  bottom: 5px;
}
.new-list .detail{
  margin-left: 25px;
  width: 70%;
  float: left;
}
.new-list .detail>p{
  font-size: 20px;
}
.new-list .msg div{
  font-size: 14px;
  line-height: 35px;
  float: left;
}
.new-list .msg div:nth-child(1){
  width: 35px;
  height: 35px;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  margin-right: 5px;
}
.new-list .msg div:nth-child(3){
  color: #9b9b9b;
  margin-left: 10px;
}
.new-list .readed{
  color: #9b9b9b;
  font-size: 12px;
  position: absolute;
  bottom: 30px;
  left: 225px;
}
.new-list .footer{
  margin-top: 15px;
  text-align: center;
}
.new-list .footer div{
  display: inline-block;
}
.new-list .footer span{
  float: left;
  padding: 10px 15px;
  border: 1px solid #ddd;
  margin-left: 5px;
  cursor: pointer;
}
.new-list .footer .active{
  color: red;
}
.new-list .right{
  width: 21%;
  position: absolute;
  top: 10px;
  right: 0;
}
.new-list .right .top{
  border-bottom: 3px solid #3889c2;
  padding-bottom: 40px;
}
.new-list .right .top div{
  padding-left: 5px;
  border-left: 3px solid #3889c2;
  margin-bottom: 10px;
}
.new-list .right .top p{
  white-space: nowrap;/*让标签内的文字内容排列的一行，不自动换行，同时出现滚动条*/
  overflow: hidden;/*超出部分隐藏，只在我们给定的宽度范围内，能显示多少算多少*/
  text-overflow: ellipsis;/*把最后几个字符换成...*/
  line-height: 20px;
}
.new-list .right .top p i{
  margin-right: 5px;
  font-style:normal;
  width: 20px;
  height: 20px;
  display: inline-block;
  text-align: center;
  color: #fff;
  background: #999;
}
.new-list .right .top p .active{
  background: #333 !important;
}
.new-list .right .bottom div{
  text-align: center;
  margin: 20px 0 30px;
  font-size: 16px;
}
.new-list .right .bottom span{
  margin-top: 10px;
  margin-right: 15px;
  font-size: 12px;
  display: inline-block;
  padding: 3px 10px;
  border: 1px solid #ddd;
  border-radius: 17px;
}

@media screen and (max-width: 1200px){
  .content{
    width: 75% !important;
  }
  .content .detail{
    margin-left: 15px;
    width: 71%;
  }
  .readed{
    left:215px !important; 
  }
  .new-list .logo{
    width: 190px;
    height: 140px;
  }
}
@media screen and (max-width: 1000px){
  .right{
    display: none;
  }
  .content{
    width: 100% !important;
  }
}
@media screen and (max-width: 767px){
  .nav>div{
    font-size: 4vw;
    line-height: 30px;
    margin-right: 10px;
  }
  .content>div>div{
    float: none !important;
  }
  .content>div{
    padding: 20px 0 !important;
  }
  .logo{
    margin: 0 auto;
  }
  .content .detail{
    width: 100%;
    text-align: center;
    margin-left: 0;
  }
  .content .detail p{
    font-size: 4.8vw;
    margin-bottom: 0;
    margin-top: 5px;
  }
  .content .msg{
    display: inline-block;
  }
  .readed{
    position: inherit !important;
  }
  .footer span{
    font-size: 12px;
    padding: 2px 5px !important;
  }
  .art{
    text-align: left;
  }
  .readed{
    text-align: left;
  }
}
</style>