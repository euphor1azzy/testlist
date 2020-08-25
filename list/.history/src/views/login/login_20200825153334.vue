<template>
  <div class="logwrap">
    <el-form class="logform" label-position="top" label-width="80px" :model="logdata">
      <h1 style="text-align:center;font-size:30px">登录页面</h1>
      <el-form-item label="用户名">
        <el-input v-model="logdata.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="logdata.password"></el-input>
      </el-form-item>
      <el-button style="width:100%" type="primary" @click.prevent="handleLogin">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name:'Login',
  methods:{
     login(){
            }
  },
 
  data() {
    return {
      logdata: {
        username: "",
        password: "",
      }
    }
  },
  methods:{
    //登录请求
    // handleLogin(){
    //   this.$http.push('login',this.logdata)
    //   .then(res=>{
    //     console.log(res)
    //   })
    // }
    handleLogin(){
      this.$router.push({name: 'Home'})
    }
  }
};
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
