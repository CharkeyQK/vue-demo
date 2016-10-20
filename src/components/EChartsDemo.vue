<template>
  <div>
    <div id="echartsBarDemo" style="width: 500px;height: 300px;"></div>
    <div id="echartsLineDemo" style="width: 500px;height: 300px;"></div>
  </div>
</template>

<script>
  import echarts from 'echarts'

  export default {
    mounted: function () {
      // 基于准备好的dom，初始化echarts实例
      var myBarChart = echarts.init(document.getElementById('echartsBarDemo'));
      var barOption = {
        title: {text: 'ECharts 入门示例'},
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      };
      // 绘制图表
      myBarChart.setOption(barOption);

      var myLineChart = echarts.init(document.getElementById('echartsLineDemo'));
      var lineOption = {
        title: {
          text: '动态数据 + 时间坐标轴'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            animation: false
          }
        },
        xAxis: {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          name: "月份"
        },
        yAxis: [
          {
            type: 'value',
            splitArea: { show: true },
            name:"数值"
          }
        ],
        series: [{
          name: '模拟数据',
          type: 'line',
          showSymbol: false,
          hoverAnimation: false,
          data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        }]
      };
      myLineChart.setOption(lineOption);
    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
