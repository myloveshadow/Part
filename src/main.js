// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios';
import 'lib-flexible/flexible'  //引入css转rem文件
import {Row,Col} from 'vant';  //全局引入vant 布局
import { List,Cell } from 'vant';
import VueTouch from 'vue-touch';
import { NavBar } from 'vant';
import 'vant/lib/row/index.css';
import 'vant/lib/col/index.css';
import 'vant/lib/nav-bar/index.css';
import 'vant/lib/list/index.css';
import 'vant/lib/cell/index.css';
//配置axios实例
Axios.defaults.timeout=5000;
Axios.defaults.baseURI="http://jisuarea.market.alicloudapi.com"
Vue.prototype.$axios =Axios;
Vue.use(VueTouch, {name: 'v-touch'}).use(NavBar).use(List).use(Cell);
VueTouch.config.swipe = {
      threshold: 100 //手指左右滑动距离
}
Vue.use(Row).use(Col);
Vue.config.productionTip = false  
Vue.config.devtools=true   //允许devtools检查代码
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
