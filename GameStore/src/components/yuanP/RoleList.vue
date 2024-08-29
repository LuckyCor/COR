<template>
  <div>
    <h1 class="h">米哈游的Roles</h1>
    <div class="container">
      <div class="box">
        <el-row>
          <el-col :span="24">
            <el-card :body-style="{ padding: '0px' }" class="imgs">
              <img style="width: 100%;" src="../../assets/role2.png">
              <div style="padding: 14px;">
                <span>艾尔海森</span>
                <div class="bottom clearfix">
                  <h1 class="h1">0017原石</h1>
                  <el-button type="text" class="button" @click="dialogFormVisible = true">原神启动</el-button>
                   <!--添加表单-->
                   <el-dialog title="原神启动日志"  :inline="true" :visible.sync="dialogFormVisible" width="30%" >
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"  class="demo-ruleForm" >
                      <el-form-item label="原P姓名" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                      </el-form-item>
                      <el-form-item label="自我定位" prop="region">
                        <el-select v-model="ruleForm.region"  placeholder="原P自我定位" >
                          <el-option label="我是原P" value="shousha" ></el-option>
                          <el-option label="不玩原神" value="shizhounian"></el-option>
                       
                        </el-select>
                      </el-form-item>
                      <el-form-item label="启动时间" required>
                        <el-col :span="11">
                          <el-form-item prop="date1">
                            <el-date-picker
                              type="date"
                              placeholder="启动日期"
                              v-model="ruleForm.date1"
                              style="width: 100%"
                            ></el-date-picker>
                          </el-form-item>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                          <el-form-item prop="date2">
                            <el-time-picker  placeholder="启动时间" v-model="ruleForm.date2" style="width: 100%" ></el-time-picker>
                          </el-form-item>
                        </el-col>
                      </el-form-item>
                      <el-form-item label="立即启动" prop="delivery">
                        <el-switch v-model="ruleForm.delivery"></el-switch>
                      </el-form-item>
                      <el-form-item label="启动人物" prop="type">
                        <el-checkbox-group v-model="ruleForm.type">
                          <el-checkbox label="艾尔海森" name="type"></el-checkbox>
                          <el-checkbox label="甘雨" name="type" ></el-checkbox>
                          <el-checkbox label="流浪者" name="type"></el-checkbox>
                          <el-checkbox label="申鹤" name="type"></el-checkbox>
                          <el-checkbox label="那维莱特" name="type"></el-checkbox>
                          <el-checkbox label="凝光" name="type"></el-checkbox>
                          <el-checkbox label="烟绯" name="type"></el-checkbox>
                          <el-checkbox label="莱欧斯利慈" name="type"></el-checkbox>
                        </el-checkbox-group>
                      </el-form-item>
                      <el-form-item label="启动方式" prop="resource">
                        <el-radio-group v-model="ruleForm.resource">
                          <el-radio label="直接启动"></el-radio>
                          <el-radio label="喊出：“原神~启动！”"></el-radio>
                        </el-radio-group>
                      </el-form-item>
                      <el-form-item label="启动备注" >
                        <el-input
                          type="textarea"
                          v-model="ruleForm.desc"
                        ></el-input>
                      </el-form-item>
                      <el-form-item>
                        <el-button style="margin-right: 100px;" type="primary" @click="submitForm('ruleForm')">启动</el-button >
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
              <img style="width: 100%;" src="../../assets/role4.png">
              <div style="padding: 14px;">
                <span>甘雨</span>
                <div class="bottom clearfix">
                  <h1 class="h1">0029原石</h1>
                  <el-button type="text" class="button" @click="dialogFormVisible = true">怨肾弃动</el-button>
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
              <img style="width: 100%;" src="../../assets/role57.png">
              <div style="padding: 14px;">
                <span>流浪者</span>
                <div class="bottom clearfix">
                  <h1 class="h1">0091原石</h1>
                  <el-button type="text" class="button" @click="dialogFormVisible = true">猿神启洞</el-button>
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
              <img style="width: 100%;" src="../../assets/role53.png">
              <div style="padding: 14px;">
                <span>申鹤</span>
                <div class="bottom clearfix">
                  <h1 class="h1">0186原石</h1>
                  <el-button type="text" class="button" @click="dialogFormVisible = true">冤伸岂懂</el-button>
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
              <img style="width: 100%;" src="../../assets/role18.png">
              <div style="padding: 14px;">
                <span>那维莱特</span>
                <div class="bottom clearfix">
                  <h1 class="h1">0419原石</h1>
                  <el-button type="text" class="button" @click="dialogFormVisible = true">冤身启冻</el-button>
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
              <img style="width: 100%;" src="../../assets/role56.png">
              <div style="padding: 14px;">
                <span>凝光</span>
                <div class="bottom clearfix">
                  <h1 class="h1">0698原石</h1>
                  <el-button type="text" class="button" @click="dialogFormVisible = true">冤声七栋</el-button>
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
              <img style="width: 100%;" src="../../assets/role24.png">
              <div style="padding: 14px;">
                <span>烟绯</span>
                <div class="bottom clearfix">
                  <h1 class="h1">0796原石</h1>
                  <el-button type="text" class="button" @click="dialogFormVisible = true">猿生气动</el-button>
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
              <img style="width: 100%;" src="../../assets/role61.png">
              <div style="padding: 14px;">
                <span>莱欧斯利</span>
                <div class="bottom clearfix">
                  <h1 class="h1">0989原石</h1>
                  <el-button type="text" class="button" @click="dialogFormVisible = true">渊深七洞</el-button>
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
          { required: true, message: "请输入原P姓名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 1 到 12 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "原P请自我定位", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择启动日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择启动时间",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个原p角色",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择启动方式", trigger: "change" },
        ],
        
      },
      currentDate: new Date().toLocaleDateString(),
     
    };
    
  },
  methods:{
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("启动成功!");
        } else {
          console.log("启动失败!!");
          return false;
        }
      });
    },
  }
}
</script>

<style scoped>
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

.h1 {
  font-size: 13px;
}

.button {
  font-size: 14px;
  color: #409eff;
  cursor: pointer;
}
</style>
