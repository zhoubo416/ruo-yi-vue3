<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryRef" :inline="true">
      <template v-for="item in formFelid" :key="item.prop">
        <el-form-item :label="item.label" :prop="item.prop">
          <component
            :is="item.is"
            v-bind="item.isAttrs"
            v-model="queryParams[item.prop]"
          />
        </el-form-item>
      </template>
      <el-form-item>
        <el-button type="primary" icon="Search" @click="handleQuery"
          >搜索</el-button
        >
        <el-button icon="Refresh" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>
    <div class="button">
      <el-button type="primary" plain size="mini" icon="Plus" @click="addDevice"
        >新增</el-button
      >
    </div>
    <el-table
      v-loading="loading"
      :data="onlineList.slice((pageNum - 1) * pageSize, pageNum * pageSize)"
      style="width: 100%"
    >
      <el-table-column label="序号" width="50" type="index" align="center">
        <template #default="scope">
          <span>{{ (pageNum - 1) * pageSize + scope.$index + 1 }}</span>
        </template>
      </el-table-column>
      <template v-for="item in tableColumn" :key="item.prop">
        <el-table-column
          :label="item.label"
          :prop="item.prop"
          v-bind="item.attrs"
        />
      </template>

      <el-table-column
        label="操作"
        align="center"
        width="140"
        class-name="small-padding fixed-width"
      >
        <template #default="scope">
          <el-button
            link
            type="primary"
            icon="Edit"
            @click="edit(scope.row)"
          ></el-button>
          <el-button
            link
            type="primary"
            icon="Link"
            @click="link(scope.row)"
          ></el-button>
          <el-button
            link
            type="danger"
            icon="Delete"
            @click="del(scope.row)"
          ></el-button>
          <el-button
            link
            type="info"
            icon="FullScreen"
            @click="fullScreen(scope.row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total > 0"
      :total="total"
      v-model:page="pageNum"
      v-model:limit="pageSize"
    />
    <el-dialog v-model="dialogTableVisible" title="添加设备" width="800">
      <edit-table />
      <template #footer>
        <el-button type="primary" @click="onSubmit">新增</el-button>
        <el-button @click="dialogTableVisible = false">取消</el-button>
      </template>
    </el-dialog>
    <el-dialog v-model="dialogTableVisible2" title="关联BOM" width="90%">
      <el-form :model="bomParams" ref="queryRef" :inline="true">
        <template v-for="item in bomFormFelid" :key="item.prop">
          <el-form-item :label="item.label" :prop="item.prop">
            <component
              :is="item.is"
              v-bind="item.isAttrs"
              v-model="queryParams[item.prop]"
            />
          </el-form-item>
        </template>
        <el-form-item>
          <el-button type="primary" icon="Search" @click="bomQuery"
            >搜索</el-button
          >
          <el-button icon="Refresh" @click="bomRest">重置</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="bomTableData" style="width: 100%; height: 50vh">
        <el-table-column type="selection" width="55" />
        <el-table-column label="序号" width="50" type="index" align="center">
          <template #default="scope">
            <span>{{ (pageNum - 1) * pageSize + scope.$index + 1 }}</span>
          </template>
        </el-table-column>
        <template v-for="item in bomTableColumn" :key="item.prop">
          <el-table-column
            :label="item.label"
            :prop="item.prop"
            v-bind="item.attrs"
          />
        </template>
      </el-table>
      <template #footer>
        <el-button type="primary" @click="onSubmit">关联</el-button>
        <el-button @click="dialogTableVisible2 = false">取消</el-button>
      </template>
    </el-dialog>
    <qrDevice v-if="qrDeviceVisible" />
  </div>
</template>

<script setup name="Device">
import { formFelid, tableColumn, tableData } from "./config";
import editTable from "./components/edit/index.vue";
import qrDevice from './components/view/qrcode.vue'

const { proxy } = getCurrentInstance();

const onlineList = ref([]);
const contractList = ref([
  { label: "合同1", value: "1001" },
  { label: "合同2", value: "1003" },
  { label: "合同3", value: "1003" },
]);
const loading = ref(true);
const total = ref(0);
const pageNum = ref(1);
const pageSize = ref(10);
const dialogTableVisible = ref(false);
const dialogTableVisible2 = ref(false);
const qrDeviceVisible = ref(false);

const queryParams = ref({
  ipaddr: undefined,
  userName: undefined,
});

/** 查询登录日志列表 */
function getList() {
  loading.value = true;
  onlineList.value = tableData;
  total.value = tableData?.length;
  loading.value = false;
}
/** 搜索按钮操作 */
function handleQuery() {
  pageNum.value = 1;
  getList();
}
/** 重置按钮操作 */
function resetQuery() {
  proxy.resetForm("queryRef");
  handleQuery();
}
function edit(row) {
  console.log(row);
  dialogTableVisible.value = true;
}
function link(row) {
  getBomTableData()
  dialogTableVisible2.value = true;
}
function addDevice() {
  dialogTableVisible.value = true;
}

import { ElMessage, ElMessageBox } from "element-plus";

const del = () => {
  ElMessageBox.confirm("确定删除吗?", "Warning", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      ElMessage({
        type: "success",
        message: "删除成功",
      });
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "取消删除",
      });
    });
};

getList();
const fullScreen = ()=>{qrDeviceVisible.value = true};

const bomParams = ref([]);
const bomTableData = ref([]);
const bomTableColumn = ref([]);
const bomFormFelid = ref([]);
import * as bomTableConfig from "./bom/config";
/** 查询登录日志列表 */
function getBomTableData() {
  bomTableData.value = bomTableConfig.tableData;
  bomTableColumn.value = bomTableConfig.tableColumn;
  bomFormFelid.value = bomTableConfig.formFelid;
}
const bomQuery = () => {};
const bomRest = () => {};
</script>

<style scoped>
.button {
  margin: 5px 0;
}
</style>
