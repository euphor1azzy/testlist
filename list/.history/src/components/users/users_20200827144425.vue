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
  
    <el-row class="searchC">
      <el-col >
        <el-input placeholder="请输入内容" v-model="query" class="inputSearch">
          <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
        
        
        <el-button  type="success">添加用户</el-button>
     </el-col>
    </el-row>
    <!-- 表格 -->
    <el-table :data="items">
      <el-table-column prop="id" label="ID" width="80"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="gender" label="性别"></el-table-column>
    </el-table>
  </el-card>
</template>

<script>
 
    import axios from 'axios'
export default {
created() {
    this.loadData();
  },
  methods: {
    loadData() {
      axios.get("http://localhost:3000/heroes").then((res) => {
        this.items = res.data;
      });
    },
  },
  name: "list",
  data() {
    return {
      query:'',
      items: [],
      name: "",
      gender: "",
    };
  },
}
</script>

<style>
.box-card {
  height: 100%;
 
}
.inputSearch {
  width: 100px;
}
.searchC {
  margin-top: 20px;
   width: 500px;
}
.btn-adduser{
  margin: 10px;
  display: inline-flex;
}
</style>
