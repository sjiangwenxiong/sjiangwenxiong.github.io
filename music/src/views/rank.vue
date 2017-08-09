<template>
  <div class="rank">
    <ul>
      <li v-for="(item,index) in topList" @click="dto(index)">
        <div class="rank-left">
          <img v-lazy="item.picUrl" alt=""/>
        </div>
        <div class="rank-center">
          {{item.topTitle}}
        </div>
        <div class="rank-right">
          <i></i>
        </div>
      </li>
    </ul>
  </div>
</template>
<script type="es6">
import top from '../jsons/topList'
    export default{
        data(){
            return{
                topList:top.topList
            }
        },
        destroyed(){
          document.body.scrollTop=0
        },
        methods:{
          dto(index){
            this.$router.push('/rankDtail?id='+index)
            window.localStorage.title=this.topList[index].topTitle
            location.reload()
          }
        }
    }
</script>
<style>
    .rank{
      padding-top: 6.4286rem;
      width: 100%;
    }
    .rank ul{
      padding: 0;
      margin: 0;
    }
  .rank li{
    list-style: none;
    display: block;
    position: relative;
    padding: .7143rem 2.14286rem .7143rem 7.1429rem;
    border-bottom: 1px solid #e5e5e5;
  }
  .rank-left{
    position: absolute;
    top: .7143rem;
    left: 0;
    width: 5.3751rem;
    height: 5.3751rem;
  }
  .rank-left img{
    width: 100%;
    margin-left: .7143rem;
  }
  .rank-center{
    min-height: 5.3751rem;
    line-height: 5.3751rem;
    display: block;
    font-size: 1.0714rem;
    color: #333;
  }
  .rank-right{
    position: absolute;
    top: 0;
    right: 0;
    width: 2.14286rem;
    height: 100%;
    text-align: center;
    display: block;
  }
  .rank-right i{
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
