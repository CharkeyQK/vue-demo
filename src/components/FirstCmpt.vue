<template>
  <div id="firstcmpt">
    <h1>This is title.</h1>
    <!-- Declarative-Rendering 响应的数据绑定 -->
    <!-- {{variable}} or {{v-bind:attribute}} -->
    <!-- v-bind 称为指令，指令带有前缀 v-，以指示他们是 Vue.js 提供的特殊特性 -->
    <a v-bind:title="a_title">Written by {{author}}</a>
    <div>
      <label for="inputMe">Input something, then I will show you something.</label>
      <br/>
      <!-- v-model two-way binding 双向绑定 -->
      <input id="inputMe" v-model="show" v-bind:placeholder="input_tips">
      <p v-if="show">Haha, now you see me!</p>
    </div>
  </div>
</template>

<script>
  //  ES6 的语法目的是为了给 View 中暴露需要使用的函数
  export default {
    data() {
      return {
        author: "Charkey",
        a_title: "This is a title.",
        show:"",
        input_tips: "Input something here"
      }
    }
  }

</script>

<style>

</style>
