<template>
  <div class="about" v-if="mydata.title">
    <div class="banner">
      <p v-for="item in mydata.title">{{item}}</p>
    </div>
    <div class="desc">
      <div>
        <div>
          <p>{{mydata.desc}}</p>
        </div>
      </div>
      <div><img src="../assets/img/recruit.jpg" height="100%"></div>
    </div>
    <div class="adv">
      <div>{{mydata.name}}</div>
      <div>{{mydata.adv}}<span>hr@hangfeng.com</span></div>
    </div>
    <div class="list">
      <div>
        <div>{{mydata.header.name}}</div>
        <div>{{mydata.header.work}}</div>
        <div>{{mydata.header.place}}</div>
        <div>{{mydata.header.detail}}</div>
      </div>
      <div v-for="(item,index) in mydata.list" 
           :class="{active:index==activeIndex}">
        <div>{{item.name}}</div>
        <div style="text-indent:1em;">{{item.work}}</div>
        <div>{{item.place}}</div>
        <div><i @click="activeIndex=index"></i></div>
        <div class="detail">
          <!-- <div v-for="list in item.detail">
            <div>{{list.type}}</div>
            <p v-for="items in list.list">
              {{items.name}} : {{items.slug}}
            </p>
          </div> -->
          <div v-html="item.slug"></div>
        </div>
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
      activeIndex:0
    }
  },
  created(){
    this.$parent.isWhite=false
    this.$parent.navIndex=4
    var that=this
    $.ajax({url:"http://"+this.lang+".hangfeng.mandokg.com/api/v1/join",success:function(result){
       that.mydata=result
       that.$nextTick(function(){
          this.$parent.showFoot=true
          if(this.lang=='en'&&document.body.clientWidth<767){
            $(".list").addClass("listen")
          }
       })
    }})
  },
  methods:{
  
  },
  destroyed(){
    this.$parent.showFoot=false
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.listen>div>div{
  margin-left: 0 !important;
}
.listen>div>div:nth-child(1){
  width: 21% !important;
}
.listen>div>div:nth-child(2){
  width: 28% !important;
}
.listen>div>div:nth-child(3){
  width: 22% !important;
}
.listen>div>div:nth-child(4){
  width: 6em;
}
.listen>div>div:nth-child(4) i{
  margin-left: 2em !important;
}
.desc>div:nth-child(1){
  animation: fadeInRight .5s 0s both;
}
.desc>div:nth-child(2){
  animation: fadeInLeft .5s 0s both;
}
.banner{
  width: 100%;
  height: 15vw;
  background: url(../assets/img/recruit_banner.jpg);
  background-size: cover;
  background-position: top;
  color: #fff;
  padding-top: 11vw;
}
.banner p:nth-child(1){
  margin-left: 21vw;
  font-size: 2vw;
  font-family: 站酷高端黑;
  letter-spacing: 1px;
}
.banner p:nth-child(2){
  margin-top: .8vw;
  font-size: 1vw;
  margin-left: 21vw;
}
.desc{
  width: 60%;
  max-width: 1200px;
  height: 15vw;
  display: flex;
  margin: 5vw auto 9.5vw;
}
.desc>div{
  height: 100%;
}
.desc>div:first-child{
  height: 100%;
  margin-right: 3vw;
  color: #333;
  width: 48%;
}
.desc>div:first-child div{
  display: table-cell;
  height: 15vw;
  vertical-align: middle;
  text-indent:2em;
  line-height: 2vw;
  font-size: .8vw;
}
.desc>div:last-child img{
  width: 27vw;
  border-radius: 1vw;
}
.adv{
  width: 60%;
  max-width: 1200px;
  display: flex;
  margin: 0 auto 2vw;
  color: #333;
  justify-content:space-between;
}
.adv div:first-child{
  margin-left: .7vw;
  font-size: 1vw;
}
.adv div:last-child{
  font-size: .7vw;
}
.adv span{
  color: #008be8;
}
.list{
  margin-bottom: 5vw;
}
.list>div{
  border-top: 1px solid #f0f0f0;
  width: 60%;
  max-width: 1200px;
  display: flex;
  margin: 0 auto;
  color: #333;
  font-size: .8vw;
  height: 4vw;
  overflow: hidden;
  line-height: 4vw;
  flex-wrap:wrap;
  transition:.3s;
}
.list .active{
  height: auto;
}
.list .active i{
  transform: rotate(180deg)
}
.list>div>div{
  margin-left: 4.2%;
}
.list>div:first-child{
  background: #f0f0f0;
  border: none;
}
.list>div>div:nth-child(1){
  width: 38%;
}
.list>div>div:nth-child(2){
  width: 15%;
}
.list>div>div:nth-child(3){
  width: 17%;
}
.list i{
  height: 4vw;
  display: inline-block;
  width: 2em;
  background-image: url(../assets/img/down.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 1em;
  cursor: pointer;
}
.list>div>.detail{
  margin-left: 11.5%;
  margin-top: 2vw;
  margin-bottom: 3.5vw;
}
.detail>div{
  margin-top: 1vw;
}
.detail>div>div{
  line-height: 2vw;
  font-size: 1vw;
  font-weight: bold;
}
.detail>div>p{
  font-size: .7vw;
  color: #aaa;
  line-height: 1.5vw;
}
@media screen and (max-width:990px){
  .desc{
    width: 80%;
    height: 20vw;
  }
  .desc>div:first-child div{
    height: 20vw;
  }
  .desc>div:last-child img{
    width: 36vw;
  }
  .adv{
    width: 80%;
  }
  .list>div{
    width: 80%;
  }
  .detail>div>p{
    font-size: .7vw;
    color: #aaa;
    line-height: 2vw;
  }
}
@media screen and (max-width:767px){
  .banner{
    text-align: center;
    height: 22vw;
    padding-top: 28vw;
  }
  .banner p:nth-child(1){
    font-size: 6vw;
    font-family: 站酷高端黑;
    letter-spacing: 1px;
    margin-left: 0;
  }
  .banner p:nth-child(2){
    margin-top: 2vw;
    font-size: 3.5vw;
    margin-left: 0;
  }
  .desc{
    width: 90%;
    display: block;
    height: auto;
  }
  .desc>div{
    width: 100% !important;
  }
  .desc p{
    font-size: 3.5vw;
    line-height: 5vw;
  }
  .desc img{
    width: 100% !important;
    border-radius: 3vw !important;
  }
  .adv{
    display: block;
    width:100%;
    text-align: center;
  }
  .adv>div:first-child{
    font-size: 4vw;
    line-height: 6vw;
  }
  .adv>div:last-child{
    font-size: 3vw;
    margin-top: 1vw !important;
  }
  .list>div{
    height: 8vw;
    line-height: 8vw;
    font-size: 3.5vw
  }
  .list>div{
    width: 90%;
  }
  .list>div>div:nth-child(1){
    width: 25%;
  }
  .list>div>div:nth-child(2){
    width: 20%;
  }
  .list>div>div:nth-child(3){
    width: 25%;
  }
  .detail{
    margin-left: 5vw !important;
  }
  .detail>div>div{
    line-height: 6vw;
  }
  .detail p{
    line-height: 5vw !important;
  }
  .list i{
    height: 8vw !important;
  }
}
</style>
