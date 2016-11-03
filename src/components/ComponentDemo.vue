<template>
  <div style="text-align: left;">
    <ListOrderDemo v-bind:data="orderData"></ListOrderDemo>
    <EChartsDemo></EChartsDemo>
  </div>
</template>
<script>
  import ListOrderDemo from '../components/ListOrderDemo'
  import EChartsDemo from '../components/EChartsDemo'

  export default {
    components: {
      ListOrderDemo,EChartsDemo
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
