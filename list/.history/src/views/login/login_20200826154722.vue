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
      <!-- <h1 style="text-align:center;font-size:30px">登录页面</h1> -->
      <ul  style="text-align:center;font-size:30px;text-decoration:none">
        <li v-for="item in menuTab" :key="item.id" style="display:inline" @click="toggleMenuTab">{{item.txt}}</li>
      </ul>
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

      <el-form-item label="确认密码" prop="checkPassword" v-show="moduel === 'login'">
        <el-input
          type="password"
          v-model="ruleForm.checkPassword"
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
import { stripScript } from "@/utils/validate.js";

export default {
  name: "Login",
  data() {
    //验证用户名
    var validateUsername = (rule, value, callback) => {
      let reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (!reg.test(value)) {
        callback(new Error("用户名格式不正确"));
      } else {
        callback();
      }
    };
    //验证密码
    var validatePassword = (rule, value, callback) => {
       let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
      //过滤密码
      this.ruleForm.password = stripScript(value);
      value = this.ruleForm.password;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!reg.test(value)) {
        callback(new Error("密码至少包含数字和英文，长度6-20"));
      } else {
        callback();
      }
    };
    //验证确认密码
    var validatecheckPassword = (rule, value, callback) => {
       let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
      //过滤密码
      this.ruleForm.password = stripScript(value);
      value = this.ruleForm.password;
            if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value != this.ruleForm.password ) {
        callback(new Error("密码不同"));
      } else {
        callback();
      }
    };

    return {
      menuTab:[
        {txt:"登录" ,current:true ,type:'login'   },
        {txt:"注册" ,current:false ,type:'rigester' }
        ],
        moduel:'login',
      ruleForm: {
        password: "",
        username: "",
        checkPassword:""
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
        checkPassword: [{ validator: validatecheckPassword, trigger: "blur" }],
      },
    };
  },
  methods: {
       toggleMenuTab(data){
      this.menuTab.forEach((elem,index) =>{
        elem.current = false
      });
      data.current = true
      this.moduel = data.type
    },
    submitForm(ruleForm) {
      this.$refs[ruleForm].validate((valid) => {
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
.current{
  color: antiquewhite;
  font-weight: 700;
  font-size: 32px;
}
</style>
