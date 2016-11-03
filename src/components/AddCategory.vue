<template>
    <div>
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple">111</div></el-col>
        <el-col :span="6" :offset="6"><div class="grid-content bg-purple">111</div></el-col>
      </el-row>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                product: {
                    code: '', name: '', type: '', uoProdId: '', brandId: '', modelTypeId: '', logisticId: ''
                }
            }
        },
        methods: {
            // 保存产品/商品类目
            createCategory: function() {

            }
        },
        computed: {},
        mounted: function () {
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
