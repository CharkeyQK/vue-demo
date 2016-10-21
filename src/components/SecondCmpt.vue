<template>
  <div id="secondcmpt">
    <h1>I am another page</h1>
    <a> written by {{ author }} </a>
    <p>Thanks for everyone.</p>
    <p>Show the data:</p>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h1 style="line-height: 36px; color: #20A0FF;">{{ title }}</h1>
      </div>
      <div v-for="article in articles" class="text item">
        {{ article.title }}
      </div>
    </el-card>
    <el-table :data="articles" stripe>
      <el-table-column property="title" label="标题" width="180"></el-table-column>
      <el-table-column property="original_title" label="原标题" width="180"></el-table-column>
      <el-table-column property="year" label="年份" width="80"></el-table-column>
      <el-table-column property="subtype" label="子类型"></el-table-column>
      <el-table-column inline-template label="电影海报" width="100"><img v-bind:src="row.images.small"></el-table-column>
      <el-table-column inline-template label="Casts" width="300">
        <el-tag v-for="(cast, index) in row.casts" :key="cast.id">
          {{index}}{{cast.name}}{{cast.id}}
        </el-tag>
      </el-table-column>
      <el-table-column inline-template label="电影评分" width="380">
        <div style="line-height: initial;">
          <el-rate v-model="row.rating.average" disabled show-text text-color="#ff9900"
                   v-bind:text-template="row.rating.average+''" v-bind:max="row.rating.max"></el-rate>
        </div>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        author: "微信公众号",
        title: "",
        articles: []
      }
    },
    methods: {
      imagesFormatter(row, column) {
        // row 为当前行，
        return '<img src="'+row.images.small+'" alt="images">';
      }
    },
    mounted: function() {
      // 钩子函数, see also 官方文档关于 vue 生命周期的解析 http://vuejs.org/guide/instance.html#Lifecycle-Diagram
      // 如果接口是跨域的 POST 请求，则需要在服务器端配置: Access-Control-Allow-Origin: *
      this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
        headers: {

        },
        emulateJSON: true
      }).then(function(response) {
        // 这里是处理正确的回调

        this.articles = response.data.subjects;
        this.articles.map(function (article) {
          article.rating.average = article.rating.average/2;
          article.rating.max = article.rating.max/2;
        });
        this.title = response.data.title;
//         this.articles = response.data["subjects"] 也可以

      }, function(response) {
        // 这里是处理错误的回调
        console.log(response)
      });
    }
  }
</script>

<style>

</style>
