<template>
  <div class="logwrap">
    <el-form class="logform" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-position="top" label-width="80px" >
 <h1 style="text-align:center;font-size:30px">登录页面</h1>
  <el-form-item label="用户名" prop="username">
    <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
  
  <el-form-item>
    <el-button type="primary" style="width:100%" @click="submitForm('ruleForm')">登录</el-button>
     </el-form-item>
</el-form>
  </div>
</template>



<script>
export default {
  name:'Login',
  data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validateUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
        return {
        ruleForm: {
          pass: '',
          username: '',
                 },
        rules: {
          pass: [
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
