import Vue from "vue";
import App from "./App.vue";
import "./plugins/element.js";
import Router from 'vue-router'
import VueResource from 'vue-resource'
import routes from './router'

//自定义组件
import Components from './components';
Vue.use(Router)
Vue.use(Components)
Vue.use(VueResource)
Vue.config.productionTip = false;



const router = new Router({
  routes
});

//  判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) { // 判断是否需要登录权限

    if (true) {

      next()
    }

    else { // 没登录则跳转到登录界面
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    }
  } else {
    next()
  }
})


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
