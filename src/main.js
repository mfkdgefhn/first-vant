// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'

import '../config/rem'

// vnat-ui组件库
import Vant from 'vant'
import 'vant/lib/icon/local.css'
import 'vant/lib/index.css'

// 字体
import './assets/iconfont/iconfont.css'

Vue.use(Vant)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
