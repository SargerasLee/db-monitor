<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input0 = ref('')
</script>

<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="12">
        <el-input v-model="input0" placeholder="请输入..." class="input-with-select">
          <template #append>
            <el-button :icon="Search" />
          </template>
        </el-input>
      </el-col>
      <el-col :span="12">
        <el-button type="primary" circle>+</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<style>
.input-with-select {
  background-color: var(--el-fill-color-blank);
}
</style>
