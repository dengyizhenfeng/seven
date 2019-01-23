<template>
  <div class="details-bread">
    <a href="javascript:;">
      <img src="@/assets/images/organization/kq_fh.png" alt>
      返回
    </a>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">组织管理</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path: '/'}">活动管理 - 71管家</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {}
};
</script>
<style lang='less' scoped>
.details-bread {
  a {
    text-decoration: none;
    color: #61688d;
    position: relative;
    font-size: 16px;
    img {
      vertical-align: middle;
    }
    &::after {
      content: "";
      position: absolute;
      width: 1px;
      height: 30px;
      background-color: #eef0fa;
      left: 71px;
      top: -5px;
    }
  }
  width: 473px;
  height: 60px;
  line-height: 60px;
  padding-left: 38px;
  color: #61688d;
  // 面包屑样式
  .el-breadcrumb {
    margin-left: 56px;
    display: inline-block;
  }
  /deep/.el-breadcrumb__separator {
    font-weight: 400;
  }
  /deep/.el-breadcrumb__inner a,
  /deep/.el-breadcrumb__inner.is-link {
    font-weight: 400;
  }
  /deep/.el-breadcrumb__item:last-child .el-breadcrumb__inner,
  .el-breadcrumb__item:last-child .el-breadcrumb__inner a,
  .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover,
  .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
    font-weight: 700;
  }
  /deep/.el-breadcrumb__inner a:hover, /deep/.el-breadcrumb__inner.is-link:hover{
    color: #61688d;
  }
}
</style>