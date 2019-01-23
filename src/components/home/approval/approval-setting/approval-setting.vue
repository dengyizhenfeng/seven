<template>
  <div class="setting-box">
    <el-row>
      <el-col :span="6">
        <div class="top">
          <img src="@/assets/images/approval/sp_bksq_zh.png" alt>
          <div class="top-right">
            <h3>补卡申请</h3>
            <span>2019-01-03 16:02:26更新</span>
          </div>
        </div>
        <div class="operation">
          <a class="edit" href="javascript:;" @click="dialogFormVisible1 = true">
            <img
              src="@/assets/images/approval/sp_bj_zh.png"
              alt
              @click="centerDialogVisible = true"
            >编辑
          </a>
          <a class="preview" href="javascript:;" @click="centerDialogVisible1 = true">
            <img src="@/assets/images/approval/sp_yl_dl.png" alt>预览
          </a>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="top">
          <img src="@/assets/images/approval/sp_jb_zh.png" alt>
          <div class="top-right">
            <h3>加班申请</h3>
            <span>2019-01-03 16:02:26更新</span>
          </div>
        </div>
        <div class="operation">
          <a class="edit" href="javascript:;" @click="dialogFormVisible2 = true">
            <img src="@/assets/images/approval/sp_bj_zh.png" alt>编辑
          </a>
          <a class="preview" href="javascript:;" @click="centerDialogVisible2 = true">
            <img src="@/assets/images/approval/sp_yl_dl.png" alt>预览
          </a>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="top">
          <img src="@/assets/images/approval/sp_qj_zh.png" alt>
          <div class="top-right">
            <h3>请假申请</h3>
            <span>2019-01-03 16:02:26更新</span>
          </div>
        </div>
        <div class="operation">
          <a class="edit" href="javascript:;" @click="dialogFormVisible3 = true">
            <img src="@/assets/images/approval/sp_bj_zh.png" alt>编辑
          </a>
          <a class="preview" href="javascript:;" @click="centerDialogVisible3 = true">
            <img src="@/assets/images/approval/sp_yl_dl.png" alt>预览
          </a>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="top">
          <img src="@/assets/images/approval/sp_wc_zh.png" alt>
          <div class="top-right">
            <h3>外出申请</h3>
            <span>2019-01-03 16:02:26更新</span>
          </div>
        </div>
        <div class="operation">
          <a class="edit" href="javascript:;" @click="dialogFormVisible4 = true">
            <img src="@/assets/images/approval/sp_bj_zh.png" alt>编辑
          </a>
          <a class="preview" href="javascript:;" @click="centerDialogVisible4 = true">
            <img src="@/assets/images/approval/sp_yl_dl.png" alt>预览
          </a>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <div class="top">
          <img src="@/assets/images/approval/sp_cc_zh.png" alt>
          <div class="top-right">
            <h3>出差申请</h3>
            <span>2019-01-03 16:02:26更新</span>
          </div>
        </div>
        <div class="operation">
          <a class="edit" href="javascript:;" @click="dialogFormVisible5 = true">
            <img src="@/assets/images/approval/sp_bj_zh.png" alt>编辑
          </a>
          <a class="preview" href="javascript:;" @click="centerDialogVisible5 = true">
            <img src="@/assets/images/approval/sp_yl_dl.png" alt>预览
          </a>
        </div>
      </el-col>
    </el-row>
    <div class="editt">
        <!-- 补卡弹出框 -->
      <el-dialog title="审批流程编辑" :visible.sync="dialogFormVisible1">
        <div class="content">
          <div class="name">
            <span>*&nbsp;审批名称</span>
            <em>补卡</em>
          </div>
          <div class="approver">
            <i>*&nbsp;审批人</i>
            <el-checkbox v-model="checked">部门负责人审批</el-checkbox>
            <el-select v-model="value" placeholder="指定审批人">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="copy">
            <span>抄送人</span>
            <el-select v-model="value" placeholder="添加抄送人">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="explain">
            <span>审批说明</span>
            <el-input type="textarea" :rows="2" placeholder="请点击输入审批说明(50字内)" v-model="textarea"></el-input>
          </div>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogFormVisible1 = false">
            保存信息&nbsp;&nbsp;
            <img src="@/assets/images/kq_qjbs.png" alt>
          </el-button>
          <el-button @click="dialogFormVisible1 = false">取 消</el-button>
        </div>
      </el-dialog>
      <!-- 加班弹出框 -->
      <el-dialog title="审批流程编辑" :visible.sync="dialogFormVisible2">
        <div class="content">
          <div class="name">
            <span>*&nbsp;审批名称</span>
            <em>加班</em>
          </div>
          <div class="approver">
            <i>*&nbsp;审批人</i>
            <el-checkbox v-model="checked">部门负责人审批</el-checkbox>
            <el-select v-model="value" placeholder="指定审批人">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="copy">
            <span>抄送人</span>
            <el-select v-model="value" placeholder="添加抄送人">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="explain">
            <span>审批说明</span>
            <el-input type="textarea" :rows="2" placeholder="请点击输入审批说明(50字内)" v-model="textarea"></el-input>
          </div>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogFormVisible2 = false">
            保存信息&nbsp;&nbsp;
            <img src="@/assets/images/kq_qjbs.png" alt>
          </el-button>
          <el-button @click="dialogFormVisible2 = false">取 消</el-button>
        </div>
      </el-dialog>
      <!-- 请假弹出框 -->
      <el-dialog title="审批流程编辑" :visible.sync="dialogFormVisible3">
        <div class="content">
          <div class="name">
            <span>*&nbsp;审批名称</span>
            <em>请假</em>
          </div>
          <div class="approver">
            <i>*&nbsp;审批人</i>
            <el-checkbox v-model="checked">部门负责人审批</el-checkbox>
            <el-select v-model="value" placeholder="指定审批人">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="copy">
            <span>抄送人</span>
            <el-select v-model="value" placeholder="添加抄送人">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="explain">
            <span>审批说明</span>
            <el-input type="textarea" :rows="2" placeholder="请点击输入审批说明(50字内)" v-model="textarea"></el-input>
          </div>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogFormVisible3 = false">
            保存信息&nbsp;&nbsp;
            <img src="@/assets/images/kq_qjbs.png" alt>
          </el-button>
          <el-button @click="dialogFormVisible3 = false">取 消</el-button>
        </div>
      </el-dialog>
      <!-- 外出弹出框 -->
      <el-dialog title="审批流程编辑" :visible.sync="dialogFormVisible4">
        <div class="content">
          <div class="name">
            <span>*&nbsp;审批名称</span>
            <em>外出</em>
          </div>
          <div class="approver">
            <i>*&nbsp;审批人</i>
            <el-checkbox v-model="checked">部门负责人审批</el-checkbox>
            <el-select v-model="value" placeholder="指定审批人">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="copy">
            <span>抄送人</span>
            <el-select v-model="value" placeholder="添加抄送人">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="explain">
            <span>审批说明</span>
            <el-input type="textarea" :rows="2" placeholder="请点击输入审批说明(50字内)" v-model="textarea"></el-input>
          </div>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogFormVisible4 = false">
            保存信息&nbsp;&nbsp;
            <img src="@/assets/images/kq_qjbs.png" alt>
          </el-button>
          <el-button @click="dialogFormVisible4 = false">取 消</el-button>
        </div>
      </el-dialog>
      <!-- 出差弹出框 -->
      <el-dialog title="审批流程编辑" :visible.sync="dialogFormVisible5">
        <div class="content">
          <div class="name">
            <span>*&nbsp;审批名称</span>
            <em>出差</em>
          </div>
          <div class="approver">
            <i>*&nbsp;审批人</i>
            <el-checkbox v-model="checked">部门负责人审批</el-checkbox>
            <el-select v-model="value" placeholder="指定审批人">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="copy">
            <span>抄送人</span>
            <el-select v-model="value" placeholder="添加抄送人">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="explain">
            <span>审批说明</span>
            <el-input type="textarea" :rows="2" placeholder="请点击输入审批说明(50字内)" v-model="textarea"></el-input>
          </div>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogFormVisible5 = false">
            保存信息&nbsp;&nbsp;
            <img src="@/assets/images/kq_qjbs.png" alt>
          </el-button>
          <el-button @click="dialogFormVisible5 = false">取 消</el-button>
        </div>
      </el-dialog>
    </div>
    <div class="previeww">
      <!-- 预览弹框 -->
      <el-dialog :visible.sync="centerDialogVisible1" width="20%" center>
        <img src="@/assets/images/approval/patch.png" alt="">
      </el-dialog>
      <el-dialog :visible.sync="centerDialogVisible2" width="20%" center>
        <img src="@/assets/images/approval/overtime.png" alt="">
      </el-dialog>
      <el-dialog :visible.sync="centerDialogVisible3" width="20%" center>
        <img src="@/assets/images/approval/leave.png" alt="">
      </el-dialog>
      <el-dialog :visible.sync="centerDialogVisible4" width="20%" center>
        <img src="@/assets/images/approval/goout.png" alt="">
      </el-dialog>
      <el-dialog :visible.sync="centerDialogVisible5" width="20%" center>
        <img src="@/assets/images/approval/business.png" alt="">
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 编辑弹框
      dialogFormVisible1: false,
      dialogFormVisible2: false,
      dialogFormVisible3: false,
      dialogFormVisible4: false,
      dialogFormVisible5: false,
      // 预览弹框
      centerDialogVisible1: false,
      centerDialogVisible2: false,
      centerDialogVisible3: false,
      centerDialogVisible4: false,
      centerDialogVisible5: false,
      // 编辑数据
      formLabelAlign: {
        name: "",
        region: "0.00",
        type: "0"
      },
      options: [
        {
          value: "选项1",
          label: "李四"
        },
        {
          value: "选项2",
          label: "王五"
        }
      ],
      value: "",
      textarea: ""
    };
  },
  methods: {
    handleClick() {
      alert("button click");
    }
  }
};
</script>

<style lang="less">
.setting-box {
  .el-col-6 {
    padding-left: 30px;
    height: 220px;
    background: rgba(255, 255, 255, 1);
    border-radius: 5px;
    &:hover {
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
        img {
          padding-right: 8px;
        }
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
  // 编辑弹框样式
  /deep/.el-dialog {
    width: 720px !important;
    .el-dialog__title {
      color: #3b4059;
      font-size: 16px;
      font-weight: bold;
    }
    .content {
      div {
        margin: 4px 0;
      }
      span {
        color: #61688d;
        font-size: 14px;
      }
      .name {
        em {
          color: #3b4059;
          font-size: 16px;
          font-weight: bold;
          font-style: normal;
        }
        span {
          // color: #61688D;
          padding-right: 40px;
        }
      }
      .approver {
        margin: 15px 0;
        i {
          font-style: normal;
          padding-right: 56px;
        }
        .el-checkbox {
          padding-right: 20px;
          border-right: 1px solid #eef0fa;
        }
        .el-input {
          margin-left: 20px;
          width: 150px;
          height: 34px;
        }
      }
      .copy {
        padding-left: 10px;
        margin-bottom: 10px;
        .el-input {
          margin-left: 224px;
          width: 150px;
          height: 34px;
        }
      }
      .explain {
        padding-left: 10px;
        .el-textarea {
          display: inline-block;
          width: 360px;
          height: 16px;
          padding-left: 40px;
          .el-textarea__inner {
            font-size: 14px !important;
            color: #61688d;
          }
        }
      }
    }
    .dialog-footer {
      padding-right: 468px;
      margin-top: 80px;
      border-top: 1px solid #eef0fa;
      padding-top: 16px;
      span:first-child {
        width: 240px;
      }
    }
  }
  // 预览弹框
  .previeww {
    /deep/.el-dialog--center {
      position: relative;
      width: 370px !important;
      height: 658px;
      border-radius: 15px;
      img {
        position: absolute;
        width: 370px;
        // height: 658px;
        top: 0;
        left: 0;
        border-radius: 15px;
      }
    }
  }
}
</style>
