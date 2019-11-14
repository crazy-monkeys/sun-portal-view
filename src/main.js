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
//引入Element的语言包
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(VueI18n);
const i18n = new VueI18n({
    locale: 'en',
    // locale: sessionStorage.getItem('language')||'en',
    messages: {
        en: {
            message: 'hello',
            ...enLocale // 或者用 Object.assign({ message: 'hello' }, enLocale)
        },
        zh: {
            message: '你好',
            ...zhLocale // 或者用 Object.assign({ message: '你好' }, zhLocale)
        }
    }
});
Vue.use(ElementUI, {
    i18n: (key, value) => i18n.t(key, value) //重点！！在注册Element时设置i18n的处理方法（这里有个小坑）
});


router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

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
    components: { App },
    template: '<App/>'
})