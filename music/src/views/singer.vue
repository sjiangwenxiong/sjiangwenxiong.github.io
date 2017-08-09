<template>
  <div class="singer">
    <ul v-for="(item,index) in singer">
      <li v-for="list in singer[index]">
        <i></i>{{list}}
      </li>
    </ul>
  </div>
</template>
<script type="es6">
    import originJSONP from 'jsonp'
    export default{
        data(){
            return{
                singer:[
                  ["热门歌手"],
                  ["华语男歌手","华语女歌手","华语组合"],
                  ["日韩男歌手","日韩女歌手","日韩组合"],
                  ["欧美男歌手","欧美女歌手","欧美组合"]
                ]
            }
        },
        created(){
            originJSONP("https://c.y.qq.com/v8/fcg-bin/v8.fcg?channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&g_tk=5381&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0",{
                param:'jsonpCallback'
            },function(err,data){
                console.log(data)
            })
        },
        destroyed(){
          document.body.scrollTop=0
        }
    }
</script>
<style>
  .singer{
    padding-top: 6.4286rem;
    width: 100%;
  }
  .singer ul{
    padding: 0!important;
    margin: 1rem .7143rem 1.0714rem;
    background: #fbfbfb;
    border:1px solid #e4e4e4;
    border-radius: 5px;;
  }
  .singer li{
    list-style: none;
    padding:.7143rem;
    font-size: 1rem;
    color: #333;
    border-top:1px solid #e4e4e4;
  }
  .singer li:nth-child(1){
    border: none;
  }
  .singer i{
    width: .57143rem;
    height: 1rem;
    margin-top: 0.2rem;
    background: url("../assets/arrow_icon.png") no-repeat;
    background-size: 100%;
    display: block;
    float: right;
  }
</style>
