<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>

export default {
  name: 'App',
}
</script>

<style>
@import url("~@/assets/style/index.css");
#app{
  width: 100%;
  height: 100%;
  color: #2c3e50;
 font-size: 16px;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
