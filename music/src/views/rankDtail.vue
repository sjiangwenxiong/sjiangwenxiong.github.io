<template>
  <div class="content">
    <div class="banner">
      <img :src="topList[id].picUrl">
    </div>
    <div class="list">
      <ul>
        <li v-for="(item,index) in songList">
          <span>{{index+1}}</span>
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
  function getId(){
      eval(window.location.href.split('?')[1])
      return id
  }
  var id=getId()
  import top from '../jsons/topList'
  import list_index from '../jsons/list_index'
  export default{
    data(){
      return {
        id:id,
        topList:top.topList,
        songList: list_index,
        musicId:0,
        body:"",
        name:"",
        img:"",
        music:"",
        isRun:"static/pause_icon.png",
        player:false,
      }
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
      console.log(1)
      window.localStorage.title=0
      document.body.scrollTop=0
      location.reload()
    }
  }
</script>
<style>
  .content{
    padding-top: 3.2143rem;
    width: 100%;
  }
  .banner{
    width: 100%;
    height: 12.5rem;
    position: relative;
    overflow: hidden;
  }
  .banner img{
    margin-top: -25px;
    width: 100%;
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
    width: 16.5rem;
    padding-right: .3571rem;
    display: table-cell;
    vertical-align: middle;
    padding-left: 2.0674rem;
    cursor: pointer;
    font-size: 1rem;
    box-sizing: border-box;
  }
  .list span{
    padding: 0 .5rem;
    height: 1.0714rem;
    line-height: 1.0714rem;
    border-radius: 0.5rem;
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -.5357rem;
    text-align: center;
    font-size: 0.7143rem;
    display: inline-block;
    color: #999;
  }
  .list li:nth-child(1)>span{
    background: #e80000;
    color: #fff;
  }
  .list li:nth-child(2)>span{
    background: #ff7200;
    color: #fff;
  }
  .list li:nth-child(3)>span{
    background: #f8b300;
    color: #fff;
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
