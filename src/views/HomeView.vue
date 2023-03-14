<script setup>
import HeaderView from "@/views/HeaderView.vue"
import MainView from "@/views/MainView.vue";
</script>

<template>
  <el-container>
    <el-header>
      <HeaderView></HeaderView>
    </el-header>
    <el-main>
      <MainView></MainView>
    </el-main>
  </el-container>
</template>
