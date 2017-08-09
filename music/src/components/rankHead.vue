<template>
  <div class="rankHead" :class="{op:show}">
    <div class="back" @click="back()"><i></i></div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'rankHead',
    data(){
      return {
        title:window.localStorage.title,
        show:false,
        scroll:''
      }
    },
    methods: {
      menu() {
        this.scroll = document.body.scrollTop;
        if(this.scroll>250){
          this.show=true
        }else{
          this.show=false
        }
      },
      back(){
        window.history.back()
      }
    },
    mounted() {
      window.addEventListener('scroll', this.menu)
    }
  }
</script>

<style>
.rankHead{
  width: 100%;
  line-height: 3rem;
  background: -webkit-linear-gradient(top,rgba(0,0,0,.6),transparent);
  padding: 0 2.1429rem;
  position: relative;
  text-align: center;
  color: #fff;
  box-sizing: border-box;
}
  .op{
    background: #2ca2f9;
  }
  .back{
    width: 2.1429rem;
    height: 2.8031rem;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    cursor: pointer;
  }
  .back i{
    width: 0.85714rem;
    height: 1.42857rem;
    margin-top: .687265rem;
    display: inline-block;
    background: url("../assets/goback_icon.png") no-repeat;
    background-size: 100%;
  }
</style>
