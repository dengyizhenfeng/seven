<template>
  <div class="step-box">
    <!-- 出勤日期 -->
    <div class="date-item">
      <h2>出勤日设置</h2>
      <span>设置员工周一到周日，哪些天需要上班，若是大小周或单休，需要设置特殊日期</span>
      <!--出勤日设置-->
      <el-table :data="tableData1" style="width: 100%">
        <el-table-column prop="working" width="250px" label="工作日"></el-table-column>
        <el-table-column label="当天班次">
          <template slot-scope="props">
            <!--当天班次信息-->
            <span class="banci1">{{props.row.choice === 2 ? '休' : '早9-00~18:00'}}</span>
            <!--下拉选择框-->
            <el-select v-model="props.row.choice" placeholder="请选择" class="banci2">
              <el-option
                v-for="item in option"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 特殊日期 -->
    <div class="date-item">
      <h2>特殊日期设置</h2>
      <span>设置员工周一到周日，哪些天需要上班，若是大小周或单休，需要设置特殊日期</span>
      <!--特殊日期设置-->
      <el-table :data="tableData2" style="width: 100%">
        <el-table-column width="250px" prop="date" label="日期"></el-table-column>
        <el-table-column label="当天班次">
          <template slot-scope="props">
            <!--当天班次信息-->
            <span class="banci1">{{props.row.choice === 2 ? '休' : '早9-00~18:00'}}</span>
            <!--下拉选择框-->
            <el-select v-model="props.row.choice" placeholder="请选择" class="banci2">
              <el-option
                v-for="item in option"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </template>
        </el-table-column>
      </el-table>
      <el-row v-if="specialFlag">
        <a href="javascript:;" @click="showSpecial" class="addDate">添加日期</a>
      </el-row>
      <!--添加日期选项及按钮-->
      <el-row v-else class="add-data-box">
        <el-date-picker
          v-model="specialDate"
          type="date"
          format="yyyy 年 MM 月 dd 日"
          value-format="yyyy-MM-dd"
          placeholder="选择日期"
        ></el-date-picker>
        <el-button plain @click="cancelShowSpecial">取消</el-button>
        <el-button type="primary" @click="addSpecial">确定</el-button>
      </el-row>
    </div>
    <el-row>
      <el-button type="success" plain @click="prevStep" class="prevStep">上一步</el-button>
      <el-button type="success" @click="nextStep" class="nextStep">
        下一步
        <img src="../../../../assets/images/kq_qjbs.png" alt="">
        </el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "step2",
  data() {
    return {
      specialFlag: true, //控制特殊日期选择是否显示
      specialDate: "", //特殊日期选择框最终绑定的值
      // 出勤日
      tableData1: [
        { working: "星期日", choice: 1, eng: "周日" },
        { working: "星期一", choice: 1, eng: "周一" },
        { working: "星期二", choice: 1, eng: "周二" },
        { working: "星期三", choice: 1, eng: "周三" },
        { working: "星期四", choice: 1, eng: "周四" },
        { working: "星期五", choice: 1, eng: "周五" },
        { working: "星期六", choice: 1, eng: "周六" }
      ],
      // 特殊日期
      tableData2: [],
      option: [
        {
          value: 1,
          label: "早晚打卡"
        },
        {
          value: 2,
          label: "休息"
        }
      ],
      // 因为直接修改父元素的active会报错，所以添加这个变量
      step2Active: 0
    };
  },
  methods: {
    showSpecial() {
      this.specialFlag = false;
    },
    cancelShowSpecial() {
      this.specialFlag = true;
      this.specialDate = "";
    },
    // 添加特殊日期
    addSpecial() {
      this.tableData2.push({ date: this.specialDate, choice: "" });
      this.specialFlag = true;
    },
    prevStep() {
      this.step2Active = this.value - 1;
      this.$emit("input", this.step2Active);
    },
    nextStep() {
      this.step2Active = this.value + 1;
      this.$emit("input", this.step2Active);
      // 拼接普通日期
      var tableDataObj1 = [];
      var obj1 = {};
      this.tableData1.forEach(item => {
        var key = item.eng;
        var val = item.choice;
        obj1[key] = val;
      });
      // 拼接特殊日期
      var tableDataObj2 = [];
      var obj2 = {};
      this.tableData2.forEach(item => {
        var key = item.date;
        var val = item.choice;
        obj2[key] = val;
      });
      this.$emit("formData2", {
        workdaySchedule: obj1,
        specials: obj2
      });
    }
  },
  // 接收父组件v-model传递过来的值
  props: ["value"]
};
</script>

<style lang="less">
.step-box {
  // 日期盒子
  .add-data-box {
    height: 60px;
    button,
    div {
      margin-top: 15px;
    }
    button{
      width: 86px;
      height: 30px;
      padding: 0 !important;
    }
    /deep/.el-input__inner{
      height: 30px;
      line-height: 30px;
    }
    // 选择日期框
    .el-date-editor {
      width: 200px;
      height: 30px;
      // 小图标
      .el-input__prefix {
        left: auto;
        right: 10px;
      }
    }
  }
  // 添加日期
  .addDate {
    display: inline-block;
    margin: 16px 0 30px;
    width: 140px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #58a1f4;
    border: 1px dashed #58a1f4;
    text-decoration: none;
    border-radius: 5px;
  }
  .el-button--success.is-plain:focus,
  .el-button--success.is-plain:hover {
    color: #58a1f4;
    background-color: #fff;
  }
  // 上一步
  .prevStep {
    width: 150px;
    height: 42px;
    text-align: center;
    line-height: 42px;
    padding: 0 !important;
    background-color: #fff;
    color: #58a1f4;
    border: 1px solid #58a1f4 !important;
    margin-bottom: 50px;
  }
  // 下一步
  .nextStep {
    width: 240px;
    height: 42px;
    text-align: center;
    line-height: 42px;
    padding: 0 !important;
    background-color: #58a1f4;
    color: #fff;
    border: none;
    margin-bottom: 50px;
  }
  .date-item {
    // 按钮样式

    h2 {
      font-size: 16px;
      margin-top: 25px;
      padding-bottom: 30px;
      border-bottom: 1px solid #eef0fa;
    }
    & > span {
      display: block;
      margin-top: 10px;
      margin-bottom: 20px;
      font-size: 14px;
      color: #61688d;
    }
    /*设置表格头部*/
    .el-table thead {
      color: #61688d;
      font-weight: 700;
      tr {
        height: 40px;
        line-height: 40px;
        background-color: #eef0fa;
        th {
          padding: 0;
          background-color: transparent;
        }
      }
    }
    /*设置表格当天班次*/
    .cell {
      display: flex;
    }
    .banci1 {
      flex: 1;
    }
    .banci2 {
      flex: 1;
    }
  }
}
</style>
