<template>
  <div>
    <!-- <h1 class="h">Roles For You</h1> -->
    <div class="container">
      <div class="box">
        <el-row>
          <el-col :span="24">
            <el-card :body-style="{ padding: '0px' }" class="imgs">
              <img style="width: 100%" src="../../assets/huo1.png" />
              <div style="padding: 14px">
                <span>宇智波斑</span>
                <div class="bottom clearfix">
                  <h1 class="h1">「あ、ねえ...楽しいし、計画の一部だ.. たたかう.. 平和をもたらす。」 </h1>
                  <el-button type="text" class="button" @click="dialogFormVisible = true">買う</el-button>
                  <!--添加表单-->
                  <el-dialog title="购买表单"  :inline="true" :visible.sync="dialogFormVisible" width="30%" >
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"  class="demo-ruleForm" >
                      <el-form-item label="账号ID" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                      </el-form-item>
                      <el-form-item label="游戏大区" prop="region">
                        <el-select v-model="ruleForm.region"  placeholder="请选择游戏大区" >
                          <el-option label="安卓QQ" value="shousha" ></el-option>
                          <el-option label="IOSQQ" value="shizhounian"></el-option>
                          <el-option label="安卓VX" value="shousha" ></el-option>
                          <el-option label="IOSVX" value="shizhounian"></el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="发货时间" required>
                        <el-col :span="11">
                          <el-form-item prop="date1">
                            <el-date-picker
                              type="date"
                              placeholder="发货日期"
                              v-model="ruleForm.date1"
                              style="width: 100%"
                            ></el-date-picker>
                          </el-form-item>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                          <el-form-item prop="date2">
                            <el-time-picker  placeholder="发货时间" v-model="ruleForm.date2" style="width: 100%" ></el-time-picker>
                          </el-form-item>
                        </el-col>
                      </el-form-item>
                      <el-form-item label="立即发货" prop="delivery">
                        <el-switch v-model="ruleForm.delivery"></el-switch>
                      </el-form-item>
                      <el-form-item label="选择角色" prop="type">
                        <el-checkbox-group v-model="ruleForm.type">
                          <el-checkbox label="宇智波斑-900$" name="type"></el-checkbox>
                          <el-checkbox label="宇智波带土-500$" name="type" ></el-checkbox>
                          <el-checkbox label="佐助-500$" name="type"></el-checkbox>
                          <el-checkbox label="鸣人-800$" name="type"></el-checkbox>
                         
                        </el-checkbox-group>
                      </el-form-item>
                      <el-form-item label="发货通知" prop="resource">
                        <el-radio-group v-model="ruleForm.resource">
                          <el-radio label="接收短信通知"></el-radio>
                          <el-radio label="接收邮箱通知"></el-radio>
                        </el-radio-group>
                      </el-form-item>
                      <el-form-item label="订单备注" >
                        <el-input
                          type="textarea"
                          v-model="ruleForm.desc"
                        ></el-input>
                      </el-form-item>
                      <el-form-item>
                        <el-button style="margin-right: 100px;" type="primary" @click="submitForm('ruleForm')">下单</el-button >
                        <el-button @click="resetForm('ruleForm')" >取消</el-button>
                      </el-form-item>
                    </el-form>
                  </el-dialog>
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
              <img style="width: 100%" src="../../assets/huo9.png" />
              <div style="padding: 14px">
                <span>宇智波带土</span>
                <div class="bottom clearfix">
                  <h1 class="h1">「現実が残酷であればあるほど、心の空虚さは大きくなります。」 </h1>
                  <el-button type="text" class="button" @click="dialogFormVisible = true">買う</el-button>
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
              <img style="width: 100%" src="../../assets/huo11.png" />
              <div style="padding: 14px">
                <span>佐助</span>
                <div class="bottom clearfix">
                  <h1 class="h1">「それから、梦なんて言叶で终わらす気はないが、野望はある。」 </h1>
                  <el-button type="text" class="button" @click="dialogFormVisible = true">買う</el-button>
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
              <img style="width: 100%" src="../../assets/huo8.png" />
              <div style="padding: 14px">
                <span>鸣人</span>
                <div class="bottom clearfix">
                  <h1 class="h1">「や！おはよう~诸君~今日はちょっと人生という道に迷てなあ~」 </h1>
                  <el-button type="text" class="button" @click="dialogFormVisible = true">買う</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
    <div>
<h2 class="h2">キャラクターパワー一覧</h2>
</div>
    <div>
      <el-progress
      
        :text-inside="true"
        :stroke-width="26"
        :percentage="70"
      ></el-progress>
      <el-progress
        :text-inside="true"
        :stroke-width="24"
        :percentage="95"
        status="success"
      ></el-progress>
      <el-progress
        :text-inside="true"
        :stroke-width="22"
        :percentage="80"
        status="warning"
      ></el-progress>
      <el-progress
        :text-inside="true"
        :stroke-width="20"
        :percentage="50"
        status="exception"
      ></el-progress>
    </div>
    <div style="margin-top: 50px; " class="button">
    <el-button type="primary"  @click="table = true">查看角色列表</el-button>
<el-button type="primary"  @click="dialog = true">购买游戏角色</el-button>
</div>
<div style=" font-size:30px; font-family:'Times New Roman', Times, serif">
<el-drawer title="火影忍者游戏角色列表" :visible.sync="table" direction="rtl" size="50%">
   <el-table :data="gridData">
      <el-table-column property="name" label="姓名" width="300"></el-table-column>
      <el-table-column property="date" label="战力" width="200"></el-table-column>
      <el-table-column property="address" label="级别" width="400"></el-table-column>
    </el-table>
</el-drawer></div>
<div style=" font-size:20px; font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif">
<el-drawer
  title="火影忍者游戏角色购买表单"
  :before-close="handleClose"
  :visible.sync="dialog"
  direction="ltr"
  custom-class="demo-drawer"
  ref="drawer"
  >
  <div class="demo-drawer__content">
    <el-form :model="form">
      <el-form-item label="账号ID" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="购买角色" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="请选择购买角色">
          <el-option label="宇智波斑" value="ban"></el-option>
          <el-option label="宇智波带土" value="daitu"></el-option>
          <el-option label="宇智波佐助" value="zuozhu"></el-option>
          <el-option label="漩涡鸣人" value="minren"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div >
      <el-button @click="cancelForm">取 消</el-button>
      <el-button type="primary" plain  @click="handleClick" :loading="loading"> {{ loading ? '提交中 ...' : '确 定' }}</el-button >
    </div>
  </div>
</el-drawer></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false, //新增弹框
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入账号ID", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 1 到 12 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择游戏大区", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择发货日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择发货时间",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个角色",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择通知方式", trigger: "change" },
        ],
        
      },
      currentDate: new Date().toLocaleDateString(),

      table: false,
      dialog: false,
      loading: false,
      gridData: [{
        date: '9999',
        name: '宇智波斑',
        address: '影'
      }, {
        date: '8000',
        name: '宇智波带土',
        address: '上忍'
      }, {
        date: '8000',
        name: '宇智波佐助',
        address: '上忍'
      }, {
        date: '9000',
        name: '漩涡鸣人',
        address: '影'
      }],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '80px',
      timer: null,
      currentDate: new Date().toLocaleDateString(),
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("购买成功!");
        } else {
          console.log("购买失败!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleClick() {
        alert('购买成功！');
      },
    handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm('是否提交表单？')
        .then(_ => {
          this.loading = true;
          this.timer = setTimeout(() => {
            done();
            // 动画关闭需要一定的时间
            setTimeout(() => {
              this.loading = false;
            }, 400);
          }, 2000);
        })
        .catch(_ => {});
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    }
  },
};
</script>

<style scoped>
.h1{
  text-align: left;
  font-size: 15px;
}
.h2{
  text-align: center;
}

.container {
  display: flex;
  /*flex-wrap: wrap;  允许换行，确保在小屏幕上也能良好展示 */
  justify-content: space-between;
}

.box {
  flex: 1 1 calc(25% - 10px); /* 每个盒子占据父容器的25%宽度，减去间距 */
  margin: 5px; /* 在元素之间添加水平和垂直间距 */
  max-width: calc(25% - 10px); /* 确保每个盒子最多占据父容器的25%宽度 */
  text-align: center;
}

.imgs img {
  width: 100%;
  height: 210px;
  object-fit: cover; /* 图片等比例缩放并填充整个盒子 */
}

.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.time {
  font-size: 1px;
}

.button {
  font-size: 14px;
  color: #409eff;
  cursor: pointer;
}
</style>

