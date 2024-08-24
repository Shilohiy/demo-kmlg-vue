// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
/* 引入axios */
import axios from 'axios'
/* 引入qs */
import qs from 'qs'

Vue.use(ElementUI);

Vue.config.productionTip = false

/* 设置代理的域名 */
axios.defaults.baseURL = '/shop';
/* 设置cookie,session跨域配置 */
axios.defaults.withCredentials=true;
/* 设置post请求体*/
axios.defaults.headers.post['Content-Type'] = 'application/json'
/* 设置全局axios写法 */
Vue.prototype.$http = axios
/* 设置全局qs写法 */
Vue.prototype.$qs = qs

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

/* 定义一个导航钩子函数
to:到达的下一个路由对象
from:从那个路由来的路由对象
next:想当于java的放行函数
*/
router.beforeEach(function(to,from,next){
  //取出登录用户名，判断是否登录过
  var userName = localStorage.getItem("userName");
  console.log("userName="+userName)
  console.log(to)
  //判断路由地址里是否配置了meta的islogin
  if(to.meta.isLogin){
    if(userName==null){
      next("/loginEle");
    }else{
      //允许访问
      next()
    }

  }else{
    //放行
    next();
  }

})
