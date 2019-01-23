<template>
  <div class="record-box">
    <!-- 时间、部门、员工 -->
    <el-row class="record-r1">
      <el-form :inline="true" :model="formData">
        <!--时间-->
        <el-form-item label="时间">
          <el-date-picker
            v-model="formData.beginTime"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
            :picker-options="pickerOptions1"
            type="date"
            placeholder="开始时间"
          ></el-date-picker>
          <span>至</span>
          <el-date-picker
            v-model="formData.endTime"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
            :picker-options="pickerOptions1"
            type="date"
            placeholder="结束时间"
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
          <el-input v-model="nameOrJobNum" placeholder="姓名或工号"></el-input>
        </el-form-item>
        <!--操作按钮-->
        <el-button type="primary" @click="query">查询</el-button>
        <el-button type="primary" class="reset">重置</el-button>
        <a href="javascript:;" @click="exportExcel" class="export">导出报表</a>
      </el-form>
    </el-row>
    <!-- 表格 -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-table id="rebateSetTable" :data="tableData" style="width: 100%">
            <el-table-column
              v-for="(value, key, i) in tableHead"
              :key="i"
              :label="value"
              :prop="key"
            >
              <!-- 拆分对象 -->
              <template slot-scope="scope">
                <div v-if="typeof scope.row[key] !== 'object'">{{ scope.row[key] }}</div>
                <div v-else>
                  <!-- 根据时间显示不同 -->
                  <div v-if="scope.row[key].offClockTime === ''" class="missing">缺卡</div>
                  <div
                    v-else-if="scope.row[key].offClockTime < scope.row[key].offDutyTime"
                    class="early"
                  >早退</div>
                  <div
                    v-else-if="scope.row[key].onClockTime > scope.row[key].onDutyTime"
                    class="late"
                  >迟到</div>
                  <div v-else-if="scope.row[key].onClockTime === null" class="absenteeism">旷工</div>
                  <div v-else-if="scope.row[key].onClockTime" class="normal">正常</div>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
    <!--分页-->
    <el-row>
      <el-col :span="12" :offset="12">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import FileSaver from "file-saver";
import XLSX from "xlsx";

export default {
  data() {
    return {
      // 需要被渲染的表格的日期
      // dateList: [],
      // 表单对象
      formData: {
        companyId: 1,
        orgId: 0,
        beginTime: "", //本月第一天
        endTime: "" // 当前日期的前一天
      },
      nameOrJobNum: "", //用来接收姓名或工号
      pickerOptions1: {
        //日期有关选项，比如禁用
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      // 部门中的选项
      orgOpt: [],
      // 表格需要渲染的数据
      tableData: [],
      currentPage: 1, // 当前页
      tableHead: [],
      tableBody: []
    };
  },
  methods: {
    // sizechange事件
    handleSizeChange() {},
    // currentchange事件
    handleCurrentChange() {},
    query() {
      //查询事件
      // 添加name或者ID
      if (this.nameOrJobNum !== "") {
        if (Number(this.nameOrJobNum)) {
          this.formData.jobNum = Number(this.nameOrJobNum);
        } else {
          this.formData.name = this.nameOrJobNum;
        }
      }
      this.$http({
        method: "post",
        url: "attendance/company/record",
        params: this.formData
      }).then(res => {
        let { state, datas } = res.data;
        if (state === 200) {
          console.log(datas);
          this.tableData = datas.slice(1);
          this.tableHead = datas[0];
        }
      });
    },
    exportExcel() {
      //导出excel表格
      let wb = XLSX.utils.table_to_book(
        document.querySelector("#rebateSetTable")
      );
      let wbout = XLSX.write(wb, {
        bookType: "xlsx",
        bookSST: true,
        type: "array"
      });
      try {
        FileSaver.saveAs(
          new Blob([wbout], { type: "application/octet-stream" }),
          "71.xlsx"
        );
      } catch (e) {
        if (typeof console !== "undefined") console.log(e, wbout);
      }
      return wbout;
    }
  },
  created() {
    // 获取当前月份第一天
    this.formData.beginTime = this.$moment(
      new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + 1
    ).format("YYYY-MM-DD");
    // 获取当前日期前一天
    this.formData.endTime = this.$moment(
      new Date(new Date().getTime() - 24 * 60 * 60 * 1000)
    ).format("YYYY-MM-DD");
    this.orgOpt = this.opt;
  },
  props: ["opt"]
};
</script>

<style lang="less">
.record-box {
  #rebateSetTable {
    .missing,
    .early,
    .late,
    .absenteeism,
    .normal {
      display: inline-block;
      width: 50px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      border-radius: 3px;
    }
    .missing,
    .early {
      background-color: #fbb766;
      color: #fff;
    }
    .normal {
      background-color: #58a1f4;
      color: #fff;
    }
    .absenteeism {
      color: #fff;
      background-color: #f76c6c;
    }
  }
  // 柵格样式
  .record-box {
    .el-row {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
  }
  .el-date-editor .el-range-separator {
    width: 7%;
  }
  .record-r1 {
    .el-table th {
      padding: 0;
    }
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
  }

  // 表格头部
  /deep/.el-table th {
    padding: 0;
    height: 40px;
    line-height: 40px;
    background-color: #eef0fa;
  }
}
</style>
