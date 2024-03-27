// 
export const formFelid = [{
    label:"合同编号", prop:"contractNo", is:'el-input',isAttrs:{placeholder:"请输入合同编号",clearable:true, style:"width: 200px"}
}]

export const tableColumn = [
    {
      "label": "合同编号",
      "prop": "contractNo",
      "attrs": {
        "align": "left",
        "showOverflowTooltip": true
      }
    },
    {
      "label": "合同名称",
      "prop": "contractName",
      "attrs": {
        "align": "left",
        "showOverflowTooltip": true
      }
    },
    {
      "label": "合同类型",
      "prop": "contractType",
      "attrs": {
        "align": "left",
        "showOverflowTooltip": true
      }
    },
    {
      "label": "合同方",
      "prop": "contractingParties",
      "attrs": {
        "align": "left",
        "showOverflowTooltip": true
      }
    },
    {
      "label": "签订日期",
      "prop": "signingDate",
      "attrs": {
        "align": "left",
        "showOverflowTooltip": true
      }
    },
    {
        "label": "设备列表",
        "prop": "deviceNum",
        "attrs": {
          "align": "right",
          "showOverflowTooltip": true
        }
      },
  ]


export const tableData = [
    {
      "contractNo": "NO.20240324",
      "contractName": "软件开发合同",
      "contractType": "服务合同",
      "contractingParties": "甲方：XYZ有限公司，乙方：ABC有限公司",
      "signingDate": "2024年3月24日",
      "deviceNum":10
    },
    {
      "contractNo": "NO.20240325",
      "contractName": "网络设施合同",
      "contractType": "建筑合同",
      "contractingParties": "甲方：XYZ有限公司，乙方：DEF有限公司",
      "signingDate": "2024年3月25日",
      "deviceNum":10
    },
    // 根据相同格式生成接下来的8条，可以修改或添加任何您需要的字段...
    {
      "contractNo": "NO.20230433",
      "contractName": "维护服务合同",
      "contractType": "服务合同",
      "contractingParties": "甲方：ABC有限公司，乙方：XYZ有限公司",
      "signingDate": "2024年3月31日",
      "deviceNum":10
    }
  ]