<template>
  <div class="news" v-if="mydata.title">
    <div class="list">
      <div v-for="(item,index) in mydata.list.slice(currentIndex*6,currentIndex*6+6)" class="clearfix">
        <div class="img"><img :src="item.cover" width="100%"></div>
        <div class="detail">
          <div>
            <span>{{item.name}}</span>
            <span>{{item.created_at.split(" ")[0]}}</span>
          </div>
          <p>{{item.slug}}</p>
          <div @click="go(item)">{{$parent.lang=='en'?'View More':'查看更多'}}</div>
        </div>
      </div>
    </div>
    <div class="page" v-if="pageArray.length>1">
      <span @click="prevPage">上一页
      </span><span v-for="(item,index) in pageArray"
                   :class="{active:index==currentIndex}"
                   @click="topage(index)"
                   >
        {{index+1}}
      </span><span @click="nextPage">下一页</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mydata:[],
      pageArray:[],
      currentIndex:0,
      newsIndex:0
    }
  },
  created(){
    this.update()
    $(".page span").mouseover(function(){
      $(".news").removeClass("ani")
    })
  },
  watch:{
    mydata(){
      this.createPage()
    }
  },
  methods:{
    go(item){
      sessionStorage.id="2"+this.newsIndex
      sessionStorage.title=this.mydata.categories[this.newsIndex].title
      this.$router.push("/newsDetail?id="+item.id)
    },
    prevPage(){
      if(this.currentIndex>0){
        this.currentIndex--
        this.ani()
      }else{
        alert("已经是第一页了")
      }
    },
    nextPage(){
      if(this.currentIndex<this.pageArray.length-1){
        this.currentIndex++
        this.ani()
      }else{
        alert("已经是最后一页了")
      }
    },
    topage(index){
      this.currentIndex=index
      this.ani()
    },
    ani(){
      $(".news").addClass("ani")
      setTimeout(()=>{
        $(".news").removeClass("ani")
      },1000)
      document.body.scrollTop=0
    },
    update(){
      var path=this.$router.history.current.path
      var id=path.slice(path.length-1)
      this.$parent.navIndex=id
      // this.mydata=this.data[id]
      this.newsIndex=id
      var that=this
      $.ajax({url:"http://cn.hangfeng.mandokg.com/api/v1/news?category_id=2"+id,success:function(result){
          that.mydata=result
          that.createPage()
          // console.log(that.$parent.$parent.isb)
          that.$nextTick(function(){
            that.$parent.$parent.showFoot=true
          })
          // that.$parent.$parent.isb=false
      }})
      this.currentIndex=0
      this.ani()
    },
    createPage(){
      var page=[]
      var length=parseInt((this.mydata.list.length-1)/6)+1
      page.length=length
      this.pageArray=page
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ani{
  animation: fade 1s 0s both;
}
.list{
  width: 60%;
  margin: 3vw auto 0;
  text-align: left;
}
.list>div{
  border-bottom: 1px solid #ddd;
}
.list>div:first-child{
  border-top: 1px solid #ddd;
}
.img{
  float: left;
  width: 24%;
  margin: 1vw 0;
}
.detail{
  float: right;
  width: 72.5%;
}
.detail>div:nth-child(1){
  display: flex;
  justify-content:space-between;
  margin-top: 2vw;
  margin-bottom: 1vw;
}
.detail>div:nth-child(1)>span:nth-child(1){
  font-size: 1.1vw;
  color: #333;
}
.detail>div:nth-child(1)>span:nth-child(2){
  font-size: .7vw;
  color: #aaa;
}
.detail p{
  font-size: .7vw;
  line-height: 1.4vw;
  height: 2.8vw;
  color: #aaa;
  overflow: hidden;
}
.detail>div:nth-child(3){
  width: 9vw;
  height: 2.3vw;
  background: #008be8;
  color: #fff;
  text-align: center;
  line-height: 2.3vw;
  margin-top: 1vw;
  font-size: 1vw;
  cursor: pointer;
}
.page{
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
@media screen and (max-width:1200px){
  .list{
    width: 80%;
  }
  .detail>div:nth-child(1)>span:nth-child(1){
    font-size: 16px;
    color: #333;
  }
  .detail p{
    line-height: 2vw;
    height: 4vw;
  }
  .detail>div:nth-child(3){
    width: 12vw;
    height: 3vw;
    background: #008be8;
    color: #fff;
    text-align: center;
    line-height: 3vw;
    margin-top: 1vw;
  }
}
@media screen and (max-width:767px){
  .list{
    width: 100%;
  }
  .list>div>div{
    width: 90%;
    margin: 3vw auto;
    float: none;
  }
  .detail>div:nth-child(1){
    display: block;
  }
  .detail>div:nth-child(1)>span:nth-child(1){
    font-size: 4.5vw;
    color: #333;
    display: block;
  }
  .detail>div:nth-child(1)>span:nth-child(2){
    font-size: 3vw;
  }
  .detail p{
    line-height: 5vw;
    height: 10vw;
    font-size: 3vw;
  }
  .detail>div:nth-child(3){
    font-size: 3.5vw;
    width: 24vw;
    height: 6vw;
    background: #008be8;
    color: #fff;
    text-align: center;
    line-height: 6vw;
    margin: 2vw auto 0;
  }
  .page span{
    font-size: 3.5vw;
    padding: .5vw .8vw .7vw 1.5vw;
  }
}
</style>
