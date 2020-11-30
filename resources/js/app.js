
require('./bootstrap');

window.Vue = require('vue')
Vue.component('mainapp',require('./component/mainapp.vue').default)
import router from './router.js'
const app = new Vue({
    el : '#app',
    router
})

