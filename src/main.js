// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../ele/index.css'
import i18n from '@/i18n'

import formTest from './tool/formTest.js'
Vue.prototype.$formTest = formTest;


Vue.use(ElementUI, {
    // element-ui 兼容i18n@6.x
    i18n: (key, value) => i18n.t(key, value)
});

// axios
import axios from '@/axios/http.js'
Vue.prototype.$http = axios;

Vue.config.productionTip = false
import './assets/css/common.css'
import './theme/index.css'
/* eslint-disable */
new Vue({
    el: '#app',
    router,
    i18n,
    components: { App },
    template: '<App/>'
})