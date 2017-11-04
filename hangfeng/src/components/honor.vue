<template>
  <div class="honor">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in mydata">
          <div><img :src="item" height="100%"></div>
        </div>
      </div>
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import '../assets/css/swiper.css'
import swiper from '../assets/js/swiper.js'
export default {
  props:["data"],
  data () {
    return {
      mydata:this.data.honor
    }
  },
  created(){
    this.$parent.navIndex=1
  },
  mounted (){
    if(document.body.clientWidth<678){
      this.banner = new swiper('.swiper-container',{
        watchSlidesProgress : true,
        watchSlidesVisibility : true,
        loop:true,
        // autoplay: 2000,
        autoplayDisableOnInteraction : false,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next'
      })
    }else{
      this.banner = new swiper('.swiper-container',{
        watchSlidesProgress : true,
        watchSlidesVisibility : true,
        loop:true,
        // autoplay: 2000,
        autoplayDisableOnInteraction : false,
        slidesPerView : 4,
        spaceBetween : 25,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.honor{
  margin-bottom: 5vw;
  position: relative;
  animation: fadeInUp .5s 0s both;
}
.swiper-container{
  width: 55vw;
  margin: 4vw auto 0;
}
.swiper-slide{
  height: 15vw;
  overflow: hidden;
}
.swiper-slide>div{
  height: 100%;
  display: inline-block;
  box-shadow: 0px 0px 10px #999 inset;
}
.swiper-slide>div img{
  position: relative;
  z-index: -3;
}
.swiper-button-prev{
  background-image: url(../assets/img/prev.png);
  left: 18vw;
}
.swiper-button-next{
  background-image: url(../assets/img/next.png);
  right: 18vw;
}
@media screen and (max-width:990px){
  .swiper-container{
    width: 80vw;
    position: relative;
  }
  .swiper-slide{
    height: 18vw;
  }
  .swiper-button-prev{
    left: 4vw;
  }
  .swiper-button-next{
    right: 4vw;
  }
}
@media screen and (max-width:767px){
  .swiper-slide{
    height: 50vw;
  }
  .swiper-button-prev{
    left: 10vw;
  }
  .swiper-button-next{
    right: 10vw;
  }
}
</style>