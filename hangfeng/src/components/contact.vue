<template>
  <div class="about">
    <div class="banner">
      <p v-for="item in mydata.title">{{item}}</p>
    </div>
    <div class="main">
      <div class="msg">
        <div>
          <div>{{mydata.name}}</div>
          <p v-for="item in mydata.contact">
            {{item.title}}：{{item.value}}
          </p>
        </div>
      </div>
      <div class="map">
        <iframe src="static/map.html" frameborder="0" style="height: 100%;width:100%;"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["lang"],
  data () {
    return {
      mydata:{}
    }
  },
  created(){
    this.$parent.isWhite=false
    this.$parent.navIndex=5
    var that=this
    $.ajax({url:"http://"+this.lang+".hangfeng.mandokg.com/api/v1/contact",success:function(result){
       that.mydata=result
       that.$nextTick(function(){
          this.$parent.showFoot=true
       })
    }})
  },
  destroyed(){
    this.$parent.showFoot=false
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.msg{
  animation: fadeInLeft .5s 0s both;
}
.map{
  animation: fadeInLeft .5s 0.5s both;
}
.banner{
  width: 100%;
  height: 9vw;
  background: url(../assets/img/contact_banner.jpg);
  background-size: cover;
  background-position-y: 10%;
  color: #333;
  text-align: center;
  padding-top: 16vw;
}
.banner p:nth-child(1){
  font-size: 2vw;
  font-family: 站酷高端黑;
  letter-spacing: 1px;
}
.banner p:nth-child(2){
  margin-top: .5vw;
  font-size: 1vw;
}
.main{
  width: 60%;
  max-width: 1200px;
  margin: 4vw auto 4vw;
  height: 23vw;
  display: flex;
  justify-content:space-between;
}
.msg>div{
  display: table-cell;
  height: 23vw;
  vertical-align: middle;
}
.msg>div div{
  font-size: 1.5vw;
  margin-bottom: 3vw;
}
.msg>div p{
  font-size: .8vw;
  color: #aaa;
  line-height: 2vw;
}
.map{
  width: 50%;
  height: 100%;
  background: #eee;
}
@media screen and (max-width:990px){
  .main{
    width: 80%;
    height: 30vw;
  }
  .msg>div{
    display: table-cell;
    height: 30vw;
  }
  .msg>div div{
    font-size: 2vw;
    margin-bottom: 3vw;
  }
  .msg>div p{
    font-size: 1.2vw;
    color: #aaa;
    line-height: 2.5vw;
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
    font-size: 1vw;
  }
  .main{
    width: 90%;
    display: block;
    height: auto;
  }
  .msg>div{
    display: block;
    height: auto;
  }
  .msg>div div{
    font-size: 4vw;
    margin-bottom: 3vw;
  }
  .msg>div p{
    font-size: 3.5vw;
    color: #aaa;
    line-height:5vw;
  }
  .map{
    width: 100%;
    height: auto;
    margin: 3vw 0;
  }
}
</style>
