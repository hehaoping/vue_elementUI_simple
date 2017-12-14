import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(ElementUI)

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const RouterConfig = {
  mode: 'hash',
  routes: routes
}

axios.defaults.baseURL = 'http://localhost/'
axios.defaults.timeout = 30000
axios.defaults.withCredentials = true //跨域 携带cookie设置为true

window.axios = axios
const router = new VueRouter(RouterConfig)

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
