<template>
    <div id="mainDiv">
        <label v-text="msg" class="link-span"></label>
        <attrValueDropdown ref="attrValueDropdownRef" initShowLabel="设置链接到的页面地址" :attrSpec="attrSpec"
                           style="display: inline-block;"
                           :onDropdownChange="onDropdownChange"></attrValueDropdown>
    </div>
</template>
<script>
    import attrValueDropdown from "./attrValueDropdown.vue";
    import Vue from 'vue'
    export default {
        props: {
            attrSpec: {type: Object, required: true},
            onSelectChange: Function
        },
        components: {
            attrValueDropdown
        },
        data() {
            return {
                msg: ""
            }
        },
        methods: {
            onDropdownChange: function (attrSpecValueId, attrSpecValue) {
                this.onSelectChange(attrSpecValueId, attrSpecValue);
            },
            setShowLabel: function (label){
                this.$refs.attrValueDropdownRef.setShowLabel(label);
            }
        },
        created: function () {
        }
    }
</script>
<style scoped lang="css">
  .link-span {
    background-color: #468847;
    color: white;
  }
</style>
