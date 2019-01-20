<template>
  <div class="setting-box">
    <el-row>
      <el-col :span="6">
        <div class="top">
          <img src="@/assets/images/tab_wd3b.png" alt>
          <div class="top-right">
            <h3>补卡申请</h3>
            <span>2019-01-03 16:02:26更新</span>
          </div>
        </div>
        <div class="operation">
          <a class="edit" href="javascript:;">编辑</a>
          <a class="preview" href="javascript:;">预览</a>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="top">
          <img src="@/assets/images/tab_wd3b.png" alt>
          <div class="top-right">
            <h3>补卡申请</h3>
            <span>2019-01-03 16:02:26更新</span>
          </div>
        </div>
        <div class="operation">
          <a class="edit" href="javascript:;">编辑</a>
          <a class="preview" href="javascript:;">预览</a>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="top">
          <img src="@/assets/images/tab_wd3b.png" alt>
          <div class="top-right">
            <h3>补卡申请</h3>
            <span>2019-01-03 16:02:26更新</span>
          </div>
        </div>
        <div class="operation">
          <a class="edit" href="javascript:;">编辑</a>
          <a class="preview" href="javascript:;">预览</a>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="top">
          <img src="@/assets/images/tab_wd3b.png" alt>
          <div class="top-right">
            <h3>补卡申请</h3>
            <span>2019-01-03 16:02:26更新</span>
          </div>
        </div>
        <div class="operation">
          <a class="edit" href="javascript:;">编辑</a>
          <a class="preview" href="javascript:;">预览</a>
        </div>
      </el-col>
    </el-row>
    <el-row>
        <el-col :span="6">
        <div class="top">
          <img src="@/assets/images/tab_wd3b.png" alt>
          <div class="top-right">
            <h3>补卡申请</h3>
            <span>2019-01-03 16:02:26更新</span>
          </div>
        </div>
        <div class="operation">
          <a class="edit" href="javascript:;">编辑</a>
          <a class="preview" href="javascript:;">预览</a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.setting-box .el-col-6 {
  padding-left: 30px;
  height: 220px;
  background: rgba(255, 255, 255, 1);
  border-radius: 5px;
  &:hover{
      box-shadow: 0px 0px 19px 0px rgba(31, 93, 164, 0.18);
  }
  .top {
    display: flex;
    img {
      width: 84px;
      height: 84px;
      margin: 40px 0;
    }
    .top-right {
      flex: 1;
      padding-left: 16px;
      text-align: left;
      h3 {
        color: #61688d;
        font-size: 20px;
        margin-top: 60px;
        margin-bottom: 12px;
      }
      span {
        color: #bec5ea;
      }
    }
  }
  .operation {
    a {
      width: 101px;
      height: 35px;
      line-height: 35px;
      border-radius: 17px;
      text-align: center;
      display: inline-block;
      text-decoration: none;
      &.edit {
        border: 1px solid #58a1f4;
        color: #58a1f4;
        margin-right: 20px;
      }
      &.preview {
        background-color: #58a1f4;
        color: #fff;
      }
    }
  }
}
</style>
