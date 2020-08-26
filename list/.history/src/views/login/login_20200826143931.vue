<template>
  <div class="logwrap">
    <el-form
      class="logform"
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-position="top"
      label-width="80px"
    >
      <h1 style="text-align:center;font-size:30px">登录页面</h1>
      <el-form-item label="用户名" prop="username">
        <el-input
          type="text"
          v-model="ruleForm.username"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          style="width:100%"
          @click="submitForm('ruleForm')"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
//引入validate中的正则 过滤函数
import { stripScript, validaEmail ,valPassword } from "@/utils/validate.js";
export default {
  name: "Login",
  data() {
    //验证用户名
    var validateUsername = (rule, value, callback) => {
         if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (validaEmail(value)) {
        callback(new Error("用户名格式不正确"));
      } else {
        callback();
      }
    };
    //验证密码
    var validatePassword = (rule, value, callback) => {
      //过滤密码
      this.ruleForm.passwordass = stripScript(value);
      value = this.ruleForm.password;
         if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!valPassword(value)) {
        callback(new Error("密码密码至少包含 数字和英文，长度6-20"));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        password: "",
        username: "",
      },
      rules: {
        password: [{ validator: validatePassword, trigger: "blur" }],
        username: [{ validator: validateUsername, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //     this.$router.push({name: 'Home'}
  },
};

// methods:{
//   //登录请求
//   // handleLogin(){
//   //   this.$http.push('login',this.logdata)
//   //   .then(res=>{
//   //     console.log(res)
//   //   })
//   // }
//   handleLogin(){
//     this.$router.push({name: 'Home'})
//   }
// }
</script>

<style>
.logwrap {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(224, 224, 224);
}
.logwrap .logform {
  padding: 20px 30px;
  border: 2px solid #ffffff;
  border-radius: 4px;
  width: 400px;

  background-color: #fff;
}
</style>
