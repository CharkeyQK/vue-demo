<template>
    <div>
        <!-- first row: order status tabs -->
        <el-card class="overview-card">
            <el-row>
                <el-col :span="16">
                    <el-tabs @tab-click="handleClick">
                        <el-tab-pane label="全部订单" name="AllOrders"></el-tab-pane>
                        <el-tab-pane label="待审核" name="PendingOrders"></el-tab-pane>
                        <el-tab-pane label="待发货" name="NotShippedOrders"></el-tab-pane>
                        <el-tab-pane label="有售后订单" name="AfterSalesOrders"></el-tab-pane>
                        <el-tab-pane label="预售" name="PreSaleOrders"></el-tab-pane>
                    </el-tabs>
                </el-col>
                <el-col :span="6">
                    <el-input placeholder="请输入内容" style="margin-top: 1em;" size="small">
                        <el-button slot="prepend" icon="search"></el-button>
                    </el-input>
                </el-col>
                <el-col :span="2">
                    <div style="margin-top: 1.1em; margin-left: 1em">
                        <el-dropdown trigger="click">
                      <span class="el-dropdown-link">
                        高级<i class="el-icon-arrow-down"></i>
                      </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>
                                    <span @click="handleItemClick('cd')"><i class="el-icon-menu"></i>按订单号查询</span>
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <span @click="handleItemClick('ef')"><i class="el-icon-menu"></i>按时间范围查询</span>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </el-col>
            </el-row>
            <!-- second row: overview data -->
            <el-row style="margin-bottom: 1em; color: #7995B6; font-size: 14px;">
                <!-- computed property: depend on el-tabs tabName -->
                <el-col id="colTmp" :span="24">{{overviewCnt}}</el-col>
            </el-row>
            <!-- third row: order header -->
            <el-row class="orders-list-header">
                <el-col :span="3">
                    <el-select v-model="dateRange" style="color: purple;">
                        <el-option v-for="rangeOption in dateRangeOptions"
                                   :label="rangeOption.label"
                                   :value="rangeOption.value">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="10">
                    <div style="line-height: 2.2em;">订单详情</div>
                </el-col>
                <el-col :span="2">
                    <div style="line-height: 2.2em;">收货人</div>
                </el-col>
                <el-col :span="2">
                    <div style="line-height: 2.2em;">金额</div>
                </el-col>
                <el-col :span="2">
                    <el-select v-model="orderStatus">
                        <el-option v-for="statusOption in orderStatusOptions"
                                   :label="statusOption.label"
                                   :value="statusOption.value">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="3">
                    <div style="line-height: 2.2em;">仓库</div>
                </el-col>
                <el-col :span="2">
                    <div style="line-height: 2.2em;">操作</div>
                </el-col>
            </el-row>
            <!-- fourth row: order short info -->
            <el-row class="order-lists" type="flex" align="middle">
                <el-col :span="5">
                    <div style="padding-left: 1.1em;">订单号：100070719823</div>
                </el-col>
                <el-col :span="13">
                    <div>下单时间：2016-10-19 12:34:56</div>
                </el-col>
                <el-col :span="6">
                    <div style="float: right; padding-right: 1.1em;"><i class="el-icon-message"></i> 查看留言</div>
                </el-col>
            </el-row>
            <!-- fifth row: order item list -->
            <el-row class="order-items" type="flex">
                <el-col :span="13">
                    <el-row class="orderInfoClass" type="flex" align="middle">
                        <el-col :span="4">
                            <div class="order-image">
                                <img
                                        src="http://10.19.18.18:6465/6d0a07c3709142719b7644e4a5c48fcc.jpg"
                                        style="width: 5em;height: 5em; vertical-align: middle;">
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div>情意中秋~华美中秋豪华月饼礼盒</div>
                        </el-col>
                        <el-col :span="3">
                            <div>￥299</div>
                        </el-col>
                        <el-col :span="2">
                            <div>X1</div>
                        </el-col>
                        <el-col :span="3">
                            <div>ICON</div>
                        </el-col>
                    </el-row>
                    <el-row class="orderInfoClass" type="flex" align="middle">
                        <el-col :span="4">
                            <div class="order-image">
                                <img
                                        src="http://10.19.18.18:6465/6d0a07c3709142719b7644e4a5c48fcc.jpg"
                                        style="width: 5em;height: 5em; vertical-align: middle;">
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div>情意中秋~华美中秋豪华月饼礼盒</div>
                        </el-col>
                        <el-col :span="3">
                            <div>￥299</div>
                        </el-col>
                        <el-col :span="2">
                            <div>X1</div>
                        </el-col>
                        <el-col :span="3">
                            <div>ICON</div>
                        </el-col>
                    </el-row>
                    <el-row class="orderInfoClass" type="flex" align="middle">
                        <el-col :span="4">
                            <div class="order-image">
                                <img
                                        src="http://10.19.18.18:6465/6d0a07c3709142719b7644e4a5c48fcc.jpg"
                                        style="width: 5em;height: 5em; vertical-align: middle;">
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div>情意中秋~华美中秋豪华月饼礼盒</div>
                        </el-col>
                        <el-col :span="3">
                            <div>￥299</div>
                        </el-col>
                        <el-col :span="2">
                            <div>X1</div>
                        </el-col>
                        <el-col :span="3">
                            <div>ICON</div>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="2" class="order-contact-receiver">
                    <div>
                        <div style="padding-top: 1.5em;">Charkey<i class="el-icon-share"></i></div>
                        <div><i class="el-icon-share"></i></div>
                    </div>
                </el-col>
                <el-col :span="2" class="order-total-price">
                    <div>
                        <div style="border-bottom: 1px solid #EDF1F6; width: 75%; margin-left: 0.7em;padding-top: 1.3em;">
                            ￥299.00
                        </div>
                        <div style="font-size: 0.8em;">查看物流</div>
                    </div>
                </el-col>
                <el-col :span="2" class="order-status">
                    <div>
                        <div style="padding-top: 1.3em;">待发货</div>
                        <div style="font-size: 0.8em;">详情</div>
                    </div>
                </el-col>
                <el-col :span="3" class="order-repo">
                    <el-row type="flex" style="justify-content: center;">
                        <el-col :span="24">
                            <div>EBOSS通用仓库</div>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="2" class="order-action">
                    <div class="order-extra-info">
                        <el-button type="primary" size="small">发货</el-button>
                    </div>
                </el-col>
            </el-row>
        </el-card>
        <!-- duplicate demo data put below -->

        <!-- duplicate demo data put above -->

        <el-card class="overview-card">
            <el-row>
                <el-col :span="3">
                    <div class="overview-block">
                        <div class="overview-block-label">Views</div>
                        <div class="overview-block-value">1,299</div>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class="overview-block" style="background-color: #169DF1;">
                        <div class="overview-block-label" style="color: #fff;">Requests</div>
                        <div class="overview-block-value" style="color: #fff;">653</div>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class="overview-block">
                        <div class="overview-block-label">Orders</div>
                        <div class="overview-block-value">491</div>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class="overview-block" style="background-color: #00E398;">
                        <div class="overview-block-label" style="color: #fff;">Trade</div>
                        <div class="overview-block-value" style="color: #fff;">￥19,232</div>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class="overview-block">
                        <div class="overview-block-label">Service</div>
                        <div class="overview-block-value">66</div>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class="overview-block">
                        <div class="overview-block-label">Devices</div>
                        <div class="overview-block-value">123</div>
                    </div>
                </el-col>
            </el-row>
        </el-card>
        <el-card class="overview-card">
            <el-row class="my-order-overview">
                <el-col :span="24">
                    <el-row>
                        <el-col :span="12">
                            <div class="my-order-overview-header">My Orders</div>
                        </el-col>
                        <el-col :span="12" class="my-order-overview-header"
                                style="justify-content: flex-end; padding-right: 2em;">
                            <a>Total Orders</a>
                        </el-col>
                    </el-row>
                    <el-row class="overview-row">
                        <el-col :span="6" class="overview-col">
                            <div>
                                <img src="http://10.19.18.18:6465/6d0a07c3709142719b7644e4a5c48fcc.jpg"
                                     class="overview-image"/>
                            </div>
                        </el-col>
                        <el-col :span="4" class="overview-col">
                            <div>Aliyun</div>
                        </el-col>
                        <el-col :span="5" class="overview-col">
                            <div>
                                <div style="text-align: center;">￥182.21</div>
                                <div>cash-on-delivery</div>
                            </div>
                        </el-col>
                        <el-col :span="5" class="overview-col">
                            <div>
                                2016-10-19 12:34:56
                            </div>
                        </el-col>
                        <el-col :span="4" class="overview-col">
                            <div>View</div>
                        </el-col>
                    </el-row>
                    <el-row class="overview-row">
                        <el-col :span="6" class="overview-col">
                            <div>
                                <img src="http://10.19.18.18:6465/6d0a07c3709142719b7644e4a5c48fcc.jpg"
                                     class="overview-image"/>
                            </div>
                        </el-col>
                        <el-col :span="4" class="overview-col">
                            <div>Aliyun</div>
                        </el-col>
                        <el-col :span="5" class="overview-col">
                            <div>
                                <div style="text-align: center;">￥182.21</div>
                                <div>cash-on-delivery</div>
                            </div>
                        </el-col>
                        <el-col :span="5" class="overview-col">
                            <div>
                                2016-10-19 12:34:56
                            </div>
                        </el-col>
                        <el-col :span="4" class="overview-col">
                            <div>View</div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </el-card>

    </div>
</template>

<style>
    .overview-card {
        margin-top: 1em;
        margin-left: 1em;
    }

    .overview-block {
        width: 50%;
        background-color: #fff;
        border: 1px solid #ECEAE8;
        border-radius: 0.3em;
        text-align: center;
    }

    .overview-block-label {
        color: #98948F;
        padding-top: 0.5em;
    }

    .overview-block-value {
        padding-bottom: 0.5em;
    }

    .my-order-overview {
        border: 1px solid #ddd;
        border-radius: 0.3em;
        display: flex;
        padding-bottom: 1.5em;
        background-color: #fff;
    }

    .my-order-overview-header {
        display: flex;
        height: 3em;
        align-items: center;
        padding-top: 1em;
        padding-left: 2em;
    }

    .overview-row {
        padding-top: 1em;
        padding-bottom: 1em;
    }

    .overview-col {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 8em;
    }

    .overview-image {
        width: 8em;
        height: 8em;
    }

    .orders-list-header {
        background-color: #F8F9FA;
        text-align: center;
        margin-bottom: 1em;
    }

    .order-lists {
        background-color: #F7FAFF;
        height: 3em;
        color: #587596;
    }

    .order-items {
        margin-bottom: 1em;
    }

    .order-contact-receiver {
        text-align: center;
        padding-top: 0.1em;
        border-bottom: 1px solid #EDF1F6;
        border-left: 1px solid #EDF1F6;
    }

    .order-total-price {
        text-align: center;
        border-bottom: 1px solid #EDF1F6;
        border-left: 1px solid #EDF1F6;
    }

    .order-status {
        text-align: center;
        border-bottom: 1px solid #EDF1F6;
        border-left: 1px solid #EDF1F6;
    }

    .order-repo {
        border-left: 1px solid #EDF1F6;
        border-bottom: 1px solid #EDF1F6;
        display: flex;
        justify-content: center;
        padding-top: 2em;
    }

    .order-action {
        line-height: 5em;
        text-align: center;
        border-left: 1px solid #EDF1F6;
        border-bottom: 1px solid #EDF1F6;
    }

    .order-image {
        text-align: center;
    }

    .orderInfoClass {
        height: 5em;
        border-bottom: 1px solid #EDF1F6;
        color: #526986;
        font-size: 0.9em;
    }
</style>

<script>
    export default {
        data() {
            return {
                activeName: '2',
                dateRangeOptions: [{
                    value: 'LastMonth',
                    label: '近一个月的订单'
                }, {
                    value: 'LastThreeMonth',
                    label: '近三个月的订单'
                }, {
                    value: 'PastHalfYear',
                    label: '近六个月的订单'
                }],
                orderStatusOptions: [{
                    value: 'AllStatus',
                    label: '全部状态'
                }, {
                    value: 'NotShipped',
                    label: '未发货'
                }, {
                    value: 'Shipped',
                    label: '已发货'
                }],
                dateRange: 'LastMonth',
                orderStatus: 'AllStatus',
                // default tabName
                tabName: 'AllOrders',
                orderInfoClass: {
                    height: '5em',
                    borderBottom: '1px solid #EDF1F6',
                    color: '#526986',
                    fontSize: '0.9em'
                }
            };
        },
        computed: {
            overviewCnt: function () {
                if (this.tabName === 'AllOrders') {
                    return "所有订单[汇总信息]：总数：134条，商品总价：12元，优惠总额：0元，实际支付：12元，快递总费用：0元";
                } else if (this.tabName === 'PendingOrders') {
                    return "待审核订单[汇总信息]：总数：134条，商品总价：12元，优惠总额：0元，实际支付：12元，快递总费用：0元";
                } else if (this.tabName === 'NotShippedOrders') {
                    return "待发货订单[汇总信息]：总数：134条，商品总价：12元，优惠总额：0元，实际支付：12元，快递总费用：0元";
                } else if (this.tabName === 'AfterSalesOrders') {
                    return "有售后订单[汇总信息]：总数：134条，商品总价：12元，优惠总额：0元，实际支付：12元，快递总费用：0元";
                } else if (this.tabName === 'PreSaleOrders') {
                    return "预售订单[汇总信息]：总数：134条，商品总价：12元，优惠总额：0元，实际支付：12元，快递总费用：0元";
                }
            }
        },
        methods: {
            handleClick: function (name) {
                this.tabName = name;
            },
            handleItemClick: function (event) {
                alert(event);
            }
        }
    }
</script>