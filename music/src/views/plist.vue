<template>
  <div class="plist">
    <ul>
      <li v-for="(item,index) in plist" @click="dto(index)">
        <div class="plist-left">
          <img v-lazy="item.imgUrl" alt=""/>
        </div>
        <div class="plist-center">
          <p class="top">{{item.title}}</p>
          <p class="bottom"><i></i>{{item.countPlay}}</p>
        </div>
        <div class="plist-right">
          <i></i>
        </div>
      </li>
    </ul>
  </div>
</template>
<script type="es6">
import plist from '../jsons/list_plist.js'
    export default{
        data(){
            return{
                plist:plist
            }
        },
        destroyed(){
          document.body.scrollTop=0
        },
        methods:{
          dto(index){
            this.$router.push('/plistDtail?id='+index)
            window.localStorage.title=this.plist[index].title
            location.reload()
          }
        }
    }
</script>
<style>
  p{
    margin: 0;
  }
    .plist{
      padding-top: 6.4286rem;
      width: 100%;
    }
    .plist ul{
      padding: 0;
      margin: 0;
    }
  .plist li{
    list-style: none;
    display: block;
    position: relative;
    padding: .7143rem 2.14286rem .7143rem 7.1429rem;
    border-bottom: 1px solid #e5e5e5;
  }
  .plist-left{
    position: absolute;
    top: .7143rem;
    left: 0;
    width: 5.3751rem;
    height: 5.3751rem;
  }
  .plist-left img{
    width: 100%;
    margin-left: .7143rem;
  }
  .plist-center{
    min-height: 5.3751rem;
    line-height: 1.5rem;
    display: block;
    font-size: 1.0714rem;
    color: #333;
  }
  .plist-center .top{
    padding-top: 1.4286rem;
  }
  .plist-center .bottom{
    color: #9b9b9b;
    font-size: .7857rem;
  }
  .plist-center i{
    display: inline-block;
    width: .7143rem;
    height: .7143rem;
    margin: .10714rem .2857rem 0 0;
    background: url("../assets/icon_music.png") no-repeat;
    background-size: 100%;
  }
  .plist-right{
    position: absolute;
    top: 0;
    right: 0;
    width: 2.14286rem;
    height: 100%;
    text-align: center;
    display: block;
  }
  .plist-right i{
    width: .57143rem;
    height: 1rem;
    margin-top: -0.5rem;
    position: absolute;
    top:50%;
    right: .7143rem;
    display: block;
    background: url("../assets/arrow_icon.png") no-repeat;
    background-size: 100%;
  }
</style>
