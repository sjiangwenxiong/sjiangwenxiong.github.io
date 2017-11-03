<template>
  <div class="product">
    <div class="swiper-img">
      <img src="../assets/img/product_banner.jpg" width="100%">
      <div>
        <div class="mask"><img src="../assets/img/mask.png" width="100%"></div>
        <div class="text">
          <p>产品开发服务中心</p>
          <p>用心去服务客户，多年软件开发经验</p>
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="head"><img src="../assets/img/product_text.png" width="100%"></div>
      <div>
        <div class="list">
          <div>
            <img src="../assets/img/product1.jpg" width="100%">
          </div>
        </div>
        <div class="list">
          <div>
            <img src="../assets/img/product2.jpg" width="100%">
          </div>
        </div>
        <div class="list">
          <div>
            <img src="../assets/img/product3.jpg" width="100%">
          </div>
        </div>
        <div class="list">
          <div>
            <img src="../assets/img/product4.jpg" width="100%">
          </div>
        </div>
        <div class="list">
          <div>
            <img src="../assets/img/product5.jpg" width="100%">
          </div>
        </div>
        <div class="list">
          <div>
            <img src="../assets/img/product6.jpg" width="100%">
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div>
        <div class="title">技术开发</div>
        <p>JISHUKAIFA</p>
        <div class="line"></div>
        <div class="descrip">是指利用从研究和实际经验中获得的现有知识或从外部引进技术，为生产新的产品、装置，建立新的工艺和系统而进行实质性的改进工作。国外一些大的企业或公司，像IBM、松下、西门子、微软等公司都成立了专门的技术开发机构，在激烈竞争中，抢得先机，形成自己的人力积累，使别人难以模仿和超越，确保企业的竞争优势。</div>
      </div>
      <img src="../assets/img/dev.jpg" alt="">
      <p style="clear:both;"></p>
    </div>
    <need></need>
  </div>
</template>

<script>
import need from "./dev_need"
export default {
  data () {
    return {
      
    }
  },
  components:{need},
  mounted(){
    $(".navbar-nav .active").removeClass("active")
    $(".navbar-nav li").eq(1).addClass("active")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product .swiper-img{
  width: 100%;
  position: relative;
}
.product .swiper-img>div{
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  box-shadow: 1px 5px 15px rgba(0,0,0,.1) inset;
  color: #fff;
}
.product .swiper-img>div .mask{
  width: 16vw;
  margin: -3px auto 0;
}
.product .swiper-img>div .text{
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}
.product .swiper-img>div .text p:nth-child(1){
  margin-top: 5vw;
  font-size: 2.9vw;
  margin-left: 1vw;
}
.product .swiper-img>div .text p:nth-child(2){
  margin-top: 1vw;
  font-size: 1.5vw;
}

/* nav */
.product .nav{
  width: 100%;
  max-width: 1400px;
  margin: 4.5vw auto 0;
}
.product .nav .head{
  width: 10%;
  margin: 0 auto;
}
.product .list{
  margin-top: 3vw;
  width: 16.4%;
  display: inline-block;
}
.product .list>div{
  width: 90%;
  margin: 0 auto;
}

/* content */
.product .content{
  position: relative;
  width: 100%;
  max-width: 1400px;
  margin: 5.5vw auto 0;
}
.product .content>div{
  top: 4vw;
  left: 6.5%;
  position: absolute;
}
.product .content .title{
  font-size: 1.5vw;
}
.product .content>p{
  font-size: 12px;
}
.product .content .line{
  width: 3.6%;
  height: 2px;
  background: #108aed;
  margin-top: 2vw;
  margin-bottom: 1.5vw;
}
.product .content .descrip{
  width: 38.6%;
  font-size: 14px;
  color: #888;
}
.product .content img{
  width: 40%;
  float: right;
  margin-right: 7%;
}
.product .dev-need{
  margin-top: 1vw;
  margin-bottom: 16vw;
}





@media screen and (max-width: 1350px){
  .product .list{
    width: 16.3%;
  }
  .product .content .title{
    font-size: 22px;
  }
}
@media screen and (max-width: 990px){
  .product .list{
    width: 16.2%;
  }
  .product .swiper-img{
    width: 150%;
    margin-left: -25%;
  }
  .product .swiper-img>div .mask{
    display: none;
  }
  .product .swiper-img .text{
    text-align: center;
    margin: 0;
  }
  .product .swiper-img .text p{
    text-align: center;
    margin: 0;
  }
  .product .swiper-img .text p:nth-child(1){
    font-size: 4vw !important;
    margin-top: 10vw !important;
  }
  .product .swiper-img .text p:nth-child(2){
    font-size: 2.5vw !important;
  }
}
@media screen and (max-width: 767px){
  .product .nav .head{
    width: 20%;
  }
  .product .list{
    width: 32.4%;
  }
  .product .content>div{
    position: relative;
  }
  .product .content .line{
    width: 10%;
  }
  .product .content .descrip{
    width: 87%;
  }
  .product .content img{
    float: none;
    width: 70%;
    margin: 40px 15%;
  }
}
</style>
