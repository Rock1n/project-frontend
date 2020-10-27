import Vue from 'vue'
//无后缀名 是从mode_modules中读取的module
import App from './App.vue'
//有后缀名.vue 是从项目下读取 模版
import router from "./router/index";

Vue.config.productionTip = true
//阻止生产消息（控制台中输出）
//false为产品模式
//true为开发模式

console.log('程序启动')

new Vue({
  router,
  render: h => h(App),//用App.vue来渲染（render）index.html的'#app'
  //pre-compile the templates into render functions
  //加载预编译模板App.vue 并且存入到render函数中进行渲染createElementnpm
  watch:{
    $route(to,from){
      console.log('路由发生了变化')
    }//通过router切换组件时没有触发onhashchange()事件   **第29行代码
    // 所以充分说明，vuejs底层，不管mode是history模式还是hash模式，其实都是history.pushState,replaceState这两个底层
  }
}).$mount('#app')

//vuemodel.$router即可在控制台输出router

window.addEventListener('hashchange',event=>{
  console.log('路由发生了变化 hashchange')
  console.log(event.oldURL)
  console.log(event.newURL)
})//控制台没有输出'路由发生了变化 hashchange'，
// 所以说明，hash模式，压根就不是通过onhashchange来监听地址的变化，也会存在数据更新问题