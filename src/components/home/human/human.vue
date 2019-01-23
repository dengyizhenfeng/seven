<template>
  <div class="human-box">
    <el-row>
      <div class="human-link">
        <router-link to="/human/current-human" active-class="human-active">当月工资</router-link>
        <router-link to="/human/history-human" active-class="human-active">历史工资</router-link>
        <router-link to="/human/electronics-human" active-class="human-active">电子工资条</router-link>
      </div>
    </el-row>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "human"
  }
</script>

<style scoped lang="less">
  .human-box{
    & > .el-row {
      text-align: center;
      .human-link {
        display: inline-block;
        text-align: center;
        border-bottom: 1px solid #eef0fa;
        padding-bottom: 20px;
        margin-bottom: 10px;
        a {
          text-decoration: none;
          font-size: 16px;
          &:first-child {
          }
        }
        .human-active {
          position: relative;
          font-weight: 700;
          &::after {
            content: "";
            position: absolute;
            left: 50%;
            transform: translate(-50%);
            bottom: -16px;
            height: 4px;
            width: 24px;
            background-color: #58a1f4;
            border-radius: 2px;
          }
        }
      }
    }
  }
</style>
