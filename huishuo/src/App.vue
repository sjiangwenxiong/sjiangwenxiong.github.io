<template>
  <div id="app">
    <div class="navbar navbar-invers" role="navigation">
      <div class="container">
        <div class="container-fluid">
            <div class="navbar-header">
              <div class="logo-index">
                <div>
                  <img src="./assets/img/logo.png" width="100%">
                </div>
              </div>
              <button data-toggle="collapse" data-target="#navbar-collapse" class="navbar-toggle" type="button">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
            <div id="navbar-collapse" class="collapse navbar-collapse">
              <ul class="nav navbar-nav">
                <li @click="go" class="active" style="float:left;margin-right:7.5%;">首页</li>
                <li @click="go" style="float:left;margin-right:7.5%;">产品中心</li>
                <li @click="go" style="float:left;">运营中心</li>
                <li @click="go" style="float:right;margin-left:7.5%;">联系我们</li>
                <li @click="go" style="float:right;margin-left:7.5%;">案例中心</li>
                <li @click="go" style="float:right;">新闻资讯</li>
                <p style="clear:both;"></p>
              </ul>
            </div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <router-view/>
    </transition>
    <div class="foot">Copyright © 2017 huishuoit.com 浙ICP备15019987号</div>
  </div>
</template>

<script>
import base from './assets/css/base.css'
import jQuery from './assets/js/jquery-1.11.3.js'
import './assets/css/bootstrap.css'
import bootstrap from './assets/js/bootstrap.min.js'
export default {
  name: 'app',
  methods:{
    go(e){
      $(e.target).addClass('active')
      $(e.target).siblings().removeClass('active')
      $("#navbar-collapse").removeClass('in')
      if($(e.target).index()==0){
        this.$router.push("/")
      }else if($(e.target).index()==1){
        this.$router.push("/product")
      }else if($(e.target).index()==2){
        this.$router.push("/operation")
      }else if($(e.target).index()==5){
        this.$router.push("/news")
      }else if($(e.target).index()==4){
        this.$router.push("/cases")
      }else if($(e.target).index()==3){
        this.$router.push("/contact")
      }
    },
  }
}
/*#0f8fea  #8a8a8a*/
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to{
  opacity: 0
}
#app {
  font-family:'Microsoft Yahei','微软雅黑','Avenir', Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.navbar{
  margin: 0 !important;
  min-height:0 !important;
  height: 5vw;
  line-height: 6vw;
  font-size: 18px;
  border: none !important;
}
.container{
  padding: 0;
}
.container-fluid{
  padding: 0;
  position: relative;
  z-index: 2;
}
.logo-index{
  width: 100%;
  position: absolute;
  top:0;
  left: 0;
}
.logo-index div{
  width: 10vw;
  height: 2vw;
  margin: 0 auto;
}
.navbar-collapse{
  padding: 0;
}
.navbar-nav{
  height: 5vw;
  width: 100%;
}
.navbar-nav li{
  cursor: pointer;
}
.navbar-nav .active{
  color: #0092df;
}

.foot{
  width: 100%;
  background: #000;
  color: #8a8a8a;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 14px;
}

@media screen and (max-width: 990px) and (min-width: 767px){
  .logo-index img{
    margin-left: -20px;
  }
  .navbar-nav li:nth-child(1){
    margin-right: 5% !important;
  }
  .navbar-nav li:nth-child(2){
    margin-right: 5% !important;
  }
  .navbar-nav li:nth-child(4){
    margin-left: 5% !important;
  }
  .navbar-nav li:nth-child(5){
    margin-left: 5% !important;
  }
}
@media screen and (max-width: 767px){
  .container-fluid{
    background: #222;
  }
  .navbar{
    color:#fff;
  }
  .logo-index div{
    height: 50px;
    width: 225px;
    margin-left:0; 
  }
  .navbar{
    height: 50px;
  }
  .icon-bar{
    background: #fff;
  }
  .navbar-toggle{
    border: 1px solid #333;
    background: #333;
    margin-right: 20px;
  }
  .navbar-nav li{
    color: #fff;
    float: none !important;
    height: 30px;
    margin: 0 !important;
    line-height: 30px; 
    padding: 0 20px;
    text-align: center;
  }
  .navbar-nav{
    height: 180px;
    margin: 0;
  }
  .navbar-nav .active{
    background: #000;
  }
  .foot{
    line-height: 30px;
  }
  .brand .content .detail{
    font-size: 3.5vw !important;
  }
  .brand .content>div>p{
    font-size: 4.8vw !important;
  }
  .operation .promote>div:nth-child(2){
    width: 95% !important;
  }
}
</style>
