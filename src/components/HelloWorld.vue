<template>
  <!--一个组件只可以有一个div 多个会报错-->
  <!--一个组件只操作一个div-->
  <div class="hello">
    <h1>{{ msg }}</h1>
    子组件HelloWorld
  </div>
</template>

<script>
//核心部分
export default {
  name: 'HelloWorld',
  props: {
    //props父组件向子组件传值，子组件无法传值到父组件，组件间是单向的
    //子组件传向父组件可以使用vuex $store
    msg: String
  }
  //data数据
  //watch监听全局变量
  //computed计算
  //method时间
  //action操作
  //router路由
  //store状态
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
