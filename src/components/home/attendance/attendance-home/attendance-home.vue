<template>
  <div id="tab">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="考勤记录" name="first">
        <AttendanceRecord :opt="orgOpt"></AttendanceRecord>
      </el-tab-pane>
      <el-tab-pane label="考勤统计" name="second">
        <AttendanceStatistics :opt="orgOpt"></AttendanceStatistics>
      </el-tab-pane>
      <el-tab-pane label="考勤设置" name="third">
        <AttendanceSet></AttendanceSet>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import AttendanceRecord from "../attendance-home/attendance-record/attendance-record.vue";
import AttendanceStatistics from "../attendance-home/attendance-statistics/attendance-statistics.vue";
import AttendanceSet from "../attendance-home/attendance-set/attendance-set.vue";

export default {
  name: "attendance-home",
  // attendance相当于home
  // 三个选项相当于top
  // 三个文件相当于home-page
  data() {
    return {
      activeName: "first",
      // 部门选项
      orgOpt: []
    };
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    }
  },
  components: {
    AttendanceRecord, //考勤记录
    AttendanceStatistics, //考勤统计
    AttendanceSet //考勤设置
  },
  created() {
    //获取部门数据
    this.$http({
      url: "attendance/company/queryOrgList",
      method: "post",
      params: {
        companyId: 1
      }
    }).then(res => {
      console.log(res);
      let { state, datas } = res.data;
      if (state === 200) {
        this.orgOpt.push({ value: 0, label: "全公司" });
        datas.forEach(item => {
          this.orgOpt.push({ value: item.orgId, label: item.orgName });
        });
      }
    });
  }
};
</script>

<style scoped lang="less">
/deep/.el-tabs__item:last-child {
  padding-left: 0;
  margin-left: 20px;
}
#tab {
  height: 100%;
  /deep/.el-form--inline .el-form-item__content {
    vertical-align: middle !important;
  }
}
/deep/.el-tabs__active-bar {
  display: none;
}
/deep/.el-tabs__item.is-active {
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 24px;
    height: 4px;
    background-color: #58a1f4;
  }
}
/deep/.el-tabs--top .el-tabs__item.is-top:nth-child(2) {
  padding: 0;
  margin-right: 20px;
}
/deep/.el-tabs__nav-wrap::after {
  height: 1px;
}
</style>
