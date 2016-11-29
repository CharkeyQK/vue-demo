<template>
    <div class="" v-if="attrSpec && attrSpec.attrSpecValues">
        <el-dropdown>
            <label style="color: #38f;cursor: pointer;">
                {{showLabel}}<i class="el-icon-caret-bottom el-icon--right"></i>
            </label>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="av in attrSpec.attrSpecValues" style="cursor: pointer">
                    <div @click="onChange(av.id)">{{av.displayValue}}</div>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>
<script>
    export default {
        props: {
            attrSpec: {type: Object, required: true},
            initShowLabel: {type: String, required: true},
            //initValue: {type: Number, required: false, default: -1},
            onDropdownChange: Function

        },
        data() {
            return {
                selectValue: null,
                selectValueBean: {},
                showLabel: ""
            }
        },
        methods: {
            onChange: function (value) {
                this.selectValue = value;
                this.selectValueBean = this.getAttrValueById(this.attrSpec.attrSpecValues, value);
                this.showLabel = this.selectValueBean.displayValue;
                this.onDropdownChange(this.selectValue, this.selectValueBean);
            },
            setShowLabel: function (label) {//修改展示文字
                this.showLabel = label;
            },
            getAttrValueById: function (attrValues, id) {
              if (attrValues == null || attrValues == undefined) {
                return null;
              }
              var rl = null;
              attrValues.forEach(function (attrValue) {
                if (attrValue.id == id) {
                  rl = attrValue;
                  return rl;
                }
              });
              return rl;
            }
        },
        created: function () {
            var self = this;
            self.showLabel = self.attrSpec.attrName;
            if (self.initShowLabel != undefined && self.initShowLabel != '') {//初始化展示文字
                self.showLabel = self.initShowLabel
            }
        }
    }
</script>
<style scoped lang="css">
</style>
