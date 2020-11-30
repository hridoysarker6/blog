
require('./bootstrap');

window.Vue = require('vue')
Vue.component('mainapp',require('./component/mainapp.vue').default)
import router from './router.js'

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

const app = new Vue({
    el : '#app',
    router
})

