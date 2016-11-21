<template>
  <div id="app">
    <CurrencyInput label="Price" v-model="price" :value="storePrice" ref="currencyInput"></CurrencyInput>
    <button @click="clickMe">cde</button>
  </div>
</template>

<script>
  import Vue from 'vue'
  import CurrencyInput from './CurrencyInput.vue'

  export default {
    data() {
      return {
        price: 189,
        storePrice: 289
      }
    },
    components: {
      CurrencyInput
    },
    methods: {
      clickMe: function () {
        this.$refs.currencyInput.storePrice = 990;
        this.$refs.currencyInput.formatValue();
      }
    }
  }
</script>

<style>

</style>
