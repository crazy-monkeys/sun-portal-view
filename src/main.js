// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../ele/index.css'

// Vue.use(ElementUI);
import formTest from './tool/formTest.js'
Vue.prototype.$formTest = formTest;

import VueI18n from 'vue-i18n'
import messages from './lang'

Vue.use(VueI18n);
// en-AU Australia 澳大利亚
// pt-BR Brazil 巴西
// console.log(navigator.language)
const i18n = new VueI18n({
    locale: navigator.language === 'pt-BR' ? navigator.language : 'en',
    messages,
});

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