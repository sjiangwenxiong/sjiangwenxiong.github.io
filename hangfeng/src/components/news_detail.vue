<template>
  <div class="about">
    <div class="banner">
      <p>NEWS</p>
      <p>聚焦行业焦点，了解航丰最新资讯，掌握行业动态</p>
    </div>
    <div class="mian">
      <div>
        当前位置 : 
        <span @click="$router.push('/')">首页</span>-<span @click="$router.push('/news/'+id)">{{mydata[id].name}}</span>
      </div>
      <p>{{showingData.title}}</p>
      <p>发布时间 ：{{showingData.time}}</p>
      <div v-for="item in showingData.content">
        <p v-if="item.type=='text'">{{item.detail}}</p>
        <img v-else :src="item.detail" width="100%">
      </div>
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
      id:0,
      index:0,
      showingData:{}
    }
  },
  created(){
    this.$parent.isWhite=false
    this.$parent.navIndex=3
    var id,index;
    var path=this.$router.history.current.fullPath
    var i=path.indexOf("?")
    var data=path.slice(i+1)
    var arr=data.split("&")
    eval(arr[0])
    eval(arr[1])
    this.id=id
    this.index=index
    this.showingData=this.mydata[id].data[index]
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.mian{
  width: 90%;
  margin: 0 auto;
  max-width: 1200px;
  margin-top: 4vw;
  margin-bottom: 3vw;
}
.mian>div:first-child{
  font-size: .7vw;
  color: #aaa;
  padding-bottom: .2vw;
  border-bottom: 1px solid #ddd;
}
.mian>div span{
  cursor: pointer;
}
.mian>p:nth-child(2){
  text-align: center;
  font-size: 1.6vw;
  margin-top: 2.3vw;
}
.mian>p:nth-child(3){
  text-align: center;
  color: #aaa;
  font-size: .7vw;
  margin: .3vw 0 1.5vw;
}
.mian>div>p{
  font-size: .7vw;
  color: #333;
  text-indent:2em;
  line-height: 1.7vw;
}
.mian>div>img{
  margin: 1.5vw 0;
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
  .mian>p:nth-child(2){
    font-size: 4.5vw;
    margin-top: 5vw;
  }
  .mian>div>p{
    font-size: .7vw;
    color: #333;
    text-indent:2em;
    line-height: 4.5vw;
  }
}
</style>
