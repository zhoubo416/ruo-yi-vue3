// 
export const formFelid = [{
    label:"BOM编号", prop:"no", is:'el-input',isAttrs:{placeholder:"请输入BOM编号",clearable:true, style:"width: 200px"}
}]

export const tableColumn = [
    {label:"部件号", prop:"bomLevel", attrs:{ align:"center", showOverflowTooltip:true }},
    {label:"部件名称", prop:"partName", attrs:{ align:"left", showOverflowTooltip:true }},
    {label:"描述", prop:"description", attrs:{ align:"left", showOverflowTooltip:true }},
    {label:"数量", prop:"quantity", attrs:{ align:"right", showOverflowTooltip:true }},
    {label:"单位", prop:"unit", attrs:{ align:"right", showOverflowTooltip:true }},
    {label:"物料类型", prop:"itemType", attrs:{ align:"left", showOverflowTooltip:true }},
    {label:"参考设计号", prop:"referenceDesignators", attrs:{ align:"left", showOverflowTooltip:true }},
    {label:"备注", prop:"notes", attrs:{ align:"left", showOverflowTooltip:true }}
]


export const tableData = [
  {
    "bomLevel": "001",
    "partName": "电机",
    "description": "电动马达",
    "quantity": 2,
    "unit": "个",
    "itemType": "采购",
    "referenceDesignators": "MOT1",
    "notes": "确保电源兼容"
  },
  {
    "bomLevel": "002",
    "partName": "电池",
    "description": "12V锂电池",
    "quantity": 1,
    "unit": "个",
    "itemType": "采购",
    "referenceDesignators": "BAT1",
    "notes": "按照安全程序处理"
  },
  {
    "bomLevel": "003",
    "partName": "电路板",
    "description": "控制电路板",
    "quantity": 1,
    "unit": "个",
    "itemType": "组装",
    "referenceDesignators": "PCB1",
    "notes": "在静电防护下组装"
  },
  {
    "bomLevel": "004",
    "partName": "螺丝",
    "description": "2英寸钢螺丝",
    "quantity": 10,
    "unit": "个",
    "itemType": "标准",
    "referenceDesignators": "SCR1",
    "notes": "公差在0.5毫米内"
  }
]