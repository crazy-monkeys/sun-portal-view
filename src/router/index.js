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
                    title: 'Sungrow Power - Home'
                }
            },
            {
                path: 'warranty/registration',
                name: 'Registration',
                component: resolve => require(['@/components/pages/registration'], resolve),
                meta: {
                    title: 'Sungrow Power - Warranty Registration'
                }
            },
            {
                path: 'warranty/procedure',
                name: 'Procedure',
                component: resolve => require(['@/components/pages/procedure'], resolve),
                meta: {
                    title: 'Sungrow Power - Online Warranty Claim'
                }
            },
            {
                path: 'warranty/claim',
                name: 'Claim',
                component: resolve => require(['@/components/pages/claim'], resolve),
                meta: {
                    title: 'Sungrow Power - Online Warranty Claim'
                }
            },
            {
                path: 'warranty/claim/form',
                name: 'ClaimForm',
                component: resolve => require(['@/components/pages/claimForm'], resolve),
                meta: {
                    title: 'Sungrow Power - Online Warranty Claim'
                }
            },
            {
                path: 'warranty/extension',
                name: 'Extension',
                component: resolve => require(['@/components/pages/extension'], resolve),
                meta: {
                    title: 'Sungrow Power - Warranty Extension'
                }
            },
            {
                path: 'warranty/extension/sigleItem',
                name: 'SigleItem',
                component: resolve => require(['@/components/pages/sigleItem'], resolve),
                meta: {
                    title: 'Sungrow Power - Warranty Extension'
                }
            },
            {
                path: '/warranty/extension/multipleItems',
                name: 'MultipleItems',
                component: resolve => require(['@/components/pages/multipleItems'], resolve),
                meta: {
                    title: 'Sungrow Power - Warranty Extension'
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
