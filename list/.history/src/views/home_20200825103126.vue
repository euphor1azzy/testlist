<template>
   <el-header class="nav">
    <el-row>
      <el-col :span="6">
        <div class='logo'>logo</div>
      </el-col>
      <el-col :span="12">
        <h2>管理系统</h2>>
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
         
          <router-link to="/login" style=" padding-left:28px;font-size:16px;text-decoration:none">退出</router-link>
        </div>

         <el-menu  :default-openeds="['1']" :unique-opened="true">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>用户管理 </template>
            <el-menu-item-group>
              <template slot="title">用户列表</template>
              <el-menu-item index="1-1">列表详细</el-menu-item>
       
            </el-menu-item-group>
            
            
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>权限管理
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
       
          </el-submenu>


          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>商品管理
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
         
          </el-submenu>
        </el-menu>

        <div class="main"></div>
</template>

<script>
export default {

}
</script>

<style>
.header{
   text-align: center;
  font-size: 24px;
background-color: #b3c0d1;
}
.container{
  height:100%;
}
.aside{
background-color: #d3dce6;
}
.main{
  background-color: #e9eef3;
  height: 100%;
    
}
</style>