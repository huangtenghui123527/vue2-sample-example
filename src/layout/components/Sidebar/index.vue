<template>
  <div class="sidebar">
    <ItemList :childArray="routes"/>
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
      set(value){
        console.log("value",value);
      }
    },
  },
  watch:{
  },
  data(){
    return {
      // currentRouter:{id:""},
      // id:""
    }
  },
  provide() {
    return {
      kid:""
    }
  },
  created(){
    this.getFindRouterName();
  },
  mounted(){
  },
  methods:{
    getFindRouterName(){
      const {path} = this.$route;
      this._provided.kid= findRouter(this.routes).id
      function findRouter(routeArray){
        let currentRouter = null;
        for(let item of routeArray){
          if(item==null||item=={}) continue;
          if(item.path!="/"&&path.indexOf(item.path)!=-1 ){
            currentRouter = item;
            break;
          }else if(item.children&&item.children.length){
            currentRouter= findRouter(item.children)
          }else {
            continue;
          }
        }
        return currentRouter;
      }
    }
  }
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