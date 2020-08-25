<template>
 
  <div>
    <!-- 头部 -->
    <v-appnav></v-appnav>
     <!-- 侧边栏 -->
    
    <v-appslider></v-appslider>

    <!-- 内容 -->
   <!-- <v-list></v-list> -->
   <el-main class="main">
     <router-view></router-view>
   </el-main>
  
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
