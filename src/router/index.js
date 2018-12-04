/*
路由器对象模块
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import ShopSort from '../pages/ShopSort/ShopSort.vue'
import Shiwu from '../pages/Shiwu/Shiwu.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'


//声明使用vuerouter
Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  routes:[
    {path:'/msite',component:MSite},
    {path:'/shopsort',component:ShopSort},
    {path:'/shiwu',component:Shiwu},
    {path:'/shopcart',component:ShopCart},
    {path:'/profile',component:Profile},
    {path:'/login',component:Login},
    {path:'/',redirect:'/msite'},
    ]
})
