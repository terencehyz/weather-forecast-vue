// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import axios from 'axios'
import 'muse-ui/dist/muse-ui.css'
import 'typeface-roboto'
import './styles/index.less'

var $http = axios.create({

});

Vue.prototype.$http = $http;

import 'muse-ui-progress/dist/muse-ui-progress.css';
import NProgress from 'muse-ui-progress';
Vue.use(NProgress);

Vue.use(MuseUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

NProgress.start();
NProgress.done();
