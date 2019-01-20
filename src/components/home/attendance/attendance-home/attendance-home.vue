<template>
  <div id="tab">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="考勤记录" name="first">
        <AttendanceRecord></AttendanceRecord>
      </el-tab-pane>
      <el-tab-pane label="考勤统计" name="second">
        <AttendanceStatistics></AttendanceStatistics>
      </el-tab-pane>
      <el-tab-pane label="考勤设置" name="third">
        <AttendanceSet></AttendanceSet>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import AttendanceRecord from '../attendance-home/attendance-record/attendance-record.vue'
  import AttendanceStatistics from '../attendance-home/attendance-statistics/attendance-statistics.vue'
  import AttendanceSet from '../attendance-home/attendance-set/attendance-set.vue'

  export default {
    name: "attendance-home",
    // attendance相当于home
    // 三个选项相当于top
    // 三个文件相当于home-page
    data() {
      return {
        activeName: 'first'
      }
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
    }
  }
</script>

<style scoped>
  #tab {
    /*min-width: 1280px;*/
    height: 100%;
  }
</style>
