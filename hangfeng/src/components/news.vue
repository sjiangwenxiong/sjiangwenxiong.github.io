<template>
  <div class="about">
    <div class="banner">
      <p>NEWS</p>
      <p>聚焦行业焦点，了解航丰最新资讯，掌握行业动态</p>
    </div>
    <div class="router">
      <div>
        <span v-for="(item,index) in mydata" 
              :class="{active:index==navIndex}"
              @click="chgIndex(index,item)"
              @mouseenter="readyAni">
          {{item.name}}
        </span>
      </div>
      <transition name="fade1">
      <router-view :data="mydata"/>
      </transition>
    </div>
  </div>
</template>

<script>
import newsList from '../api/news.js'
export default {
  props:['data'],
  data () {
    return {
      mydata:newsList,
      navIndex:0
    }
  },
  created(){
    this.$parent.isWhite=false
    this.$parent.navIndex=3
  },
  methods:{
    chgIndex(index,item){
      this.navIndex=index
      this.$router.push("/news/"+item.id)
      this.$children[0].update()
      // location.reload()
    },
    readyAni(){
      $(".news").removeClass("ani")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade1-enter-active, .fade1-leave-active {
  transition: opacity .5s
}
.fade1-enter, .fade1-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
.banner{
  width: 100%;
  height: 18vw;
  background: url(../assets/img/about_banner.jpg);
  background-size: cover;
  background-position-x: center;
  background-position-y: 25%;
  color: #fff;
  text-align: center;
  padding-top: 7vw
}
.banner p:nth-child(1){
  font-size: 2vw;
  font-family: 站酷高端黑;
  letter-spacing: 1px;
}
.banner p:nth-child(2){
  margin-top: 1vw;
  font-size: 1vw;
}
.router{
  margin: 3.5vw 0;
  text-align: center;
}
.router>div:nth-child(1){
  font-size: 1.8vw;
  font-weight: bold;
  color: #333;
}
.router>p{
  font-size: 1vw;
  color: #666;
  margin-top: .5vw;
  margin-bottom: 2.5vw;
}
.router>div span{
  font-size: .8vw;
  padding-bottom: .3vw;
  color: #333;
  margin-left: 2vw;
  font-weight: normal;
  cursor: pointer;
}
.router>div span:nth-child(1){
  margin-left: 0;
}
.router>div .active{
  color: #008be8;
  border-bottom: 2px solid #008be8;
}



@media screen and (max-width:767px){
  .banner{
    height: 22vw;
    padding-top: 28vw;
  }
  .banner p:nth-child(1){
    font-size: 6vw;
    font-family: 站酷高端黑;
    letter-spacing: 1px;
  }
  .banner p:nth-child(2){
    margin-top: 2vw;
    font-size: 1vw;
  }
  .router>div:nth-child(1){
    font-size: 5.5vw;
  }
  .router>p{
    font-size: 4.2vw;
  }
  .router>div span{
    font-size: 3.5vw;
    padding: .5vw 0;
    color: #333;
    margin-left: 3.3vw;
    font-weight: normal;
    cursor: pointer;
  }
}
</style>
