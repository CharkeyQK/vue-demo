<template>
  <div>
    <div class="div-out" style="background-color: #fff;" v-show="isShowAddCategory">
      <el-row class="div-title">添加</el-row>
      <el-row>
        <el-col class="block-left" :span="4">产品编码</el-col>
        <el-col class="block-right" :span="4">
          <el-input v-model="product.code"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="block-left" :span="4">产品名称</el-col>
        <el-col class="block-right" :span="4">
          <el-input v-model="product.name"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="block-left" :span="4">产品分类</el-col>
        <el-col class="block-right" :span="4">
          <el-input v-model="product.type"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="block-left" :span="4">所属上级产品</el-col>
        <el-col class="block-right" :span="4">
          <el-input v-model="product.uoProdId"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="block-left" :span="4">品牌</el-col>
        <el-col class="block-right" :span="4">
          <el-input v-model="product.brandId"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="block-left" :span="4">型号</el-col>
        <el-col class="block-right" :span="4">
          <el-input v-model="product.modelTypeId"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="block-left" :span="4">标准物流模版</el-col>
        <el-col class="block-right" :span="4">
          <el-input v-model="product.logisticId"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="block-right" :span="20" :offset="4">
          <el-button type="success" @click.native="createCategory">保存</el-button>
          <el-button>取消</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>

  import {mapGetters, mapActions} from 'vuex'

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
      createCategory: function () {
      }
    },
    computed: mapGetters({
      isShowAddCategory: 'getIsShowAddCategory',
      isShowAddCategory2: 'allOfferings',
      isShowAddCategory3: 'qryFilters'
    }),
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
