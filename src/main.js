import Vue from 'vue'
import "./assets/js/element"
import "./assets/js/markdown"
import App from './App.vue'
import router from './router';
import "./assets/style/index.css"
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
