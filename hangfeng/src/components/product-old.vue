<template>
  <div class="product" v-if="mydata.title">
    <div class="banner">
      <p v-for="item in mydata.title">{{item}}</p>
    </div>
    <div class="main" v-if="isShow">
      <div class="nav">
        <div v-for="(item,index) in mydata.list">
          <i>{{item.product}} : </i>
          <span v-for="(list,sonIndex) in item.item" 
                @click="chgList(index,sonIndex)"
                :class="{active:index==curIndex&&sonIndex==showIndex}">
            {{list.title}}
          </span>
        </div>
      </div>
      <div class="list">
        <i v-for="(item,index) in showList">
          <div v-for="(list,sonIndex) in item.item[showIndex].products" @click="showDetail(index,sonIndex)">
            <div><img :src="list.img[0]" width="100%"></div>
            <p>{{list.name}}</p>
          </div>
        </i>
      </div>
    </div>
    <router-view :data="showList" :productIndex="productIndex" :typeIndex="showIndex" :index="detailIndex"/>
  </div>
</template>

<script>
export default {
  props:['lang','currentIndex'],
  data () {
    return {
      mydata:{},
      navIndex:0,
      showList:[],
      showIndex:0,
      detailIndex:0,
      isShow:true,
      productIndex:0,
      curIndex:this.currentIndex
    }
  },
  watch:{
    
  },
  created(){
    var that=this
    $.ajax({url:"http://"+that.lang+".hangfeng.mandokg.com/api/v1/product",success:function(result){
      that.mydata=result
      that.showList=[]
      that.showList.push(that.mydata.list[that.currentIndex])
      that.$nextTick(function(){
        this.$parent.showFoot=true
      })
    }})
    this.$parent.isWhite=false
    this.$parent.navIndex=2
  },
  methods:{
    showDetail(index,sonIndex){
      this.productIndex=index
      this.detailIndex=sonIndex
      this.isShow=false
      this.$router.push("/product/detail")
    },
    update(index){
      this.curIndex=index
      this.isShow=true
      this.showIndex=0
      this.showList=[]
      this.showList.push(this.mydata.list[index])
    },
    chgIndex(index){
      this.navIndex=index
      this.area=this.mydata.logoList[index]
    },
    chgList(index,sonIndex){
      this.showList=[]
      this.showList.push(this.mydata.list[index])
      this.curIndex=index
      this.showIndex=sonIndex
    }
  },
  destroyed(){
    this.$parent.showFoot=false
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner{
  width: 100%;
  height: 20.5vw;
  background: url(../assets/img/product_banner.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position:0% 90%;
  color: #fff;
  padding-top: 4.5vw;
  text-align: right;
}
.banner p:nth-child(1){
  font-size: 2vw;
  font-family: 站酷高端黑;
  margin-right: 20vw;
  letter-spacing: 1px;
}
.banner p:nth-child(2){
  margin-right: 22.5vw;
  font-size: 1vw;
  margin-top: .5vw;
}
.main{
  width: 62.5%;
  margin: 0 auto;
}
.nav{
  margin-top:3vw;
}
.nav>div{
  width: 100%;
  height: 3.5vw;
  border: 1px solid #ddd;
  line-height: 3.5vw;
  font-size: 14px;
  color: #aaa;
  margin-top: 1vw;
}
.nav i{
  /*cursor: pointer;*/
  margin-left: 1vw;
}
.nav>div span{
  padding: 0 1.5vw;
  color: #333;
  cursor: pointer;
}
.list{
  margin-bottom: 5.5vw;
}
.list i>div{
  width: 33.3%;
  display: inline-block;
  margin-top: 3.5vw;
}
.list i>div div{
  width: 95%;
  margin: 0 auto;
}
.list i>div p{
  font-style: normal;
  color: #333;
  text-align: center;
  margin-top: 1vw;
}
.nav .active{
  color: #008be8;
}
@media screen and (max-width:990px){
  .main{
    width: 80%;
  }
}
@media screen and (max-width:767px){
  .banner{
    height: 28vw;
    padding-top: 22vw;
    text-align: center;
  }
  .banner p:nth-child(1){
    font-size: 6vw;
    font-family: 站酷高端黑;
    margin-right: 0;
  }
  .banner p:nth-child(2){
    font-size: 4vw;
    margin-top: 2vw;
    margin-right: 0;
  }
  .main{
    width: 90%;
  }
  .nav>div{
    height: auto;
    line-height: 6vw;
    font-size: 4vw;
  }
  .nav span{
    display: inline-block;
  }
  .list{
    font-size: 4vw;
  }
  .list>i div{
    width: 50%;
  }
}
</style>
