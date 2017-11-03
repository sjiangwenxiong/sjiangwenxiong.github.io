<template>
  <div class="operation">
    <div class="swiper-img">
      <img src="../assets/img/operation.jpg" width="100%">
      <div>
        <div class="mask"><img src="../assets/img/mask.png" width="100%"></div>
      </div>
    </div>
    <div class="head">
      <div v-for="item in operation_type">
        <div>
          <img :src="item.img" width="100%">
          <p :style="'color:'+item.color">{{item.value}}</p>
        </div>
      </div>
    </div>
    <div class="server">
      <div>
        <div class="top">
          <div class="box">
            <div><img src="../assets/img/operation_server_img1.jpg" width="100%"></div>
            <p>持续运营</p>
          </div>
          <div class="box">
            <div><img src="../assets/img/operation_server_img2.jpg" width="100%"></div>
            <p>搭建</p>
          </div>
          <div class="box">
            <div><img src="../assets/img/operation_server_img3.jpg" width="100%"></div>
            <p>服务</p>
          </div>
          <div class="center">
            <div>
              <img src="../assets/img/operation_server_mask.png" alt="">
              <img src="../assets/img/operation_server_text.png" alt="">
            </div>
          </div>
          <p style="clear:both;"></p>
        </div>
        <div class="bottom">
          <div class="box">
            <div><img src="../assets/img/operation_server_img4.jpg" width="100%"></div>
            <p>内容运营</p>
          </div>
          <div class="box">
            <div><img src="../assets/img/operation_server_img5.jpg" width="100%"></div>
            <p>活动运营</p>
          </div>
          <p style="clear:both;"></p>
        </div>
      </div>
      <p>*团队人员配置：运营经理、设计工程师、运营执行、文案编辑</p>
    </div>
    <div class="brand">
      <div class="head"><img src="../assets/img/brand_text.jpg" width="100%"></div>
      <div>
        <div class="content" v-for="item in brand_list">
          <div class="title">
            <div><img :src="item.img" width="100%"></div>
            <p>{{item.title}}</p>
          </div>
          <div class="detail">{{item.content}}</div>
        </div>
        <p style="clear:both;margin:0;"></p>
      </div>
    </div>
    <div class="promote">
      <div><img src="../assets/img/promote_text.jpg" width="100%"></div>
      <div><img src="../assets/img/promote_title.jpg" width="100%"></div>
      <div class="detail">
        <div v-for="(item,index) in promote_list" 
             :class="{active:promoteActive==index,reverse:index%2!=0}">
          <div class="top" @mouseenter="active(index)">
            <div><p>{{index+1}}</p></div>
          </div>
          <div class="middle" @mouseenter="active(index)"></div>
          <div class="bottom" @mouseenter="active(index)">
            <div></div>
            <div><img :src="promoteActive==index?item.acimg:item.img" height="100%"></div>
            <p>{{item.title}}</p>
          </div>
        </div>
        <p style="clear:both;margin:0;"></p>
      </div>
    </div>
    <div class="demand">
      <div class="head"><img src="../assets/img/demand_text.jpg" width="100%"></div>
      <div class="detail">
        <div>
          <div>
            <img src="../assets/img/demand1.jpg" width="100%">
          </div>
          <div>微信代运营</div>
        </div>
        <div>
          <div>
            <img src="../assets/img/demand2.jpg" width="100%">
          </div>
          <div>竞价推广</div>
        </div>
        <div>
          <div>
            <img src="../assets/img/demand3.jpg" width="100%">
          </div>
          <div>网络公关</div>
        </div>
        <p style="clear:both;"></p>
      </div>
      <div class="head" style="margin-bottom:0;">
        <img src="../assets/img/demand_text.jpg" width="100%">
      </div>
    </div>
    <img src="../assets/img/demand_foot.jpg" width="100%">
  </div>
</template>

<script>
export default {
  data () {
    return {
      operation_type:[
        {img:require("../assets/img/operation_type1.jpg"),value:"内容运营",color:"#53d37e"},
        {img:require("../assets/img/operation_type2.jpg"),value:"品牌运营",color:"#f4d701"},
        {img:require("../assets/img/operation_type3.jpg"),value:"产品运营",color:"#58bbb8"},
        {img:require("../assets/img/operation_type4.jpg"),value:"活动运营",color:"#fe7c28"}
      ],
      brand_list:[
        {img:require("../assets/img/brand1.jpg"),title:"客户情况诊断分析",content:"技术评估，对移动互联网的升入了解，针对客户需求提出可行性诊断与优化建议"},
        {img:require("../assets/img/brand2.jpg"),title:"编撰运管方案",content:"根据客户品牌情况进行对应的品牌定位分析，竞品分析形成完善的微信运管方案"},
        {img:require("../assets/img/brand3.jpg"),title:"编撰时间进度表",content:"结合客户品牌，平台情况及推广方向编撰运管时间进度表"}
      ],
      promote_list:[
        {img:require("../assets/img/promote1.jpg"),acimg:require("../assets/img/promote1.png"),title:"平台运营"},
        {img:require("../assets/img/promote2.jpg"),acimg:require("../assets/img/promote2.png"),title:"节日营销"},
        {img:require("../assets/img/promote3.jpg"),acimg:require("../assets/img/promote3.png"),title:"商城转化"},
        {img:require("../assets/img/promote4.jpg"),acimg:require("../assets/img/promote4.png"),title:"分级管理"}
      ],
      promoteActive:0
    }
  },
  mounted(){
    $(".navbar-nav .active").removeClass("active")
    $(".navbar-nav li").eq(2).addClass("active")
  },
  methods:{
    active(index){
      this.promoteActive=index
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.operation .swiper-img{
  width: 100%;
  position: relative;
}
.operation .swiper-img>div{
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  box-shadow: 1px 5px 15px rgba(0,0,0,.1) inset;
  color: #fff;
}
.operation .swiper-img>div .mask{
  width: 16vw;
  margin: -3px auto 0;
}

/* /head */
.operation .head{
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}
.operation .head>div{
  margin-top: 5vw;
  width: 25%;
  display: inline-block;
  font-size: 28px;
}
.operation .head>div>div{
  width: 71.5%;
  margin: 0 auto;
  box-shadow: 3px 3px 5px #ccc;
}
.operation .head p{
  text-align: center;
  margin: 0;
  padding: 1.5vw 0;
}

/* server */
.operation .server{
  width: 100%;
  max-width: 1200px;
  margin: 4.5vw auto 0;
}
.operation .server>div{
  width: 85%;
  margin: 0 auto;
}
.operation .server .top{
  position: relative;
}
.operation .server .top>div{
  width: 28%;
  float: left;
}
.operation .server .top>div:nth-child(1){
  margin-top: 160px;
  margin-right: 8%;
}
.operation .server .top>div:nth-child(3){
  margin-top: 160px;
  margin-left: 8%;
}
.operation .server .box{
  box-shadow: 1px 1px 15px #999;
  height: 250px;
}
.operation .server .box div{
  width: 70px;
  height: 70px;
  margin: 70px auto 30px;
}.operation .server .box p{
  text-align: center;
  font-size: 24px;
  color: #333;
}
.operation .server .center{
  width: 100% !important;
  position: absolute;
  bottom: -70px;
  left: 0;
}
.operation .server .center>div{
  width: 32%;
  height:160px;
  margin: 0 auto;
  box-shadow: 1px 1px 15px #999;
  background-image: url(../assets/img/operation_server_bg.jpg);
  background-size: cover;
  background-position: center;
  position: relative;;
}
.operation .server .center>div img:nth-child(1){
  width: 110%;
}
.operation .server .center>div img:nth-child(2){
  position: absolute;
  top: 0;
  left: 0;
  width: 95%;
  margin-left: 2.5%;
  margin-top: 15px;
}
.operation .server .bottom>div{
  width: 28%;
  margin-top: 120px;
}
.operation .server .bottom>div:nth-child(1){
  float: left;
  margin-left: 150px;
}
.operation .server .bottom>div:nth-child(2){
  float: right;
  margin-right: 150px;
}
.operation .server>p{
  font-size: 20px;
  color: #0092df;
  text-align: center;
}

/*brand*/
.operation .brand{
  width: 100%;
  max-width:1200px;
  margin: 4.5vw auto 0;
}
.operation .brand .head{
  width: 170px;
  margin: 0 auto;
}
.operation .brand .content{
  margin-top: 3.5vw;
  width: 33%;
  float: left;
}
.operation .brand .content .title{
  width: 220px;
  height: 220px;
  border-radius: 10px;
  border: 1px solid #ddd;
  margin: 0 auto;
}
.operation .brand .content .title>div{
  width: 41%;
  height: 41%;
  margin: 14% auto;
}
.operation .brand .content .title p{
  font-size: 20px;
  text-align: center;
  color: #333;
}
.operation .brand .content .detail{
  width: 32.5%;
  color: #9b9b9b;
  font-size: 16px;
  margin: 25px auto 0;
}

/* promote */
.operation .promote{
  width: 100%;
  max-width: 1000px;
  margin: 4.5vw auto 0;
}
.operation .promote>div:nth-child(1){
  width: 12%;
  margin: 0 auto;
}
.operation .promote>div:nth-child(2){
  width: 80%;
  margin: 1vw auto 0;
}
.operation .promote>div:nth-child(3){
  margin-top: 4vw;
  width: 100%;
}
.operation .promote .detail{
  width: 100%;
  height: 260px;
  background: url(../assets/img/line.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
}
.operation .promote .detail>div{
  position: relative;
  width: 25%;
  height: 100%;
  float: left;
  color: #aaa;
}
.operation .promote .detail>div>div{
  cursor: pointer;
}
.operation .promote .detail>.active{
  color: #fff;
}
.operation .promote .detail>div>div:nth-child(1){
  top: 22%;
  width: 16%;
  /*height: 7.7%;*/
  height: 15.4%;
  
  background: #ececec;
  border-radius: 50%;
  /*border-top-left-radius: 20px;*/
  /*border-top-right-radius: 20px;*/
  margin: 0 auto;
  position: relative;
}
.operation .promote .detail>.active>div:nth-child(1){
  background: #bfe9ff;
}
.operation .promote .detail>div>div:nth-child(1):after{
    content: "";
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 0;
    height: 0;
    border-top: 30px solid #ececec;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
}
.operation .promote .detail>.active>div:nth-child(1):after{
  border-top: 30px solid #bfe9ff;
}
 .operation .promote .detail>div>div:nth-child(1) div{
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
  background: #fff;
  border-radius: 50%;
  z-index: 2;
  text-align: center;
  font-size: 150%;
  /*border-top-left-radius: 16px;*/
  /*border-top-right-radius: 16px;*/
}
 .operation .promote .detail>.active>div:nth-child(1) div{
  background: #0092df;
 }
 .operation .promote .detail>div>div:nth-child(1) div:after{
    content: "";
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 0;
    height: 0;
    border-top: 24px solid #fff;
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    z-index: 3;
 }
  .operation .promote .detail>.active>div:nth-child(1) div:after{
    border-top: 24px solid #0092df;
  }
.operation .promote .detail .top p{
  position: absolute;
  top: 5%;
  width: 100%;
  z-index: 4;
  font-weight: bold;
}
.operation .promote .detail .middle{
  width: 5%;
  height: 5%;
  border: 2px solid #aaa;
  border-radius: 50%;
  margin: 0 auto;
  position: absolute;
  top: 47.5%;
  left: 47.5%;
  background: #fff;
}
.operation .promote .detail .active .middle{
  border: 2px solid #0092df;
}
.operation .promote .detail .bottom{
  width: 60%;
  position: absolute;
  left: 20%;
  height: 41.5%;
  bottom: 0;
  border-radius: 10px;
}
.operation .promote .detail .active .bottom{
  background: #0092df;
}
.operation .promote .detail .bottom>div:nth-child(1){
  width: 7%;
  height: 10%;
  transform:rotate(45deg);
  margin: -4% auto 0;
  background: inherit;
}
.operation .promote .detail .bottom>div:nth-child(2){
  margin-top: 15%;
  height: 37%;
  text-align: center;
}
.operation .promote .detail .bottom p{
  font-size: 16px;
  text-align: center;
  margin-top: 5%;
}
.reverse .top{
  transform:rotate(180deg);
  top:62% !important;
}
.reverse .top p{
  transform:rotate(180deg);
}
.reverse .bottom{
  top:0%;
}
.reverse .bottom>div:nth-child(1){
  position: absolute;
  bottom: -5%;
  left: 46.5%;
}
/* demand */
.operation .demand{
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}
.operation .demand .head{
  width: 170px;
  margin: 5vw auto 3.5vw;
}
.operation .demand .detail{
  width: 100%;
}
.operation .demand .detail>div{
  width: 33.3%;
  margin: 0 auto;
  float: left;
  position: relative;
}
.operation .demand .detail>div>div:nth-child(1){
  width: 80%;
  margin: 0 auto;
}
.operation .demand .detail>div>div:nth-child(2){
  position: absolute;
  left: 0;
  top: 120px;
  font-size: 26px;
  text-align: center;
  width: 100%;
  font-weight: bold;
}








@media screen and (max-width: 990px){
  .swiper-img>div .mask{
    display: none;
  }
  .operation .server .top>div:nth-child(1){
    margin-top: 13%;
  }
  .operation .server .top>div:nth-child(3){
    margin-top: 13%;
  }
  .operation .server .box{
    height: 21vw;
  }
  .operation .server .box div{
    width: 6vw;
    height: 6vw;
    margin: 6vw auto 2.5vw;
  }.operation .server .box p{
    font-size: 1.2vw;
  }
  .operation .server .center{
    bottom: -3vw;
  }
  .operation .server .center>div{
    width: 32%;
    height:13vw;
  }
  .operation .server .bottom>div{
    margin-top: 8vw;
  }
  .operation .server .bottom>div:nth-child(1){
    margin-left: 12.5vw;
  }
  .operation .server .bottom>div:nth-child(2){
    margin-right: 12.5vw;
  }
  .operation .server>p{
    font-size: 1.8vw;
  }
  .operation .brand .head{
    width: 15%;
  }
  .operation .brand .content .title{
    width: 25vw;
    height: 25vw;
  }
  .operation .brand .content .title>div{
    width: 41%;
    height: 41%;
    margin: 14% auto;
  }
  .operation .brand .content .title p{
    font-size: 20px;
  }
  .operation .brand .content .detail{
    width: 51%;
    margin: 2vw auto 0;
  }
  .operation .promote>div:nth-child(1){
    width: 10%;
  }
  .operation .demand .detail>div>div:nth-child(2){
    top: 12vw;
    font-size: 2.6vw;
  }
  .operation .demand .head{
    width: 15%;
  }



.operation .promote .detail{
  height: 26vw;
}
.operation .promote .detail>div{
  position: relative;
  width: 25%;
  height: 100%;
  float: left;
  color: #aaa;
}
.operation .promote .detail>div>div{
  cursor: pointer;
}
.operation .promote .detail>.active{
  color: #fff;
}
.operation .promote .detail>div>div:nth-child(1){
  top: 22%;
  width: 16%;
  /*height: 7.7%;*/
  height: 15.4%;
  background: #ececec;
  border-radius: 50%;
  /*border-top-left-radius: 20px;*/
  /*border-top-right-radius: 20px;*/
  margin: 0 auto;
  position: relative;
}
.operation .promote .detail>.active>div:nth-child(1){
  background: #bfe9ff;
}
.operation .promote .detail>div>div:nth-child(1):after{
    content: "";
    position: absolute;
    bottom: -1.5vw;
    left: 0;
    width: 0;
    height: 0;
    border-top: 3vw solid #ececec;
    border-left: 2vw solid transparent;
    border-right: 2vw solid transparent;
}
.operation .promote .detail>.active>div:nth-child(1):after{
  border-top: 3vw solid #bfe9ff;
}
 .operation .promote .detail>div>div:nth-child(1) div{
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
  background: #fff;
  border-radius: 50%;
  z-index: 2;
  text-align: center;
  font-size: 100%;
  /*border-top-left-radius: 16px;*/
  /*border-top-right-radius: 16px;*/
}
 .operation .promote .detail>.active>div:nth-child(1) div{
  background: #0092df;
 }
 .operation .promote .detail>div>div:nth-child(1) div:after{
    content: "";
    position: absolute;
    bottom: -1.2vw;
    left: 0;
    width: 0;
    height: 0;
    border-top: 2.4vw solid #fff;
    border-left: 1.6vw solid transparent;
    border-right: 1.6vw solid transparent;
    z-index: 3;
 }
  .operation .promote .detail>.active>div:nth-child(1) div:after{
    border-top: 2.4vw solid #0092df;
  }
.operation .promote .detail .top p{
  position: absolute;
  top: 10%;
  width: 100%;
  z-index: 4;
  font-weight: bold;
}
.operation .promote .detail .middle{
  width: 5%;
  height: 5%;
  border: 2px solid #aaa;
  border-radius: 50%;
  margin: 0 auto;
  position: absolute;
  top: 47.5%;
  left: 47.5%;
  background: #fff;
}
.operation .promote .detail .active .middle{
  border: 2px solid #0092df;
}
.operation .promote .detail .bottom{
  width: 60%;
  position: absolute;
  left: 20%;
  height: 41.5%;
  bottom: 0;
  border-radius: 10px;
}
.operation .promote .detail .active .bottom{
  background: #0092df;
}
.operation .promote .detail .bottom>div:nth-child(1){
  width: 7%;
  height: 10%;
  transform:rotate(45deg);
  margin: -4% auto 0;
  background: inherit;
}
.operation .promote .detail .bottom>div:nth-child(2){
  margin-top: 15%;
  height: 37%;
  text-align: center;
}
.operation .promote .detail .bottom p{
  font-size: 1.6vw;
  text-align: center;
  margin-top: 5%;
}
.reverse .top{
  transform:rotate(180deg);
  top:62% !important;
}
.reverse .top p{
  transform:rotate(180deg);
}
.reverse .bottom{
  top:0%;
}
.reverse .bottom>div:nth-child(1){
  position: absolute;
  bottom: -5%;
  left: 46.5%;
}
}
@media screen and (max-width: 767px){
  .operation>.head p{
    font-size: 3vw;
  }
  .operation .brand .head{
    width: 30%;
  }
  .operation .brand .content .title{
    width: 30vw;
    height: 40vw;
  }
  .operation .brand .content .title>div{
    width: 17vw;
    height: 17vw;
    margin: 14% auto;
  }
  .operation .brand .content .title p{
    font-size: 5vw;
  }
  .operation .brand .content .detail{
    width: 80%;
    margin: 2vw auto 0;
  }
  .operation .promote>div:nth-child(1){
    width: 20%;
    margin: 0 auto;
  }
  .operation .demand .head{
    width: 30%;
  }
  .operation .promote .detail .bottom{
    border-radius: 1vw;
  }
  .operation .promote .detail .bottom>div:nth-child(2){
    margin-top: 5%;
  }
  .operation .promote .detail .top p{
    font-weight: normal;
    margin: 0;
  }



.operation .promote .detail>div>div:nth-child(1){
  top: 3%;
  width: 32%;
  /*height: 7.7%;*/
  height: 30.8%;
  background: #ececec;
  border-radius: 50%;
  /*border-top-left-radius: 20px;*/
  /*border-top-right-radius: 20px;*/
  margin: 0 auto;
  position: relative;
}
.operation .promote .detail>.active>div:nth-child(1){
  background: #bfe9ff;
}
.operation .promote .detail>div>div:nth-child(1):after{
    content: "";
    position: absolute;
    bottom: -3vw;
    left: 0;
    width: 0;
    height: 0;
    border-top: 6vw solid #ececec;
    border-left: 4vw solid transparent;
    border-right: 4vw solid transparent;
}
.operation .promote .detail>.active>div:nth-child(1):after{
  border-top: 6vw solid #bfe9ff;
}
 .operation .promote .detail>div>div:nth-child(1) div{
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
  background: #fff;
  border-radius: 50%;
  z-index: 2;
  text-align: center;
  font-size: 150%;
  /*border-top-left-radius: 16px;*/
  /*border-top-right-radius: 16px;*/
}
 .operation .promote .detail>.active>div:nth-child(1) div{
  background: #0092df;
 }
 .operation .promote .detail>div>div:nth-child(1) div:after{
    content: "";
    position: absolute;
    bottom: -2.1vw;
    left: 0;
    width: 0;
    height: 0;
    border-top: 4.8vw solid #fff;
    border-left: 3.2vw solid transparent;
    border-right: 3.2vw solid transparent;
    z-index: 3;
 }
  .operation .promote .detail>.active>div:nth-child(1) div:after{
    border-top: 4.8vw solid #0092df;
  }
.operation .promote .detail .top p{
  position: absolute;
  top: 10%;
  width: 100%;
  z-index: 4;
  font-size: 3.5vw;
}
}
</style>
