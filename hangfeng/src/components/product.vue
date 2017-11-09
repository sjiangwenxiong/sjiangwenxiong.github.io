<template>
  <div class="product">
    <div class="banner">
      <p v-for="item in title">{{item}}</p>
    </div>
    <div class="main" v-if="isShow">
      <div class="nav">
        <div v-for="(item,index) in showList">
          <i>{{item.product}} : </i>
          <span v-for="(list,sonIndex) in item.item" 
                @click="chgList(index,sonIndex)"
                :class="{active:showList.length==1&&sonIndex==showIndex}">{{list.title}}</span>
        </div>
      </div>
      <div class="list" v-if="curIndex>0">
        <i v-for="(item,index) in showList">
          <div v-for="(list,sonIndex) in item.item[showIndex].products" @click="showDetail(index,sonIndex)">
            <div><img :src="list.img[0]" width="100%"></div>
            <p>{{list.name}}</p>
          </div>
        </i>
      </div>
      <div class="list" v-if="curIndex==0">
          <div v-for="(list,index) in allList.slice(allListIndex*9,allListIndex*9+9)" 
               @click="allDetail(index)">
            <div><img :src="list.img[0]" width="100%"></div>
            <p>{{list.name}}</p>
          </div>
          <div class="page" v-if="pageArray.length>1">
            <span @click="prevPage">上一页
            </span><span v-for="(item,index) in pageArray"
                         :class="{active:index==allListIndex}"
                         @click="topage(index)"
                         >
              {{index+1}}
            </span><span @click="nextPage">下一页</span>
          </div>
      </div>
    </div>
    <router-view :data="showList" :productIndex="productIndex" :typeIndex="showIndex" :index="detailIndex" :allList="allList" :isAll="isAll"/>
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
      allList:[],
      curIndex:0,
      pageArray:[],
      allListIndex:0,
      isAll:true,
      title:""
    }
  },
  watch:{
    currentIndex(){
      if(this.curIndex==0){
        this.showList=this.mydata
      }
    }
  },
  created(){
    this.curIndex=this.currentIndex
    var that=this
    $.ajax({url:"http://"+that.lang+".hangfeng.mandokg.com/api/v1/product",success:function(result){
      that.mydata=result.list
      that.title=result.title
      // that.showList=[]
      // that.showList.push(that.mydata.list[that.currentIndex])
      if(that.curIndex==0){
        that.showList=that.mydata
        that.allList=[]
        for(var i=0;i<that.mydata.length;i++){
          for(var j=0;j<that.mydata[i].item.length;j++){
            for(var k=0;k<that.mydata[i].item[j].products.length;k++){
              that.mydata[i].item[j].products[k].pIndex=i
              that.mydata[i].item[j].products[k].sonIndex=k
              that.mydata[i].item[j].products[k].index=j
              that.allList.push(that.mydata[i].item[j].products[k])
            }
          }
        }
        var page=[]
        var length=parseInt((that.allList.length-1)/9)+1
        page.length=length
        that.pageArray=page
      }else{
        that.showList=[]
        that.showList.push(that.mydata[that.curIndex])
      }
      that.$nextTick(function(){
        that.$parent.showFoot=true
      })
    }})
    this.$parent.isWhite=false
    this.$parent.navIndex=2
  },
  methods:{
    topage(index){
      this.allListIndex=index
    },
    prevPage(){
      if(this.allListIndex>0){
        this.allListIndex--
      }else{
        alert("已经是第一页了")
      }
    },
    nextPage(){
      if(this.allListIndex<this.pageArray.length-1){
        this.allListIndex++
      }else{
        alert("已经是最后一页了")
      }
    },
    showDetail(index,sonIndex){
      this.isAll=false
      this.productIndex=index
      this.detailIndex=sonIndex
      this.isShow=false
      this.$router.push("/product/detail")
    },
    allDetail(index){
      this.isAll=true
      // this.showList=[]
      // this.$parent.currentIndex=list.index
      // this.curIndex=list.index
      // this.showList.push(this.mydata[list.pIndex])
      // this.showIndex=list.index
      // this.detailIndex=list.sonIndex
      this.detailIndex=this.allListIndex*9+index
      this.isShow=false
      this.$router.push("/product/detail")
    },
    update(index){
      this.isShow=true
      this.showIndex=0
      if(index==0){
        this.showList=this.mydata
      }else{
        this.showList=[]
        this.showList.push(this.mydata[index-1])
      }
    },
    chgIndex(index){
      this.navIndex=index
      this.area=this.mydata.logoList[index]
    },
    chgList(index,sonIndex){
      if(this.curIndex==0){
        this.curIndex=index+1
        this.$parent.currentIndex=index+1
      }
      if(this.showList.length>1){
        this.showList=[]
        this.showList.push(this.mydata[index])
      }
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
.page{
  display: block;
  width: 100% !important;
  text-align: center;
  margin-top: 4.5vw;
}
.page span{
  padding: .8vw 1vw .8vw 1.2vw;
  background: #e7e7e7;
  color: #aaa;
  margin-left: .8vw;
  font-size: .8vw;
  cursor: pointer;
}
.page .active{
  color: #fff;
  background: #008be8;
}
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
  font-style: normal;
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
.list>div{
  width: 33.3%;
  display: inline-block;
  margin-top: 3.5vw;
}
.list>div div{
  width: 95%;
  margin: 0 auto;
}
.list>div p{
  font-style: normal;
  color: #333;
  text-align: center;
  margin-top: 1vw;
}
.nav .active{
  color: #008be8;
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
  .list span{
    font-size: 3.5vw;
    padding: .5vw .8vw .7vw 1.5vw;
  }
}
</style>
