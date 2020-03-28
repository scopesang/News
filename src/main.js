import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from "axios";

// 跟实力
// 绑定到原型
Vue.prototype.$axios = axios;
Vue.prototype.iconUrl = "//at.alicdn.com/t/font_1449723_66ddyqmbb6o.css";

axios.defaults.baseURL = "http://localhost:3000"

Vue.config.productionTip = false
Vue.use(Vant);
router.beforeEach((to, from, next) => {
  if (to.path === "/user") {
    const userJson = JSON.parse(localStorage.getItem("userInfo")) || {};
    if (userJson.token) {
      next();
    } else {
      next("/")
    }
  } else {
    next()
  }
})
new Vue({
  // 项目开发入口
  router,
  render: h => h(App)
}).$mount('#app')
