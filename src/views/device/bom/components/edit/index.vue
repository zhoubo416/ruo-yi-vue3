<template>
    <el-form :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="部件号">
        <el-input v-model="form.no" />
      </el-form-item>
      <el-form-item label="部件名称">
        <el-input v-model="form.modal" />
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="form.price" />
      </el-form-item>
      <el-form-item label="数量">
        <el-input v-model="form.content" />
      </el-form-item>
      <el-form-item label="单位">
        <el-input v-model="form.content" />
      </el-form-item>
      <el-form-item label="物料类型">
        <el-input v-model="form.content" />
      </el-form-item>
      <el-form-item label="参考设计号">
        <el-input v-model="form.content" />
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="form.content" />
      </el-form-item>
    </el-form>
  </template>
  
  <script lang="ts" setup>
  import { reactive } from 'vue'
  
  // do not use same name with ref
  const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
  })
  
  const onSubmit = () => {
    console.log('submit!')
  }
  </script>
  