<template>
  <div class="org-stru-box">
    <el-row class="operation">
      <div class="left">
        <span>搜索组织</span>
        <el-input v-model="sousuozuzhi" placeholder="请输入内容"></el-input>
        <el-button type="primary" size="small">查询</el-button>
        <a href="javascript:;" class="reset">重置</a>
      </div>
      <div class="right">
        <a @click="add" href="javascript:;">新增组织</a>
        <a href="javascript:;" @click="importFlag = true">批量导入</a>
        <a href="javascript:;">导出组织架构</a>
      </div>
    </el-row>
    <el-row>
      <!-- 最外层表格 -->
      <el-table :data="tableData5" style="width: 100%" class="outer">
        <el-table-column type="expand">
          <!-- <template slot-scope="props">
            <el-table-colmn label="组织名称" prop="row.id"></el-table-colmn>
          </template>-->
        </el-table-column>
        <el-table-column label="组织名称" prop="zuzhimingcheng"></el-table-column>
        <el-table-column label="在职人数" prop="zaizhirenshu"></el-table-column>
        <el-table-column label="全职员工" prop="quanzhiyuangong"></el-table-column>
        <el-table-column label="非全职员工" prop="feiquanzhiyuangong"></el-table-column>
        <el-table-column label="人员编制" prop="renyuanbianzhi"></el-table-column>
        <el-table-column label="缺编超编" prop="quebian"></el-table-column>
        <el-table-column label="负责人" prop="fuzeren"></el-table-column>
        <el-table-column label="分管领导" prop="fenguanlingdao"></el-table-column>
      </el-table>
    </el-row>
    <!-- 新增组织 -->
    <el-dialog title="新增组织" :visible.sync="dialogFormVisible" custom-class="add-org">
      <el-form :model="addOrganization" :rules="addRules">
        <el-form-item label="组织名称" :label-width="formLabelWidth" prop="name">
          <el-input v-model="addOrganization.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="组织类型" :label-width="formLabelWidth">
          <el-radio v-model="addOrganization.radio" label="1">公司</el-radio>
          <el-radio v-model="addOrganization.radio" label="2">部门</el-radio>
        </el-form-item>
        <el-form-item label="上级组织" :label-width="formLabelWidth">
          <el-select v-model="addOrganization.value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="组织负责人" :label-width="formLabelWidth">
          <el-input v-model="addOrganization.input" placeholder="负责人姓名/拼音"></el-input>
          <img src="../../../../assets/images/organization/tj_fdjss.png" alt>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false" class="makesure">
          完成
          <img src="@/assets/images/organization/kq_qjbs.png" alt>
        </el-button>
        <el-button @click="dialogFormVisible = false" class="cancel">取消</el-button>
      </div>
    </el-dialog>
    <!-- 导入组织架构 -->
    <el-dialog title="导入组织架构" :visible.sync="importFlag" custom-class="import-org">
      <span>如果您的企业组织有较多层级的组织架构，您可以通过导入组织名称和组织代码的方式来一次性建立完整的组织架构。</span>
      <el-row class="import-step1">
        <h3>第一步：导出文件</h3>
        <span>导出标准模板，快捷维护公司的组织架构图</span>
        <a href="javascript:;">导出文件</a>
      </el-row>
      <el-row class="import-step2">
        <h3>第二部：导入文件</h3>
        <span>请务必确认您已经设置了各层级的组织名称和组织代码，导入时以来组织名称和组织代码自动确认组织层级和归属</span>
        <a href="javascript">导入文件</a>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false" class="determine">
          确 定
          <img src="@/assets/images/organization/kq_qjbs.png" alt>
        </el-button>
        <el-button @click="dialogVisible = false" class="cancel">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 控制导入组织架构
      importFlag: false,
      // 新增的规则
      addRules: {
        name: [{ required: true, message: "请输入活动名称", trigger: "blur" }]
      },
      //搜索组织
      sousuozuzhi: "",
      //表格数据
      tableData5: [
        {
          zuzhimingcheng: "zuzhimingcheng",
          zaizhirenshu: "zaizhirenshu",
          quanzhiyuangong: "quanzhiyuangong",
          feiquanzhiyuangong: "feiquanzhiyuangong",
          renyuanbianzhi: "renyuanbianzhi",
          quebian: "quebian",
          fuzeren: "fuzeren",
          fenguanlingdao: "fenguanlingdao"
        },
        {
          zuzhimingcheng: "zuzhimingcheng",
          zaizhirenshu: "zaizhirenshu",
          quanzhiyuangong: "quanzhiyuangong",
          renyuanbianzhi: "renyuanbianzhi",
          quebian: "quebian",
          fuzeren: "fuzeren",
          fenguanlingdao: "fenguanlingdao"
        }
      ],
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        }
      ],
      input: "",
      dialogFormVisible: false,
      formLabelWidth: "110px",
      //   add表单数据
      addOrganization: {
        name: "",
        input: "",
        radio: "",
        value: ""
      }
    };
  },

  methods: {
    add() {
      this.dialogFormVisible = true;
    }
  }
};
</script>
<style lang='less' scoped>
.org-stru-box {
  .operation {
    height: 50px;
    border-bottom: 1px solid #eef0fa;
    margin-bottom: 24px;
    .left {
      margin-top: 10px;
      float: left;
      span {
        color: #3b4059;
        font-size: 14px;
      }
      .el-input {
        width: 136px;
        border-radius: 4px;
        /deep/.el-input__inner {
          height: 30px;
          line-height: 30;
        }
      }
      //   查询按钮
      .el-button {
        margin-left: 40px;
        width: 70px;
        height: 30px;
        text-align: center;
      }
      .reset {
        display: inline-block;
        width: 70px;
        height: 30px;
        text-align: center;
        text-decoration: none;
        color: #61688d;
        font-size: 13px;
      }
    }
    .right {
      margin-top: 10px;
      float: right;
      a {
        display: inline-block;
        padding: 0 22px;
        height: 30px;
        line-height: 30px;
        text-decoration: none;
        color: #58a1f4;
        border: 1px solid #58a1f4;
        border-radius: 4px;
        font-size: 14px;
        &:first-child {
          background-color: #58a1f4;
          color: #fff;
        }
      }
    }
  }
  //   表格样式
  /deep/.el-table thead tr th {
    background-color: #eef0fa !important;
    height: 40px;
    line-height: 40px;
    padding: 0;
  }
  // 新增组织弹出框样式
  /deep/.el-dialog.add-org {
    min-width: 720px;
    width: 720px;
    /deep/.el-dialog__header {
      padding: 0 24px;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #eef0fa;
    }
    /deep/.el-dialog__body {
      padding: 0;
      /deep/.el-form-item {
        padding-top: 13px;
        padding-left: 24px;
        height: 60px;
        margin: 0;
        line-height: 60px;
        .el-input__inner {
          height: 34px;
          line-height: 34px;
        }
      }
    }
    .el-dialog__headerbtn {
      top: 12px;
    }
    // 输入框对应样式
    .el-input__suffix {
      right: 10px !important;
    }
    .el-form-item img {
      position: absolute;
      right: 140px;
      top: 50%;
      transform: translateY(-50%);
    }
    .el-input {
      width: 460px;
    }
    .el-form-item__label {
      text-align: left;
    }
    // 错误提示框
    /deep/.el-form-item__error {
      position: absolute;
      top: 10px;
      left: 14px;
    }
    .makesure {
      padding: 0;
      width: 240px;
      height: 42px;
      line-height: 42px;
      text-align: center;
      background-color: #58a1f4;
      font-size: 16px;
    }
  }
  // 导入组织架构
  /deep/.el-dialog.import-org {
    min-width: 720px;
    width: 720px;
    /deep/.el-dialog__header {
      padding: 0 24px;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #eef0fa;
      font-size: 16px;
      font-weight: 700;
      color: #3b4059;
      font-family: "MicrosoftYaHei-Bold";
      .el-dialog__headerbtn {
        right: 15px;
        top: 15px;
      }
    }
    /deep/.el-dialog__body {
      padding: 14px 24px 0;
    }
    // 导入里面的第一步
    .import-step1 {
      padding-top: 28px;
      h3 {
        font-size: 14px;
        color: #3b4059;
        padding-bottom: 14px;
      }
      a {
        display: block;
        width: 102px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border: 1px solid #58a1f4;
        color: #58a1f4;
        border-radius: 4px;
        text-decoration: none;
      }
      span {
        display: inline-block;
        padding-bottom: 10px;
      }
    }
    // 导入里面的第二步
    .import-step2 {
      padding-top: 38px;
      padding-bottom: 50px;
      h3 {
        font-size: 14px;
        color: #3b4059;
        padding-bottom: 14px;
      }
      a {
        display: block;
        width: 102px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border: 1px solid #58a1f4;
        background-color: #58a1f4;
        color: #fff;
        border-radius: 4px;
        text-decoration: none;
      }
      span {
        display: inline-block;
        padding-bottom: 10px;
      }
    }
  }

  /deep/.el-dialog__footer {
    display: inline-block;
    padding: 0 0 14px;
    margin-left: 24px;
    width: 642px;
    border-top: 1px solid #eef0fa;
    padding-top: 14px;
    text-align: left;
    .determine {
      width: 240px;
      height: 42px;
      padding: 0;
      background-color: #58a1f4;
      text-align: center;
      line-height: 42px;
      color: #fff;
      font-size: 16px;
    }
    .cancel {
      width: 112px;
      height: 42px;
      line-height: 42px;
      padding: 0;
      text-align: center;
      margin-left: 0;
      border: none;
      font-size: 16px;
    }
  }
}
</style>