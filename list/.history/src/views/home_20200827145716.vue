<template>
 <el-container>
  <el-header>Header</el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main>Main</el-main>
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
}
.main{
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
