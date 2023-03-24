
import Vue from "vue";
import Router from 'vue-router'
import staticRouter from "./staticRouter"

// console.log("staticRouter",staticRouter);
Vue.use(Router)
const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: staticRouter
    // routes: [...constantRoutes, ...asyncRoutes] // 本地暂时不用动态添加路由
  })
  const router = createRouter()

  export default router;