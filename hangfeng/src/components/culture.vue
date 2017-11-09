<template>
  <div class="culture">
    <div class="main">
      <div>
        <p>{{mydata.left.text[0]}}</p>
        <div></div>
        <span>{{mydata.left.text[1]}}</span>
        <span>{{mydata.left.text[2]}}</span>
      </div>
      <div>
        <p>{{mydata.right.text[0]}}</p>
        <div></div>
        <span>{{mydata.right.text[1]}}</span>
      </div>
      <p style="clear:both;"></p>
    </div>
  </div>
</template>

<script>
export default {
  props:["data"],
  data () {
    return {
      mydata:this.data.culture
    }
  },
  created(){
    this.$parent.navIndex=3
    if(this.$parent.$parent.lang=='en'&&document.body.clientWidth<767){
      console.log(1)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.culture{
  margin-top: -2.5vw;
  position: relative;
  z-index: -1;
  width: 100%;
  height: 28.5vw;
  background-image: url(../assets/img/culture_bg.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: bottom;
  animation: fadeInUp .5s 0s both;
}
.main{
  width: 48%;
  margin: 0 auto;
}
.main>div{
  width: 18vw;
  height: 12vw;
  margin-top: 7vw;
}
.main>div:nth-child(1){
  float: left;
  background-image: url(../assets/img/cultures1.jpg);
  background-size: cover;
  background-position: bottom;
}
.main>div:nth-child(2){
  float: right;
  background-image: url(../assets/img/cultures2.jpg);
  background-size: cover;
  background-position: bottom;
}
.main>div p{
  color: #fff;
  margin-top: 4.5vw;
  font-size: 1.5vw;
}
.main>div div{
  width: 2.5vw;
  height: 0.25vw;
  background: #fff;
  margin: 0 auto;
  margin-top: .3vw;
  margin-bottom: 7vw;
}
.main>div span{
  display: block;
  text-align: center;
  color: #aaa;
  font-size: 0.8vw;
  margin-top: .2vw;
}
@media screen and (max-width:990px){
  .culture{
    height: 40vw;
  }
  .main{
    width: 72%;
  }
  .main>div{
    width: 27vw;
    height: 18vw;
    margin-top: 9vw;
  }
  .main>div p{
    font-size: 3vw;
  }
  .main>div div{
    margin-top: 1vw;
    margin-bottom: 13vw;
    width: 6vw;
    height: .4vw;
  }
}
@media screen and (max-width:767px){
  .culture{
    height: 50vw;
  }
  .main{
    width: 85%;
  }
  .main>div{
    width: 40vw;
    height: 24vw;
    margin-top: 9vw;
  }
  .main>div p{
    font-size: 5vw;
  }
  .main>div div{
    margin-top: 1vw;
    margin-bottom: 13vw;
    width: 10vw;
    height: .4vw;
  }
  .main>div span{
    font-size: 3.5vw;
  }
}
</style>
