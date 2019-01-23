<template>
<div class="current-human-box">
  <div class="ch-title">
    2018年12月工资表
    飞鱼网
    <el-row class="ch-r1">
      <el-form :inline="true" :model="formData">
        <!--关键字-->
        <el-form-item label="关键字">
          <el-input placeholder="请输入姓名/工号" v-model="formData.keyword"></el-input>
        </el-form-item>
        <!--岗位-->
        <el-form-item label="岗位">
          <el-select v-model="formData.gangwei" placeholder="全公司">
            <el-option
              v-for="item in opt"
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
        <a href="javascript:;" @click="exportExcel" class="export">在线编辑</a>
        <a href="javascript:;" @click="exportExcel" class="export">删除工资表</a>
      </el-form>
    </el-row>
  </div>
  <el-row>
    <template>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </template>
  </el-row>
</div>
</template>

<script>
  export default {
    name: "current-human",
    data() {
      return{
        formData: {
          companyId: 1,
          orgId: 0,
          beginTime: "", //本月第一天
          endTime: "" // 当前日期的前一天
        },
        opt: [
          {
            label: '这是什么',
            value: '这是什么'
          }
        ],
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          name: '王小虎',
          name: '王小虎',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          name: '王小虎',
          name: '王小虎',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          name: '王小虎',
          name: '王小虎',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          name: '王小虎',
          name: '王小虎',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
</script>

<style scoped lang="less">
  .ch-r1 {
  .el-table th{
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
</style>
