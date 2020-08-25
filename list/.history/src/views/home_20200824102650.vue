<template>
    <div>
  
    <v-appnav></v-appnav>
    
      
    <v-appslider></v-appslider>
<div class="con">
    <!-- 内容 -->
   <!-- <v-list></v-list> -->
    <router-link></router-link>
  </div>
</div>
</template>

<script>
// 导入组件

import AppNav from "../components/common/appnav";
import AppSlider from "../components/common/appslider";
import List from "../components/list/list";

export default {
  name: "Home",
  // 注册组件
  components: {
    "v-appnav": AppNav,
    "v-appslider": AppSlider,
    "v-list": List,
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
  background-color: #e9eef5;
}
</style>
