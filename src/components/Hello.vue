<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button :plain="true" @click.native="sayHello">Say Hello</el-button>
    <el-button :plain="true" @click.native="sayHello2">Say Hello2</el-button>
    <todo-item></todo-item>
    <ol>
      <!-- Now we can pass the _todo into each repeated component using v-bind: -->
      <todo-item-v2 v-for="todo in todos" v-bind:data="todo"></todo-item-v2>
    </ol>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello Vue!',
      todos: [
        {text: 'First thing'},
        {text: 'Second thing'},
        {text: 'Second thing'}
      ]
    }
  },
  methods: {
    // method_name: function(){}
    sayHello: function() {
      this.$message('Hello, and this will disappear in 3 seconds.');
    },
    // method_name(){}
    sayHello2() {
      this.$message('Hello, and this will disappear in 3 seconds.');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
