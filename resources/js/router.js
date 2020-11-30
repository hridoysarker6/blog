import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import firstPage from './component/pages/myFirstVuePage'
import secondPage from './component/pages/secondPage'
import hooks from './component/pages/basic/hooks'
import methoods from './component/pages/basic/methoods'
// project pages
import home from './component/pages/home'
import tags from './component/pages/tags'

const routes = [

    // project route

    {
        path : '/',
        component : home,
    },
    {
        path : '/tags',
        component : tags,
    },










    // basic route
    {
        path : '/my-new-vue-route',
        component : firstPage,
    },
    {
        path : '/second-route',
        component : secondPage,
    },
    // vue hooks
    {
        path : '/hooks',
        component : hooks,
    },
    // vue hooks
    {
        path : '/methoods',
        component : methoods,
    },
]

export default new Router(
    {
    mode : 'history',
    routes
}
)
