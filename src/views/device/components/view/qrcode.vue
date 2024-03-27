<template>
  <div>
    <el-dialog
      v-model="dialogVisible"
      title="查看"
      width="300"
      :before-close="beforeClose"
    >
      <QRCodeVue3
        :width="200"
        :height="200"
        :value="url"
        :qrOptions="{ typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H' }"
        :imageOptions="{ hideBackgroundDots: true, imageSize: 0.4, margin: 0 }"
        :dotsOptions="{
          type:'extra-rounded',
	      	color:'#1d1b1b'
        }"
        :backgroundOptions="{ color: '#ffffff' }"
        :cornersSquareOptions="{ type: 'dot', color: '#000000' }"
        :cornersDotOptions="{ type: undefined, color: '#000000' }"
        fileExt="png"
        :download="true"
        myclass="my-qur"
        imgclass="img-qr"
        downloadButton="my-button"
        :downloadOptions="{ name: 'vqr', extension: 'png' }"
      />
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import QRCodeVue3 from "qrcode-vue3";

const url = ref(window.location.origin + "/device/view");
const dialogVisible = ref(false);
dialogVisible.value = true;
const beforeClose = ()=>{
    dialogVisible.value = false
}
</script>
<style scoped>
  .my-qur{
    text-align: center;
  }
</style>
