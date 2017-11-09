<template>
  <div class="about" v-if="mydata.title">
    <div class="banner">
      <p v-for="item in mydata.title">{{item}}</p>
    </div>
    <div class="intro">
      <div>
        <div><img src="../assets/img/about.jpg" width="100%"></div>
        <div>
          <div v-html="title"></div>
          <p v-for="item in desc">{{item}}</p>
        </div>
        <p style="clear:both;"></p>
      </div>
    </div>
    <div class="router">
      <div>{{mydata.router.title}}</div>
      <p>{{mydata.router.desc}}</p>
      <div>
        <span v-for="(item,index) in mydata.router.nav" 
              :class="{active:index==navIndex}"
              @click="chgIndex(index)">
          {{item.title}}
        </span>
      </div>
      <router-view :data="mydata.router.data" :lang="lang"/>
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
      title:"",
      desc:[]
    }
  },
  created(){
    this.$parent.isWhite=false
    this.$parent.navIndex=1
    var that=this
    $.ajax({url:"http://"+this.lang+".hangfeng.mandokg.com/api/v1/about",success:function(result){
      that.mydata=result
      that.title=result.intro[0]
      var arr=result.intro[1].split("<")
      that.desc.push(arr[1].slice(2))
      that.desc.push(arr[3].slice(2))
      that.$nextTick(function(){
        this.$parent.showFoot=true
      })
    }})
    
  },
  // mounted(){
  //   this.$parent.showFoot=true
  // },
  methods:{
    chgIndex(index){
      this.navIndex=index
      if(index==0){
        this.$router.push("/about/show")
      }else if(index==1){
        this.$router.push("/about/honor")
      }else if(index==2){
        this.$router.push("/about/partner")
      }else if(index==3){
        this.$router.push("/about/culture")
      }else{
        this.$router.push("/about/dev")
      }
    }
  },
  destroyed(){
    this.$parent.showFoot=false
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.intro>div>div:nth-child(1){
  animation: fadeInLeft .5s 1s both;
}
.intro>div>div:nth-child(2){
  animation: fadeInRight .5s 1.5s both;
}
.banner{
  width: 100%;
  height: 11vw;
  background: url(../assets/img/about_banner.jpg);
  background-size: cover;
  background-position-x: center;
  background-position-y: 25%;
  color: #fff;
  text-align: center;
  padding-top: 14vw
}
.banner p:nth-child(1){
  font-size: 2vw;
  font-family: 站酷高端黑;
  letter-spacing: 1px;
}
.banner p:nth-child(2){
  margin-top: 2vw;
  font-size: 1vw;
}
.intro{
  width: 100%;
  height: 21vw;
  background-image: url(../assets/img/hangfeng_text_bg.jpg);
  background-size: 100%;
  background-position: bottom;
}
.intro>div{
  width: 60%;
  margin: 7vw auto 0;
}
.intro>div>div{
  float: left;
}
.intro>div>div:nth-child(1){
  width: 38%;
}
.intro>div>div:nth-child(2){
  width: 59%;
  padding-left: 1.5vw;
}
.intro>div>div>div{
  font-size: 1.5vw;
  color: #333;
  margin-bottom: 1.5vw;
}
.intro>div>div p{
  font-size: .8vw;
  color: #aaaaaa;
  line-height: 1.5vw;
  margin-top: 1vw;
}
.router{
  margin-top: 5vw;
  text-align: center;
  position: relative;
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
  padding: .5vw 0;
  color: #333;
  margin-left: 3.3vw;
  font-weight: normal;
  cursor: pointer;
}
.router>div span:nth-child(1){
  margin-left: 0;
}
.router>div .active{
  color: #008be8;
  border-bottom: 2px solid #008be8;
  border-top: 2px solid #008be8;
}


@media screen and (max-width:1400px){
  .intro>div{
    width: 75%;
  }
  .intro>div>div>div{
    margin-top: 1vw;
  }
}
@media screen and (max-width:990px){
  .intro>div{
    width: 90%;
  }
  .intro>div>div>div{
    margin-top: 0;
    font-size: 2vw;
    color: #333;
    margin-bottom: 1.5vw;
  }
  .intro>div>div p{
    font-size: 1.5vw;
    color: #aaaaaa;
    line-height: 2vw;
    margin-top: 1vw;
  }
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
  .intro{
    height: auto;
  }
  .intro>div>div:nth-child(1){
    width: 100%;
  }
  .intro>div>div:nth-child(2){
    width: 100%;
    padding-left: 1.5vw;
  }
  .intro>div>div>div{
    font-size: 5.5vw;
    color: #333;
    margin-bottom: 3vw;
    text-align: center;
  }
  .intro>div>div p{
    font-size: 3.5vw;
    color: #aaaaaa;
    line-height: 5vw;
    margin-top: 2vw;
  }
  .router{
    margin-top: 10vw;
    margin-bottom: 7vw;
  }
  .router>div:nth-child(1){
    font-size: 5.5vw;
  }
  .router>p{
    margin-bottom: 1vw !important;
    margin-top: 1vw;
    font-size: 4.2vw;
    margin-bottom: 5vw;
  }
  .router>div:nth-child(3){
    margin-bottom: 7vw;
  }
  .router>div span{
    font-size: 3vw !important;
    padding: .5vw 0;
    color: #333;
    margin-left: 3.3vw;
    font-weight: normal;
    cursor: pointer;
  }
}
</style>
