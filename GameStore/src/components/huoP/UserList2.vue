<template>
  <div class="background">
    <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
    <div id="main" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';//导入echarts库
let chart = null;

export default {
    data() {
    },
    //vue的生命周期
    mounted(){
        this.findAll() ,
        window.addEventListener("beforeunload", this.clearmyChart);
        this.linePictures("linePicture");
},
    // beforeDestroy () { this.myChart.clear() },
    beforeDestroy() {
    if (!myChart) {
      return;
    }
    myChart.dispose();
    myChart = null;
    // 清空 beforeunload 事件处理函数
    window.removeEventListener("beforeunload", this.clearmyChart);
  },

    methods:{
        findAll(){
            // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main'));
// 指定图表的配置项和数据
var option = {
  title: {
    text: '火影胜率榜',
    subtext: 'TOP5',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 56, name: '千手柱间·秽土转生' },
        { value: 61, name: '宇智波斑' },
        { value: 52, name: '宇智波斑·木叶创立' },
        { value: 50, name: '我爱罗·新春版 ' },
        { value: 52, name: '我爱罗·忍界大战' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
        }
    }
}
</script>
<style >
.background{
    /* width:100%; */
    height:100%;
    /* background: #42b983; */
    background-image: url("../../assets/huo7.png");
    background-size:cover;
}
</style>