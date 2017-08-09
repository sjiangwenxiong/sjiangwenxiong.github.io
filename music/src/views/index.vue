<template>
  <div class="mycontent">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in bannerList">
          <img :src="item">
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-bullets">
        <span class="swiper-pagination-bullet" v-for="item in bannerList"></span>
      </div>
    </div>
    <div class="list">
      <ul>
        <li v-for="(item,index) in songList">
          <p class="left" @click="play(index)">{{item.title}}</p>
          <div class="right"><i></i></div>
        </li>
      </ul>
    </div>
    <div class="player" v-if="player">
      <div style="width: 3.75rem;height: 3.75rem;padding: .2143rem .535rem .2143rem .2143rem;display: inline-table;">
        <img :src="img" alt="" width="100%" style="border-radius: 5px;"/>
      </div>
      <div class="detail">
        <p>{{body}}</p>
        <p>{{name}}</p>
      </div>
      <div class="img">
        <img :src="isRun" alt="" @click="stopOrRun()"/>
        <img src="../assets/next_icon.png" alt="" @click="next()"/>
        <img src="../assets/download_icon2.png" alt=""/>
      </div>
      <audio :src="music" autoplay v-if="isRun=='static/pause_icon.png'"></audio>
    </div>
  </div>
</template>
<script type="es6">
  import Swiper from '../../static/swiper.min.js'
  import '../../static/swiper.css'
  import banner from '../jsons/banner'
  import list_index from '../jsons/list_index'
  export default{
    data(){
      return {
        songList: list_index,
        bannerList:banner,
        musicId:0,
        body:"",
        name:"",
        img:"",
        music:"",
        isRun:"static/pause_icon.png",
        player:false,
      }
    },
    mounted () {
        this.banner = new Swiper('.swiper-container', {
          watchSlidesProgress : true,
          watchSlidesVisibility : true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          loop:true,
          autoplay: 4000
        })
      },
    components: {},
    methods:{
      play(index){
        this.name=this.songList[index].title.split("-")[0]
        this.body=this.songList[index].title.split("-")[1]
        this.img=this.songList[index].img
        this.music=this.songList[index].hash
        this.player=true
        this.musicId=index
      },
      stopOrRun(){
        this.isRun=this.isRun=="static/pause_icon.png"?"static/play_icon.png":"static/pause_icon.png"
      },
      next(){
        this.musicId++
        this.play(this.musicId)
      }
    },
    destroyed(){
      document.body.scrollTop=0
    }
  }
</script>
<style>
  .mycontent{
    padding-top: 6.4286rem;
    width: 100%;
  }
  .swiper-container{
    margin-top: .3571rem;
  }
  .swiper-slide img{
    max-width: 100%;
    height: 8.5714rem;
    margin: 0 auto;
    display: block;
  }
  .swiper-pagination-bullet{
    width: .5714rem;
    height: .5714rem;
  }
  .swiper-pagination-bullet-active{
    background: #fff;
  }
  .list ul{
    padding-left: .7143rem;
    margin: 0;
  }
  .list li{
    width: 100%;
    height: 4.0714rem;
    border-bottom: 1px solid #e5e5e5;
    position: relative;
    display: table;
  }
  .left{
    width: 18.2rem;
    padding-right: .3571rem;
    display: table-cell;
    vertical-align: middle;
    padding-left: .3571rem;
    cursor: pointer;
    font-size: 1rem;
    box-sizing: border-box;
  }
  .right{
    width: 2.5rem;
    height: 100%;
    cursor: pointer;
    text-align: center;
    vertical-align: middle;
    display: table-cell;
  }
  .right i{
    display: inline-block;
    width: 1.0357rem;
    height: 1.0357rem;
    background: url("../assets/download_icon.png");
    background-size: 100%;
    margin: 0 auto;
  }
  .player{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 4.2143rem;
    background: rgba(0,0,0,.9);
    color: #fff;
  }
  .player p{
    margin: 0;
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
  }
  .detail{
    width: 8rem;
    margin-top: -3.5rem;
    display: inline-block;
    vertical-align: middle;
  }
  .detail p:nth-child(1){
    width: 100%;
    line-height: 1.7rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .8571rem;
    color: #fff;
  }
  .detail p:nth-child(2){
    line-height: 1.3;
    font-size: .7143rem;
    color: #888;
  }
  .player .img{
    height: 1.786rem;
    display: inline-block;
  }
  .player .img img{
    height: 1.786rem;
    width: 1.786rem;
    vertical-align: middle;
    margin-top: -3rem;
    margin-right: 0.5rem;
  }
</style>
