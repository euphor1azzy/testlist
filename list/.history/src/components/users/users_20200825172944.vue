<template>
 
 <el-card class="box-card">
 <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
    <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
    <el-breadcrumb-item>首页</el-breadcrumb-item>
    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 搜索 -->
    <el-row>
        <el-col>
                    
                     <el-input 
                     placeholder="请输入内容" 
                     v-model="query" 
                     class="inputSearch">
                          <el-button  slot="append" icon="el-icon-search"></el-button>
                     </el-input>
                      <el-button type="success">添加用户</el-button>
        </el-col>
    </el-row>
</el-card>
</template>

<script>
export default {
    data() {
        return {
            query:''
        }
    }

}
</script>

<style>
.box-card{
    height: 100%;
}
.inputSearch{
    padding-top: 16px;
    width: 300px;
}
</style>