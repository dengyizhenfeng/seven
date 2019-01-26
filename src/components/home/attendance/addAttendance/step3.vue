<template>
  <div class="step3">
    <h3>考勤规则设置</h3>
    <p>请按照步骤设置考勤组相关规则，设置完成后立即生效</p>
    <el-form ref="form" :model="form" label-width="80px">
      <!-- <el-form-item label="选择考勤规则">
        <el-select placeholder="企业默认考勤规则">
          <el-option label="规则一" value="shanghai"></el-option>
          <el-option label="规则二" value="beijing"></el-option>
        </el-select>
      </el-form-item>-->
      <p class="rule">企业不打卡人员、企业默认考勤组方案在使用</p>
      <el-row class="deduction">
        <el-col :span="24">
          <div class="deduction">
            <!-- 迟到扣款 -->
            <el-row class="deduction">
              <div class="deduction-left">
                <img src="../../../../assets/images/kq_cdbj.png" alt>
                <p>迟到扣款</p>
                <p>按迟到分钟扣款</p>
              </div>
              <div class="deduction-right">
                <img src="../../../../assets/images/kq_bsbjss.png" alt>
                <p>扣款5.00元/分钟</p>
                <p>每月累计30分钟以内，不扣款</p>
                <div class="edit" @click="dialogFormVisible1 = true">
                  <span>
                    <img src="../../../../assets/images/kq_cdzu.png" alt>
                  </span>
                  <span>编辑</span>
                </div>
              </div>
            </el-row>
            <!-- 早退扣款 -->
            <el-row class="deduction">
              <div class="deduction-left">
                <img src="../../../../assets/images/kq_ztbj.png" alt>
                <p>早退扣款</p>
                <p>按早退分钟扣款</p>
              </div>
              <div class="deduction-right">
                <img src="../../../../assets/images/kq_bsbjss.png" alt>
                <p>扣款5.00元/分钟</p>
                <p>每月累计30分钟以内，不扣款</p>
                <div class="edit" @click="dialogFormVisible2 = true">
                  <span>
                    <img src="../../../../assets/images/kq_cdzu.png" alt>
                  </span>
                  <span>编辑</span>
                </div>
              </div>
            </el-row>
            <!-- 旷工扣款 -->
            <el-row class="deduction">
              <div class="deduction-left">
                <img src="../../../../assets/images/kq_kgbj.png" alt>
                <p>旷工扣款</p>
                <p>按旷工分钟扣款</p>
              </div>
              <div class="deduction-right">
                <img src="../../../../assets/images/kq_bsbjss.png" alt>
                <p>扣款5.00元/分钟</p>
                <p>每月累计30分钟以内，不扣款</p>
                <div class="edit" @click="dialogFormVisible3 = true">
                  <span>
                    <img src="../../../../assets/images/kq_cdzu.png" alt>
                  </span>
                  <span>编辑</span>
                </div>
              </div>
            </el-row>
          </div>
        </el-col>
      </el-row>
      <el-form-item label="工作日加班">
        <el-select v-model="form.weekdayOvertime" placeholder="不计加班费">
          <el-option v-for="item in opt" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="周末加班">
        <el-select v-model="form.weekendOvertime" placeholder="不计加班费">
          <el-option v-for="item in opt" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-row class="btn">
        <el-button type="success" plain @click="prevStep">上一步</el-button>
        <el-button type="success"  @click="dialogFormVisible4 = true">完成</el-button>
      </el-row>
    </el-form>
    <!-- 迟到编辑弹出框 -->
    <!-- <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button> -->
    <el-dialog title="迟到扣款设置" :visible.sync="dialogFormVisible1">
      <el-form label-width="80px" :model="lateCharge">
        <div class="tips">
          <img src="../../../../assets/images/kq_qskbj.png" alt>
          <p>考勤规则修改后将同时影响其他正在使用该考勤规则的考勤组，请确认后修改</p>
        </div>
        <el-form-item label="迟到扣款规则">
          <el-input value="按迟到分钟扣款" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label class="middle">
          <el-input v-model.number="lateCharge.charge"></el-input>&nbsp;&nbsp;
          <span>元/小时</span>
        </el-form-item>
        <el-form-item label="每月累计迟到">
          <el-input v-model.number="lateCharge.addUp"></el-input>&nbsp;&nbsp;
          <span>分钟，不扣款</span>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible1 = false">
          完 成&nbsp;&nbsp;
          <img src="../../../../assets/images/kq_qjbs.png" alt>
        </el-button>
        <el-button @click="dialogFormVisible1 = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 早退编辑弹出框 -->
    <el-dialog title="早退扣款设置" :visible.sync="dialogFormVisible2">
      <el-form label-width="80px" :model="earlyCharge">
        <div class="tips">
          <img src="../../../../assets/images/kq_qskbj.png" alt>
          <p>考勤规则修改后将同时影响其他正在使用该考勤规则的考勤组，请确认后修改</p>
        </div>
        <el-form-item label="早退扣款规则">
          <el-input value="按早退分钟扣款" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label class="middle">
          <el-input v-model.number="earlyCharge.charge"></el-input>&nbsp;&nbsp;
          <span>元/小时</span>
        </el-form-item>
        <el-form-item label="每月累计迟到">
          <el-input v-model.number="earlyCharge.addUp"></el-input>&nbsp;&nbsp;
          <span>分钟，不扣款</span>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible2 = false">
          完 成&nbsp;&nbsp;
          <img src="../../../../assets/images/kq_qjbs.png" alt>
        </el-button>
        <el-button @click="dialogFormVisible2 = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 旷工编辑扣款 -->
    <el-dialog title="旷工扣款设置" :visible.sync="dialogFormVisible3">
      <el-form label-width="80px" :model="absentCharge">
        <div class="tips">
          <img src="../../../../assets/images/kq_qskbj.png" alt>
          <p>考勤规则修改后将同时影响其他正在使用该考勤规则的考勤组，请确认后修改</p>
        </div>
        <el-form-item label="旷工扣款规则">
          <el-input value="按固定金额扣款" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label class="middle">
          <el-input v-model.number="absentCharge.charge"></el-input>&nbsp;&nbsp;
          <span>元/天</span>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="complete">
          完 成&nbsp;&nbsp;
          <img src="../../../../assets/images/kq_qjbs.png" alt>
        </el-button>
        <el-button @click="dialogFormVisible3 = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 完成弹框 -->
    <el-dialog title="审批流程编辑" :visible.sync="dialogFormVisible4" class="complete">
      <div class="content">
        <img src="../../../../assets/images/kq_czwc.png" alt="">
        <p>保存成功</p>
        <p>您已完成了一个考勤组的设置，可继续进行以下操作</p>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible1 = false">返回</el-button>
        <el-button type="primary" @click="dialogFormVisible1 = false">
          去创建考勤组&nbsp;&nbsp;
          <img src="@/assets/images/kq_qjbs.png" alt>
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "step3",
  data() {
    return {
      form: {
        weekdayOvertime: 1, //工作日加班
        weekendOvertime: 1 //周末加班
      },
      fullForm: {}, //从父组件接收到的form数据
      // 因为直接修改父元素的active会报错，所以添加这个变量
      step3Active: 0,
      // 编辑弹框
      dialogTableVisible: false,
      dialogFormVisible1: false,
      dialogFormVisible2: false,
      dialogFormVisible3: false,
      // 完成弹框
      dialogFormVisible4: false,
      // 编辑迟到数据
      lateCharge: {
        rule: 1, //迟早分钟，目前写死
        charge: 0,
        addUp: 0
      },
      // 编辑早退数据
      earlyCharge: {
        rule: 1,
        charge: 0,
        addUp: 0
      },
      // 编辑旷工数据
      absentCharge: {
        rule: 1,
        charge: 0
      },
      // 两个加班的选项
      opt: [
        {
          value: 1,
          label: "加班费"
        },
        {
          value: 2,
          label: "加班调休"
        },
        {
          value: 3,
          label: "不计加班费"
        }
      ]
    };
  },
  methods: {
    prevStep() {
      this.step3Active = this.value - 1;
      this.$emit("input", this.step3Active);
    },
    complete() {
      //完成事件
      this.dialogFormVisible3 = false;
      this.form = Object.assign(this.fullForm, this.form);
      this.$http({
        method: "post",
        url: "attendance/company/addGroup",
        data: this.form
      }).then(res => {
        console.log(res);
      });
    }
  },
  watch: {
    // 深度监听编辑数据
    lateCharge: {
      handler() {
        this.form.lateCharge = this.lateCharge;
      },
      deep: true
    },
    earlyCharge: {
      handler() {
        this.form.earlyCharge = this.earlyCharge;
      },
      deep: true
    },
    absentCharge: {
      handler() {
        this.form.absentCharge = this.absentCharge;
      },
      deep: true
    }
  },
  // 接收父组件v-model传递过来的值
  props: ["value", "parentForm"],
  created() {
    this.fullForm = this.parentForm;
  }
};
</script>

<style  scoped lang="less">
.step3 {
  // /deep/.el-dialog{
  //   width: 10px !important;

  // }
  background-color: #fff;
  margin-top: 16px;
  margin-left: 50px;
  h3 {
    font-size: 16px;
    font-weight: bold;
    color: rgba(59, 64, 89, 1);
    padding-top: 50px;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(238, 240, 250, 1);
  }
  p {
    font-size: 14px;
    font-weight: 400;
    color: rgba(97, 104, 141, 1);
    padding: 10px 0 40px;
  }
  // 表单样式
  /deep/.el-form-item__label {
    width: 100px !important;
    font-size: 14px;
    color: rgba(97, 104, 141, 1);
  }
  .el-input__inner {
    font-size: 14px;
  }
  .rule {
    padding-left: 100px;
    margin-top: -26px;
  }
  // 扣款样式
  .deduction {
    padding-left: 30px;
    padding-bottom: 30px;
    .deduction-left,
    .deduction-right {
      float: left;
      position: relative;
      p:nth-child(2) {
        position: absolute;
        font-size: 16px;
        font-weight: 700;
        top: 20px;
        left: 20px;
      }
      p:nth-child(3) {
        position: absolute;
        top: 40px;
        left: 20px;
      }
    }
    .deduction-left {
      p {
        color: #fff;
      }
    }
    .deduction-right {
      .edit {
        position: absolute;
        right: 36px;
        top: 32px;
        width: 91px;
        height: 35px;
        border: 1px solid rgba(88, 161, 244, 1);
        border-radius: 17px;
        cursor: pointer;
        span:nth-child(1) {
          position: absolute;
          left: 20px;
          top: 6px;
        }
        span:nth-child(2) {
          position: absolute;
          left: 40px;
          top: 6px;
          font-size: 14px;
          color: #58a1f4;
        }
      }
    }
  }
  // 按钮样式
  .btn {
    padding-top: 40px;
    .el-button--success.is-plain {
      width: 150px;
      height: 42px;
      background: rgba(255, 255, 255, 1);
      color: rgba(88, 161, 244, 1);
      border: 1px solid rgba(88, 161, 244, 1);
      border-radius: 3px;
    }
    .el-button--success {
      width: 240px;
      height: 42px;
      background: rgba(88, 161, 244, 1);
      border-radius: 3px;
      color: #fff;
      border-color: rgba(88, 161, 244, 1);
    }
  }
  // 编辑样式
  .el-dialog {
    .title {
      font-size: 16px;
      font-weight: bold;
      color: rgba(59, 64, 89, 1);
      border-bottom: 1px solid #eef0fa;
    }
    .el-form {
      .tips {
        position: relative;
        p {
          position: absolute;
          top: 4px;
          left: 32px;
          font-size: 14px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
        }
      }
    }
    .dialog-footer {
      text-align: left;
      .el-button--primary {
        width: 240px;
        height: 42px;
        background: rgba(88, 161, 244, 1);
        border-radius: 3px;
        font-size: 16px;
      }
    }
    .middle {
      padding-left: 20px;
    }
  }
}
</style>
