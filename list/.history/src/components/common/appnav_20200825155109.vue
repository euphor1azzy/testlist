<template>
  <el-header class="nav">
    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span>USER</span>
    <router-link to="/login" style="padding-left:16px;font-size:16px"
      >退出</router-link
    >
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
  text-align: right;
  font-size: 24px;
  width: 100%;
  color: #fff;
  background-color: #b2bfd2;
}
.el-icon-setting::before {
  font-size: 24px;
}
</style>
