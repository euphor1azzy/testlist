<template>
  <el-header class="nav">
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple">logo</div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">管理系统</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i><span>设置</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
         
          <router-link to="/login" style="decoration:none; padding-left:28px;font-size:16px">退出</router-link>
        </div>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
export default {
  name: "AppNav",
};
</script>

<style scoped>
.nav {
  padding: 10px;
  text-align: center;
  font-size: 24px;
  width: 100%;
  color: #fff;
  background-color: #b2bfd2;
}
.el-icon-setting::before {
  font-size: 24px;
}
</style>
