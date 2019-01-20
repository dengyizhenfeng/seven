<template>
  <div id="top">
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <div class="logo">
            <img class="guanjia" src="../../../assets/images/logo.png" alt>
            <span class="gongsi">北京好的科技有限公司</span>
            <span>
              <img src="../../../assets/images/sy_qhqy.png" alt>
            </span>
            <span>升级企业版本</span>
          </div>
        </div>
      </el-col>
      <el-col :span="12" class="top-right">
        <div class="grid-content bg-purple-light">
          <div class="search">
            <el-input placeholder="搜索员工、功能、部门、岗位、帮助文档" v-model="keyword" class="input-with-select">
              <!--<el-button slot="append" icon="el-icon-search"></el-button>-->
            </el-input>
            <i class="el-icon-search"></i>
          </div>
          <span>
            <img src="../../../assets/images/dbxx_xttz.png" alt="">
          </span>
          <span>
            <img src="../../../assets/images/gzt_sqlpc.png" alt="">
          </span>
          <span>
            <img src="../../../assets/images/gzt_bksqb.png" alt="">
          </span>
          <a href="#" class="suggestion">意见反馈</a>
          <a href="#">设置</a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: '' //搜索关键字
    }
  }
}
</script>

<style lang="less">
  #top img {
    vertical-align: middle;
  }
  #top a {
    text-decoration: none;
  }
  .logo .span{
    margin: 0 15px;
  }
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  #top {
    height: 60px;
    line-height: 60px;
  }
  .search {
    display: inline-block;
    width: 300px;
    position: relative;
    .el-icon-search{
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translate(0, -50%);
    }
    .el-input__inner{
      border-radius: 20px !important;
    }
  }
  .top-right{
    text-align: right;
  }
  .logo .guanjia {
    width: 128px;
    height: 32px;
  }
  .logo span {
    font-size: 16px;
  }
  .gongsi {
    padding-left: 32px;
  }
  .logo span img {
    padding-left: 10px;
    padding-right: 30px;
  }
  .logo span:last-child {
    font-size: 12px;
  }
  .top-right a {
    font-size: 12px;
  }
  .top-right a:last-child {
    padding-right: 50px;
  }
  .suggestion {
    padding-right: 20px;
    padding-left: 16px;
    border-left: 1px solid #ccc;
  }
  .top-right img {
    width: 24px;
    height: 24px;
    margin: 0 8px;
  }
  .input-with-select {
    font-size: 12px;
  }
</style>
