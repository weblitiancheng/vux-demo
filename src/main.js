import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux.vue'
// import HelloWorld from './components/HelloWorld.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  }
  // {
  //   name: 'helloWorld',
  //   path: '/HelloWorld',
  //   component: HelloWorld
  // }
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)
// 添加 Fastclick 移除移动端点击延迟
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
