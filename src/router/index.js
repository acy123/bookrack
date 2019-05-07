import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            // props:true, props属性为true时会把params所有的key当前props传递给视图组件
            redirect: '/bookcity'
        }, {
            path: '/bookcity',
            name: 'bookcity',
            component: () =>
                import ('@/views/bookcity.vue')
        }, {
            path: '/bookshelf',
            name: 'bookshelf',
            component: () =>
                import ('@/views/bookshelf.vue')
        },
        {
            path: '/search',
            name: 'search',
            component: () =>
                import ('@/views/search.vue')
        },
        {
            path: '/use',
            name: 'use',
            component: () =>
                import ('@/views/use.vue')
        },
        {
            path: '/ready',
            name: 'ready',
            beforeEnter(to, from, next) {
                if (localStorage.getItem('user')) {
                    next()
                } else {
                    next('/')
                }
            },
            component: () =>
                import ('@/views/ready.vue')
        },
        {
            path: '/details/:bookid',
            name: 'details',
            props: true,
            component: () =>
                import ('@/views/details.vue')
        }
    ]
})