<template>
  <section class="content-main">
    <transition>
      <keep-alive :include="cachedViews">
        <router-view  style="overflow: auto;" />
      </keep-alive>
    </transition>
  </section>
</template>
<script>
export default {
  name:"AppMain",
  data(){
    return{
      cachedViews:[]
    }
  }
}
</script>
<style lang="scss" scoped>
.content-main{
  width: calc(100% - 285px);
  height: calc(100% - 50px);
  padding: 10px;
  margin: 15px;
  margin-left: 250px;
  background: #fff;
  flex-grow: 1;
  border-radius: 5px;
  overflow-y: auto;
}
</style>