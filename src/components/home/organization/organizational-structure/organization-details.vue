<template>
  <div class="organ-details-box">
    <OrganizationDetailsBread/>
    <div class="organ-detail-head">
      <div class="left">
        <h2>71管家-技术部</h2>
        <span>上级组织：北京俊宏科技有限公司</span>
      </div>
      <div class="right">
        <div class="right-1">
          <div>
            在职员工
            <span>1</span>人
          </div>
          <a href="javascript:;" class="person-manage">人员管理</a>
        </div>
        <div class="right-2">
          <div>
            岗位数量
            <span>1</span>个
          </div>
          <a href="javascript:;" class="more">更多功能</a>
        </div>
      </div>
    </div>
    <div class="quit-edit">
      <div class="title">
        <h3>快捷操作</h3>
        <a href="javascript:;" class="edit" v-if="editFlag" @click="editFlag = !editFlag">
          <img src="@/assets/images/organization/zzjg_bj_ic.png" alt="">
          编辑
        </a>
      </div>
      <div class="body" v-if="!editFlag">
        <el-form label-width="123px" :model="form">
          <el-form-item label="组织名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="组织类型">
            <el-radio-group v-model="form.name">
              <el-radio label="公司"></el-radio>
              <el-radio label="部门"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="组织简称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="组织代码">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="上级组织">
            <el-select v-model="form.name" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="组织负责人">
            <el-input v-model="form.name"></el-input>
            <img src="@/assets/images/organization/tj_fdjss.png" alt="">
          </el-form-item>
          <el-form-item label="分管领导">
            <el-input v-model="form.name"></el-input>
            <img src="@/assets/images/organization/tj_fdjss.png" alt="">
          </el-form-item>
          <el-form-item label="组织描述">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
        </el-form>

      </div>
      <div v-if="!editFlag" class="footer">
        <div class="a-box">
          <a href="javascript:;" class="save">保存</a>
          <a href="javascript:;" class="cancel">取消</a>
        </div>
      </div>
      <div class="edited-body" v-if="editFlag">
        <el-form label-width="123px" :model="form">
          <el-form-item label="组织名称">
            71管家
          </el-form-item>
          <el-form-item label="组织简称">
            --
          </el-form-item>
          <el-form-item label="上级组织">
            互联网部/产品部/产品一部
          </el-form-item>
          <el-form-item label="分管领导">
            --
          </el-form-item>
          <el-form-item label="组织描述">
            --
          </el-form-item>
          <el-form-item label="组织类型">
            部门
          </el-form-item>
          <el-form-item label="组织代码">
            --
          </el-form-item>
          <el-form-item label="组织负责人">
            --
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import OrganizationDetailsBread from "./organizationDetailsBread.vue";

  export default {
    data() {
      return {
        editFlag: true, //是否显示编辑按钮
        form: {
          name: ''
        }
      };
    },
    components: {
      OrganizationDetailsBread
    },
    methods: {}
  };
</script>
<style lang='less' scoped>
  .organ-details-box {
    // 编辑头部
    .organ-detail-head {
      height: 103px;
      padding-top: 35px;
      overflow: hidden;
      border-bottom: 1px solid #eef0fa;
      // 头部左侧
      .left {
        position: relative;
        float: left;
        padding-right: 50px;
        h2 {
          font-size: 18px;
          font-family: MicrosoftYaHei-Bold;
          font-weight: 700;
          margin-bottom: 5px;
          height: 18px;
        }
        span {
          width: 209px;
          height: 12px;
          font-size: 14px;
          color: #61688d;
        }
        &::after {
          content: "";
          position: absolute;
          width: 1px;
          height: 30px;
          left: 230px;
          bottom: 0;
          background-color: #eef0fa;
        }
      }
      // 头部右侧
      .right {
        float: left;
        // 按钮样式
        a {
          display: block;
          width: 102px;
          height: 30px;
          margin-top: 10px;
          line-height: 30px;
          opacity: 0.9;
          border-radius: 4px;
          text-decoration: none;
          font-size: 14px;
        }
        .right-1 {
          float: left;
          width: 102px;
          text-align: center;
          & > div {
            height: 16px;
            font-size: 14px;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: #3b4059;
            span {
              color: #58a1f4;
              font-size: 16px;
            }
          }
          .person-manage {
            background-color: #58a1f4;
            color: #fff;
          }
        }
        .right-2 {
          float: left;
          margin-left: 48px;
          width: 102px;
          text-align: center;
          & > div {
            height: 16px;
            font-size: 14px;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: #3b4059;
            span {
              color: #58a1f4;
              font-size: 16px;
            }
          }
          .more {
            color: #58a1f4;
            border: 1px solid #58a1f4;
          }
        }
      }
    }
    // 快捷编辑
    .quit-edit {
      // 快捷编辑头部
      .title {
        padding-top: 37px;
        height: 70px;
        position: relative;
        .edit {
          position: absolute;
          left: 610px;
          top: 30px;
          width: 80px;
          height: 30px;
          line-height: 30px;
          background-color: #58A1F4;
          border-radius: 15px;
          text-align: center;
          color: #fff;
          text-decoration: none;
          font-size: 14px;
        }
        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 43px;
          width: 4px;
          height: 10px;
          border-radius: 2px;
          background-color: #58A1F4;
        }
        &::after {
          content: '';
          position: absolute;
          left: 95px;
          top: 42px;
          width: 497px;
          border-bottom: 1px dashed #EEF0FA;
        }
        h3 {
          padding-left: 5px;
          font-size: 16px;
          color: #3B4059;

        }
      }
      /*快捷编辑内容*/
      .body {
        width: 750px;
        /*height: 610px;*/
        border: 1px solid rgba(190, 197, 234, 1);
        border-radius: 5px;

        /deep/ .el-form-item {
          margin-bottom: 0;
          height: 60px;
          padding-left: 24px;
          padding-top: 14px;
          text-align: left;
          &:last-child {
            height: auto;
            padding-bottom: 40px;
          }
          img {
            position: absolute;
            top: 50%;
            right: 318px;
            transform: translateY(-50%);
          }
          .el-select .el-input {
            width: auto;
          }
          .el-input__suffix {
            right: 14px;
          }
          .el-form-item__label {
            text-align: left;
          }
          /deep/ .el-input__inner {
            width: 300px;
            height: 34px;
          }
          /deep/ .el-textarea__inner {
            width: 533px;
            height: 138px;
          }
        }

      }
      .footer {
        height: 110px;
        padding-top: 40px;
        line-height: 70px;
        .a-box {
          height: 70px;
          padding-top: 14px;
          line-height: 40px;
          border-top: 1px solid #EEF0FA;
          a {
            display: inline-block;
            text-decoration: none;
            &.save {
              width: 240px;
              height: 42px;
              background: rgba(88, 161, 244, 1);
              opacity: 0.5;
              border-radius: 3px;
              font-size: 16px;
              font-family: MicrosoftYaHei;
              font-weight: 400;
              color: rgba(97, 104, 141, 1);
              text-align: center;
            }
            &.cancel {
              margin-left: 48px;
              color: #61688D;
              font-size: 16px;
              font-family: MicrosoftYaHei;
            }
          }
        }
      }
      .edited-body {
        width: 750px;
        height: 430px;
        border-radius: 5px;
        /deep/ .el-form-item {
          margin-bottom: 0;
          height: 60px;
          padding-left: 24px;
          padding-top: 14px;
          text-align: left;
          img {
            position: absolute;
            top: 50%;
            right: 318px;
            transform: translateY(-50%);
          }
          .el-select .el-input {
            width: auto;
          }
          .el-input__suffix {
            right: 14px;
          }
          .el-form-item__label {
            text-align: left;
          }
          /deep/ .el-input__inner {
            width: 300px;
            height: 34px;
          }
          /deep/ .el-textarea__inner {
            width: 533px;
            height: 138px;
          }
        }

      }

    }
  }

</style>
