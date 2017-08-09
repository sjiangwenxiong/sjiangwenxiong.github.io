
<template>
  <div id="app">
    <kk-head></kk-head>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import kkHead from './components/head'
export default {
  name: 'app',
  components:{
      kkHead
  }
}
</script>

<style>
#app {
  font-family:Microsoft Yahei, 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
