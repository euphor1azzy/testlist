

<template>
       <el-table :data="items">
            <el-table-column prop="id" label="ID" width="140"></el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="gender" label="性别"></el-table-column>
          </el-table>
    
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
      items: [],
      name: "",
      gender: "",
    };
  },
}
</script>

<style>

</style>