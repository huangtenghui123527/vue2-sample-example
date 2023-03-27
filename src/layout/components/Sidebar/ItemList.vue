<template>
  <div class="sidebar-nav">
    <div v-for="item in childArray" :key="item.id" class="r-link">
        <template v-if="item.children&&item.children.length" >
          <div class="route-title">{{item.title}}</div>
          <ItemList :childArray="item.children" />
        </template>
        <template v-else> 
          <div @click="toRouter(item)" class="nav-list" >
            <router-link :class="routerId== item.id?'active':''" :to="item.path" >{{item.title}}</router-link>
          </div>
        </template>
    </div>
  </div>
</template>
<script>
export default {
  name:"ItemList",
  inject: ["kid"],
  props:{
    childArray:{
      type:Array
    },
  },
  data(){
    return {
      routerId:this.kid
    }
  },
  mounted(){
  },
  methods:{
    toRouter(item){
      //通知老祖路由有变化
      this.routerId = item.id;
      this.$emit("watchRouterChange",item)
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
    color: #455a64;
    display: inline-block;
    width: 100%;
  }
  .active{
    color: #4fc08d;
  }
}
</style>