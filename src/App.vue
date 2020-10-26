<template>
  <div id="app">
    <!--这是最底层页面-->
    <Nav/>
    <router-view/>

    <!--
      路由自动在router-view中渲染组件
        <Index/>
        <About/>
    -->

    <img src="./assets/logo.png">
  </div>
</template>

<script>
import Nav from "./components/Nav";
//import Index from "./components/Index";
//import About from "./components/About";


//新建一个vue对象，有两种方式
//1。new Vue（）
//2。export Vue对象出来
export default {
  //el为 <div id="app">所以省略
  //data需要用函数方式来写
  //data:function(){   ==>es6书写方式为  data(){
  // return {
  //    name:'Sam'
  //  }
  // }
  name: 'App',
  components: {Nav
    //, Index, About
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
