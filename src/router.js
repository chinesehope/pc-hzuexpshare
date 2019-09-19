// 引入vue
import Vue from 'vue'
//引入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import page from './app.vue'
import login from '../components/login.vue'


var router=new VueRouter({
    routes:[
    {path: '/',component:page},
    {path: '/login/:tag',component:login},
    ],


});
export default router;