<template>
  <div class="show">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in mydata">
          <img :src="item" height="100%">
        </div>
      </div>
    </div>
    <div class="swiper-button-prev" @click="prev"></div>
    <div class="swiper-button-next" @click="next"></div>
  </div>
</template>

<script>
import '../assets/css/swiper.css'
import swiper from '../assets/js/swiper.js'
export default {
  props:["data"],
  data () {
    return {
      mydata:this.data.show
    }
  },
  created(){
    this.$parent.navIndex=0
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
        slidesPerView : 3,
        centeredSlides : true,
        spaceBetween : 25,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next'
      })
    }
  },
  methods:{
    prev(){
      $(".swiper-button-prev").addClass("prev")
      $(".swiper-button-next").removeClass("next")
    },
    next(){
      $(".swiper-button-next").addClass("next")
      $(".swiper-button-prev").removeClass("prev")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.show{
  margin-bottom: 5vw;
  position: relative;
  animation: fadeInUp .5s 0s both;
}
.swiper-container{
  width: 55vw;
  margin: 4vw auto 4vw;
}
.swiper-slide{
  height: 13vw;
  overflow: hidden;
}
.swiper-slide div{
  width: 90%;
  overflow: hidden;
}
.swiper-button-prev{
  background-image: url(../assets/img/prev.jpg);
  left: 18vw;
}
.prev{
  background-image: url(../assets/img/prev.png) !important;
}
.swiper-button-next{
  background-image: url(../assets/img/next.jpg);
  right: 18vw;
}
.next{
  background-image: url(../assets/img/next.png) !important;
}
@media screen and (max-width:990px){
  .swiper-container{
    width: 80vw;
    position: relative;
  }
  .swiper-slide{
    height: 16vw;
  }
  .swiper-button-prev{
    left: 4vw;
    transform:scale(0.8);
  }
  .swiper-button-next{
    transform:scale(0.8);
    right: 4vw;
  }
}
@media screen and (max-width:767px){
  .swiper-container{
    width: 75vw;
  }
  .swiper-slide{
    height: 50vw;
  }
  .swiper-button-prev{
    left: 3vw;
  }
  .swiper-button-next{
    right: 3vw;
  }
  .swiper-slide img{
    width: 100%;
  }
}
</style>
