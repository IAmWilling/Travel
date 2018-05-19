import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import City from '@/components/City/city'
import Detail from '@/components/Detail/detail'

Vue.use(Router)
    //利用异步组件加载的形式
export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: () =>
                import ('@/components/HelloWorld')
        },
        {
            path: "/city",
            name: 'city',
            component: () =>
                import ('@/components/City/city')
        }, {
            path: "/detail/:id", //表示动态路由
            name: 'Detail',
            component: () =>
                import ('@/components/Detail/detail')
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})