<template>
  <div class="case_slider">
    <div class="swiper-container-case">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in case_slider">
          <div :style="'background-image:url('+item+');'"></div>
        </div>
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import '../assets/css/swiper.css'
import swiper from '../assets/js/swiper.js'
import case_slider from '../api/case_slider'
export default {
  data () {
    return {
      banner:"",
      case_slider: case_slider
    }
  },
  mounted () {
    var width=document.body.clientWidth
    if(width>=1000){
      this.banner = new swiper('.swiper-container-case',{
          slidesPerView : 5,
          centeredSlides : true,
          loop:true,
          autoplay: 2000,
          slidesOffsetAfter : 100,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
      })
    }else if(width>=768){
       this.banner = new swiper('.swiper-container-case',{
            slidesPerView : 3,
            centeredSlides : true,
            loop:true,
            autoplay: 2000,
            slidesOffsetAfter : 100,
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next',
        })
    }else{
      this.banner = new swiper('.swiper-container-case',{
            centeredSlides : true,
            loop:true,
            autoplay: 2000,
            slidesOffsetAfter : 100,
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next',
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.case_slider{
  margin-top: 80px;
  position: relative;
}
.case_slider .swiper-slide div{
    height: 390px;
    background-size:cover;
    background-position: center;
}
.swiper-container-case{
  /*overflow-x: hidden;*/
}
.case_slider .swiper-slide-active{
  transform:scale(1.5,1.2);
  z-index: 2;
}
.swiper-button-next{
  background-image:url("../assets/img/next.png");
}
.swiper-button-prev{
  background-image:url("../assets/img/prev.png");
}
@media screen and (max-width: 1000px){
  .case_slider .swiper-slide-active{
    transform:scale(1.2);
  }
}
@media screen and (max-width: 767px){
  .case_slider .swiper-slide-active{
    transform:scale(1);
  }
  .case_slider{
    margin-top: 4vw;
  }
  .case_slider .swiper-slide div{
    height: 150vw;
  }
}
</style>
