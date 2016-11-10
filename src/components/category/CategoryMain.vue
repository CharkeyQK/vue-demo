<template>
  <div>
    <AddCategory></AddCategory>
    <ListCategory></ListCategory>
  </div>
</template>
<script>

  import AddCategory from './components/AddCategory.vue'
  import ListCategory from './components/ListCategory.vue'

  import store from './store/category-store-index';

  export default {
    components: {
      AddCategory,
      ListCategory
    },
    store,
    data() {
      return {}
    },
    methods: {
      addChildCategory: function (upProdId) {
        console.info(upProdId);
      },
      addCategory: function () {
      }
    },
    computed: {},
    mounted: function () {
    },
    beforeCreate: function () {
    },
  }
</script>

<style>
  .div-out {
    border: 1px solid #e6e6e6;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
    margin: 2em;
    border-radius: 2px;
  }

  .div-title {
    height: 3em;
    background-color: #f5f5f5;
    padding: 1em;
  }

  .block-left {
    text-align: right;
    padding: 0.5em 1em 0.5em 0.5em;
  }

  .block-right {
    padding: 0.5em;
  }
</style>
