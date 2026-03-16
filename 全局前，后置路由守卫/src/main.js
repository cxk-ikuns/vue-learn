import Vue from 'vue'
import App from './App.vue'
//引入Vue-router
import VueRouter from 'vue-router'
//使用vue-router
Vue.use(VueRouter)
//引入路由器
import router from './router'
Vue.config.productionTip = false
new Vue({
  el:'#root',
  render: h => h(App),
  router:router
})
