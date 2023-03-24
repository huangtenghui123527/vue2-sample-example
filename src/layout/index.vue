<template>
  <div class="layout">
    <Header />
    <div class="content">
      <Sidebar />
      <AppMain />
    </div>
  </div>
</template>
<script>
import Sidebar from "./components/Sidebar";
import AppMain from "./components/AppMain";
import Header from './components/Header';
export default {
  components:{
    Sidebar,
    AppMain,
    Header
  }
}
</script>
<style lang="scss" scopde>
  .layout{
    width: 100%;
    height: 100%;
    .content{
      width: 100%;
      height: calc(100% - 50px);
      position: relative;
      display: flex;
    }
  }
</style> 