<template>
  <div>
    <div class="imgs">
      <el-carousel :interval="3000" type="card">
        <el-carousel-item v-for="item in imgArray" :key="item">
          <el-image style="width: 100%; height: 100%" :src="item"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="下层">
      <div class="background1">
        <div class="box1"></div>
      </div>

      <div>
        <div class="box2">
          <!-- <div class="box3">
          <img src="../assets/1.png">
          </div>
          <div class="box3">
          <img src="../assets/1.png">
          </div>
          <div class="box3">
          <img src="../assets/1.png">
          </div>
          <div class="box3">
          <img src="../assets/1.png">
          </div> -->
          <div class="container">
            <div class="box">
              <el-row>
                <el-col :span="24">
                  <el-card :body-style="{ padding: '0px' }" class="imgs">
                    <img style="width: 100%" src="../assets/yuanshenicon.png" />
                    <div style="padding: 14px">
                      <span>原神</span>
                      <div class="bottom clearfix">
                        <el-button
                          type="text"
                          class="button"
                          @click="getCaptcha1" icon="el-icon-download">下载原神</el-button>
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>

            <div class="box">
              <el-row>
                <el-col :span="24">
                  <el-card :body-style="{ padding: '0px' }" class="imgs">
                    <img
                      style="width: 100%"
                      src="../assets/wangzherongyaoicon.png"
                    />
                    <div style="padding: 14px">
                      <span>王者荣耀</span>
                      <div class="bottom clearfix">
                        <el-button
                          type="text"
                          class="button"
                          @click="getCaptcha2"
                          icon="el-icon-download">下载王者荣耀</el-button
                        >
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>

            <div class="box">
              <el-row>
                <el-col :span="24">
                  <el-card :body-style="{ padding: '0px' }" class="imgs">
                    <img style="width: 100%" src="../assets/huoyingicon.png" />
                    <div style="padding: 14px">
                      <span>火影忍者</span>
                      <div class="bottom clearfix">
                        <el-button
                          type="text"
                          class="button"
                          @click="getCaptcha3"
                          icon="el-icon-download">下载火影忍者</el-button
                        >
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>

            <div class="box">
              <el-row>
                <el-col :span="24">
                  <el-card :body-style="{ padding: '0px' }" class="imgs">
                    <img style="width: 100%" src="../assets/sgsicon.png" />
                    <div style="padding: 14px">
                      <span>三国杀</span>
                      <div class="bottom clearfix">
                        <el-button
                          type="text"
                          class="button"
                          @click="getCaptcha4"
                          icon="el-icon-download">下载三国杀</el-button
                        >
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      getCaptcha1() {
        location.href = "https://ys.mihoyo.com/";
      },
      getCaptcha2() {
        location.href = "https://pvp.qq.com/";
      },
      getCaptcha3() {
        location.href = "https://hyrz.qq.com/";
      },
      getCaptcha4() {
        location.href = "https://sanguosha.game.360.cn/download/";
      },
      imgArray: [
        require("../assets/background-1.jpg"),
        require("../assets/background-2.jpg"),
        require("../assets/background-3.jpg"),
        require("../assets/background-4.jpg"),
        require("../assets/background-5.jpg"),
        require("../assets/background-6.jpg"),
        require("../assets/background-7.jpg"),
        require("../assets/background-8.jpg"),
        require("../assets/background-9.jpg"),
        require("../assets/background-10.jpg"),
        require("../assets/background-11.jpg"),
        require("../assets/background-12.jpg"),
      ],
      value: new Date(),
    };
  },
};
</script>
<style scoped>
.imgs {
  /* margin-top:100px; */
  text-align: center;
}
/* .date{
  float: right;
} */
.box1 {
  /* width: 200px; */
  height: 350px;
}
.box2 {
  width: 50%;
  height: 350px;
  float: right;
}
.box3 {
  width: 50%;
  height: 50%;
  /* background-size:cover; */
  float: right;
}
.background1 {
  width: 50%;
  height: 100%;
  /* background: #42b983; */
  float: left;
  background-image: url("../assets/role11.png");
  background-size: cover;
}
.container {
  display: flex;
  /*flex-wrap: wrap;  允许换行，确保在小屏幕上也能良好展示 */
  justify-content: space-between;
  text-align: center;
}

.box {
  flex: 1 1 calc(25%); /* 每个盒子占据父容器的25%宽度，减去间距 */
  margin: 2px; /* 在元素之间添加水平和垂直间距 */
  max-width: calc(25%); /* 确保每个盒子最多占据父容器的25%宽度 */
  text-align: center;
}
.imgs img {
  width: 100%;
  object-fit: cover; /* 图片等比例缩放并填充整个盒子 */
  height: 148.4px;
}
</style>
