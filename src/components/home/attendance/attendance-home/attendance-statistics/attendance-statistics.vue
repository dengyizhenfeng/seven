<template>
  <div>
    <!-- 时间、部门、员工 -->
    <el-row>
      <el-form :inline="true" :model="formData">
        <!--月份-->
        <el-form-item label="月份">
          {{ formData.date }}
          <el-date-picker
            v-model="formData.date"
            format="yyyy-MM"
            value-format="yyyy-MM"
            type="month"
            :picker-options="pickerOptions1"
            placeholder="选择月">
          </el-date-picker>
        </el-form-item>
        <!--部门-->
        <el-form-item label="部门">
          <el-select v-model="formData.department" placeholder="全公司">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <!--员工-->
        <el-form-item label="员工">
          <el-select v-model="formData.staff" placeholder="姓名或工号">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <!--员工状态-->
        <el-form-item label="员工状态">
          <el-select v-model="formData.staffStatus" placeholder="员工状态">
            <el-option
              v-for="item in options3"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <!--排序-->
        <el-form-item label="排序">
          <el-select v-model="formData.sort" placeholder="排序">
            <el-option
              v-for="item in options4"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <!--操作按钮-->
        <el-button type="primary" size="small">查询</el-button>
        <el-button type="primary" size="small">重置</el-button>
        <a href="javascript:;">导出报表</a>
      </el-form>
    </el-row>
    <!-- 表格 -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="gonghao"
              label="工号"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="bumen"
              label="部门">
            </el-table-column>
            <el-table-column
              prop="zhiwei"
              label="职位">
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "attendance-statistics",
    data() {
      return {
        // 查询有关数据
        formData: {
          date: '', //时间日期
          department: '', //部门
          staff: '', //员工
          staffStatus: '', //员工状态
          sort: '' //排序
        },
        detailFlag: false, //控制明细弹框
        detailTitle: '张三请假汇总', //明细标题
        pickerOptions1: { //日期有关选项，比如禁用
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        },
        //日期处理我安装了个moment.js 专门处理日期时间的
        date: '', //日期最终得到的具体值,类似["2018-12-30T16:00:00.000Z", "2018-12-31T16:00:00.000Z" ]
        options1: [{  // 部门中的选项
          value: '选项1',
          label: '黄金糕'
        }],
        options2: [{  // 员工中的选项
          value: '后台需要的值',
          label: '前台展示的文本'
        }],
        options3: [{  // 员工状态中的选项
          value: '后台需要的值',
          label: '前台展示的文本'
        }],
        options4: [{  // 排序中的选项
          value: '后台需要的值',
          label: '前台展示的文本'
        }],
        //表格后半部分，应该是要根据你选择的日期动态改变，下面这个是存放这个日期的，未完成
        dataList: [],
        // 表格中需要渲染的数据
        tableData: [
          {gonghao: 1000, name: 'abc', bumen: '部门什么', zhiwei: '这是什么职位'}
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  /*表格样式*/
  .el-form {
    overflow: hidden;
  }

  /*月份输入框*/
  .el-date-editor.el-input {
    width: 110px;
  }

  .staff-status .el-input__inner {
    width: 20px;
  }
/*明细样式*/
  .el-dialog{
    width: 75%;
  }
  // 柵格样式
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
