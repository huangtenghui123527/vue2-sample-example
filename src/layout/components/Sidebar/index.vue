<template>
  <div class="sidebar">
    <!-- <div v-for="item in routes" :key="item.id">
      <template v-if="item.children&&item.children.length" >
        <span>{{item.title}}</span>
        <ItemList :childArray="item.children" />
      </template>
      <template v-else> 
        <router-link :to="item.path">{{item.title}}</router-link>
      </template>
    </div> -->
    <ItemList :childArray="routes" />
  </div>
</template>
<script>
import ItemList from "./ItemList"
export default {
  name:"Sidebar",
  components:{ItemList},
  computed:{
    routes:{
      get(){
        const {routes} = this.$router.options;
        return routes;
      },
      set(){

      }
    }
  },
  data(){
    return {

    }
  },
  mounted(){
    // console.log("this",this);
    // console.log(this.$route);
    // console.log(this.$router);
  },

}
</script>
<style lang="scss" scoped>
.sidebar{
  position: absolute;
  top: 15px;
  left: 15px;
  width: 200px;
  height: calc(100% - 50px);
  background: #fff;
  padding: 10px;
  color: #000;
  z-index: 1;
  border-radius: 5px;
  overflow-y: auto;
}
</style>