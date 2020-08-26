<template>
  <div class="logwrap">
    <el-form class="logform" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-position="top" label-width="80px" >
 <h1 style="text-align:center;font-size:30px">登录页面</h1>
  <el-form-item label="用户名" prop="username">
    <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
  </el-form-item>
  
  <el-form-item>
    <el-button type="primary" style="width:100%" @click="submitForm('ruleForm')">登录</el-button>
     </el-form-item>
</el-form>
  </div>
</template>



<script>
import {stripScript} from '@/utils/validate.js'
export default {
  name:'Login',
  data() {
    //验证用户名
    var validateUsername = (rule, value, callback) => {
            let reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else if (!reg.test(value)) {
          callback(new Error('用户名格式不正确'));
        } else {
          callback();
        }
      };
     //验证密码
      var validatePass = (rule, value, callback) => {
        //过滤密码
        this.ruleForm.ppasswordass = stripScript(value)
        value = this.ruleForm.password
          let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if (!reg.test(value)) {
          callback(new Error('密码密码至少包含 数字和英文，长度6-20'));
        } else {
          callback();
      }
      };
      
        return {
        ruleForm: {
          password: '',
          username: '',
                 },
        rules: {
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          username: [
            { validator: validateUsername, trigger: 'blur' }
          ],
                 }
      };
    },
     methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
         }
  }
  
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
  padding:20px 30px;
  border: 2px solid #ffffff;
  border-radius: 4px;
  width:400px;
 
  background-color: #fff;
}
</style>
