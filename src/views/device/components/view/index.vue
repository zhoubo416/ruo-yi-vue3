<template>
    <el-form :model="deviceData" label-width="180px">
      <el-form-item label="设备名称">
        {{ deviceData.name }}
      </el-form-item>
      <el-form-item label="设备类型">
        {{ deviceData.type }}
      </el-form-item>
      <el-form-item label="设备规格">
        {{ deviceData.specifications }}
      </el-form-item>
      <el-form-item label="设备功能">
        {{ deviceData.functions }}
      </el-form-item>
      <el-form-item label="生产厂家">
        {{ deviceData.manufacturer }}
      </el-form-item>
      <el-form-item label="生产日期">
        {{ deviceData.productionDate }}
      </el-form-item>
      <el-form-item label="设备状态">
        {{ deviceData.status }}
      </el-form-item>
      <el-form-item label="设备价格">
        {{ deviceData.price }}
      </el-form-item>
      <el-form-item label="设备的维护和操作信息">
        {{ deviceData.information }}
      </el-form-item>
      <el-form-item label="BOM">
        {{ deviceData.bom }}
      </el-form-item>
    </el-form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // 此处使用模拟的设备数据，你可以根据实际需求替换
  const deviceData = ref({
    name: "设备1名称",
    type: "设备1的类型",
    specifications: "设备1规格",
    functions: "设备1功能",
    manufacturer: "设备1的生产厂家",
    productionDate: "设备1的生产日期",
    status: "设备1状态",
    price: "设备1价格",
    information: "设备1的维护和操作信息",
    bom: "设备1的BOM",
  });
  </script>