<template>
  <div id="index">
    这是首页组件
    <div v-if="name">从about页面传过来的值{{name}}</div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data(){
    return{
      name:undefined
    }
  },
  mounted(){
    console.log('home组件mount')
    this.name = this.$route.query.name
  },
  watch:{
    $route(to,from){
      console.log('watch back')
      this.$router.go(0)//组件重新加载
      //虽然底层的代码是后退，但是后退里面添加了初始化代码，保证数据重新加载
      //防止访问旧数据
    }
  }
}
</script>

<style scoped>
#index{
  width:300px;
  height: 200px;
  background: yellow;
}
</style>
