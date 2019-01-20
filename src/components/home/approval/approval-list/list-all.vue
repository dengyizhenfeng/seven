<template>
  <div>
    <!-- 第一行 -->
    <el-row>
      <div class="item">
        <span>发起时间</span>
        <el-date-picker v-model="dataValue1" type="date" placeholder="选择日期"></el-date-picker>
        <span>至</span>
        <el-date-picker v-model="dataValue2" type="date" placeholder="选择日期"></el-date-picker>
      </div>
      <div class="item">
        <span>类型</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="item">
        <span>发起人</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="item">
        <span>发起人</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <a href="javascript:;" class="export">导出报表</a>
    </el-row>
    <!-- 第二行 -->
    <el-row>
      <div class="item">
        <span>操作时间</span>
        <el-date-picker v-model="dataValue1" type="date" placeholder="选择日期"></el-date-picker>
        <span>至</span>
        <el-date-picker v-model="dataValue2" type="date" placeholder="选择日期"></el-date-picker>
      </div>
      <div class="item">
        <span>状态</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="item">
        <span>审批人</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="item">
        <el-button type="primary" size="small">主要按钮</el-button>
        <a href="javascript:;">重置</a>
      </div>
    </el-row>
    <el-row>
      <!-- 表格 -->
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="order" label="序号" width="100px"></el-table-column>
        <el-table-column prop="type" label="审批类型"></el-table-column>
        <el-table-column prop="originator" label="发起人"></el-table-column>
        <el-table-column prop="department" label="发起人部门"></el-table-column>
        <el-table-column prop="approver" label="当前审批人"></el-table-column>
        <el-table-column prop="initiationTime" label="审批发起时间"></el-table-column>
        <el-table-column prop="operationTime" label="最后操作时间"></el-table-column>
        <el-table-column prop="status" label="审批状态"></el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataValue1: "", //日期起始
      dataValue2: "", //日期
      tableData: [
        {
          order: "1", //序号
          type: "补卡申请", //审批类型
          originator: "麋鹿", //发起人
          department: "技术部", //发起人部门
          approver: "张三", //当前审批人
          initiationTime: "2019-01-02 13:00:00", //审批发起时间
          operationTime: "2019-01-02 13:00:00", //最后操作时间
          status: "" //审批状态
        },
        {
          order: "1", //序号
          type: "补卡申请", //审批类型
          originator: "麋鹿", //发起人
          department: "技术部", //发起人部门
          approver: "张三", //当前审批人
          initiationTime: "2019-01-02 13:00:00", //审批发起时间
          operationTime: "2019-01-02 13:00:00", //最后操作时间
          status: "" //审批状态
        },
        {
          order: "1", //序号
          type: "补卡申请", //审批类型
          originator: "麋鹿", //发起人
          department: "技术部", //发起人部门
          approver: "张三", //当前审批人
          initiationTime: "2019-01-02 13:00:00", //审批发起时间
          operationTime: "2019-01-02 13:00:00", //最后操作时间
          status: "" //审批状态
        }
      ]
    };
  }
};
</script>

<style lang="less">
.el-row {
  font-size: 14px;
  &:nth-child(1),
  &:nth-child(2) {
    height: 50px;
    line-height: 50px;
  }
}
// 日期框样式
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 136px !important;
  height: 30px;
  .el-input__inner {
    height: 30px;
    line-height: 30px;
    // 小图标
    .el-input__icon {
      line-height: 30px;
    }
  }
}
.item {
  float: left;
  margin-right: 30px;
  a {
    text-decoration: none;
    color: #61688d;
  }
}
.export {
  float: right;
  width: 102px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: #58A1F4;
  color: #fff;
  text-decoration: none;
}
</style>
