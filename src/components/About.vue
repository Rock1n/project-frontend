<script src="../../../project-frontend_BK/src/main.js"></script>
<template>
  <div id="about">
    这是关于组件
    <button v-on:click="xx">回到首页</button>
  </div>
</template>

<script>
export default {
name: "About",
methods:{
  xx(){
    console.log('跳转到主页')
    this.$router.push({
      path:'/',
      query:{
        name:'Sam'
      }
    })//this指代组件
  }
}
}
</script>

<style scoped>
#about{
  width: 300px;
  height: 200px;
  background: pink;
}
</style>
