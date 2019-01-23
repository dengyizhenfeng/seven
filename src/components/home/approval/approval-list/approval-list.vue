<template>
  <div class="approval-list-box">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="全部" name="all">
        <listAll :tableList="tableList"/>
      </el-tab-pane>
      <el-tab-pane :label="'审批中（'+ tableData.prepareAppr +'）'" name="auditing">
        <Auditing/>
      </el-tab-pane>
      <el-tab-pane :label="'本月通过（'+ tableData.passAppr +'）'" name="resolve">
        <Reject/>
      </el-tab-pane>
      <el-tab-pane :label="'本月驳回（' + tableData.rejectAppr + '）'" name="reject">
        <Resolve/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import listAll from "./list-all.vue";
import Auditing from "./auditing.vue";
import Reject from "./reject.vue";
import Resolve from "./resolve.vue";

export default {
  data() {
    return {
      activeName: "all",
      tableData: {}, //列表数据
      tableList: [] // 表格数据
    };
  },
  methods: {},
  components: {
    listAll,
    Auditing,
    Reject,
    Resolve
  },
  // 请求审批列表数据
  created() {
    this.$http({
      url: "getApprStatus",
      method: "post",
      params: {
        companyId: 1
      }
    }).then(res => {
      var { state, datas } = res.data;
      if (state === 200) {
        this.tableData = datas;
        this.tableList = datas.list;
      }
    });
  }
};
</script>

<style lang="less">
.approval-list-box {
  padding: 0 40px;
  .el-input__inner {
    height: 30px;
    line-height: 30px;
  }
  .el-table th {
    height: 40px;
    line-height: 40px;
    background-color: #eef0fa;
    font-weight: 400;
    padding: 0;
  }
  // 选项卡样式
  .el-tabs--card > .el-tabs__header {
    border-bottom: none;
    margin-bottom: 0;
  }
  .el-tabs--card > .el-tabs__header .el-tabs__nav {
    border: none;
  }
  .el-tabs__item {
    width: 192px;
    height: 50px;
    margin-right: 2px;
    line-height: 50px;
    text-align: center;
    font-weight: 700;
    background-color: #eef0fa;
    color: #61688d;
    border-radius: 20px 20px 3px 3px;
    &.is-active {
      background-color: #58a1f4;
      color: #fff;
      &:hover {
        color: #fff;
      }
    }
    &:hover {
      color: #61688d;
    }
  }
}
</style>
