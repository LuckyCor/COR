<template>
  <div class="">
    <div>
      <el-row :gutter="20">
        <el-col :span="14">
          <el-card shadow="hover" style="width: 100%">
            <div style="width: 100%; display: inline-block">
              <el-statistic
                :value="deadline2"
                time-indices
                title="🎉成为原神高手🎉"
              >
                <template slot="suffix"> 原神即将自启 </template>
              </el-statistic>
            </div>
          </el-card>
          <el-card shadow="hover" style="width: 100%; margin-top: 20px">
            <div style="width: 100%; display: inline-block">
              <el-statistic
                @finish="hilarity"
                :value="deadline3"
                time-indices
                title="什么作用也没有的倒计时"
              >
                <template slot="suffix">
                  <el-button type="primary " size="mini" @click="add()"
                    >add 10s</el-button
                  >
                </template>
              </el-statistic>
            </div>
          </el-card>
          <el-card shadow="hover" style="width: 100%; margin-top: 20px">
            <div style="width: 100%; display: inline-block">
              <el-statistic
                format="DD天HH小时mm分钟"
                :value="deadline5"
                time-indices
                title="🚩距离过年还有："
              >
              </el-statistic>
            </div>
          </el-card>
          
        </el-col>
        <el-col :span="10">
          <el-card shadow="hover" style="width: 100%">
            <div slot="header" class="clearfix">
              <span>原神台词</span>
              <el-button
                style="float: right; padding: 3px 0"
                type="text"
                @click="clickFn"
                >时间暂停</el-button>
            </div>
            <!-- <div style="font-size: 18px; text-align: center; margin-top: 20px">
              “想要留住雪花，但在手心里它只会融化得更快。” –––九条裟罗
            </div>
            <div style="font-size: 18px; text-align: center">
              “深山踏红叶，耳畔闻鹿鸣，我很喜欢枫叶，可惜枫叶红时总多离别。”–––枫原万叶
            </div> -->
            <div style="font-size: 18px; text-align: center">
              “阴阳有序，命运无常，生老病死，天地万象，尽在吾辈。” ––胡桃
            </div>
            <div style="font-size: 18px; text-align: center">
              “复白亘古事，诗人起歌喉，众神居尘世，人间几春秋。” ––温迪
            </div>
            <div style="font-size: 18px; text-align: center">
              “浮世景色百千年依旧，人之在世却如白露与泡影虚无。” –––雷电将军
            </div>
            <div style="font-size: 18px; text-align: center">
              “欲买桂花同载酒，只可惜故人，何日再见呢？” ––钟离
            </div>
            
            <div style="margin-top: 20px"></div>
            <el-statistic
              ref="statistic"
              @finish="hilarity"
              format="HH:mm:ss"
              :value="deadline4"
              title="距离明日："
              time-indices
            >
            </el-statistic>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="list">
      <div style="margin: 95px;">
      <el-radio-group v-model="labelPosition" size="small" >
  <el-radio-button label="left" style="bottom: 15px;">左对齐</el-radio-button>
  <el-radio-button label="right" style="bottom: 15px;">右对齐</el-radio-button>
</el-radio-group>

<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
  <el-form-item label="姓名：">
    <el-input v-model="formLabelAlign.name"></el-input>
  </el-form-item>
  <el-form-item label="年龄：">
    <el-input v-model="formLabelAlign.region"></el-input>
  </el-form-item>
  <el-form-item label="原石数：">
    <el-input v-model="formLabelAlign.type"></el-input>
  </el-form-item>
  <el-button type="primary">提交</el-button>
  <el-button>取消</el-button>
</el-form>
    </div>
  </div>
    <div class="start">
      <div class="player-container">
    <video-player class="vjs-custom-skin" :options="playerOptions"></video-player>
    </div>

    </div>
  </div>
</template>

<script>
//引入video样式
import 'video.js/dist/video-js.css'
 import 'vue-video-player/src/custom-theme.css'

export default {
  data() {
    return {
      deadline2: Date.now() + 1000 * 60 * 60 * 8,
      deadline3: Date.now() + 1000 * 60 * 30,
      deadline4: Date.now() + (new Date().setHours(23, 59, 59) - Date.now()),
      deadline5: new Date("2024-12-31"),
      stop: true,

      labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: '',
        },
      playerOptions: {
          playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
          autoplay: false, //如果true,浏览器准备好时开始回放。
          controls: true, //控制条
          preload: 'auto', //视频预加载
          muted: false, //默认情况下将会消除任何音频。
          loop: false, //导致视频一结束就重新开始。
          language: 'zh-CN',
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
            type: 'video/mp4',
            src: require('../../assets/mv/yuanshenstart.mp4')//你所放置的视频的地址，最好是放在服务器上
          }],
          poster: require('../../assets/qidong.png'), //你的封面地址（覆盖在视频上面的图片）
          width: document.documentElement.clientWidth,
          notSupportedMessage: '此视频暂无法播放，请稍后再试' //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        },

    };

  },
  methods: {
    hilarity() {
      this.$notify({
        title: "提示",
        message: "原神已自启",
        duration: 0,
      });
    },
    clickFn() {
      this.$refs.statistic.suspend(this.stop);
      this.stop = !this.stop;
    },
    add() {
      this.deadline3 = this.deadline3 + 1000 * 10;
    },
  },
};
</script>
<style scoped>
.start{
  width: 100px;
  height: 100%;
  text-align: center;
  float:right;
  width: 100%;
  object-fit: cover; /* 图片等比例缩放并填充整个盒子 */
  flex: 1 1 calc(50% - 10px); /* 每个盒子占据父容器的50%宽度，减去间距 */
  margin-bottom: 10px;
  margin: 5px; /* 在元素之间添加水平和垂直间距 */
  max-width: calc(50% - 10px); /* 确保每个盒子最多占据父容器的50%宽度 */
  float: right; 
  padding: 3px 0
}
.list{
  width: 100%;
  height: 100%;
  text-align: center;
  float:left;
  /* position: fixed;
  bottom: 0px; */
  width: 100%;
  object-fit: cover; /* 图片等比例缩放并填充整个盒子 */
  flex: 1 1 calc(50% - 10px); /* 每个盒子占据父容器的50%宽度，减去间距 */
  margin-right: 20px;
  margin: 5px; /* 在元素之间添加水平和垂直间距 */
  max-width: calc(50% - 10px); /* 确保每个盒子最多占据父容器的50%宽度 */

}

</style>
