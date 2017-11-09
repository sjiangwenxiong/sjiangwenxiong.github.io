<template>
  <div class="detail clearfix" v-if="detailData">
    <div :style="'background-image:url('+detailData[curentIndex].img[imgIndex]+')'"></div>
    <div>
      <ul>
        <li v-for="value in arr">
          <span>{{value.split("\"")[1]}}：</span><span>{{value.split("\"")[3]}}</span>
        </li>
      </ul>
      <div class="list">
        <div v-for="(item,index) in detailData[curentIndex].img" 
             :style="'background-image:url('+item+')'"
             class="detail-img"
             @mouseenter="chgImg(index)">
        </div>
      </div>
      <div>
        <div :class="{chg:true,active:prev}" @click="toprev">查看上一个</div>
        <div :class="{chg:true,active:next}" @click="tonext">查看下一个</div>
      </div>
    </div>
  </div>
  <div v-else class="detail">暂无详细信息</div>
</template>

<script>
export default {
  props:["data","productIndex","typeIndex","index","allList","isAll"],
  data () {
    return {
      curentIndex:this.index,
      detailData:[],
      prev:false,
      next:false,
      imgIndex:0,
      arr:[]
    }
  },
  created(){
    if(this.isAll){
      this.detailData=this.allList
    }else{
      this.detailData=this.data[this.productIndex].item[this.typeIndex].products
    }
    this.$parent.isShow=false
    if(this.curentIndex-1>=0){
      this.prev=true
    }
    if(this.curentIndex+1<this.detailData.length){
      this.next=true
    }
    if(this.detailData){
      this.arr=this.detailData[this.curentIndex].detail.split("\r\n")
    }
  },
  watch:{
    curentIndex(value){
      console.log(value)
      if(value-1>=0){
        this.prev=true
      }else{
        this.prev=false
      }
      if(value+1<this.detailData.length){
        this.next=true
      }else{
        this.next=false
      }
    }
  },
  methods:{
    chgImg(index){
      this.imgIndex=index
    },
    toprev(){
      if(this.curentIndex-1>=0){
        this.curentIndex--
      }
    },
    tonext(){
      if(this.curentIndex+1<this.detailData.length){
        this.curentIndex++
      }
    }
  },
  destroyed(){
    this.$parent.isShow=true
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detail{
  width: 60%;
  margin: 4vw auto;
}
.detail>div:nth-child(1){
  width: 44vw;
  height: 33vw;
  float: left;
  background-size: cover;
  background-position: center;
}
.detail>div:nth-child(2){
  width: 23%;
  float: right;
}
.detail ul{
  margin-left: 1vw;
  margin-bottom: 2.5vw;
}
.detail ul li{
  list-style: square;
  color: #008be8;
  margin-top: .5vw;
}
.detail ul li span{
  color: #333;
  font-size: .8vw;
}
.detail-img{
  width: 5vw;
  height: 5vw;
  display: inline-block;
  background-size: cover;
  background-position: center;
  border: 1px solid #fff;
  margin-left: 1vw;
  margin-top: .5vw;
}
.detail-img:hover{
  border: 1px solid #008be8;
}
.list{
  width: 13vw;
  margin: 0 auto 2vw;
}
.chg{
  background: #eeeeee;
  color: #aaa;
  text-align: center;
  width: 90%;
  margin: 0 auto;
  height: 2vw;
  line-height: 2vw;
  margin-top: .5vw;
  cursor: pointer;
}
.active{
  background: #008be8;
  color: #fff;
}
@media screen and (max-width:1400px){
  .detail{
    width: 80%;
    margin: 4vw auto;
  }
  .detail>div:nth-child(1){
    width: 59vw;
    height: 44vw;
  }
  .chg{
    margin-top: 1vw;
    height: 3vw;
    line-height:3vw;
  }
}
@media screen and (max-width:767px){
  .detail>div:nth-child(1){
    width: 100%;
  }
  .detail>div:nth-child(2){
    width: 100%;
    float: right;
  }
  .list{
    width: 100%;
    display: flex;
    justify-content:space-between;
  }
  .list>div{
    width: 24%;
    height: 20vw;
    margin-left: 0;
  }
  .list+div{
    display: flex;
  }
  .chg{
    display: inline-block;
    width: 40%;
    height: 7vw;
    line-height: 7vw;
  }
  ul{
    margin-left: 0 !important;
  }
  .detail ul li span{
    color: #333;
    font-size: 4vw;
  }
}
</style>
