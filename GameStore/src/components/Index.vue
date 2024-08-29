<template>
    <div class="login_wp">
    <div class="ms_login">
        <h3 style="text-align:center " >Minecraft</h3>
        <!-- 表单 -->
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" >
  <el-form-item  prop="name">
    <el-input v-model="ruleForm.name" placeholder="用户名" prefix-icon="el-icon-s-custom">
    </el-input>
    <!--v-model为双向绑定-->
  </el-form-item>
  <el-form-item  prop="pwd">
    <el-input v-model="ruleForm.pwd"  placeholder="密码" prefix-icon="el-icon-s-goods"></el-input>
  </el-form-item>
<div class="btn_index">
    <el-button type="primary"  @click="submitForm()">提交</el-button> <!--:loading="1"按钮响应-->
    
</div>
<div class="btn_unindex">
<el-button type="primary" @click="unindex()">取消</el-button>
</div>

</el-form>
</div>
</div>
</template>






<script>
export default {
    data() {
      return {
        ruleForm: {
          name: '',
          pwd:'',
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
       
          ],


          pwd: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            
          ],
          
        }
      };
    },
    methods: {
     submitForm(){
      this.$router.push("/")
     },
     unindex(){
      this.$router.push("/")
     },
    }
  }
</script>





<style scoped>
.login_wp{
    width:100%;
    height:100%;
    /* background: #42b983; */
    background-image: url("../assets/background.jpg");
    background-size:cover;
}
.ms_login{
    width:300px;
    height:300px;
    border: 1px solid white;
    position: absolute;
    left: 50%;
    top: 40%;
    margin: -150px 0 0 -190px;
    padding: 40px;
    background-color: white;
    border-radius: 10px;
    line-height: 30px;
}

.btn_index button{
    width: 100%;
    height: 36px;
    margin: 2px;
    text-align: center;
    
}
.btn_unindex button{
    width: 100%;
    height: 36px;
    margin: 2px;
    text-align: center;
    
}
</style>