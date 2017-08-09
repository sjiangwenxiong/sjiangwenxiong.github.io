<template>
  <div class="header-nav">
    <ul>
      <li v-for="(item,index) in nav" :class="{cur:iscur==index}" @click="go(index)"><a>{{item}}</a></li>
    </ul>
  </div>
</template>

<script type="es6">
import {getRecommend} from '../jsons/recommend'
import {ERR_OK} from '../jsons/config'
  window.localStorage.iscur
  export default {
    created(){
      //this._getRecommend()
    },
    props:['list'],
    name: 'headNav',
    data(){
      return {
        nav:this.list||["新歌","排行","歌单","歌手"],
        iscur:window.localStorage.iscur||0
      }
    },
    methods:{
      _getRecommend(){
        getRecommend().then((res) => {
          if(res.code === ERR_OK){
            console.log(res.data.slider)
          }
        })
      },
      go(index){
        window.localStorage.iscur=index
        this.iscur=index
        if(index==0){
          this.$router.push( '/');
        }else if(index==1){
          this.$router.push( '/rank');
        }else if(index==2){
          this.$router.push( '/plist');
        }else if(index==3){
          this.$router.push( '/singer');
        }
      }
    }
  }
</script>

<style>
    .header-nav{
      width: 100%;
      height: 3.2143rem;
      line-height: 3rem;
      box-shadow: 0 .1785rem .1785rem 0 #f4f4f4;
      background: #fff;
    }
    .header-nav ul{
      margin: 0;
      width: 100%;
      padding: 0 .7143rem;
      display: box;
      display: -webkit-box;
      box-sizing: border-box;
    }
  .header-nav li{
    width: 20%;
    text-align: center;
    list-style: none;
    box-flex:1.0;
    -webkit-box-flex: 1.0;
  }
  .header-nav a{
    width: 100%;
    color: #333;
    font-size: 1.1429rem;
    text-decoration: none;
    display: block;
    box-sizing: border-box;
  }
  .cur a{
    border-bottom: .2143rem solid #33a3f5;
  }
</style>
