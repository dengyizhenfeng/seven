<template>
  <div class="approval-box">
    <el-row class="approval-link">
      <router-link to="/approval/approval-list" active-class="approval-active">审批列表</router-link>
      <router-link to="/approval/approval-setting" active-class="approval-active">审批设置</router-link>
    </el-row>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.approval-box {
  background-color: #fff;
  .approval-link {
    text-align: center;
    border-bottom: 1px solid #eef0fa;
    padding-bottom: 20px;
    margin-bottom: 10px;
    a {
      text-decoration: none;
      font-size: 16px;
      &:first-child{
        margin-right: 56px;
      }
    }
    .approval-active {
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
</style>
