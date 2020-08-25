<template>
  <!-- 侧边栏 -->
  <div class="con">
    <v-appnav></v-appnav>
    <v-appslider></v-appslider>

    <!-- 内容 -->
   <!-- <v-list></v-list> -->
   <el-main class="main">
     <router-view></router-view>
   </el-main>
    <router-link></router-link>
  </div>
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
.con {
  height: 100%;
  display: flex;
  flex: auto;
  flex-flow: row wrap;
  justify-content: flex-start;
}
</style>
