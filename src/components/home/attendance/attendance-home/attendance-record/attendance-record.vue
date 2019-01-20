<template>
  <div>
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
            placeholder="开始时间">
          </el-date-picker>
          <span>至</span>
          <el-date-picker
            v-model="formData.endTime"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
            :picker-options="pickerOptions1"
            type="date"
            placeholder="结束时间">
          </el-date-picker>
        </el-form-item>
        <!--部门-->
        <el-form-item label="部门">
          <el-select v-model="formData.orgId" placeholder="全公司">
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
          <el-select v-model="formData.name" placeholder="姓名或工号">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
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
          <el-table
            id="rebateSetTable"
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
          :total="400">
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import FileSaver from 'file-saver'
  import XLSX from 'xlsx'

  export default {
    data() {
      return {
        // 表单对象
        formData: {
          beginTime: '', //开始日期
          endTime: '', //结束时间
          orgId: '', //组织ID
          name: '' //员工
        },
        pickerOptions1: { //日期有关选项，比如禁用
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        },
        options1: [{  // 部门中的选项
          value: '选项1',
          label: '黄金糕'
        }],
        options2: [{  // 员工中的选项
          value: '后台需要的值',
          label: '前台展示的文本'
        }],
        //表格后半部分，应该是要根据你选择的日期动态改变，下面这个是存放这个日期的
        dataList: [],
        // 表格需要渲染的数据
        tableData: [
          {gonghao: 1000, name: 'abc', bumen: '部门什么', zhiwei: '这是什么职位'}
        ],
        currentPage: 1, // 当前页
      }
    },
    methods: {
      // sizechange事件
      handleSizeChange() {
      },
      // currentchange事件
      handleCurrentChange() {
      },
      query() { //查询事件
        this.$http({
          method: 'POST',
          url: '/attendance/company/record',
          params: this.formData,
        }).then(res => {
          console.log(res);
        })
      },
      exportExcel() { //导出excel表格
        let wb = XLSX.utils.table_to_book(document.querySelector('#rebateSetTable'));
        let wbout = XLSX.write(wb, {bookType: 'xlsx', bookSST: true, type: 'array'});
        try {
          FileSaver.saveAs(new Blob([wbout], {type: 'application/octet-stream'}), '71.xlsx');
        } catch (e) {
          if (typeof console !== 'undefined')
            console.log(e, wbout)
        }
        return wbout
      }
    },
      created() {
        console.log(1);
      }
      // watch: {
      //   date: function (newVal, oldVal) {
      //     newVal.forEach((item, i) => {
      //       console.log(this.$moment(item).format('MM d w'));
      //       // var tableDate = this.$moment(item).date()
      //       // var tableWeek = this.$moment(item).day()
      //       // this.dataList.push(`${tableDate}(${tableWeek})`)
      //     })
      //     console.log(this.dataList)
      //   }
      // }
    }
</script>

<style lang="less">
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
    line-height: 36px;
    /*input样式*/
    /deep/.el-input__inner{
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
    /deep/.el-form-item{
      margin-bottom: 0;
    }
    /*按钮样式*/
    /deep/.el-button--primary{
      width: 70px;
      height: 30px;
      line-height: 29px;
      padding: 0;
    }
    .reset{
      background-color: transparent;
      border-color: transparent;
      color: #61688D;
    }
  }
  /*导出样式*/
  .export{
    float: right;
    width:102px;
    height:30px;
    margin-top: 6px;
    border-radius: 4px;
    background-color: #58A1F4;
    line-height: 30px;
    text-align: center;
    text-decoration: none;
    color: #fff;
  }
</style>
