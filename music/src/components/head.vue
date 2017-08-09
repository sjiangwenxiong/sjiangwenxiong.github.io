<template>
  <div class="header">
    <head-logo></head-logo>
    <rankHead v-if="title!=0">{{title}}</rankHead>
    <head-nav v-else :list="list"></head-nav>
  </div>
</template>

<script>
  import headLogo from './headLogo.vue'
  import rankHead from './rankHead.vue'
  import headNav from './headNav.vue'
  export default {
    name: 'kkHead',
    data(){
      return {
        title:window.localStorage.title||0,
        list:["新歌","排行","歌单","歌手"]
      }
    },
    components:{headLogo,rankHead,headNav}
  }
</script>

<style>
  .header{
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 3;
  }
</style>
