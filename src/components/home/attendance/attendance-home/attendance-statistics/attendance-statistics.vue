<template>
  <div>
    <!-- 时间、部门、员工 -->
    <el-row class="statistics-box">
      <el-form :inline="true" :model="formData">
        <!--月份-->
        <el-form-item label="月份">
          <el-date-picker
            v-model="formData.month"
            format="yyyy-MM"
            value-format="yyyy-MM"
            type="month"
            :picker-options="pickerOptions1"
            placeholder="选择月"
          ></el-date-picker>
        </el-form-item>
        <!--部门-->
        <el-form-item label="部门">
          <el-select v-model="formData.orgId" placeholder="全公司">
            <el-option
              v-for="item in orgOpt"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <!--员工-->
        <el-form-item label="员工">
          <el-input v-model="nameOrNum"></el-input>
        </el-form-item>
        <!--员工状态-->
        <el-form-item label="员工状态">
          <el-select v-model="formData.state" placeholder="员工状态">
            <!--<el-option-->
            <!--v-for="item in options3"-->
            <!--:key="item.value"-->
            <!--:label="item.label"-->
            <!--:value="item.value">-->
            <!--</el-option>-->
          </el-select>
        </el-form-item>
        <!--排序-->
        <!--<el-form-item label="排序">-->
        <!--<el-select v-model="formData.sort" placeholder="排序">-->
        <!--<el-option-->
        <!--v-for="item in options4"-->
        <!--:key="item.value"-->
        <!--:label="item.label"-->
        <!--:value="item.value">-->
        <!--</el-option>-->
        <!--</el-select>-->
        <!--</el-form-item>-->
        <!--操作按钮-->
        <el-button type="primary" size="small" @click="search">查询</el-button>
        <el-button type="primary" size="small">重置</el-button>
        <a href="javascript:;" class="export">导出报表</a>
      </el-form>
    </el-row>
    <!-- 表格 -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-table :data="tableData" style="width: auto">
            <el-table-column prop="jobNum" label="工号"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="department" label="部门"></el-table-column>
            <el-table-column prop="position" label="职位"></el-table-column>
            <el-table-column prop="attendanceDays" label="应出勤天数"></el-table-column>
            <el-table-column prop="attendanceHours" label="应出勤小时数"></el-table-column>
            <el-table-column prop="actualDays" label="实际出勤天数"></el-table-column>
            <el-table-column prop="lateMinutes" label="迟到时长"></el-table-column>
            <el-table-column prop="lateNum" label="迟到次数"></el-table-column>
            <el-table-column prop="earlyMinutes" label="早退时长"></el-table-column>
            <el-table-column prop="earlyNum" label="早退次数"></el-table-column>
            <el-table-column prop="absentNum" label="旷工天数"></el-table-column>
            <el-table-column prop="lackNum" label="缺卡次数"></el-table-column>
            <el-table-column prop="holidaysNum" label="法定节假日天数"></el-table-column>
            <el-table-column prop="leaveHours" label="请假合计"></el-table-column>
            <el-table-column prop="gooutHours" label="外勤合计"></el-table-column>
            <el-table-column prop="overtimeHours" label="	加班合计"></el-table-column>
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
        companyId: 1, //企业ID
        month: "", //时间日期
        orgId: 0, //部门
        state: 0 //员工状态
      },
      nameOrNum: '', //名字或者工号
      detailFlag: false, //控制明细弹框
      detailTitle: "张三请假汇总", //明细标题
      pickerOptions1: {
        //日期有关选项，比如禁用
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      //日期处理我安装了个moment.js 专门处理日期时间的
      date: "", //日期最终得到的具体值,类似["2018-12-30T16:00:00.000Z", "2018-12-31T16:00:00.000Z" ]
      orgOpt: [],
      options2: [
        {
          // 员工中的选项
          value: "后台需要的值",
          label: "前台展示的文本"
        }
      ],
      options3: [
        {
          // 员工状态中的选项
          value: "后台需要的值",
          label: "前台展示的文本"
        }
      ],
      options4: [
        {
          // 排序中的选项
          value: "后台需要的值",
          label: "前台展示的文本"
        }
      ],
      //表格后半部分，应该是要根据你选择的日期动态改变，下面这个是存放这个日期的，未完成
      dataList: [],
      // 表格中需要渲染的数据
      tableData: []
    };
  },
  methods: {
    search() {
      // 员工名字或者工号
      if (this.nameOrNum !== "") {
        if (Number(this.nameOrNum)) {
          this.formData.jobNum = this.nameOrNum;
        } else {
          this.formData.name = this.nameOrNum;
        }
      }
      this.$http({
        method: "post",
        url: "attendance/company/statistics",
        params: this.formData
      }).then(res => {
        let {state, datas} = res.data
        if(state === 200) {
          console.log(datas)
         this.tableData = datas
        }
      });
    }
  },
  created() {
    //获得当前月
    this.formData.month = "2019-01";
    //接收到的部门选项赋值
    this.orgOpt = this.opt;
  },
  props: ["opt"]
};
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
.el-dialog {
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
.statistics-box {
  line-height: 36px;
  /*input样式*/
  /deep/.el-input__inner {
    height: 30px;
    padding-left: 20px;
  }
  /*日期框样式*/
  /deep/.el-date-editor {
    width: 136px;
    height: 30px;
  }
  /deep/.el-input__prefix {
    right: 8px;
    left: auto;
  }
  /*表格项样式*/
  /deep/.el-form-item {
    margin-bottom: 0;
  }
  /*按钮样式*/
  /deep/.el-button--primary {
    width: 70px;
    height: 30px;
    line-height: 29px;
    padding: 0;
  }
  .reset {
    background-color: transparent;
    border-color: transparent;
    color: #61688d;
  }
}
/*导出样式*/
.export {
  float: right;
  width: 102px;
  height: 30px;
  margin-top: 6px;
  border-radius: 4px;
  background-color: #58a1f4;
  line-height: 30px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  font-size: 14px;
}
// 表格头部
/deep/.el-table th {
  padding: 0;
  height: 40px;
  line-height: 40px;
  background-color: #eef0fa;
  font-weight: 400;
  color: #61688D;
  white-space: nowrap;
}
</style>
