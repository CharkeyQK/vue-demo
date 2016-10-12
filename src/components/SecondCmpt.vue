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
    }
  }
</script>

<style>

</style>
