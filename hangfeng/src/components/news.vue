<template>
  <div class="about" v-if="mydata.title">
    <div class="banner">
      <p v-for="item in mydata.title">{{item}}</p>
    </div>
    <div class="router">
      <div>
        <span v-for="(item,index) in mydata.categories" 
              :class="{active:index==navIndex}"
              @click="chgIndex(index,item)"
              @mouseenter="readyAni">
          {{item.title}}
        </span>
      </div>
      <transition name="fade1">
        <router-view :lang="lang"/>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props:["lang"],
  data () {
    return {
      mydata:{},
      navIndex:0,
      showingList:[]
    }
  },
  created(){
    this.$parent.isWhite=false
    this.$parent.navIndex=3
    var that=this
    $.ajax({url:"http://"+this.lang+".hangfeng.mandokg.com/api/v1/news",success:function(result){
       that.mydata=result
       that.showingList=result.list[0]
    }})
    // this.$parent.isb=true
  },
  methods:{
    chgIndex(index,item){
      this.navIndex=index
      this.$router.push("/news/"+item.id)
      this.$children[0].update()
    },
    readyAni(){
      $(".news").removeClass("ani")
    }
  },
  destroyed(){
    this.$parent.showFoot=false
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
    font-size: 3.5vw;
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
