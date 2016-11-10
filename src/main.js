// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import ElementUI from 'element-ui'
import VueRouter from "vue-router"
import VueResource from "vue-resource"
import 'element-ui/lib/theme-default/index.css'

Vue.config.debug = true;

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);

// This my simple component
Vue.component('todo-item', {
  template: '<li>This is a todo item</li>'
});
// This is my component that accepts a 'prop', which is like a custom attribute.
Vue.component('todo-item-v2', {
  template: '<li>{{data.text}}</li>',
  props:['data']
});

const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' };
import SecondCmpt from './components/SecondCmpt'
import ThirdCmpt from './components/FirstCmpt'
import CategoryMain from './components/category/CategoryMain'
import ComponentDemo from './components/ComponentDemo'

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
    ,
    {
      path:'/third',
      component: ThirdCmpt
    }
    ,
    {
      path:'/categoryMain',
      component: CategoryMain
    }
    ,
    {
      path:'/componentDemo',
      component: ComponentDemo
    }
  ]
});

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
