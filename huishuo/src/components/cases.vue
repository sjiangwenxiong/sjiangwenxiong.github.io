<template>
  <div class="cases">
    <div class="swiper-img">
      <img src="../assets/img/cases_mask.png" width="100%">
      <div>
        <div class="mask"><img src="../assets/img/mask.png" width="100%"></div>
      </div>
    </div>
    <div class="content">
      <div class="head"><img src="../assets/img/cases_text.jpg" width="100%"></div>
      <div class="nav">
        <span v-for="(item,index) in cases_list" 
              :class="{active:acindex==index}"
              @click="hover(index)">
          {{item.type}}
        </span>
      </div>
      <div>
        <div class="detail" v-for="(item,index) in showingList">
          <div>
            <div>
              <div>
                <img :src="item.img" width="100%">
                <div class="mask">
                  <img :src="item.code">
                  <div><div>{{item.name}}</div></div>
                </div>
              </div>  
            </div>
          </div>
        </div>
        <p style="clear:both;margin:0;"></p>
      </div>
    </div>
    <need></need>
  </div>
</template>

<script>
import need from "./dev_need"
export default {
  data () {
    return {
      cases_list:[
        {type:"多端案例",cases:[
          {name:'幕诗薇',img:require('../assets/img/case1.jpg'),code:require('../assets/img/mushiwei_code.png')},
          {name:'幕诗薇',img:require('../assets/img/case1.jpg'),code:require('../assets/img/mushiwei_code.png')},
          {name:'幕诗薇',img:require('../assets/img/case1.jpg'),code:require('../assets/img/mushiwei_code.png')},
          {name:'幕诗薇',img:require('../assets/img/case1.jpg'),code:require('../assets/img/mushiwei_code.png')}
        ]},
        {type:"电商",cases:[
          {name:'幕诗薇1',img:require('../assets/img/case1.jpg'),code:require('../assets/img/mushiwei_code.png')},
          {name:'幕诗薇1',img:require('../assets/img/case1.jpg'),code:require('../assets/img/mushiwei_code.png')},
          {name:'幕诗薇1',img:require('../assets/img/case1.jpg'),code:require('../assets/img/mushiwei_code.png')},
          {name:'幕诗薇1',img:require('../assets/img/case1.jpg'),code:require('../assets/img/mushiwei_code.png')}
        ]},
        {type:"小程序",cases:[
          {name:'幕诗薇',img:require('../assets/img/case1.jpg'),code:require('../assets/img/mushiwei_code.png')},
          {name:'幕诗薇',img:require('../assets/img/case1.jpg'),code:require('../assets/img/mushiwei_code.png')},
          {name:'幕诗薇',img:require('../assets/img/case1.jpg'),code:require('../assets/img/mushiwei_code.png')},
          {name:'幕诗薇',img:require('../assets/img/case1.jpg'),code:require('../assets/img/mushiwei_code.png')}
        ]},
        {type:"医疗",cases:[
          {name:'幕诗薇',img:require('../assets/img/case1.jpg'),code:require('../assets/img/mushiwei_code.png')},
          {name:'幕诗薇',img:require('../assets/img/case1.jpg'),code:require('../assets/img/mushiwei_code.png')},
          {name:'幕诗薇',img:require('../assets/img/case1.jpg'),code:require('../assets/img/mushiwei_code.png')},
          {name:'幕诗薇',img:require('../assets/img/case1.jpg'),code:require('../assets/img/mushiwei_code.png')}
        ]},
        {type:"金融",cases:[
          {name:'幕诗薇',img:require('../assets/img/case1.jpg'),code:require('../assets/img/mushiwei_code.png')},
          {name:'幕诗薇',img:require('../assets/img/case1.jpg'),code:require('../assets/img/mushiwei_code.png')},
          {name:'幕诗薇',img:require('../assets/img/case1.jpg'),code:require('../assets/img/mushiwei_code.png')},
          {name:'幕诗薇',img:require('../assets/img/case1.jpg'),code:require('../assets/img/mushiwei_code.png')}
        ]},
        {type:"企业应用",cases:[
          {name:'幕诗薇',img:require('../assets/img/case1.jpg'),code:require('../assets/img/mushiwei_code.png')},
          {name:'幕诗薇',img:require('../assets/img/case1.jpg'),code:require('../assets/img/mushiwei_code.png')},
          {name:'幕诗薇',img:require('../assets/img/case1.jpg'),code:require('../assets/img/mushiwei_code.png')},
          {name:'幕诗薇',img:require('../assets/img/case1.jpg'),code:require('../assets/img/mushiwei_code.png')}
        ]}
      ],
      acindex:0,
      showingList:[]
    }
  },
  components:{need},
  created(){
    this.showingList=this.cases_list[this.acindex].cases
    $(".navbar-nav .active").removeClass("active")
    $(".navbar-nav li").eq(4).addClass("active")
  },
  mounted(){
    $(".detail>div").hover(function(){
      $(this).find('.mask').stop().fadeIn(500)
    },function(){
      $(this).find('.mask').stop().fadeOut(500)
    })
  },
  methods:{
    hover(index){
      this.acindex=index
      this.showingList=this.cases_list[this.acindex].cases
    },
    showMask(e){
      console.log(e)
    },
    showMask1(e){
      console.log(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cases .swiper-img{
  width: 100%;
  position: relative;
  background-image: url(../assets/img/cases_banner.jpg);
  background-size: cover;
  background-position: center;
}
.cases .swiper-img>div{
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  box-shadow: 1px 5px 15px rgba(0,0,0,.1) inset;
  color: #fff;
}
.cases .swiper-img>div .mask{
  width: 16vw;
  margin: -3px auto 0;
}
.content{
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}
.head{
  width: 10%;
  margin: 5vw auto 3.5vw;
}
.nav span{
  display: inline-block; 
  padding: 10px 5px;
  margin-left: 4%;
  margin-bottom: 6vw;
  cursor: pointer;
}
.nav span:first-child{
  margin-left: 0;
}
.nav .active{
  background: #108aed;
  color: #fff;
}
.content>img{
  margin-bottom: 5vw;
}
.cases{
  margin-bottom: 5vw;
}
.detail{
  width: 25%;
  float: left;
  height: 368px;
}
.detail>div{
  width: 72%;
  margin: 0 auto;
  height: 100%;
  background: url(../assets/img/phone_bg.jpg);
  background-size: 100% 100%;
}
.detail>div>div{
  display: table;
  height: 100%;
  width: 87.8%;
  margin: 0 auto;
}
.detail>div>div>div{
  display: table-cell;
  vertical-align: middle;
  height: 100%;
  position: relative;
}
.detail .mask{
  display: none;
  width: 100%;
  position: absolute;
  top: 11.5%;
  bottom: 11.5%;
  left: 0;
  background: rgba(0,0,0,.7);
}
.detail .mask img{
  width: 50%;
  margin-top: 70%;
}
.detail .mask>div{
  width: 90%;
  margin: 0 auto;
  height: 13.8%;
  border: 1px solid #fff;
  margin-top: 7%;
  color: #fff;
  display: table;
}
.detail .mask>div div{
  display: table-cell;
  width: 100%;
  height: 100%;
  vertical-align: middle;
  font-size: 1em;
}



@media screen and (max-width: 990px){
  .head{
    width: 13%;
  }
  .swiper-img .mask{
    display: none;;
  }
  .detail{
    height: 36.8vw;
  }
}
@media screen and (max-width: 767px){
  .swiper-img img{
    height: 35vw;
  }
  .head{
    width: 25%;
    margin-top: 10vw;
  }
  .content span{
    margin-left: 2%;
    font-size: 12px;
    margin-bottom: 3vw;
  }
  .content{
    margin-bottom: 7.5vw;
  }
}
</style>
