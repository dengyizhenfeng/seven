<template>
  <div>
    <!--步骤条-->
    <el-steps :active="active" finish-status="success">
      <el-step title="基本信息"></el-step>
      <el-step title="出勤时间"></el-step>
      <el-step title="考勤规则"></el-step>
    </el-steps>
    <!--下方表单部分-->
    <Step1 v-if="active === 0" v-model="active" @formData="receiveForm"></Step1>
    <Step2 v-else-if="active === 1" v-model="active"></Step2>
    <Step3 v-else v-model="active"></Step3>
  </div>
</template>

<script>
  import Step1 from '@/components/home/attendance/addAttendance/step1.vue'
  import Step2 from '@/components/home/attendance/addAttendance/step2.vue'
  import Step3 from '@/components/home/attendance/addAttendance/step3.vue'
  export default {
    name: "addAttendance",
    data() {
      return {
        active: 0,
        form: {}
      }
    },
    methods: {
      // 接收step2传出来的form数据
      receiveForm(form) {
        this.form = form
      }
    },
    components: {
      Step1,
      Step2,
      Step3
    }
  }
</script>

<style scoped lang="less">
  /*返回按钮*/
  .back{
    text-decoration: none;
    /*右侧小竖线*/
    &::after{
      content: '';
      display: inline-block;
      width: 2px;
      height: 16px;
      background-color: #ccc;
      margin-left: 20px;
      margin-right: 20px;
    }
  }
  /*面包屑导航*/
  .bread{
    display: inline-block;
  }
  /*步骤条*/
  .el-steps{
    padding-top: 20px;
    padding-bottom: 20px;
    /deep/.el-step.is-flex{ //最后一个步骤条
      width: 10% !important;
    }
    /deep/.el-step.is-horizontal .el-step__line{ //步骤条那根线
      left: 100px;
    }
    /deep/.el-step__main{ //步骤条主体
      position: relative;
    }
    /deep/.el-step__title{ //步骤条标题
      position: absolute;
      left: 28px;
      top: -26px;
      font-weight: 400;
    }
  }
  /deep/.el-input{
    width: auto;
    min-width: 350px;
  }
</style>
