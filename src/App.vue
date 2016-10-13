<template>
  <div id="app">
    <!-- Only one component inside template, or you will get error: template syntax error Component template should contain exactly one root element -->
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
    <ul>
      <li><router-link to="/first">First Page</router-link></li>
      <li><router-link to="/second">Second Page</router-link></li>
      <li><router-link to="/third">Third Page</router-link></li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'
import FirstCmpt from './components/FirstCmpt'
import SecondCmpt from './components/SecondCmpt'

export default {
  components: {
    Hello, FirstCmpt, SecondCmpt
  }
}
</script>

<style>
html {
  /*height: 100%;*/
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
  max-width: 1366px;
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
