<template>
 <el-container class="container">

 
  <!-- <div class="con"> -->
    <!-- 头部 -->
    <v-appnav> </v-appnav>
     <!-- 侧边栏 -->
    <el-container class="main">
    <v-appslider> </v-appslider>
      <router-view> </router-view>
    <!-- 内容 -->
   <!-- <v-list></v-list> -->
   <!-- <el-main class="main"> -->
    </el-container>
   <!-- </el-main> -->
  </el-container>
  <!-- </div> -->
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
}
/* .con {
  height: 100%;
  display: flex;
  flex: auto;
  flex-flow: row wrap;
  justify-content: flex-start;
} */
</style>
