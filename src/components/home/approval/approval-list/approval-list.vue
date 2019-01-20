<template>
  <div class="list-box">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="全部" name="all">
        <listAll/>
      </el-tab-pane>
      <el-tab-pane label="审批中（0）" name="auditing">
        <Auditing/>
      </el-tab-pane>
      <el-tab-pane label="本月通过（40）" name="resolve">
        <Reject/>
      </el-tab-pane>
      <el-tab-pane label="本月驳回（10）" name="reject">
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
      activeName: 'all'
    };
  },
  methods: {},
  components: {
    listAll,
    Auditing,
    Reject,
    Resolve
  }
};
</script>

<style lang="less">
.list-box {
  padding: 0 40px;
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
