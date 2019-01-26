<template>
  <div>
    <!--步骤条-->
    <el-steps :active="active" finish-status="success">
      <el-step title="基本信息" class="step-one"></el-step>
      <el-step title="出勤时间" class="step-two"></el-step>
      <el-step title="考勤规则" class="step-three"></el-step>
    </el-steps>
    <!--下方表单部分-->
    <Step1 v-if="active === 0" v-model="active" @formData1="receiveForm1" :addattendance="addattendance"></Step1>
    <Step2 v-else-if="active === 1" v-model="active" @formData2="receiveForm2" :addattendance="addattendance"></Step2>
    <Step3 v-else v-model="active" :parentForm="form" :addattendance="addattendance"></Step3>
  </div>
</template>

<script>
import Step1 from "@/components/home/attendance/addAttendance/step1.vue";
import Step2 from "@/components/home/attendance/addAttendance/step2.vue";
import Step3 from "@/components/home/attendance/addAttendance/step3.vue";
export default {
  name: "addAttendance",
  data() {
    return {
      active: 0,
      form: {},
      addattendance: {}
    };
  },
  methods: {
    // 接收step1传出来的form数据
    receiveForm1(form) {
      this.form = form;
    },
    // 接收step2传出来的form数据
    receiveForm2(form) {
      this.form = Object.assign(this.form, form);
    }
  },
  components: {
    Step1,
    Step2,
    Step3
  }
};
</script>

<style scoped lang="less">
/*返回按钮*/
.back {
  text-decoration: none;
  /*右侧小竖线*/
  &::after {
    content: "";
    display: inline-block;
    width: 2px;
    height: 16px;
    background-color: #ccc;
    margin-left: 20px;
    margin-right: 20px;
  }
}
/*面包屑导航*/
.bread {
  display: inline-block;
}
/*步骤条*/
.el-steps {
  // 成功时候的样式
  /deep/.el-step__title.is-success {
    color: #58a1f4;
  }
  /deep/.el-step__head.is-success {
    color: #58a1f4;
    border-color: #58a1f4;
  }
  // 平常的字体粗细
  /deep/.el-step__title.is-process {
    font-weight: 400;
  }
  /deep/.el-step__icon.is-text {
    border-width: 1px;
  }
  /deep/.el-step__icon-inner {
    font-weight: 400;
  }
  position: relative;
  height: 50px;
  // 每一个步骤条
  /deep/.el-step {
    position: relative;
    height: 50px;
    width: 120px;
  }
  /deep/.el-step.is-horizontal .el-step__line {
    //步骤条那根线
    display: none;
  }
  // 步骤条头部
  /deep/.el-step__head {
    width: auto;
    display: inline-block;
  }
  // 步骤条小圈
  /deep/.el-step__icon {
    width: 20px;
    height: 20px;
  }
  // 步骤条主体
  /deep/.el-step__main {
    left: 25px;
    top: -6px;
    position: absolute;
  }
  .step-one {
    position: absolute;
    left: 0;
    right: 0;
    &::after {
      content: "";
      position: absolute;
      left: 122px;
      top: 13px;
      width: 120px;
      border-bottom: 1px dashed #58a1f4;
    }
  }
  .step-two {
    position: absolute;
    left: 275px;
    right: 0;
    &::after {
      content: "";
      position: absolute;
      left: 123px;
      top: 13px;
      width: 120px;
      border-bottom: 1px dashed #58a1f4;
    }
  }
  .step-three {
    position: absolute;
    left: 540px;
    right: 0;
  }
}
/deep/.el-input {
  width: 300px;
}
// 输入框样式
/deep/.el-input__inner {
  height: 34px;
  line-height: 34px;
}
</style>
