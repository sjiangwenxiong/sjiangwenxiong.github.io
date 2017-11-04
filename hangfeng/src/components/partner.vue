<template>
  <div class="partner">
    <p>{{mydata.title}}</p>
    <div class="main">
      <img :src="mydata.img" width="100%">
      <div class="detail">
        <p>{{mydata.detail.title}}</p>
        <div>
          <span v-for="item in mydata.detail.content">{{item}}</span>
        </div>
      </div>
    </div>
    <div class="more" @click="$router.push('/partner_list')">
      {{mydata.detail.more}}
    </div>
  </div>
</template>

<script>
export default {
  props:["data"],
  data () {
    return {
      mydata:this.data.partner
    }
  },
  created(){
    this.$parent.navIndex=2
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.partner{
  height: 38vw;
  width: 90%;
  margin: 2.5vw auto 0;
  background-image: url(../assets/img/global_bg.jpg);
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  animation: fadeInUp .5s 0s both;
}
.partner>p{
  font-size: 4.8vw;
  font-weight: normal;
  padding: .3vw 0;
}
.main{
  width: 73.5%;
  margin: 1vw auto 0;
  text-align: left;
  font-weight: normal;
  position: relative;
}
.detail{
  padding: .7vw .5vw;
  border: 1px solid #ddd;
  width: 18vw;
  font-size: 0;
  position: absolute;
  bottom: -1vw;
  left: 4vw;
}
.detail p{
  font-size: 1.2vw;
  color: #008be8;
}
.detail span{
  display: inline-block;
  font-size: .8vw;
  color: #aaa;
  cursor: pointer;
  margin-right: 1.2vw;
  padding: .1vw 0
}
.detail span:hover{
  color: #008be8;
}
.more{
  width: 8.8vw;
  height: 2.3vw;
  background: #008be8;
  color: #fff;
  text-align: center;
  line-height: 2.3vw;
  margin:  3vw auto 0; 
  font-size: .8vw;
  border-radius: .2vw;
  cursor: pointer;
}
@media screen and (max-width:1200px){
  .main{
    width: 85%;
  }
  .more{
    width: 11vw;
    margin-top: 1vw;
  }
  .detail{
    width: 20vw;
  }
}
@media screen and (max-width:990px){
  .main{
    width: 100%;
  }
  .more{
    display: inline-block;
    width: auto;
    padding: .8vw 1.1vw;
    margin-top: 1vw;
  }
  .detail{
    width: 25vw;
  }
  .partner{
    height: 45vw;
  }
}
@media screen and (max-width:767px){
  .more{
    display: inline-block;
    width: auto;
    padding: .8vw 1.1vw;
    margin-top: 1vw;
  }
  .detail{
    width: 90%;
    position: relative;
    text-align: center;
  }
  .detail span{
    margin-right: 5vw;
  }
  .partner{
    height:auto;
    background-size: contain;
    background-position: center;
  }
  .more{
    padding: 1.6vw 1.6vw;
    margin-top: 4vw;
    margin-bottom: 3vw;
  }
}
</style>
