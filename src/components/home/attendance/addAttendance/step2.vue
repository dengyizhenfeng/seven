<template>
  <div>
    <!-- 出勤日期 -->
    <div class="date-item">
      <h2>出勤日设置</h2>
      <span>设置员工周一到周日，哪些天需要上班，若是大小周或单休，需要设置特殊日期</span>
      <!--出勤日设置-->
      <el-table
        :data="tableData1"
        style="width: 100%">
        <el-table-column
          prop="working"
          width="250px"
          label="工作日">
        </el-table-column>
        <el-table-column
          label="当天班次">
          <template slot-scope="props">
            <!--当天班次信息-->
            <span class="banci1">{{props.row.choice === 'rest' ? '休' : '早9-00~18:00'}}</span>
            <!--下拉选择框-->
            <el-select v-model="props.row.choice" placeholder="请选择" class="banci2">
              <el-option
                v-for="item in option"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
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
      <el-table
        :data="tableData2"
        style="width: 100%">
        <el-table-column
          width="250px"
          prop="date"
          label="日期">
        </el-table-column>
        <el-table-column
          label="当天班次">
          <template slot-scope="props">
            <!--当天班次信息-->
            <span class="banci1">{{props.row.choice === 'rest' ? '休' : '早9-00~18:00'}}</span>
            <!--下拉选择框-->
            <el-select v-model="props.row.choice" placeholder="请选择" class="banci2">
              <el-option
                v-for="item in option"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-row>
      <el-button type="success" plain @click="prevStep">上一步</el-button>
      <el-button type="success" @click="nextStep">下一步</el-button>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "step2",
    data() {
      return {
        // 出勤日
        tableData1: [
          { working: "星期一", choice: "" },
          { working: "星期二", choice: "" },
          { working: "星期三", choice: "" },
          { working: "星期四", choice: "" },
          { working: "星期五", choice: "" },
          { working: "星期六", choice: "" },
          { working: "星期日", choice: "" }
        ],
        // 特殊日期
        tableData2: [
          { date: "2019-01-01", choice: "" },
          { date: "2019-01-01", choice: "" },
          { date: "2019-01-01", choice: "" }
        ],
        option: [
          {
            value: "rest",
            label: "休息"
          },
          {
            value: "work",
            label: "早晚打卡"
          }
        ],
        // 因为直接修改父元素的active会报错，所以添加这个变量
        step2Active: 0
      }
    },
    methods: {
      prevStep() {
        this.step2Active = this.value - 1
        this.$emit('input', this.step2Active)
      },
      nextStep() {
        this.step2Active = this.value + 1
        this.$emit('input', this.step2Active)
      }
    },
    // 接收父组件v-model传递过来的值
    props: ['value']
  }
</script>

<style lang="less">
  .date-item{
    h2{
      font-size: 16px;
      margin-top: 25px;
      padding-bottom: 30px;
      border-bottom: 1px solid #EEF0FA;
    }
    &>span{
      display: block;
      margin-top: 10px;
      margin-bottom: 20px;
      font-size: 14px;
      color: #61688D;
    }
    /*设置表格头部*/
    .el-table thead {
      color: #61688D;
      font-weight: 700;
      tr{
        height: 40px;
        line-height: 40px;
        background-color: #EEF0FA;
        th{
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

</style>
