<template>
  <div id="app">
    <!-- Only one component inside template, or you will get error: template syntax error Component template should contain exactly one root element -->
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
    <div>
      <el-row>
        <el-col :span="8"><div class="grid-content bg-purple"><i class="el-icon-edit"></i></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"><i class="el-icon-share"></i></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"><i class="el-icon-delete"></i></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple"><el-button type="primary" icon="search">搜索</el-button></div></el-col>
      </el-row>
    </div>
    <ul>
      <li><router-link to="/first">First Page</router-link></li>
      <li><router-link to="/second">Second Page</router-link></li>
      <li><router-link to="/third">Third Page</router-link></li>
    </ul>
    <router-view class="view"></router-view>
    <div style="text-align: left;">
      <ListOrderDemo v-bind:data="orderData"></ListOrderDemo>
      <EChartsDemo></EChartsDemo>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'
import FirstCmpt from './components/FirstCmpt'
import SecondCmpt from './components/SecondCmpt'
import ListOrderDemo from './components/ListOrderDemo'
import EChartsDemo from './components/EChartsDemo'

export default {
  components: {
    Hello, FirstCmpt, SecondCmpt,ListOrderDemo,EChartsDemo
  },
  data() {
    return {
      orderData: {
        "ordRepo": "EBOSS通用仓库",
        "ordStatus": "待发货",
        "orderItems": [
          {
            "baoZhang": "icon111",
            "count": "111",
            "itemImg": "http://10.19.18.18:6465/6d0a07c3709142719b7644e4a5c48fcc.jpg",
            "itemName": "情意中秋~华美中秋豪华月饼礼盒111",
            "price": "123.00"
          },
          {
            "baoZhang": "icon222",
            "count": "222",
            "itemImg": "http://10.19.18.18:6465/6d0a07c3709142719b7644e4a5c48fcc.jpg",
            "itemName": "情意中秋~华美中秋豪华月饼礼盒222",
            "price": "456.00"
          },
          {
            "baoZhang": "icon333",
            "count": "333",
            "itemImg": "http://10.19.18.18:6465/6d0a07c3709142719b7644e4a5c48fcc.jpg",
            "itemName": "情意中秋~华美中秋豪华月饼礼盒333",
            "price": "789.00"
          }
        ],
        "receiver": "Charkey",
        "total": "299.00"
      }
    };
  },
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
