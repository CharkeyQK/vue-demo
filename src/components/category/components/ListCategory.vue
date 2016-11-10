<template>
  <div>
    <div>
      <el-row>
        <el-col :span="6">
          <el-button type="primary" size="mini" @click.native="addCategory(null)">添加类目</el-button>
        </el-col>
      </el-row>
    </div>
    <div v-for="firstLevelProduct in productData.value">
      <el-row style="border: 1px solid #ddd;">
        <el-col :span="4">{{firstLevelProduct.id}}</el-col>
        <el-col :span="5">{{firstLevelProduct.code}}</el-col>
        <el-col :span="5">{{firstLevelProduct.name}}</el-col>
        <el-col :span="5">{{firstLevelProduct.type}}</el-col>
        <el-col :span="5">
          <el-button type="primary" size="mini" @click.native="addCategory(firstLevelProduct.id)">添加子类目</el-button>
        </el-col>
      </el-row>
      <div v-for="secondLevelProduct in firstLevelProduct.products">
        <el-row style="border: 1px solid #ddd;">
          <el-col :span="4" :offset="1">{{secondLevelProduct.id}}</el-col>
          <el-col :span="5">{{secondLevelProduct.code}}</el-col>
          <el-col :span="5">{{secondLevelProduct.name}}</el-col>
          <el-col :span="4">{{secondLevelProduct.type}}</el-col>
          <el-col :span="5">
            <el-button type="primary" size="mini" @click.native="addCategory(secondLevelProduct.id)">添加子类目
            </el-button>
          </el-col>
        </el-row>
        <div v-for="thirdLevelProduct in secondLevelProduct.products">
          <el-row style="border: 1px solid #ddd;">
            <el-col :span="4" :offset="2">{{thirdLevelProduct.id}}</el-col>
            <el-col :span="5">{{thirdLevelProduct.code}}</el-col>
            <el-col :span="5">{{thirdLevelProduct.name}}</el-col>
            <el-col :span="3">{{thirdLevelProduct.type}}</el-col>
            <el-col :span="5">
              <el-button type="primary" size="mini" @click.native="addCategory(thirdLevelProduct.id)">添加子类目
              </el-button>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        productData: {
          "messageId": "msg10010101",
          "pageNum": 1,
          "pageSize": 100,
          "resultCode": 0,
          "value": [
            {
              "code": "RWSK",
              "id": 173,
              "name": "人文社科",
              "products": [],
              "status": "S01",
              "tenantId": 1001,
              "type": "RWS"
            },
            {
              "code": "DZSK",
              "id": 174,
              "name": "电子书刊",
              "products": [
                {
                  "code": "SZZZ",
                  "id": 178,
                  "name": "数字杂志",
                  "products": [],
                  "status": "S01",
                  "type": "SZZ",
                  "upProdId": 174
                }
              ],
              "status": "S01",
              "type": "DZS"
            },
            {
              "code": "SJPJ",
              "id": 175,
              "name": "手机配件",
              "products": [
                {
                  "code": "YDDY",
                  "id": 176,
                  "name": "移动电源",
                  "products": [],
                  "status": "S01",
                  "type": "YDD",
                  "upProdId": 175
                },
                {
                  "code": "LYEJ",
                  "id": 177,
                  "name": "蓝牙耳机",
                  "products": [
                    {
                      "code": "SZZZ",
                      "id": 179,
                      "name": "大王牌耳机",
                      "products": [],
                      "status": "S01",
                      "type": "SZZ",
                      "upProdId": 177
                    }
                  ],
                  "status": "S01",
                  "type": "LYE",
                  "upProdId": 175
                }
              ],
              "status": "S01",
              "type": "SJP"
            }
          ]
        }
      }
    },
    methods: {
      addCategory: function (upProdId) {
        console.info(upProdId);
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
