<script setup>
import {ref} from "vue";

const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))

</script>
<template>
    <el-scrollbar>
      <el-table :data="tableData" max-height="800" :table-layout='"auto"'>
        <el-table-column :width="200" prop="date" label="时间" />
        <el-table-column :width="200" prop="name" label="名字" />
        <el-table-column prop="address" label="地址" />
      </el-table>
    </el-scrollbar>
</template>
<style scoped>

</style>
