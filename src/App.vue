<template>
    <el-container style="height: 100%" class="layout-container-demo">
      <AsideView></AsideView>
      <HomeView></HomeView>
    </el-container>
</template>


<script setup>
import AsideView from "@/views/AsideView.vue"
import HomeView from "@/views/HomeView.vue";
import {onMounted} from "vue";
import {useCounterStore} from "@/stores/counter"
onMounted(()=>{
  window.addEventListener("resize",()=>{
  })
})
</script>

<style>
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>

