<template>
  <el-form :model="form" :rules="rules" ref="form">
    <el-form-item prop="captcha">
      <slide-verify
        :l="42"
        :r="10"
        :w="310"
        :h="155"
        slider-text="请滑动滑块验证"
        @success="onSuccess"
        @fail="onFail"
        @refresh="onRefresh"
      ></slide-verify>
    </el-form-item>
    <el-button type="primary" @click="submitForm">提交</el-button>
  </el-form>
</template>

<script>
import SlideVerify from "vue-monoplasty-slide-verify";

export default {
  components: {
    SlideVerify,
  },
  data() {
    return {
      form: {
        captcha: "",
      },
      rules: {
        captcha: [{ required: true, message: "请输入验证码", trigger: "blur" }],
      },
    };
  },
  methods: {
    onSuccess() {
      this.form.captcha = "valid_code"; // 这里应该是后端返回的验证码
    },
    onFail() {
      this.$message.error("验证失败");
    },
    onRefresh() {
      // 刷新验证码
    },
    submitForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          // 验证码输入正确，提交表单
        }
      });
    },
  },
};
</script>
