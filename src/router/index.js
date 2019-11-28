import Vue from 'vue'
import Router from 'vue-router'
import i18n from '@/i18n'
// import HelloWorld from '@/components/coms/HelloWorld'
import Index from '@/components/pages/index'
import Home from '@/components/pages/home'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)

const router = new Router({
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
                meta: {
                    title: i18n.t('router.home')
                }
            },
            {
                path: 'warranty/registration',
                name: 'Registration',
                component: resolve => require(['@/components/pages/registration'], resolve),
                meta: {
                    title: i18n.t('router.registration')
                }
            },
            {
                path: 'warranty/procedure',
                name: 'Procedure',
                component: resolve => require(['@/components/pages/procedure'], resolve),
                meta: {
                    title: i18n.t('router.procedure')
                }
            },
            {
                path: 'warranty/claim',
                name: 'Claim',
                component: resolve => require(['@/components/pages/claim'], resolve),
                meta: {
                    title: i18n.t('router.claim')
                }
            },
            {
                path: 'warranty/claim/form',
                name: 'ClaimForm',
                component: resolve => require(['@/components/pages/claimForm'], resolve),
                meta: {
                    title: i18n.t('router.form')
                }
            },
            {
                path: 'warranty/extension',
                name: 'Extension',
                component: resolve => require(['@/components/pages/extension'], resolve),
                meta: {
                    title: i18n.t('router.extension')
                }
            },
            {
                path: 'warranty/extension/sigleItem',
                name: 'SigleItem',
                component: resolve => require(['@/components/pages/sigleItem'], resolve),
                meta: {
                    title: i18n.t('router.sigleItem')
                }
            },
            {
                path: '/warranty/extension/multipleItems',
                name: 'MultipleItems',
                component: resolve => require(['@/components/pages/multipleItems'], resolve),
                meta: {
                    title: i18n.t('router.multipleItems')
                }
            }

        ]
    }]
});


router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

export default router;
