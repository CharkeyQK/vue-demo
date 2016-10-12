<template>
  <div id="secondcmpt">
    <h1>I am another page</h1>
    <a> written by {{ author }} </a>
    <p>Thanks for everyone.</p>
    <p>Show the data:</p>
    <ul>
      <li v-for="article in articles">
        {{ article.title }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        author: "微信公众号",
        articles: []
      }
    },
    mounted: function() {
      // 钩子函数, see also 官方文档关于 vue 生命周期的解析 http://vuejs.org/guide/instance.html#Lifecycle-Diagram
      this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
        headers: {

        },
        emulateJSON: true
      }).then(function(response) {
        // 这里是处理正确的回调

        this.articles = response.data.subjects
        // this.articles = response.data["subjects"] 也可以

      }, function(response) {
        // 这里是处理错误的回调
        console.log(response)
      });
    }
  }
</script>

<style>

</style>
