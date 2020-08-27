<template>
 <el-container class="container">
  <el-header style="padding:0">
    <v-appnav></v-appnav>
  </el-header>
  <el-container>
    <el-aside style="width:200px" >
      <v-appslider></v-appslider>
    </el-aside>
    <el-main class="main">
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
// 导入组件

import AppNav from "../components/common/appnav";
import AppSlider from "../components/common/appslider";
// import List from "../components/list/list";

export default {
  name: "Home",
  // 注册组件
  components: {
    "v-appnav": AppNav,
    "v-appslider": AppSlider,
    // "v-list": List,
  },
};
</script>

<style>
.container{
  height: 100%;
  margin: 0;
  padding: 0;
}
.main{
  height: 100%;
  background-color: rgb(224, 226, 230);
}
/* .con {
  height: 100%;
  display: flex;
  flex: auto;
  flex-flow: row wrap;
  justify-content: flex-start;
} */
</style>
