<template>
  <el-form :model="newContract" label-width="120px">
    <el-form-item label="合同编号">
      <el-input v-model="newContract.contractNo"></el-input>
    </el-form-item>
    <el-form-item label="合同名称">
      <el-input v-model="newContract.contractName"></el-input>
    </el-form-item>
    <el-form-item label="合同类型">
      <el-input v-model="newContract.contractType"></el-input>
    </el-form-item>
    <el-form-item label="合同方">
      <el-input v-model="newContract.contractingParties"></el-input>
    </el-form-item>
    <el-form-item label="签订日期">
      <el-date-picker v-model="newContract.signingDate" type="date" placeholder="选择日期"></el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="addContract">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { ref } from 'vue';

let newContract = ref({
  contractNo: "",
  contractName: "",
  contractType: "",
  contractingParties: "",
  signingDate: ""
});

const addContract = () => {
  // 在这里你可以添加代码以处理新合同的提交，例如保存合同信息到数据库
  console.log("提交的新合同信息：", newContract.value);
}

</script>