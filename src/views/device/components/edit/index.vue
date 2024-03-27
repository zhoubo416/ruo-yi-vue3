<template>
  <el-form ref="form" :model="form" label-width="160px">
    <el-form-item label="设备名称" prop="Name">
      <el-input v-model="form.Name"></el-input>
    </el-form-item>
    <el-form-item label="设备类型" prop="Type">
      <el-input v-model="form.Type"></el-input>
    </el-form-item>
    <el-form-item label="设备规格" prop="Specifications">
      <el-input v-model="form.Specifications"></el-input>
    </el-form-item>
    <el-form-item label="设备功能" prop="Functions">
      <el-input v-model="form.Functions"></el-input>
    </el-form-item>
    <el-form-item label="生产厂家" prop="Manufacturer">
      <el-input v-model="form.Manufacturer"></el-input>
    </el-form-item>
    <el-form-item label="生产日期" prop="ProductionDate">
      <el-date-picker type="date" v-model="form.ProductionDate" style="width: 100%;"></el-date-picker>
    </el-form-item>
    <el-form-item label="设备状态" prop="Status">
      <el-input v-model="form.Status"></el-input>
    </el-form-item>
    <el-form-item label="设备价格" prop="Price">
      <el-input v-model="form.Price"></el-input>
    </el-form-item>
    <el-form-item label="设备的维护和操作信息" prop="Maintenance and Operation Information">
      <el-input v-model="form.Information"></el-input>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const form = ref({
  Name: '',
  Type: '',
  Specifications: '',
  Functions: '',
  Manufacturer: '',
  ProductionDate: '',
  Status: '',
  Price: '',
  Information: ''
})

// 提交表单时的操作
let submitForm = (formName) => {
  console.log(form.value)
}

// 重置表单时的操作
let resetForm = (formName) => {
  form.value = {
    Name: '',
    Type: '',
    Specifications: '',
    Functions: '',
    Manufacturer: '',
    ProductionDate: '',
    Status: '',
    Price: '',
    Information: ''
  }
}

</script>