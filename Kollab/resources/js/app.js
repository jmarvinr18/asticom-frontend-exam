import Vue from 'vue'
// import Vuetify from '../plugins/vuetify'
import router from './router';
import Mainlayout from './components/layouts/MainLayout.vue';
import VueRouter from 'vue-router';
require('./bootstrap');

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// import DataTables and DataTablesServer separately
import { DataTables, DataTablesServer } from 'vue-data-tables'
Vue.use(DataTables)
Vue.use(DataTablesServer)

// import DataTables and DataTablesServer together
import VueDataTables from 'vue-data-tables'
Vue.use(VueDataTables)

// set language to EN
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

locale.use(lang)

Vue.use(VueRouter)
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    components: {
        Mainlayout
    },
    router
});
