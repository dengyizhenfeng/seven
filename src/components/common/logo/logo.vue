<template>
  <div>
    <el-row type="flex" class="row-bg">
      <el-col :span="2">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'logo'
}
</script>

<style scoped>
  .bg-purple {
    background-color: #fff;
    border-right: 1px solid #f6f6f6;
  }
  .bg-purple-light {
    height: 71px;
    background: url('../../../assets/images/logo.png') no-repeat left center;
    -webkit-background-size: 182px 38px;
    background-size: 182px 38px;
    background-color: #fbfbfb;
  }
</style>
