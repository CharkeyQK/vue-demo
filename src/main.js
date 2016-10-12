// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import VueRouter from "vue-router"
import VueResource from "vue-resource"
import 'element-ui/lib/theme-default/index.css'

Vue.config.debug = true;

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueResource);

const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' }
import SecondCmpt from './components/SecondCmpt'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path:'/first',
      component: First
    },
    {
      path:'/second',
      component: SecondCmpt
    }
  ]
});

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
