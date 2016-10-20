<template>
  <div id="echartsBarDemo" style="width: 500px;height: 300px;"></div>
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
    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
