<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
    <el-row :gutter="10">
      <el-col :span="8"><div class="grid-content bg-purple"><i class="el-icon-edit"></i></div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple"><i class="el-icon-share"></i></div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple"><i class="el-icon-delete"></i></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24"><div class="grid-content bg-purple"><el-button type="primary" icon="search">搜索</el-button></div></el-col>
    </el-row>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  components: {
    Hello
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
