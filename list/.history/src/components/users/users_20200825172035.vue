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
                     <el-button  icon="el-icon-search"></el-button>
                     <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                     </el-input>
        </el-col>
    </el-row>
</el-card>
</template>

<script>
export default {

}
</script>

<style>
.box-card{
    height: 100%;
}
</style>