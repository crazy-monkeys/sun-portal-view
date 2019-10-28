import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/coms/HelloWorld'
import Index from '@/components/pages/index'
import Home from '@/components/pages/home'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: {
            name: 'Home'
        },
        name: 'Index',
        component: Index,
        children: [{
                path: 'home',
                name: 'Home',
                component: Home,
            },
            {
                path: 'warranty/registration',
                name: 'Registration',
                component: resolve => require(['@/components/pages/registration'], resolve)
            },
            {
                path: 'warranty/procedure',
                name: 'Procedure',
                component: resolve => require(['@/components/pages/procedure'], resolve),
            },
            {
                path: 'warranty/claim',
                name: 'Claim',
                component: resolve => require(['@/components/pages/claim'], resolve),
            },
            {
                path: 'warranty/claim/form',
                name: 'ClaimForm',
                component: resolve => require(['@/components/pages/claimForm'], resolve),
            },
            {
                path: 'warranty/extension',
                name: 'Extension',
                component: resolve => require(['@/components/pages/extension'], resolve),
            },
            {
                path: 'warranty/extension/sigleItem',
                name: 'SigleItem',
                component: resolve => require(['@/components/pages/sigleItem'], resolve),
            },
            {
                path: '/warranty/extension/multipleItems',
                name: 'MultipleItems',
                component: resolve => require(['@/components/pages/multipleItems'], resolve),
            }

        ]
    }]
})