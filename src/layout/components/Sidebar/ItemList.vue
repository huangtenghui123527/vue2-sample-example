<template>
  <div class="sidebar-nav">
    <div v-for="item in childArray" :key="item.id" class="r-link">
        <template v-if="item.children&&item.children.length" >
          <div class="route-title">{{item.title}}</div>
          <ItemList :childArray="item.children" />
        </template>
        <template v-else> 
          <router-link  :to="item.path">{{item.title}}</router-link>
        </template>
    </div>
  </div>
</template>
<script>
export default {
  name:"ItemList",
  props:{
    childArray:{
      type:Array
    }
  }
}
</script>
<style lang="scss" scoped>
.sidebar-nav{
    font-size: 16px;
    color: #bcbcbc;
  .r-link{
    padding: 5px 0;
    margin-left: 10px;
  }
  a{
    color: #333;
    display: inline-block;
    width: 100%;
  }
}
</style>