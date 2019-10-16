// 引入vue
import Vue from 'vue'
//引入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import app from './app.vue'
import login from './components/login.vue'


var router=new VueRouter({
    routes:[
    {path: '/',component:app},
    {path: '/login/:tag',component:login},
    ],


});
export default router;