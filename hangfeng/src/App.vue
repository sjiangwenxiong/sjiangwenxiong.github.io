<template>
  <div id="app">
    <div class="nav clearfix">
      <div class="logo">
        <img src="./assets/img/logo.png" width="100%">
      </div>
      <div class="detail">
        <div v-for="(item,index) in nav"
             @mouseenter="show(item,index)"
             @mouseleave="hide()">
          <span :class="{active:index==navIndex,fontBlack:!isWhite}" 
                @click="chgNav(index)"
                v-html="item.title"
                >
          </span>
          <ul v-if="item.detail" :ref="'ul'+index">
            <li v-for="(items,sonIndex) in item.detail" @click="chgRouter(index,sonIndex)">
              {{items.title}}
            </li>
          </ul>
        </div>
      </div>
      <div class="lang">
        <span v-for="(item,index) in lang" 
              :class="{active:index==langIndex}"
              @click="chgLang(index)">
        {{item}}
        </span>
      </div>
      <div class="clap" @click="fold">
        <img :src="clapImg" height="100%">
      </div>
    </div>
    <transition name="slide-fade">
      <div class="clapnav" v-if="!isFold" @touchmove.stop.prevent="">
        <div v-for="(item,index) in nav">
          <span :class="{active:index==navIndex}" 
                @click="selectNav(item,index)"
                v-html="item.title"
                >
          </span>
          <ul v-if="item.detail" :ref="'foldul'+index" class="clapul">
            <li v-for="(items,sonIndex) in item.detail" @click="chgRouter(index,sonIndex)">{{items.title}}</li>
          </ul>
        </div>
        <div class="lang" style="position:fixed;bottom:5vw;;width:100%;">
          <span v-for="(item,index) in lang" 
                :class="{active:index==langIndex}"
                @click="chgLang(index)"
                style="font-size:1vw;padding:2px 0;margin:0 2vw;">
          {{item}}
          </span>
        </div>
      </div>
    </transition>
    <router-view :currentIndex="currentIndex" ref="router" :lang="showingLang"/>
    <div class="footer" v-if="showFoot">
      <div class="nav">
        <span v-for="(item,index) in nav" @click="chgNav(index)">{{item.title}}</span>
      </div>
      <p>版权所有© 2006-2016 LEADIN  沪ICP备10205459号</p>
    </div>
  </div>
</template>

<script>
import $ from './assets/js/jquery-1.11.3.js'
import jq from 'jquery'
import './assets/css/base.css'
import data_cn from './api/normal_data_cn'
import data_en from './api/normal_data_en'
import jsonp from 'jsonp'
export default {
  name: 'app',
  data(){
    return {
      nav:{},
      data:data_cn,
      lang:["中文","ENGLISH"],
      navIndex:0,
      langIndex:0,
      clapImg:require('./assets/img/clap.png'),
      isFold:true,
      isWhite:true,
      currentIndex:0,
      showingLang:"cn",
      showFoot:false
    }
  },
  created(){
    this.showingLang=sessionStorage.lang?sessionStorage.lang:"cn"
    if(this.showingLang=='cn'){
      this.langIndex=0
    }else{
      this.langIndex=1
    }
    var that=this
    jq.ajax({url:"http://"+that.showingLang+".hangfeng.mandokg.com/api/v1/system_info",success:function(result){
       that.nav=result.nav
       document.head.querySelector("title").innerHTML=result.meta.meta_title
       jq("head").prepend(jq("<meta name='meta_keywords' content='"+result.meta.meta_keywords+"'>"))
       jq("head").prepend(jq("<meta name='meta_description' content='"+result.meta.meta_description+"'>"))
    }})
  },
  methods:{
    selectNav(item,index){
      this.navIndex=index
      this.showFold(item,index)
      if(!item.detail){
        this.chgNav(index)
      }
    },
    chgRouter(index,sonIndex){
      if(index==1){
        if(sonIndex==0){
          this.$router.push("/about/show")
        }else if(sonIndex==1){
          this.$router.push("/about/honor")
        }else if(sonIndex==2){
          this.$router.push("/about/partner")
        }else if(sonIndex==3){
          this.$router.push("/about/culture")
        }else{
          this.$router.push("/about/dev")
        }
      }else if(index==2){
        this.currentIndex=sonIndex
        this.$router.push("/product")
        if(this.$refs.router.update){
          this.$refs.router.update(sonIndex)
        }
      }else{
        this.$router.push("/news/"+sonIndex)
        if(this.$refs.router.$children[0]){
          this.$refs.router.$children[0].update()
        }
      }
      this.hide()
      this.isFold=true
      this.clapImg=require('./assets/img/clap.png')
    },
    fold(){
      this.isFold=!this.isFold
      if(this.isFold){
        this.clapImg=require('./assets/img/clap.png')
      }else{
        this.clapImg=require('./assets/img/exit.png')
      }
    },
    chgLang(index){
      this.langIndex=index
      this.showingLang=this.showingLang=='cn'?'en':'cn'
      sessionStorage.lang=this.showingLang
      this.$router.push("/")
      location.reload()
    },
    chgNav(index){
      this.navIndex=index
      if(index==0){
        this.$router.push("/")
      }else if(index==1){
        this.$router.push("/about/show")
      }else if(index==2){
        this.$router.push("/product")
      }else if(index==3){
        this.$router.push("/news/0")
      }else if(index==4){
        this.$router.push("/join")
      }else{
        this.$router.push("/contact")
      }
      this.isFold=true
      this.clapImg=require('./assets/img/clap.png')
      this.hide()
    },
    show(item,index){
      if(item.detail){
        if(index==1){
          this.$refs.ul1[0].style.display="block"
        }else if(index==2){
          this.$refs.ul2[0].style.display="block"
        }else{
          this.$refs.ul3[0].style.display="block"
        }
      }
    },
    showFold(item,index){
      if(item.detail){
        if(index==1){
          // this.$refs.foldul1[0].style.display=
                // this.$refs.foldul1[0].style.display=="block"?"none":"block"
          this.$refs.foldul1[0].style.height=
                this.$refs.foldul1[0].style.height=='24vh'?'0px':'24vh'
          if(this.$refs.foldul2[0].style.height=='30vh'){
            this.$refs.foldul2[0].style.height='0px'
          }
          if(this.$refs.foldul3[0].style.height=='20vh'){
            this.$refs.foldul3[0].style.height='0px'
          }
        }else if(index==2){
          // this.$refs.foldul2[0].style.display=
          //       this.$refs.foldul2[0].style.display=="block"?"none":"block"
          this.$refs.foldul2[0].style.height=
                this.$refs.foldul2[0].style.height=='30vh'?'0px':'30vh'
          if(this.$refs.foldul1[0].style.height=='24vh'){
            this.$refs.foldul1[0].style.height='0px'
          }
          if(this.$refs.foldul3[0].style.height=='20vh'){
            this.$refs.foldul3[0].style.height='0px'
          }
        }else{
          this.$refs.foldul3[0].style.height=
                this.$refs.foldul3[0].style.height=='20vh'?'0px':'20vh'
          if(this.$refs.foldul2[0].style.height=='30vh'){
            this.$refs.foldul2[0].style.height='0px'
          }
          if(this.$refs.foldul1[0].style.height=='24vh'){
            this.$refs.foldul1[0].style.height='0px'
          }
        }
      }else{
        this.$refs.foldul1[0].style.height='0px'
        this.$refs.foldul2[0].style.height='0px'
      }
    },
    hide(){
      this.$refs.ul1[0].style.display="none"
      this.$refs.ul2[0].style.display="none"
      this.$refs.ul3[0].style.display="none"
    },
    active(item,index){
      item.img=require('./assets/img/'+item.type+'_checked.png')
    },
    recover(item){
      item.img=require('./assets/img/'+item.type+'.png')
    }
  }
}
</script>

<style>
@-webkit-keyframes fadeInUp {
            0% {
                opacity: 0;
                -webkit-transform: translate3d(0, 100%, 0);
                transform: translate3d(0, 100%, 0)
            }
            100% {
                opacity: 1;
                -webkit-transform: none;
                transform: none
            }
        }
@keyframes fadeInUp {
            0% {
                opacity: 0;
                -webkit-transform: translate3d(0, 100%, 0);
                -ms-transform: translate3d(0, 100%, 0);
                transform: translate3d(0, 100%, 0)
            }
            100% {
                opacity: 1;
                -webkit-transform: none;
                -ms-transform: none;
                transform: none
            }
        }
@-webkit-keyframes fadeInDown {
            0% {
                opacity: 0;
                -webkit-transform: translate3d(0,-100%,0);
                transform: translate3d(0,-100%,0)
            }

            100% {
                opacity: 1;
                -webkit-transform: none;
                transform: none
            }
        }

@keyframes fadeInDown {
            0% {
                opacity: 0;
                -webkit-transform: translate3d(0,-100%,0);
                -ms-transform: translate3d(0,-100%,0);
                transform: translate3d(0,-100%,0)
            }
            100% {
                opacity: 1;
                -webkit-transform: none;
                -ms-transform: none;
                transform: none
            }
        }
@keyframes fadeInLeft {
            0% {
                opacity: 0;
                -webkit-transform: translate3d(-100%,0,0);
                -ms-transform: translate3d(-100%,0,0);
                transform: translate3d(-100%,0,0)
            }
            100% {
                opacity: 1;
                -webkit-transform: none;
                -ms-transform: none;
                transform: none
            }
        }
@keyframes fadeInRight {
            0% {
                opacity: 0;
                -webkit-transform: translate3d(100%,0,0);
                -ms-transform: translate3d(100%,0,0);
                transform: translate3d(100%,0,0)
            }
            100% {
                opacity: 1;
                -webkit-transform: none;
                -ms-transform: none;
                transform: none
            }
        }
@keyframes fade {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
#app .banner p{
  animation: fadeInLeft 1s .1s both;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(100vw);
  opacity: 0;
}
#app {
  font-family: "微软雅黑",Microsoft YaHei,'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}
/* #app>div{
  position: absolute;
  top: 0;
  left: 0;
} */
#app>.nav{
  height: 6.8vw;
  line-height: 6.8vw;
  font-size: .8vw;
  position: relative;
  z-index: 3;
}
#app>.nav>div{
  float: left;
}
#app>.nav>.logo{
  line-height: 0;
  width: 11%;
  margin-left: 16%;
  margin-right: 3.6vw;
  margin-top: 2.2vw
}
#app>.nav>.detail>div{
  display: inline-block;
  position: relative;
}
#app>.nav>.detail span{
  margin-left: 1vw;
  padding: .4vw 1.4vw;
  border-radius: .8vw;
  cursor: pointer;
  color: #fff;
}
#app>.nav>.detail .fontBlack{
  color: #333;
}
#app>.nav>.detail span:hover{
  background: #008be8;
  color: #fff;
}
#app>.nav>.detail ul{
  background: #fff;
  position: absolute;
  left: -1vw;
  top: 5vw;
  right: -2vw;
  border-top: 2px solid #008be8;
  padding:1.5vw 0;
  display: none;
}
#app>.nav>.detail ul li{
  height: 2.5vw;
  line-height: 2.5vw;
  text-align: center;
  font-size: .7vw;
  cursor: pointer;
}
#app>.nav>.detail ul li:hover{
  background: #008be8;
  color: #fff;
}
#app>.nav>.detail .active{
  background: #008be8;
  color: #fff;
}
#app>.nav>.lang{
  margin-left: 2vw;
}
#app>.nav>.lang span{
  margin-left: 1vw;
  padding: .4vw .8vw .3vw;
  background: #eeeeee;
  border-radius: .2vw;
  cursor: pointer;
}
#app>.nav>.lang .active{
  background: #008be8;
  color: #fff;
}
#app>.nav> .clap{
  display: none;
}
#app>.clapnav{
  display: none;
}
.footer{
  width: 100%;
  background: #008be8;
  text-align: center;
  color: #fff;
  padding-bottom: 1vw;
}
.footer .icon span{
  margin-right: 1.5vw;
  cursor: pointer;
}
.footer .nav span{
  display: inline-block;
  margin-top: 1vw;
  padding: 0 1vw;
  cursor: pointer;
}
.footer p{
  margin-top: .5vw;
}
@media screen and (max-width:1200px){
  #app>.nav>.logo{
    margin-left: 12%;
  }
  .footer .nav span{
    margin-top: 1vw;
    width: 8vw;
  }
  .footer p{
    margin-top: 1vw;
  }
}
@media screen and (max-width:990px){
  #app>.nav>.logo{
    margin-right: 1.8vw;
    margin-left: 5%;
    width: 16.5%;
    margin-top: 1.7vw;
  }
  .footer{
    font-size: 12px;
  }
  .footer .icon span{
    margin-right: 3vw;
  }
  .footer .nav span{
    display: inline-block;
    margin-top: 1vw;
    width: 10vw;
  }
  .footer p{
    margin-top: .5vw;
  }
}
@media screen and (max-width:767px){
  #app>.nav{
    height: 0;
  }
  #app>.nav .detail{
    display: none;
  }
  #app>.nav .lang{
    display: none;
  }
  #app>.nav .logo{
    width: 50%;
    margin-top: 5vw;
  }
  #app>.nav .clap{
    display: block;
    float: right;
    margin-top: 7vw;
    margin-right: 5vw;
    height: 6.5vw;
  }
  #app .clapnav{
    display: block;
    position: fixed;
    top: 0;
    height: 85vh;
    width: 100%;
    z-index: 2;
    background: rgba(0,0,0,.8);
    text-align: center;
    color: #fff;
    padding-top: 15vh;
    line-height: 10vh;
    font-size: 3.5vh;
  }
  #app .clapnav ul{
    height: 0px;
    overflow: hidden;
    transition: height .3s;
  }
  #app .clapnav span{
    padding: 5px 0;
  }
  #app .clapnav .active{
    border-bottom: 2px solid #fff;
  }
  #app .clapnav ul{
    line-height: 5vh;
    font-size: 2.5vh;
  }
  .footer{
    font-size: 12px;
    height: auto;
    padding-bottom: 2vw;
  }
  .footer .icon span{
    margin-right: 3vw;
  }
  .footer .nav span{
    margin-top: 1vw;
    width: auto;
    padding: 0 1vw;
  }
  .footer p{
    margin-top: .5vw;
  }
}
</style>
