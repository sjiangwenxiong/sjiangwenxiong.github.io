<template>
  <div class="index">
    <div class="swiper-container">
      <div class="swiper-wrapper" @touchend="roll">
        <div class="swiper-slide" v-for="item in bannerList">
          <div class="swiper-img">
          	<img :src="item.img" width="100%">
          	<div>
          		<div class="mask"><img src="../assets/img/mask.png" width="100%"></div>
          		<p>{{item.title}}</p>
          		<div class="content">{{item.content}}</div>
          	</div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-bullets">
        <span class="swiper-pagination-bullet" v-for="item in bannerList"></span>
      </div>
			<div class="container news">
	    	<div class="row">
	    		<div class="col-md-1" style="margin-left:-25px;">
	    			<img src="../assets/img/icon_ad.png" alt="">
	    		</div>
	    		<div class="col-md-3">
	    			<div>「08－11」</div>
	    			<div>这里是新闻资讯是新闻资讯</div>
	    			<div><img src="../assets/img/icon_new.png"></div>
	    		</div>
	    		<div class="col-md-3">
	    			<div>「08－11」</div>
	    			<div>这里是新闻资讯是新闻资讯</div>
	    			<div><img src="../assets/img/icon_new.png"></div>
	    		</div>
	    		<div class="col-md-3">
	    			<div>「08－11」</div>
	    			<div>这里是新闻资讯是新闻资讯</div>
	    			<div><img src="../assets/img/icon_new.png"></div>
	    		</div>
	    		<div class="col-md-1"></div>
	    		<div class="col-md-1" style="padding:0;margin-left:25px;text-align:right;">
	    			查看更多>>
	    		</div>
	    	</div>
	    </div>
    </div>
    <div class="container design">
    	<div class="row">
    		<div class="col-md-3 col-xs-6" v-for="item in about">
    			<p>{{item.title}}</p>
    			<div>{{item.content}}</div>
    		</div>
    	</div>
    </div>
    <div class="dev">
    	<div class="head">
    		<img src="../assets/img/dev_text.png" width="100%">
    	</div>
    	<p>专业技术开发，解决您的技术性问题，帮您打造专属产品</p>
    	<div class="content">
    		<div v-for="(item,index) in dev_server_list" :class="{'no-left':index%3==0,'active':item.active}" @mouseenter="active">
    			<div class="logo" :style="'background-image:url('+item.img+');'"></div>
    			<div class="title">{{item.title}}</div>
    			<p v-for="list in item.content">{{list}}</p>
    		</div>
    		<p style="clear:both;"></p>
    	</div>
    </div>
    <div class="wx">
    	<div class="head">
    		<img src="../assets/img/wx_text.png" width="100%">
    	</div>
    	<p>一站式微信托管式运营服务，帮你走出营销困境</p>
    	<div class="content">
	    	<div v-for="item in wx_run_list">
	    		<div class="logo">
	    			<img :src="item.img" height="100%">
	    		</div>
	    		<div class="title">{{item.title}}</div>
	    		<p>{{item.content}}</p>
	    	</div>
	    	<p style="clear:both;"></p>
	    </div>
    </div>
    <div class="case">
    	<div class="head">
    		<img src="../assets/img/case_text.png" width="100%">
    	</div>
    	<p>我们的服务经验从智能设备到企业协作，在上述领域都拥有案例，并有自己深刻的理解，形成了成熟有效的解决方案</p>
			<slider></slider>
    </div>
    <div class="process">
    	<img src="../assets/img/process_mask.png">
    	<div>
    		<div class="content">
    			<p>服务流程</p>
    			<div class="step" v-for="item in step_list">
    				<div class="logo" :style="'background-image:url('+item.img+');'"></div>
						<div class="title">{{item.title}}</div>
						<p v-for="items in item.content">{{items}}</p>
    			</div>
    		</div>
    	</div>
    </div>
    <div class="group">
    	<div class="head">
    		<img src="../assets/img/group_text.png" width="100%">
    	</div>
    	<p>专业技术团队，诚心为客户服务，技术人员打造高质量、高品质的产品</p>
    	<div class="photo">
    		<img src="../assets/img/group_mask.png" alt="">
    	</div>
    </div>
    <div class="contact">
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
import bannerList from '../api/banner'
import about from '../api/about_us'
import dev_server_list from '../api/dev_server_list'
import wx_run_list from '../api/wx_run_list'
import slider from './case_slider'
export default {
  data () {
    return {
    	bannerList:bannerList,
    	banner:"",
    	about:about,
    	dev_server_list:dev_server_list,
    	wx_run_list:wx_run_list,
    	step_list:[
    		{img:require("../assets/img/step1.png"),title:"需求沟通",content:["倾听客户需求","了解客户使用"]},
    		{img:require("../assets/img/step2.png"),title:"交互设计",content:["UE产品原型","头脑风暴交互情景模式"]},
    		{img:require("../assets/img/step3.png"),title:"视觉创意",content:["色彩及平面元素设定","结构和布局规范确认"]},
    		{img:require("../assets/img/step4.png"),title:"技术开发",content:["移动应用数","据对接与开发"]},
    		{img:require("../assets/img/step5.png"),title:"软件测试",content:["修改调整","规范完善"]},
    		{img:require("../assets/img/step6.png"),title:"项目验收",content:["项目验收","双方确认验收产品"]}
    	]
    }
  },
  components:{slider},
  mounted () {
   	this.banner = new swiper('.swiper-container',{
   		watchSlidesProgress : true,
        watchSlidesVisibility : true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop:true,
        autoplay: 2000,
        autoplayDisableOnInteraction : false
    })
    var that=this
    $(".dev .content>div").hover(function () {
    	var index=$(this).index()
    	that.dev_server_list[index].img=require("../assets/img/dev_logo"+(index+1)+"_b.jpg")
    },function () {
    	var index=$(this).index()
    	that.dev_server_list[index].img=require("../assets/img/dev_logo"+(index+1)+".jpg")
    })
    $(".wx .content>div").hover(function () {
    	var index=$(this).index()
    	that.wx_run_list[index].img=require("../assets/img/wx_logo"+(index+1)+"_b.jpg")
    },function () {
    	var index=$(this).index()
    	that.wx_run_list[index].img=require("../assets/img/wx_logo"+(index+1)+".jpg")
    })
  },
  methods:{
    roll(){
        this.banner.startAutoplay()
    },
    active(e){
    	console.log(1)
    	e.stopPropagation();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*banner*/
/*.swiper-container{
	z-index: -2;
}
.swiper-wrapper{
	z-index: -1;
}*/
.swiper-img{
	width: 100vw;

}
.swiper-img>div{
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	box-shadow: 0px 5px 30px rgba(0,0,0,.3) inset;
	color: #fff;
}
.swiper-img>div .mask{
	width: 16vw;
	margin: -3px auto 0;
}
.swiper-img>div p{
	text-align: center;
	font-size: 2.5vw;
	margin-top: 12vw;
}
.swiper-img>div .content{
	width: 18vw;
	height: 3vw;
	line-height: 3vw;
	border: 1px solid #fff;
	margin: 2vw auto 0;
	text-align: center;
	font-size: 1.5vw;
}
.swiper-pagination-bullet{
    width: 8px;
    height: 8px;
    background: #8d95a4;
}
.swiper-pagination-bullet-active{
    background: #d2d5db;
}

/* news */
.index .news .row{
	margin-top: -35px;
	height: 25px;
	line-height: 25px;
	font-size: 14px;
	color: #fff;
}
.index .news .row .col-md-1 img{
	height: 25px;
	float: right;
}
.index .news .row .col-md-3{
	padding: 0;
}
.index .news .row .col-md-3 div{
	display: inline-block;
	overflow: hidden;
}
.index .news .row .col-md-3 div:nth-child(2){
	width: 50%;
	white-space: nowrap;
	text-overflow: ellipsis; 
}
/*.index .news .row .col-md-3 div:nth-child(3){
	overflow: visible;
}*/
.index .news .row .col-md-3 img{
	height: 16px;
	margin-top: -4px;
	/*margin-left: -5px;*/
}

/* design */
.index .design .col-md-3{
	margin-top: 2vw;
	text-align: center;
	padding-right: 0px;
	background:url("../assets/img/design.png") no-repeat;
	height: 12vw;
	max-height: 144px;
	background-size: 95% 140%;
	background-position: right top;
	color: #fff;
}
.index .design .col-md-3 p{
	margin-top: 1vw;
	font-size: 24px;
}
.index .design .col-md-3 div{
	font-size: 14px;
	margin-top: 20px;
}

/* dev */
.index .dev{
	width: 100vw;
	max-width: 900px;
	margin: 0 auto;
	margin-top: 4.5vw;
}
.index .dev .head{
	width: 23%;
	margin: 0 auto;
	font-size: 16px;
}
.index .dev>p{
	margin-top: 1vw;
	margin-bottom: 0;
	text-align: center;
	color: #8a8a8a;
	font-size: 16px;
}
.index .dev .content>div{
	width: 30%;
	margin-left: 5%;
	float: left;
	color: #333;
	margin-top: 50px;
	cursor: pointer;
}
.index .dev .content>div:hover{
	color: #00aaee;
} 
.index .dev .content>div:hover >p{
	color: #00aaee;
}
.index .dev .content>div:hover >div:nth-child(1){
	border: 1px solid #00aaee;
}
.index .dev .content .active{
	color: #33bbf1;
}
.index .dev .content .no-left{
	margin-left: 0;
}
.index .dev .content .logo{
	width: 12.5vw;
	height: 12.5vw;
	max-width: 115px;
	max-height: 115px;
	border-radius: 50%;
	border: 1px solid #8a8a8a;
	margin: 0 auto;
	background-repeat: no-repeat;
	background-position: center;
}
.index .dev .content .title{
	text-align: center;
	font-size: 16px;
	margin-top: 10px;
	margin-bottom: 5px;
}
.index .dev .content p{
	text-align: center;
	margin-bottom: 0;
	color: #8a8a8a;
}

/* wx */
.index .wx{
	width: 100vw;
	max-width: 1000px;
	margin: 0 auto;
	margin-top: 4.5vw;
}
.index .wx .head{
	width: 20%;
	margin: 0 auto;
	font-size: 16px;
}
.index .wx>p{
	margin-top: 1vw;
	margin-bottom: 10px;
	text-align: center;
	color: #8a8a8a;
	font-size: 16px;
}
.index .wx .content>div{
	width: 20%;
	height: 160px;
	float: left;
	margin-top: 50px;
}
.index .wx .content .logo{
	width: 40px;
	height: 40px;
	margin: 0 auto;
}
.index .wx .content .title{
	text-align: center;
	font-size: 16px;
	margin-top: 20px;
	margin-bottom: 10px;
}
.index .wx .content p{
	width: 150px;
	text-align: center;
	margin: 0 auto;
	color: #8a8a8a;
}
.index .wx .content>div:hover{
	color: #00aaee;
} 
.index .wx .content>div:hover >p{
	color: #00aaee;
}

/* case */
.index .case{
	width: 100vw;
	max-width: 1000px;
	margin: 0 auto;
	margin-top: 4.5vw;
	overflow: hidden;
	padding-bottom: 100px;
}
.index .case .head{
	width: 12%;
	margin: 0 auto;
	font-size: 16px;
}
.index .case>p{
	margin-top: 1vw;
	margin-bottom: 10px;
	text-align: center;
	color: #8a8a8a;
	font-size: 16px;
}

/* process */
.index .process{
	width: 100%;
	background: url(../assets/img/process_bg.png);
	background-size: 100% 100%;
	position: relative;
	font-family: "幼圆";
}
.index .process>img{
	width: 100vw;
}
.index .process>div{
	position: absolute;
	width: 100vw;
	top: 0;
	bottom: 0;
}
.index .process .content{
	width: 100vw;
	max-width: 1000px;
	margin: 0 auto;
}
.index .process .content>p{
	font-size: 3vw;
	text-align: center;
	color: #fff;
	margin-top: 4.5vw;
}
.index .process .content .step{
	width: 33%;
	display: inline-block;
	text-align: center;
	color: #fff;
	margin-top: 3vw;
}
.index .process .content .step .logo{
	width: 3vw;
	height: 3vw;
	background-repeat: no-repeat;
	background-position: center;
	background-size: 100% 100%;
	margin: 0 auto;
}
.index .process .content .step .title{
	font-size: 1.5vw;
	margin-top: 0.5vw;
	margin-bottom: 1vw;
}
.index .process .content .step>p{
	margin-bottom: 0;
	font-size: 0.7vw;
}

/* group */
.index .group{
	width: 100vw;
	margin-top: 4.5vw;
	overflow: hidden;
}
.index .group .head{
	width: 13vw;
	max-width: 150px;
	margin: 0 auto;
	font-size: 16px;
}
.index .group>p{
	margin-top: 1vw;
	margin-bottom: 10px;
	text-align: center;
	color: #8a8a8a;
	font-size: 16px;
}
.index .group .photo{
	overflow: hidden;
	width: 68vw;
	margin: 2vw auto 0;
	height: 37.5vw;
	background: url(../assets/img/group_photo.png);
	background-size: 100%;
}
.index .group .photo img{
	width: 100%;
}

/* concact */
.index .contact{
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
.index .contact .mask{
	width: 100%;
	height: 100%;
}
.index .contact .mask img{
	width: 100%;
	height: 100%;
}
.index .contact .content{
	position: absolute;
	width: 100%;
	top: 0;
	bottom: 0;
}
.index .contact .head{
	width: 37vw;
	margin: 3vw auto 0;
}
.index .contact .head img{
	width: 100%;
}
.index .contact .title{
	text-align: center;
	font-size: 2.7vw;
	margin-top: 1vw;
}
.index .contact .msg{
	width: 85vw;
	margin: 0 auto;
	max-width: 1000px;
}
.index .contact .msg>div{
	width: 50%;
	float: left;
}
.index .contact .msg .left p{
	margin-top: 1vw;
	font-size: 1.5vw;
}
.index .contact .msg .left input[type='text']{
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
.index .contact .msg .left textarea{
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
.index .contact .msg .left input[type='submit']{
	display: block;
	width: 70%;
	height: 3vw;
	max-height: 50px;
	margin-top: 2vw;
	background: rgba(0,0,0,0);
	border: 1px solid #fff;
	font-size: 1.2vw;
}
.index .contact .msg .right{
	font-size: 1vw;
	margin-top: 6vw;
}
.index .contact .msg .right p{
	margin-bottom: 5px;
	margin-left: 18%;
}
.index .contact .msg .right p:nth-child(2){
	margin-top: 3.5vw;
	margin-bottom: 3vw;
}
.contact input::-webkit-input-placeholder{
	color:#fff;font-size:1vw;
}
.contact input::-moz-placeholder {
	color:#fff;font-size:1vw;
}
.contact input::-moz-placeholder{
	color:#fff;font-size:1vw;
}
.contact input:-ms-input-placeholder{
	color:#fff;font-size:1vw;
} 
.contact textarea::-webkit-input-placeholder{
	color:#fff;font-size:1vw;
}
.contact textarea::-moz-placeholder {
	color:#fff;font-size:1vw;
}
.contact textarea::-moz-placeholder{
	color:#fff;font-size:1vw;
}
.contact textarea:-ms-input-placeholder{
	color:#fff;font-size:1vw;
} 

@media screen and (min-width: 768px){
	.index{
		margin-top: 1px;
	}
	.swiper-pagination{
		bottom: 50px !important;
	}
}
@media screen and (max-width: 990px){
	.swiper-img>div .mask{
		display: none;
	}
	.swiper-img>div p{
		margin-top: 14vw !important;
	}
	.index .news{
		display: none;
	}
	.index .design .col-md-3{
		height: 24vw;
		max-height: 144px;
		background-size: 97% 140%;
		background-position: left top;
		color: #fff;
		/*z-index: -2;*/
	}
	.index .design .col-md-3:nth-child(2),.index .design .col-md-3:nth-child(4){
		padding-left: 0;
		background-position: right top;
	}
	.index .design .col-md-3 p{
		margin-top: 2vw;
		font-size: 24px;
	}
	.index .design .col-md-3 div{
		font-size: 12px;
		margin-top: 1.5vw;
	}
	.index .dev .content p{
		font-size: 12px;
	}
	.index .wx .content p{
		font-size: 12px;
	}
	.index .wx .content{
		margin-left:10px; 
	}
	.index .process .content>p{
		margin-top: 3vw;
		margin-bottom: 0;
	}
	.index .group .photo{
		width: 100vw;
		height: 55vw;
	}
}
@media screen and (max-width: 767px){
	.swiper-img>div p{
		font-size: 5vw !important;
		margin-top: 12vw !important;
	}
	.swiper-img>div .content{
		width: 36vw;
		height: 6vw !important;
		line-height: 6vw !important;
		border: 1px solid #fff !important;
		margin: 2vw auto 0 !important;
		font-size: 3vw !important;
	}
	.index .dev{
		margin-top: 10vw;
	}
	.index .dev .content>div{
		margin-left: 0;
		width: 100%;
		margin-top: 4vw;
	}
	.index .dev .content .logo{
		width: 40vw;
		height: 40vw;
	}
	.index .dev .head{
		width: 40%;
	}
	.index .dev>p{
		font-size: 12px;
	}
	.index .wx{
		margin-top: 10vw;
	}
	.index .wx p{
		margin-bottom: 0;
	}
	.index .wx .content{
		margin:0 5px;
	}
	.index .wx .content>div{
		width: 50%;
		margin-top: 6vw;
	}
	.index .wx .content .logo{
		width: 20vw;
		height: 20vw;
	}
	.index .wx .content .title{
		margin-top: 2vw;
		margin-bottom: 1.5vw;
	}
	.index .wx .head{
		width: 40%;
	}
	.index .wx>p{
		font-size: 14px;
	}
	.index .case{
		margin-top: 10vw;
	}
	.index .case .head{
		width: 25%;
	}
	.index .case>p{
		margin-top: 10px;
		font-size: 14px;
	}
	.index .case{
		padding-bottom: 5vw
	}
	.index .process{
		margin-top: 10vw;
		background-size: cover;
		background-position: center;
	}
	.index .process>img{
		height: 120vw;
	}
	.index .process .content p{
		font-size: 7vw;
	}
	.index .process .content .step{
		margin-top: 5vw;
		width: 50%;
	}
	.index .process .content .step .logo{
		width: 10vw;
		height: 10vw;
	}
	.index .process .content .step .title{
		font-size: 5vw;
	}
	.index .group{
		margin-top: 10vw;
	}
	.index .group .head{
		width: 32%;
	}
	.index .group>p{
		margin-top: 10px;
		font-size: 14px;
	}
	.index .group{
		padding-bottom: 5vw
	}
	.index .contact{
		height: 120vw;
	}
	.index .contact .head{
		width: 50vw;
	}
	.index .contact .content>p{
		font-size: 4vw;
	}
	.index .contact .msg>div{
		width: 100%;
	}
	.index .contact .left{
		margin-left: 18%;
	}
	.index .contact .left input{
		height: 8vw !important;
		margin-top: 3vw !important;
	}
	.index .contact .left textarea{
		height: 20vw !important;
		margin-top: 3vw !important;
	}
	.index .contact .right p{
		margin-top: 0 !important;
		margin-bottom: 3vw !important;
	}
}
@media screen and (max-width: 350px){
	.swiper-img>div .content{
		width: 45vw;
	}
	.swiper-pagination{
		bottom: 0 !important;
	}
}
</style>
