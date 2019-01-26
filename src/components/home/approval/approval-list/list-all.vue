<template>
  <div class="list-all-box">
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
        <el-select placeholder="请选择" value="1">
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
        <el-select placeholder="请选择" value="1">
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
        <el-select placeholder="请选择" value="1">
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
        <el-select placeholder="请选择" value="1">
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
        <el-select placeholder="请选择" value="1">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="item">
        <el-button type="primary" size="small" @click="process">查询</el-button>
        <a href="javascript:;">重置</a>
      </div>
    </el-row>
    <el-row>
      <!-- 表格 -->
      <el-table :data="tableData" style="width: 100%" @cell-click="process">
        <el-table-column type="index" label="序号" width="50"></el-table-column>
        <el-table-column prop="appr_type" label="审批类型">
          <template slot-scope="scope">
            <div v-if="scope.row.appr_type === 1">补卡</div>
            <div v-else-if="scope.row.appr_type === 2">加班</div>
            <div v-else-if="scope.row.appr_type === 3">请假</div>
            <div v-else-if="scope.row.appr_type === 4">外出</div>
            <div v-else-if="scope.row.appr_type === 5">出差</div>
          </template>
        </el-table-column>
        <el-table-column prop="user_name" label="发起人"></el-table-column>
        <el-table-column prop="org_name" label="发起人部门"></el-table-column>
        <el-table-column prop="approver_name" label="当前审批人"></el-table-column>
        <el-table-column prop="final_time" label="审批发起时间"></el-table-column>
        <el-table-column prop="apprfinal_time" label="最后操作时间"></el-table-column>
        <el-table-column prop="status" label="审批状态">
          <template slot-scope="scope">
            <div v-if="scope.row.appr_status === 1" class="not-approved">未审批</div>
            <div v-else-if="scope.row.appr_status === 2" class>审批通过</div>
            <div v-else-if="scope.row.appr_status === 3">审批未通过</div>
            <div v-else-if="scope.row.is_repeal === 2">已撤销</div>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-dialog
      :title="processData.user_name+ '的' + processData.appr_name + '申请'"
      :visible.sync="processFlag"
    >
      <Process :processdata="processData"/>
    </el-dialog>
  </div>
</template>

<script>
import Process from "./process.vue";
export default {
  data() {
    return {
      processFlag: false, //控制审批进度的变量
      dataValue1: "", //日期起始
      dataValue2: "", //日期
      tableData: [], //表格数据
      options: [
        {
          label: "abc",
          value: 1
        }
      ],
      processData: {} //用来存放请假进度数据
    };
  },
  watch: {
    tableList() {
      this.tableData = this.tableList;
    }
  },
  props: ["tableList"],
  methods: {
    process(row, column, cell, event) {
      this.processFlag = true;
      this.processData = JSON.parse(JSON.stringify(row));
      switch (this.processData.appr_type) {
        case 1:
          this.processData.appr_name = "补卡";
          break;
        case 2:
          this.processData.appr_name = "加班";
          break;
        case 3:
          this.processData.appr_name = "请假";
          break;
        case 4:
          this.processData.appr_name = "外出";
          break;
        case 5:
          this.processData.appr_name = "出差";
          break;
      }
    }
  },
  components: {
    Process
  }
};
</script>

<style lang="less">
.list-all-box {
  /deep/.el-dialog {
    min-width: 1048px;
    padding: 0 24px;
  }
  /deep/.el-dialog__header {
    height: 50px;
    line-height: 50px;
    font-weight: 700;
    padding: 0;
  }
  /deep/.el-dialog__body {
    padding: 0;
    padding-bottom: 30px;
  }
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
    background-color: #58a1f4;
    color: #fff;
    text-decoration: none;
  }
}
</style>
