<template>
    <!-- UISliderImg -->
    <div class="shop-module-edit-main">
        <el-row class="slider-image-item" v-for="(moduleCharInst, index) in pageModule.pageModuleCharInsts">
            <el-col :span="6" class="slider-image-uploader">
              <el-input style="margin-bottom: 0.5em;"
                        v-model="inputData">
              </el-input>
            </el-col>
            <el-col :span="18">
                <el-row style="padding-top: 0.5em;">
                    <el-col :span="7" style="line-height: 2em;">链接类型：</el-col>
                    <el-col :span="17" style="line-height: 1.5em;padding-top:0.3em;">
                      <!-- TODO： 看下面的TODO，导致的问题如下 -->
                        <moduleLink ref="moduleLinkRef" :attrSpec="linkTypeAttrSpec" :onSelectChange="onSelectChange"></moduleLink>
                    </el-col>
                </el-row>
                <!-- 布局关系，popover 放在这里-->
                <el-popover
                        ref="popover5"
                        placement="top"
                        width="220"
                        v-model="customLinkVisible">
                    <div style="text-align: right; margin: 0">
                        <el-input placeholder="链接地址：http://example.com" style="margin-bottom: 0.5em;"
                                  v-model="moduleCharInst.pageModuleCharInsts[2].charValue">
                        </el-input>
                        <el-button size="mini" type="default" @click="onCustomLinkCancel">取消</el-button>
                        <el-button type="primary" size="mini" @click="onCustomLinkConfirm">确定</el-button>
                    </div>
                </el-popover>
            </el-col>
        </el-row>
        <el-row class="slider-image-action">
            <el-col :span="24">
                <i class="el-icon-plus" style="color: #58C2E9;"></i>
                <a @click="" class="slider-image-a">添加一张轮播图片</a>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import moduleLink from "./moduleLink.vue";

    import Vue from 'vue';

    export default {
        name: "lunbo",
        components: {
             moduleLink
        },
        data(){
            return {
                linkTargetForCustomLink: "",
                sliderImageTitle:"",
                linkType: '',
                customLinkVisible: false,
                linkTypeAttrSpec: {
                  "attrCode": "linkType",
                  "attrSpecValues": [
                    {
                      "attrSpec_id": 100020,
                      "displayValue": "会员中心",
                      "entitySpecId": 1001,
                      "value": "50",
                    },
                    {
                      "attrSpec_id": 100020,
                      "displayValue": "自定义链接",
                      "entitySpecId": 1001,
                      "value": "60",
                    }
                  ],
                },
              inputData:"",
              pageModule:{
                "class": "item_lb",
                "id": "",
                "moduleType": "UISliderImg",
                "name": "图片轮播",
                "pageModuleCharInsts": [
                  {
                    "charSpecId": 100000,
                    "charValue": 1,
                    "pageModuleCharInsts": [
                      {
                        "charSpecId": 100010,
                        "charValue": "",
                        "upCharInstId": 100000
                      },
                      {
                        "charSpecId": 100020,
                        "charValue": "",
                        "upCharInstId": 100000
                      },
                      {
                        "charSpecId": 100030,
                        "charValue": "",
                        "upCharInstId": 100000
                      },
                      {
                        "charSpecId": 100031,
                        "charValue": "",
                        "upCharInstId": 100000
                      }
                    ]
                  }
                ],
                "uuid": 3
              }
            }
        }, props: {

        },
        methods: {
            onSelectChange: function (attrSpecValueId, attrSpecValue) {
                if (attrSpecValue.value === "60") {
                    this.customLinkVisible = true;
                    // TODO: Uncaught TypeError: this.$refs.moduleLinkRef.setShowLabel is not a function(…)
                    this.$refs.moduleLinkRef.setShowLabel("修改");
                }
            },
            onCustomLinkConfirm: function () {
                this.customLinkVisible = false;
            },
            onCustomLinkCancel: function () {

            }
        }, mounted () {
        }, updated(){
        }, created: function () {

        }
    }
</script>
<style scoped lang="css">
    .slider-image-action {
        border: 1px solid #ddd;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
        padding: 0.5em;
    }
    .slider-image-a {
        cursor: pointer;
        font-size: 0.8em;
    }
    .slider-image-item {
        height: 5.4em;
        border: 1px solid #ddd;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
        padding: 0.5em 0.5em 0.5em 0;
    }
    .slider-image-uploader {
        text-align: center;
    }
</style>
