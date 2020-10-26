import VueRouter from 'vue-router'
import Vue from 'vue'
import Index from "../components/Index";
import About from "../components/About";

console.log('路由器')
//1.通过vue.use(插件)，安装插件
Vue.use(VueRouter)

//2.创建VueRouter对象
const routes=[
  {
    path : '/',
    name : 'index',
    component: Index
  },
  {
    path : '/about',
    name : 'about',
    component: About
  }
]

const router = new VueRouter({
  //配置路由和组件之间的应用关系
  routes
})

//3.将router对象传入到vue实例
export default router
