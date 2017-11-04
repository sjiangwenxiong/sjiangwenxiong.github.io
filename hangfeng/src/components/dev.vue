<template>
  <div class="dev">
    <div class="main">
      <div>{{mydata[0]}}</div>
      <p>{{mydata[1]}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props:["data"],
  data () {
    return {
      mydata:this.data.dev
    }
  },
  created(){
    this.$parent.navIndex=4
    console.log(this.$router)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dev{
  margin-top: -2.5vw;
  position: relative;
  z-index: -1;
  width: 100%;
  height: 28.5vw;
  background-image: url(../assets/img/global_point.jpg);
  background-size: 27vw;
  background-repeat: no-repeat;
  background-position: left top;
  animation: fadeInUp .5s 0s both;
}
.main{
  width: 33%;
  margin-left: 42%;
  padding-top: 14vw;
}
.main div{
  height: 2.5vw;
  width: 100%;
  background: url(../assets/img/brand_text_bg.jpg);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  line-height: 2.5vw;
  font-size: 1.3vw;
  margin-bottom: 2vw;
}
.main p{
  font-size: .8vw;
  color: #aaa;
  text-align: left;
  line-height: 1.5vw;
}
@media screen and (max-width:990px){
  .main{
    padding-top: 10vw;
    width: 48%;
  }
  .main div{
    font-size: 2vw;
    height: 3.7vw;
    line-height: 3.7vw;
  }
  .main p{
    font-size: 1.4vw;
    color: #aaa;
    text-align: left;
    line-height: 2.2vw;
  }
}
@media screen and (max-width:767px){
  .dev{
    height: auto;
  }
  .main{
    padding-top: 8vw;
    padding-bottom: 4vw;
    width: 90%;
    margin: 0 auto;
  }
  .main div{
    font-size: 4.5vw;
    height: 3.7vw;
    line-height: 3.7vw;
  }
  .main p{
    font-size: 3.8vw;
    color: #aaa;
    text-align: left;
    line-height: 5vw;
  }
}
</style>
