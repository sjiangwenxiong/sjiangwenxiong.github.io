<template>
  <div class="contact">
    <div class="banner-img">
      <img src="../assets/img/contact_banner.jpg" width="100%">
      <div>
        <div class="mask"><img src="../assets/img/mask.png" width="100%"></div>
      </div>
    </div>
    <div class="content">
      <div class="one">
        <div class="title">
          <img src="../assets/img/contact_title1.jpg" width="100%">
        </div>
        <div class="banner">
          <div class="left">
            <div class="swiper-container-contact">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in contact_slider">
                  <img :src="item" width="100%">
                </div>
              </div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>
          </div>
          <div class="right">
            <div>
              <p>现代企业的竞争归根到底是社会精英人才的竞争，精英人才是一切的根本。没有人才哪来的成就，注重发现人才、培养人才、吸纳人才、留住人才。搭建一个适合职员发展的平台，创建优质的学习环境，营造相互竞争的团队氛围，充分激发公司职员潜能。为员工提供一个实现其人生价值的舞台。创新能力是倡导的核心理念之一，如果一个团队没有创新的能力就等于没有竞争的资本和活力。创新它贯穿于不同工作的各个环节。凡事都要从不同角度、不同的层面去考虑，拓展逆向思维不拘泥于既有的模式和经验，要敢想敢做。</p>
            </div>
          </div>
          <div style="clear:both;"></div>
        </div>
        <div class="detail">
          <div>
            <div><img src="../assets/img/contact1_img1.jpg" width="100%"></div>
            <p>宽敞的会议室</p>
          </div>
          <div>
            <div><img src="../assets/img/contact1_img2.jpg" width="100%"></div>
            <p>舒适的办公环境</p>
          </div>
          <div>
            <div><img src="../assets/img/contact1_img3.jpg" width="100%"></div>
            <p>客户来访</p>
          </div>
          <p style="clear:both;margin:0;"></p>
        </div>
      </div>
      <div class="two">
        <div class="title">
          <img src="../assets/img/contact_title2.jpg" width="100%">
        </div>
        <div class="detail">
          <div class="left">
            <img src="../assets/img/contact2_banner.jpg" width="100%">
          </div>
          <div class="right">
            <div>
              <div>
                <p>核心价值观</p>
                <p>无论是现在还是过去，乃至将来，注重人才始终是企业最重要的价值观之一，也是企业在竞争取得优势的要点。企业要基于危机意识、自我创新、精细的思考与合理的行动。坚定一个方向，团队互相合作，共创未来。</p>
              </div>
            </div>
          </div>
          <p style="clear:both;margin:0;"></p>
        </div>
      </div>
      <div class="two">
        <div class="title" style="width:65%;margin-top:8vw;">
          <img src="../assets/img/contact_title3.jpg" width="100%">
        </div>
        <div class="detail">
          <div class="left" style="float:right;margin-right:6%;">
            <img src="../assets/img/contact2_banner.jpg" width="100%">
          </div>
          <div class="right" style="width:50%;">
            <div>
              <div style="text-align:right;">
                <p>企业精神</p>
                <p>公司创建初期无人问津到不断发展的如今。不断吸纳行业精英在成长道路的经历了挫折坎坷。</p>
                <p>脚踏实地的发展，在短短几年之间立足了根本。壮大了公司规模主要是具有包容心和团队精神，有人情味，品行端正，作风清廉。</p>
              </div>
            </div>
          </div>
          <p style="clear:both;margin:0;"></p>
        </div>
      </div>
    </div>
    <div class="contactus">
      <div class="mask"><img src="../assets/img/contact_mask.png" alt=""></div>
      <div class="content">
        <div class="head"><img src="../assets/img/contact_text.png" alt=""></div>
        <p class="title">告诉我们你的需求</p>
        <div class="msg">
          <div class="left">
            <form>
              <p>填写您的基本信息</p>
              <input type="text" placeholder="您的姓名">
              <input type="text" placeholder="您的手机号">
              <textarea placeholder="留下您的需求..."></textarea>
              <input type="submit" value="提交">
            </form>
          </div>
          <div class="right">
            <p>联系电话：0571-88196000</p>
            <p>商务合作：hr@mandokg.com</p>
            <p>地址：浙江省杭州市拱墅区祥园路88号</p>
            <p>中国智慧信息产业园M座10楼</p>
          </div>
          <p style="clear:both;"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/css/swiper.css'
import swiper from '../assets/js/swiper.js'
export default {
  data () {
    return {
      contact_slider:[
        require("../assets/img/contact1_banner.png"),
        require("../assets/img/contact1_banner.png"),
        require("../assets/img/contact1_banner.png")
      ],
      banner:""
    }
  },
  mounted(){
    $(".navbar-nav .active").removeClass("active")
    $(".navbar-nav li").eq(3).addClass("active")
    this.banner = new swiper('.swiper-container-contact',{
            centeredSlides : true,
            loop:true,
            autoplay: 2000,
            slidesOffsetAfter : 100,
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next',
        })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact .banner-img{
  width: 100%;
  position: relative;
}
.contact .banner-img>div{
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  box-shadow: 1px 5px 15px rgba(0,0,0,.1) inset;
  color: #fff;
}
.contact .banner-img>div .mask{
  width: 16vw;
  margin: -3px auto 0;
}
.contact>.content{
  width: 100%;
  max-width: 1200px;
  margin: 5vw auto 7vw;
}
.one .title{
  width: 70%;
  margin:0 auto;
}
.one .banner{
  width: 75%;
  margin: 2vw auto 0;
  overflow: hidden;
}
.one .banner .left{
  width: 63%;
  float: left;
  overflow: hidden;
}
.one .banner .right{
  width: 37%;
  float:left;
  font-size: 13px;
  font-family: "宋体";
  line-height: 30px;
  background: #0092df;
  color: #fff;
  height: 100%;
}
.one .banner .right>div{
  width: 100%;
  display: table-cell;
  vertical-align: middle;
}
.one .banner .right p{
  margin: 25px 10px 0 15px;
}
.swiper-button-next{
  background-image:url("../assets/img/contact_next.png");
  right: 0px !important;
}
.swiper-button-prev{
  background-image:url("../assets/img/contact_prev.png");
  left: 0 !important;
}
.swiper-container-contact{
  position: relative;
}
.one .detail{
  width: 80%;
  margin: 0 auto;
}
.one .detail>div{
  padding-top: 5px;
  float: left;
  width: 33%;
  border: 1px solid #ddd;
}
.one .detail>div>div{
  width: 95%;
  margin: 0 auto;
}
.one .detail>div p{
  text-align: center;
  color: #626262;
  font-size: 15px;
  margin-top: 1vw;
  margin-bottom: 2vw;
}
.two .title{
  width: 81%;
  margin: 5vw auto 1vw;
}
.two .detail{
  font-family: "宋体";
  width: 92%;
  margin: 0 auto;
}
.two .left{
  width: 44%;
  float: left;
}
.two .right{
  width: 56%;
  float: left;
  height: 252px;
}
.two .right>div{
  width: 65%;
  margin: 0 auto;
  height: 100%;
  display: table;
}
.two .right>div>div{
  height: 100%;
  display: table-cell;
  vertical-align: middle;
}
.two .right p:nth-child(1){
  font-size: 20px;
}
.two .right p:nth-child(2){
  font-size: 15px;
}
.two p{
  margin: 0;
}


/* concact */
.contactus{
  font-family: YouYuan;
  width: 100vw;
  margin-top: 4.5vw;
  overflow: hidden;
  height: 41vw;
  background: url(../assets/img/contact_bg.png);
  background-size: 100% 100%;
  background-position: center;
  position: relative;
  color: #fff;
}
.contactus .mask{
  width: 100%;
  height: 100%;
}
.contactus .mask img{
  width: 100%;
  height: 100%;
}
.contactus .content{
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
}
.contactus .head{
  width: 37vw;
  margin: 3vw auto 0;
}
.contactus .head img{
  width: 100%;
}
.contactus .title{
  text-align: center;
  font-size: 2.7vw;
  margin-top: 1vw;
}
.contactus .msg{
  width: 85vw;
  margin: 0 auto;
  max-width: 1000px;
}
.contactus .msg>div{
  width: 50%;
  float: left;
}
.contactus .msg .left p{
  margin-top: 1vw;
  font-size: 1.5vw;
}
.contactus .msg .left input[type='text']{
  display: block;
  border: none;
  width: 70%;
  border-radius: 0.5vw;
  height: 3vw;
  max-height: 50px;
  margin-top: 2vw;
  background: url(../assets/img/input_bg.png);
  background-position: center;
  padding-left: 1vw;
}
.contactus .msg .left textarea{
  display: block;
  border: none;
  border-radius: 0.5vw;
  margin-top: 2vw;
  width: 70%;
  height: 7.5vw;
  max-height: 125px;
  background: url(../assets/img/input_bg.png);
  background-position: center;
  padding:0.5vw 1vw;
}
.contactus .msg .left input[type='submit']{
  display: block;
  width: 70%;
  height: 3vw;
  max-height: 50px;
  margin-top: 2vw;
  background: rgba(0,0,0,0);
  border: 1px solid #fff;
  font-size: 1.2vw;
}
.contactus .msg .right{
  font-size: 1vw;
  margin-top: 6vw;
}
.contactus .msg .right p{
  margin-bottom: 5px;
  margin-left: 18%;
}
.contactus .msg .right p:nth-child(2){
  margin-top: 3.5vw;
  margin-bottom: 3vw;
}
.contactus input::-webkit-input-placeholder{
  color:#fff;font-size:1vw;
}
.contactus input::-moz-placeholder {
  color:#fff;font-size:1vw;
}
.contactus input::-moz-placeholder{
  color:#fff;font-size:1vw;
}
.contactus input:-ms-input-placeholder{
  color:#fff;font-size:1vw;
} 
.contactus textarea::-webkit-input-placeholder{
  color:#fff;font-size:1vw;
}
.contactus textarea::-moz-placeholder {
  color:#fff;font-size:1vw;
}
.contactus textarea::-moz-placeholder{
  color:#fff;font-size:1vw;
}
.contactus textarea:-ms-input-placeholder{
  color:#fff;font-size:1vw;
}




@media screen and (min-width: 1201px){
  .one .banner{
    height: 374px;
  }
  .one .banner .right>div{
    height: 374px;
  }
}
@media screen and (max-width: 1200px){
  .one .banner{
    height: 30.5vw;
  }
  .one .banner .right>div{
    height: 30.5vw;
  }
  .one .banner .right{
    line-height: 2.3vw;
  }
  .one .banner .right p{
    margin-top: 10px;
  }
  .two .right{
    height: 21vw;
  }
}
@media screen and (max-width: 990px){
  .banner-img>div .mask{
    display: none;
  }
  .one .banner .right{
    line-height: 2.3vw;
  }
  .one .banner .right p{
    margin-top: 5px;
    margin-left: 8px;
    margin-right: 3px;
    font-size: 12px;
    line-height: 2vw;
  }
  .two:nth-child(3) .right>div{
    width: 78%;
  }
}
@media screen and (max-width: 767px){
  .one .banner>div{
    float: none !important;
    width: 100% !important;
  }
  .one .banner{
    height: auto;
    width: 100%;
  }
  .one .banner .right>div{
    height: auto;
  }
  .one .banner .right p{
    margin: 15px;
    font-size: 2vw;
    line-height: 150%;
  }
  .one .detail{
    width: 100%;
  }
  .one .detail p{
    font-size: 3vw !important;
  }
  .two .detail>div{
    float: none !important;
    width: 100% !important;
    height: auto;
  }
  .two .detail .right>div{
    width: 100%;
  }
  .two .right p:nth-child(1){
    text-align: left;
    font-size: 16px;
  }
  .two .right p:nth-child(2){
    text-align: left;
    font-size: 12px;
  }
  .two .right p:nth-child(3){
    text-align: left;
    font-size: 12px;
  }
  .contactus{
    height: 120vw;
  }
  .contactus .head{
    width: 50vw;
  }
  .contactus .content>p{
    font-size: 4vw;
  }
  .contactus .msg>div{
    width: 100%;
  }
  .contactus .left{
    margin-left: 18%;
  }
  .contactus .left input{
    height: 8vw !important;
    margin-top: 3vw !important;
  }
  .contactus .left textarea{
    height: 20vw !important;
    margin-top: 3vw !important;
  }
  .contactus .right p{
    margin-top: 0 !important;
    margin-bottom: 3vw !important;
  }
}
</style>
