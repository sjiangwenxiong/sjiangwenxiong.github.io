<template>
  <div class="index">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide first-ani" v-for="(item,index) in mydata" :id="'banner'+index">
          <div class="swiper-img" :style="'background-image:url('+item.img+');'">
            <p class="empty"></p>
            <div class="name" style="">{{item.name}}</div>
            <p class="desc">{{item.desc}}</p>
            <p class="en">{{item.en}}</p>
            <div class="more">
              <div @click="$router.push('/about/show')">
                {{item.more}}<img src="../assets/img/more.png">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-bullets">
        <span class="swiper-pagination-bullet" v-for="item in mydata"></span>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/css/swiper.css'
import swiper from '../assets/js/swiper.js'
export default {
  props:["lang"],
  data () {
    return {
      mydata: [],
      banner:"",
    }
  },
  created(){
    this.$parent.navIndex=0
    this.$parent.isWhite=true
    var that=this
    $.ajax({url:"http://"+that.lang+".hangfeng.mandokg.com/api/v1/home",success:function(result){
       that.mydata=result 
       setTimeout(()=>{
        $(".first-ani").removeClass("first-ani")
        that.banner = new swiper('.swiper-container',{
          speed:400,
          mode : 'vertical', 
          resistance:'100%',
          mousewheelControl : true,
          watchSlidesProgress : true,
          watchSlidesVisibility : true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          loop:true,
          // autoplay: 2000,
          autoplayDisableOnInteraction : false,
          onFirstInit:function(){
            $('.swiper-img').addClass('ani-slide');
          }
        })
        if(that.lang=='en'){
          $(".swiper-img .more>div").css("paddingLeft","1.1vh")
          $(".swiper-img .empty").css("height","24vh")
          if(document.body.clientWidth<767){
            $(".swiper-img .more>div").css("width","13vh")
            $(".swiper-img .more img").css("right","4.5vh")
          }
        }
      },0)
    }})
  // },
  // mounted(){
  //   this.banner = new swiper('.swiper-container',{
  //     speed:400,
  //     mode : 'vertical', 
  //     resistance:'100%',
  //     mousewheelControl : true,
  //     watchSlidesProgress : true,
  //     watchSlidesVisibility : true,
  //     pagination: '.swiper-pagination',
  //     paginationClickable: true,
  //     loop:true,
  //     // autoplay: 2000,
  //     autoplayDisableOnInteraction : false,
  //     onFirstInit:function(){
  //       console.log($('.swiper-img'))
  //       $('.swiper-img').addClass('ani-slide');
  //     }
  //   })
    /*this.banner.wrapperTransitionEnd(function () {//闅愯棌鏂规硶
      $('.ani-slide').removeClass('ani-slide')
      $('.swiper-slide').eq(mySwiper.activeIndex).addClass('ani-slide')
    },true);*/
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.swiper-slide>div>div:nth-child(2){
    opacity: 0;
}
.swiper-slide>div>div{
    opacity: 0;
}
.swiper-slide>div>p{
    opacity: 0;
}
.swiper-slide-active>div>div:nth-child(2){
    -webkit-animation: fadeInUp 1s 0.3s both;
    animation: fadeInDown 1s 0.3s both;
}
.swiper-slide-active>div>div{
    opacity: 1;
    -webkit-animation: fadeInDown 1s 1s both;
    animation: fadeInUp 1s 1s both;
}
.swiper-slide-active>div>p{
    opacity: 1;
    -webkit-animation: fadeInDown 1s .5s both;
    animation: fadeInDown 1s 1s both;
}
.first-ani>div>div:nth-child(2){
    -webkit-animation: fadeInUp 1s 0.3s both;
    animation: fadeInDown 1.1s 0.3s both;
}
.first-ani>div>div{
    opacity: 1;
    -webkit-animation: fadeInDown 1s 1s both;
    animation: fadeInUp 1.1s 1s both;
}
.first-ani>div>p{
    opacity: 1;
    -webkit-animation: fadeInDown 1s .5s both;
    animation: fadeInDown 1.1s 1s both;
}
.index{
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
}
.index .swiper-img{
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
}
.index #banner0{
  color: #fff;
  text-align: center;
}
.index #banner0 .empty{
  height: 34vh;
}
.index #banner0 .name{
  font-size: 7.4vh;
  font-family: 苹方;
  font-weight: bold;
}
.index #banner0 .desc{
  margin-top: 4vh;
  font-family: 站酷高端黑;
  font-size: 3.7vh;
}
.index #banner0 .en{
  margin-top: 1.5vh;
  font-size: 1.3vh;
  font-family: 苹方;
  letter-spacing: 0.5px;
  margin-bottom: 26vh;
}
.index .more{
  width: 12vh;
  height: 3.4vh;
  line-height: 3.4vh;
  text-align: left;
  font-size: 1.9vh;
  font-family: 苹方;
  position: absolute;
  bottom: 16.7vh;
  left: 50%;
}
.index .more div{
  color: #fff;
  width: 12vh;
  height: 3.4vh;
  background: rgba(0,0,0,.55);
  padding-left: 2.1vh;
  margin-left: -6vh;
  cursor: pointer;
}
.index .more img{
  height: 1.9vh;
  position: absolute;
  top: 0.75vh;
  right: 5.5vh;
}
.index #banner1{
  color: #fff;
}
.index #banner1 .swiper-img{
  background-position: left;
}
.index #banner1 .empty{
  height: 35.6vh;
}
.index #banner1 .name{
  height: 5.5vh;
  background-image: url(../assets/img/logo_fff.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.index #banner1 .desc:before{
  content: "—— ";
  letter-spacing:0;
}
.index #banner1 .desc{
  margin-top: 1.6vh;
  font-size: 2.2vh;
  margin-left: 45vw;
  letter-spacing: 5px;
}
.index #banner1 .en{
  width: 80vh;
  max-width: 90%;
  margin: 4.2vh auto 21.8vh;
  text-align: center;
  line-height: 3.2vh;
  font-size: 1.7vh;
  font-family: 苹方
}
.index #banner2{
  color: #1f1734;
  text-align: center;
}
.index #banner2 .empty{
  height: 26vh;
}
.index #banner2 .name{
  font-size: 7.4vh;
  font-family: 苹方;
  font-weight: bold;
}
.index #banner2 .desc{
  margin-top: 2.8vh;
  font-size: 3.7vh;
  font-family: 站酷高端黑;
}
.index #banner2 .en{
  font-size: 1.7vh;
  font-family: 苹方;
  margin-top: 1vh;
  letter-spacing: 1px;
  font-weight: bold;
}
.index #banner3{
  color: #fff;
  background-position: top !important;
}
.index #banner3 .empty{
  height: 19.4vh;
}
.index #banner3 .name{
  display: inline-block;
  margin-left: 20.8vw;
  font-size: 7.4vh;
  font-family: 苹方;
  font-weight: bold;
  border-bottom: 1px solid #fff;
}
.index #banner3 .desc{
  margin-left: 20.8vw;
  margin-top: 2.8vh;
  font-size: 4.7vh;
  font-family: 站酷高端黑;
}
.index #banner3 .en{
  margin-left: 20.8vw;
  font-size: 2.2vh;
  font-family: 苹方;
  margin-top: 1vh;
  font-weight: bold;
}
.index .swiper-pagination-bullet{
  display: inline-block;
  width: 8.9vh;
  height: 0.74vh;
  background:rgba(0,0,0,.6);
  margin-left: 10px;
  border-radius:0px;
  opacity: 1;
  margin-bottom: 4.5vh !important;
}
.index .swiper-pagination-bullet-active{
  background: #fff;
}


@media screen and (max-width:990px){
  #banner1 .desc{
    letter-spacing: 2px !important;
    margin-left: 40vw !important;
  }
}
</style>
