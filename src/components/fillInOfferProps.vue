<template>
    <div>
        <!-- 基本信息 -->
        <div class="div-out" style="background-color: #fff;">
            <el-row class="div-title">基本信息</el-row>
            <!-- 商品类目提示 -->
            <el-row>
                <el-col class="block-left" :span="4">所选类目</el-col>
                <el-col class="block-right" :span="20">
                    <el-row class="between-line">
                        <label>{{firstDirName}}/{{secondDirName}}</label>
                        <el-button class="button" type="primary" size="small" @click.native="modifyCatSelection">修改</el-button>
                    </el-row>
                    <el-row>
                        <label style="font-size: 0.5em;">商品上架后不可修改，请慎重选择</label>
                    </el-row>
                </el-col>
            </el-row>
            <!-- 商品类型 -->
            <el-row>
                <el-col class="block-left" :span="4">商品类型</el-col>
                <el-col class="block-right" :span="20">
                    <el-row class="between-line">
                        <el-col :span="8">
                            <el-input v-model="$store.state.offeringState.offeringData.offerType"></el-input>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <!-- 售卖方式 -->
            <el-row class="block-inline">
                <el-col class="block-left" :span="4">售卖方式</el-col>
                <el-col class="block-right" :span="20">
                    <el-row class="between-line">
                        <el-col :span="8">
                            <el-input v-model="$store.state.offeringState.offeringData.saleType"></el-input>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <!-- 商品名称 -->
            <el-row>
                <el-col class="block-left" :span="4">商品名称</el-col>
                <el-col class="block-right" :span="20">
                    <el-row class="between-line">
                        <el-col :span="8">
                            <el-input v-model="$store.state.offeringState.offeringData.offerName"></el-input>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <!-- 商品简介 -->
            <el-row>
                <el-col class="block-left" :span="4">商品简介</el-col>
                <el-col class="block-right" :span="20">
                    <el-row class="between-line">
                        <el-col :span="8">
                            <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}"
                                      v-model="$store.state.offeringState.offeringData.offerSummary"></el-input>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <!-- 商品描述 -->
            <el-row class="block-inline">
                <el-col class="block-left" :span="4">商品描述</el-col>
                <el-col class="block-right" :span="20">
                    <el-row class="between-line">
                        <el-col :span="8">
                            <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}"
                                      v-model="$store.state.offeringState.offeringData.offerDesc"></el-input>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <!-- 商品属性 -->
            <el-row class="block-inline">
                <el-row>
                    <el-col class="block-left" :span="4">商品属性(选填)</el-col>
                    <el-col class="block-right" :span="20">
                        <el-row class="gray-block">
                            <el-row class="between-line">
                                <el-col :span="8">
                                    <el-col class="block-left" :span="12">操作系统</el-col>
                                    <el-col :span="12">
                                        <el-select v-model="offeringInherentAttributes.value">
                                            <el-option
                                                    v-for="item in offeringInherentAttributes"
                                                    :label="item.label"
                                                    :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-col>
                                </el-col>
                                <el-col :span="8">
                                    <el-col class="block-left" :span="12">操作系统</el-col>
                                    <el-col :span="12">
                                        <el-select v-model="offeringInherentAttributes.value">
                                            <el-option
                                                    v-for="item in offeringInherentAttributes"
                                                    :label="item.label"
                                                    :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-col>
                                </el-col>
                                <el-col :span="8">
                                    <el-col class="block-left" :span="12">操作系统</el-col>
                                    <el-col :span="12">
                                        <el-select v-model="offeringInherentAttributes.value">
                                            <el-option
                                                    v-for="item in offeringInherentAttributes"
                                                    :label="item.label"
                                                    :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-col>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="8">
                                    <el-col class="block-left" :span="12">操作系统</el-col>
                                    <el-col :span="12">
                                        <el-select v-model="offeringInherentAttributes.value">
                                            <el-option
                                                    v-for="item in offeringInherentAttributes"
                                                    :label="item.label"
                                                    :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-col>
                                </el-col>
                                <el-col :span="8">
                                    <el-col class="block-left" :span="12">操作系统</el-col>
                                    <el-col :span="12">
                                        <el-select v-model="offeringInherentAttributes.value">
                                            <el-option
                                                    v-for="item in offeringInherentAttributes"
                                                    :label="item.label"
                                                    :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-col>
                                </el-col>
                                <el-col :span="8">
                                    <el-col class="block-left" :span="12">操作系统</el-col>
                                    <el-col :span="12">
                                        <template>
                                            <el-select v-model="offeringInherentAttributes.value">
                                                <el-option
                                                        v-for="item in offeringInherentAttributes"
                                                        :label="item.label"
                                                        :value="item.value">
                                                </el-option>
                                            </el-select>
                                        </template>
                                    </el-col>
                                </el-col>
                            </el-row>
                        </el-row>
                        <el-row style="font-size: 0.5em;">商品上架后不可修改，请慎重选择</el-row>
                    </el-col>
                </el-row>
            </el-row>
            <!-- 商品规格 -->
            <el-row class="block-inline">
                <el-row>
                    <el-col class="block-left" :span="4">商品规格</el-col>
                    <el-col class="block-right" :span="18">
                        <el-row class="gray-block">
                            <!-- sku -->
                            <IGSkuGroup :charSpecs="offering.offerSpecChars" ref="skuGroup"></IGSkuGroup>
                        </el-row>
                        <!-- 添加自定义属性 -->
                        <el-row>
                            <el-row>
                                <el-col :span="24">
                                    <div v-for="(offerSpecChar, specCharIndex) in offerSpecChars">
                                        <!-- 添加规格值 -->
                                        <el-row>
                                            <el-col :span="4">
                                                <el-select v-model="offerSpecChar.specName">
                                                    <el-option v-for="specData in specDatas"
                                                               :label="specData.specKey" :value="specData.specName">
                                                    </el-option>
                                                </el-select>
                                            </el-col>
                                            <el-col :span="6" style="text-align: center;">
                                                <el-button type="primary" @click.native="addSpecCharValues(specCharIndex)"
                                                           v-show='offerSpecChar.specName'>添加规格值</el-button>
                                            </el-col>
                                            <el-col :span="6" style="text-align: center;">
                                                <el-button type="warning" title="移除该规格"
                                                           @click.native="removeSpecChar(specCharIndex)">移除该规格</el-button>
                                            </el-col>
                                        </el-row>
                                        <!-- 展示已添加的规格值 -->
                                        <el-row>
                                            <el-col :span="24" style="margin-top: 0.5em;margin-bottom: 0.5em;">
                                                <el-tag style="margin-right: 0.5em;"
                                                        v-for="(specValue, specValueIndex) in offerSpecChar.specValues"
                                                        :closable="true"
                                                        type="primary"
                                                        :key="specValueIndex"
                                                        :close-transition="false"
                                                        @close="removeSpecCharValues(specCharIndex,specValueIndex)"
                                                >{{specValue}}</el-tag>
                                            </el-col>
                                        </el-row>
                                        <!-- 添加规格值的对话框 -->
                                        <el-dialog title="添加规格值" v-model="onSpecCharValues" size="tiny">
                                            <el-form>
                                                <el-form-item label="请输入规格值" label-width="30">
                                                    <el-input v-model="specValue" auto-complete="off"></el-input>
                                                </el-form-item>
                                            </el-form>
                                            <div slot="footer" class="dialog-footer">
                                                <el-button @click.native="cancelAddSpecCharValues">取 消</el-button>
                                                <el-button type="primary" @click.native="confirmAddSpecCharValues()">确 定</el-button>
                                            </div>
                                        </el-dialog>
                                    </div>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="4">
                                    <el-button type="primary" @click.native="addOfferSpecChar()" style="margin-right: 2em;">添加规格</el-button>
                                </el-col>
                            </el-row>
                        </el-row>
                    </el-col>
                </el-row>
            </el-row>
            <!-- 商品价值 -->
            <el-row>
                <el-col class="block-left" :span="4">商品价值</el-col>
                <el-col class="block-right" :span="20">
                    <el-row class="between-line">
                        <el-col :span="8">
                            <el-input v-model="$store.state.offeringState.offeringData.offerValue"></el-input>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <!-- 一口价 -->
            <el-row>
                <el-col class="block-left" :span="4">一口价</el-col>
                <el-col class="block-right" :span="20">
                    <el-row class="between-line">
                        <el-col :span="8">
                            <el-input v-model="$store.state.offeringState.offeringData.offerPrice"></el-input>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <!-- 是否全新 -->
            <el-row>
                <el-col class="block-left" :span="4">是否全新</el-col>
                <el-col class="block-right" :span="20">
                    <el-radio-group v-model="$store.state.offeringState.offeringData.isNew">
                        <el-radio :label="1">是</el-radio>
                        <el-radio :label="0">否</el-radio>
                    </el-radio-group>
                </el-col>
            </el-row>
        </div>
        <!-- 商品图片 -->
        <div class="div-out" style="background-color: #fff;">
            <el-row class="div-title">商品图片</el-row>
            <!-- 商品缩略图 -->
            <el-row class="block-inline">
                <el-col class="block-left" :span="4">商品缩略图</el-col>
                <el-col class="block-right" :span="20">
                    <el-row>
                        <el-col :span="11">
                            <el-upload
                                    action="http://localhost:9800/all/fileUpload/file?ownerId=111&groupId=111"
                                    :on-remove="handleProdImgRemove"
                                    :on-success="handleProdImgSuccess">
                                <el-button size="small" type="primary">点击上传</el-button>
                                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                            </el-upload>
                        </el-col>
                        <el-col :span="8">
                            <div v-show="$store.state.offeringState.offeringData.logoUrl">
                                <img class="prod-thumbnail" v-bind:src="$store.state.offeringState.offeringData.logoUrl">
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <el-row>
                <el-col class="block-left" :span="4">上传商品附件</el-col>
                <el-col class="block-right" :span="20">
                    <el-row>
                        <el-col :span="11">
                            <el-upload
                                    action="http://localhost:9800/all/fileUpload/file?ownerId=111&groupId=111"
                                    :on-remove="handleProdAttachRemove"
                                    :on-success="handleProdAttachSuccess"
                                    :multiple="true">
                                <el-button size="small" type="primary">点击上传</el-button>
                                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                            </el-upload>
                        </el-col>
                        <el-col :span="13">
                            <div>
                                <img class="prod-thumbnail" v-for="attach in offerAttachss" v-bind:src="attach.attachUrl">
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
        <!-- 其他信息 -->
        <div class="div-out" style="background-color: #fff;">
            <el-row class="div-title">其他信息</el-row>
            <!-- 库存总量 -->
            <el-row>
                <el-col class="block-left" :span="4">库存总量</el-col>
                <el-col class="block-right" :span="20">
                    <el-row class="between-line">
                        <el-col :span="8">
                            <el-input v-model="$store.state.offeringState.offeringData.storeCnt"></el-input>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <!-- 库存扣减方式 -->
            <el-row class="block-inline">
                <el-col class="block-left" :span="4">库存扣减方式</el-col>
                <el-col class="block-right" :span="20">
                    <el-radio-group v-model="$store.state.offeringState.offeringData.stockType">
                        <el-radio :label="1">下单减库存</el-radio>
                        <el-radio :label="2">支付减库存</el-radio>
                    </el-radio-group>
                </el-col>
            </el-row>
            <!-- 商家编码 -->
            <el-row>
                <el-col class="block-left" :span="4">商家编码</el-col>
                <el-col class="block-right" :span="20">
                    <el-row class="between-line">
                        <el-col :span="8">
                            <el-input v-model="$store.state.offeringState.offeringData.offerCode"></el-input>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <!-- 商品条码 -->
            <el-row class="block-inline">
                <el-col class="block-left" :span="4">商品条码</el-col>
                <el-col class="block-right" :span="20">
                    <el-row class="between-line">
                        <el-col :span="8">
                            <el-input v-model="$store.state.offeringState.offeringData.offerSkuCode"></el-input>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <!-- 物流模版 -->
            <el-row>
                <el-col class="block-left" :span="4">物流模版</el-col>
                <el-col class="block-right" :span="20">
                    <el-row class="between-line">
                        <el-col :span="8">
                            <el-input v-model="$store.state.offeringState.offeringData.logisticId"></el-input>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <!-- 售后类型 -->
            <el-row>
                <el-col class="block-left" :span="4">售后类型</el-col>
                <el-col class="block-right" :span="20">
                    <el-row class="between-line">
                        <el-col :span="8">
                            <el-input v-model="$store.state.offeringState.offeringData.supportType"></el-input>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import {mapGetters,mapActions} from 'vuex'
    import IGSkuGroup from "../common/skuGroup.vue"
    import indata from '../common/indata.js'
    import store from '../../store/offering-store-index';

    export default {
        components: {
            IGSkuGroup
        },
        store,
        data() {
            return {
                // boolean
                onSpecCharValues: false,
                // model-商品附件
                offerAttachss: [],
                // select
                offeringInherentAttributes: [{
                    value: '1',
                    label: '属性1'
                }],
                // checkbox
                afterSaleWarranty: ['七天无理由退换'],
                offerSpecChars:[],
                specDatas: [{"specKey":"请选择","specName":""},{"specKey":"颜色","specName":"颜色"},{"specKey":"尺寸","specName":"尺寸"},{"specKey":"重量","specName":"重量"},{"specKey":"样式","specName":"样式"},{"specKey":"尺码","specName":"尺码"},{"specKey":"规格","specName":"规格"},{"specKey":"大小","specName":"大小"},{"specKey":"货号","specName":"货号"},{"specKey":"种类","specName":"种类"}],
                // temp data
                specValue:'',
                specCharIndex: '',
                offering: indata.offering,
            }
        },
        computed: {
            ...mapGetters({
                    firstDirName: 'getFirstDirectoryName',
                    secondDirName: 'getSecondDirectoryName',
                    curActiveStep: 'getCreateOfferingActiveStep'

            })
        },
        methods: {
            ...mapActions([
                'setCreateOfferingActiveStep', 'setOfferingDataLogoUrl', 'setOfferingDataAttach'
            ]),
            modifyCatSelection: function () {
                this.setCreateOfferingActiveStep(this.curActiveStep - 1);
            },
            handleProdImgRemove(file, fileList) {
                // 删除图片的回调函数
                this.setOfferingDataLogoUrl('');
            },
            handleProdImgSuccess(file, fileList) {
                // 上传单张的处理
                fileList.splice(0, fileList.length);
                fileList.push(file);
                // 上传成功的回调函数
                if (file.response) {
                    this.setOfferingDataLogoUrl(file.response.value.fullName);
                }
            },
            handleProdAttachRemove(removedFile, fileList) {
                // 删除商品附件的回调函数
                var self = this;
                this.offerAttachss.forEach(function (atFile, atIndex) {
                    // 将已删除的文件在offerAttachss中删除
                    if (atFile.attachUrl == removedFile.response.value.fullName) {
                        self.offerAttachss.splice(atIndex, 1);
                    }
                });
                this.setOfferingDataAttach(this.offerAttachss);
            },
            handleProdAttachSuccess(file, fileList) {
                this.offerAttachss = [];
                // 上传商品附件成功的回调函数
                // 将 attachName 设置为上传文件的文件名，attachName 设置为上传后远程文件路径
                var self = this;
                fileList.forEach(function (upFile) {
                    if (upFile.response) {
                        self.offerAttachss.push({"attachName":upFile.name,"attachType":"IMG","attachUrl":upFile.response.value.fullName});
                    }
                });
                this.setOfferingDataAttach(this.offerAttachss);
            },
            addOfferSpecChar() {
                this.offerSpecChars.push({
                    specName:'',
                    specValues:[]
                })
            },
            addSpecCharValues(specCharIndex) {
                this.specCharIndex = specCharIndex;
                this.onSpecCharValues = true;
            },
            confirmAddSpecCharValues() {
                this.onSpecCharValues = false;
                // 若存在相同规格及值，提示错误
                if (this.offerSpecChars[this.specCharIndex].specValues.indexOf(this.specValue) != -1) {
                    this.$message.error('存在相同的规格值');
                    this.specValue = "";
                    return;
                }
                this.offerSpecChars[this.specCharIndex].specValues.push(this.specValue);
                this.specValue = "";
            },
            cancelAddSpecCharValues() {
                this.onSpecCharValues = false;
                this.specValue = "";
            },
            removeSpecChar(specCharIndex) {
                this.offerSpecChars.splice(specCharIndex, 1);
            },
            removeSpecCharValues(specCharIndex,specValueIndex) {
                this.offerSpecChars[specCharIndex].specValues.splice(specValueIndex, 1);
            }
        }
    }
</script>

<style>
    .div-out {
        border: 1px solid #e6e6e6;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
        margin: 1em;
        border-radius: 2px;
        background-color: #FFF;
    }
    .block-inline {
        border-bottom: 1px dashed #ededed;
        padding: 0.5em;
    }
    .block-left {
        text-align: right;
        padding: 0.5em 1em 0.5em 0.5em;
    }

    .block-right {
        padding: 0.5em 1em 0.5em 0.5em;
    }

    .prod-thumbnail {
        height: 4em;
        width: 4em;
        border-radius: 0.3em;
        border: 1px solid #000;
        margin-right: 0.2em;
    }

</style>