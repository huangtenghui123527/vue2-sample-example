<template>
  <section class="content-main">
    <router-view />
    <!-- <transition>
      <keep-alive :include="cachedViews">
        <router-view :key="key" style="overflow: auto;" />
      </keep-alive>
    </transition> -->
  </section>
</template>
<script>
export default {
  name:"AppMain"
}
</script>
<style lang="scss" scoped>
.content-main{
  // width: calc(100% - 60px);
  width: 100%;
  height: calc(100% - 50px);
  padding: 10px;
  margin: 15px;
  margin-left: 250px;
  background: #fff;
  flex-grow: 1;
  border-radius: 5px;
}
</style>