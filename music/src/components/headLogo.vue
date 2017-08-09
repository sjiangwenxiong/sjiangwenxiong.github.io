<template>
  <div class="logo-container">
    <a class="head-logo" @click="backer()"></a>
    <div class="head-search">
      <img src="http://m.kugou.com/v3/static/images/index/search.png">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'headLogo',
    methods:{
      backer(){
        this.$router.push("/");
        window.localStorage.iscur=0;
        location.reload()
  }
    }
  }
</script>

<style>
    .logo-container{
      padding-top: .0357rem;
      background-color: #2CA2F9;
      height: 3.2143rem;
      width: 100%;
      line-height: 3rem;
    }
    .head-logo{
      width: 7.286rem;
      height: 1.67857rem;
      display: inline-block;
      background: url("../assets/logo.png") no-repeat;
      background-size: 100%;
      vertical-align: middle;
      margin-left: .7143rem;
    }
    .head-download{
      display: inline-block;
      width: 5.7143rem;
      height: 1.7143rem;
      margin-left: .7143rem;
      line-height: 1.7143rem;
      border: 1px solid #fff;
      border-radius: .3571rem;
      font-size: .8571rem;
    }
    .head-download a{
      text-decoration: none;
      display: block;
      height: 100%;
      text-align: center;
      color: #fff;
    }
    .head-search{
      width: 1.2143rem;
      height: 1.2143rem;
      position: absolute;
      top: 0.3rem;
      right: .7143rem;
      cursor: pointer;
    }
    .head-search img{
      height: 100%
    }
</style>
