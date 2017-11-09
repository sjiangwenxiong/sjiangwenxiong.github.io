<template>
  <div class="partner_list" v-if="mydata.title">
    <div class="banner">
      <div>
        <p v-for="item in mydata.title">{{item}}</p>
      </div>
    </div>
    <div class="router">
      <div>
        <span v-for="(item,index) in mydata.list" 
              :class="{active:index==navIndex}"
              @click="chgIndex(index)">
          {{item.title}}
        </span>
      </div>
    </div>
    <div class="list">
      <div v-for="item in mydata.list[navIndex].cooperations" 
           :style="'background-image:url('+item.logo+')'">
        <div @mouseenter="show" @mouseleave="hide">{{item.name}}</div>
      </div>
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
      // area:this.data.partner_list.logoList[0]
    }
  },
  created(){
    this.$parent.isWhite=false
    this.$parent.navIndex=1
    var that=this
      $.ajax({url:"http://"+that.lang+".hangfeng.mandokg.com/api/v1/cooperation",success:function(result){
          that.mydata=result
          that.$nextTick(function(){
            this.$parent.showFoot=true
          })
      }})
    this.$parent.isb=true
  },
  methods:{
    chgIndex(index){
      this.navIndex=index
    },
    show(e){
      e.toElement.style.opacity=1
    },
    hide(e){
      e.srcElement.style.opacity=0
    }
  },
  destroyed(){
    this.$parent.showFoot=false
    this.$parent.isb=false
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner{
  width: 100%;
  height: 17vw;
  background: url(../assets/img/partner_banner.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position:center;
  color: #fff;
  padding-top: 8vw;
  text-align: center;
}
.banner>div{
  width: 85%;
}
.banner p:nth-child(1){
  font-size: 2vw;
  font-family: 站酷高端黑;
  letter-spacing: 1px;
}
.banner p:nth-child(2){
  margin-top: 1.2vw;
  font-size: 1vw;
}
.router{
  margin-top: 4vw;
  text-align: center;
}
.router>div span{
  display: inline-block;
  font-size: .8vw;
  padding: .5vw 0;
  color: #333;
  margin-left: 3.3vw;
  font-weight: normal;
  cursor: pointer;
  border-bottom: 2px solid #fff;
  border-top: 2px solid #fff;
}
.router>div span:nth-child(1){
  margin-left: 0;
}
.router>div .active{
  color: #008be8;
  border-bottom: 2px solid #008be8;
  border-top: 2px solid #008be8;
}
.list{
  width: 60vw;
  padding: 5.5vw 0; 
  margin: 0 auto;
}
.list>div{
  display: inline-block;
  width: 25%;
  height: 8vw;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 70%;
  line-height: 8vw;
  text-align: center;
  color: #fff;
}
.list>div div{
  background: #008be8;
  opacity: 0;
  /*transition:opacity .3s;*/
  font-size: 1vw;
}
@media screen and (max-width:767px){
  .banner{
    height: 28vw;
    padding-top: 22vw;
  }
  .banner>div{
    width: 100%;
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
  .router>div span{
    font-size: 3.5vw;
    padding: .5vw 0;
    color: #333;
    margin-left: 3.3vw;
    font-weight: normal;
    cursor: pointer;
  }
  .list{
    width: 100%;
    line-height: 0;
  }
  .list>div{
    width: 50%;
    height: 28.6vw;
  }
  .list>div div{
    width: 100%;
    height: 100%;
    line-height: 28.6vw;
  }
}
</style>
