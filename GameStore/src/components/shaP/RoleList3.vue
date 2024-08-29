<template>
  <div>
    <h1 class="h">狗卡圈钱的工具</h1>
    <div class="container">
      <div class="box">
        <el-row>
          <el-col :span="24">
            <el-card :body-style="{ padding: '0px' }" class="imgs">
              <img style="width: 100%" src="../../assets/sgs1.png" />
              <div style="padding: 14px">
                <span>神赵云</span>
                <div class="bottom clearfix">
                  <h1 class="h1">7000将魂</h1>
                  <el-button type="text" class="button" @click="dialogFormVisible = true">购买</el-button>
                  <!--添加表单-->
                  <el-dialog title="购买表单"  :inline="true" :visible.sync="dialogFormVisible" width="30%" >
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"  class="demo-ruleForm" >
                      <el-form-item label="账号ID" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                      </el-form-item>
                      <el-form-item label="游戏大区" prop="region">
                        <el-select v-model="ruleForm.region"  placeholder="请选择游戏大区" >
                          <el-option label="三国杀手杀大区" value="shousha" ></el-option>
                          <el-option label="三国杀十周年大区" value="shizhounian"></el-option>
                          <el-option label="三国杀online大区" value="online"></el-option>
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
                      <el-form-item label="选择武将" prop="type">
                        <el-checkbox-group v-model="ruleForm.type">
                          <el-checkbox label="神赵云" name="type"></el-checkbox>
                          <el-checkbox label="神吕布" name="type" ></el-checkbox>
                          <el-checkbox label="神诸葛亮" name="type"></el-checkbox>
                          <el-checkbox label="神司马懿" name="type"></el-checkbox>
                          <el-checkbox label="神刘备" name="type"></el-checkbox>
                          <el-checkbox label="神陆逊" name="type"></el-checkbox>
                          <el-checkbox label="徐盛" name="type"></el-checkbox>
                          <el-checkbox label="左慈" name="type"></el-checkbox>
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
              <img style="width: 100%" src="../../assets/sgs12.png" />
              <div style="padding: 14px">
                <span>神吕布</span>
                <div class="bottom clearfix">
                  <h1 class="h1">9000将魂</h1>
                  <el-button type="text" class="button"  @click="dialogFormVisible = true">购买</el-button>
                  
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
              <img style="width: 100%" src="../../assets/sgs3.png" />
              <div style="padding: 14px">
                <span>神诸葛亮</span>
                <div class="bottom clearfix">
                  <h1 class="h1">限时出售</h1>
                  <el-button type="text" class="button"  @click="dialogFormVisible = true">购买</el-button>
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
              <img style="width: 100%" src="../../assets/sgs4.png" />
              <div style="padding: 14px">
                <span>神司马懿</span>
                <div class="bottom clearfix">
                  <h1 class="h1">80宝珠</h1>
                  <el-button type="text" class="button"  @click="dialogFormVisible = true">购买</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="container">
      <div class="box">
        <el-row>
          <el-col :span="24">
            <el-card :body-style="{ padding: '0px' }" class="imgs">
              <img style="width: 100%" src="../../assets/sgs5.png" />
              <div style="padding: 14px">
                <span>神刘备</span>
                <div class="bottom clearfix">
                  <h1 class="h1">5000将魂</h1>
                  <el-button type="text" class="button"  @click="dialogFormVisible = true">购买</el-button>
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
              <img style="width: 100%" src="../../assets/sgs6.png" />
              <div style="padding: 14px">
                <span>神陆逊</span>
                <div class="bottom clearfix">
                  <h1 class="h1">15555将魂</h1>
                  <el-button type="text" class="button"  @click="dialogFormVisible = true">购买</el-button>
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
              <img style="width: 100%" src="../../assets/sgs9.png" />
              <div style="padding: 14px">
                <span>徐盛</span>
                <div class="bottom clearfix">
                  <h1 class="h1">50宝珠</h1>
                  <el-button type="text" class="button"  @click="dialogFormVisible = true">购买</el-button>
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
              <img style="width: 100%" src="../../assets/sgs8.png" />
              <div style="padding: 14px">
                <span>左慈</span>
                <div class="bottom clearfix">
                  <h1 class="h1">15宝珠</h1>
                  <el-button type="text" class="button"  @click="dialogFormVisible = true">购买</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
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
            message: "请至少选择一个武将",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择通知方式", trigger: "change" },
        ],
        
      },
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
  },
};
</script>

<style scoped>
.h1 {
  font-size: 13px;
}

.h {
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
