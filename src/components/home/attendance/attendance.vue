<template>
  <div class="box">
    <div class="attendance-top">
      <a href="javascript:;" class="back">返回</a>
      <div class="attendance-link">
        <router-link to="/attendance/home" active-class="active">考勤组管理</router-link>
        <router-link to="/attendance/addAttendance" active-class="active">新增考勤组</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "attendance"
  }
</script>

<style lang="less" scoped>
  .box{
    padding: 0 40px;
    .attendance-top{
      height: 60px;
      line-height: 36px;
      padding-top: 12px;
      padding-bottom: 12px;
      font-size: 0; //为了消除inline-block元素产生的缝隙，但是子元素会继承
      .back{
        width: 80px;
        margin-right: 19px;
        border-right: 1px solid #EEF0FA;
        text-decoration: none;
        color: #61688D;
      }
      a{
        display: inline-block;
        font-size: 16px;
      }
      .attendance-link{
        display: inline-block;
        width: 240px;
        height: 34px;
        border: 1px solid #BEC5EA;
        border-radius: 17px;
        box-sizing: content-box;
        a{
          width: 120px;
          height: 34px;
          line-height: 34px;
          text-align: center;
          text-decoration: none;
          color: #61688D;
        }
        .active{
          text-decoration: none;
          background-color: #58A1F4;
          color: #fff;
          box-shadow: 0 0 0 1px #58A1F4;
          border-radius: 17px;
        }
      }
    }
  }
</style>
