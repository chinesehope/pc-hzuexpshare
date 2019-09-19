// 引入vue
import Vue from 'vue'


//引入jQuery
import $ from 'jquery';
// 引入bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

import axios from 'axios'
Vue.prototype.$ajax = axios
Vue.prototype.HOME = '/api'

import router from './router'
//引入组件
import app from './app.vue'

import qs from 'qs'
Vue.prototype.qs=qs



new Vue({
    el:'#app',
    data:{
        mesg:'nihaoaaaa',

    },
    methods:{},
    router,


})