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
}).$mount('#app')
