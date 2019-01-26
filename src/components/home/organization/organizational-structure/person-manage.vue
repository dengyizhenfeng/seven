<template>
  <div class="person-manage-box">
    <OrganizationDetailsBread></OrganizationDetailsBread>
    <div class="body">
      <el-row>
        <div class="left">
          <el-tree
            :data="data"></el-tree>
        </div>
        <div class="right-box">
          <div class="title">
            <div class="right">
              <el-form ref="form" :model="formData" label-width="65px">
                <el-form-item label="员工姓名">
                  <el-input v-model="formData.name"></el-input>
                </el-form-item>
                <a href="javascript:;" class="search">查询</a>
                <a href="javascript:;" class="reset">重置</a>
              </el-form>
            </div>
            <a href="javascript:;" class="addMember" @click="addFlag = true">添加成员</a>
          </div>
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
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
        </div>
      </el-row>
    </div>
    <!--添加的弹框-->
    <el-dialog title="选择参与员工" :visible.sync="addFlag">
      <el-row>
        <el-col :span="12" class="left">
          <!--搜索框-->
          <el-input placeholder="输入关键字进行过滤" :disabled="true" ></el-input>
          <img src="@/assets/images/organization/tj_fdjss.png" alt="" class="search-img">
          <!--人员列表-->
          <el-table :data="joinData" style="width: 100%" ref="userTable" :select="getUserId">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="name"></el-table-column>
            <el-table-column prop="bumen"></el-table-column>
            <el-table-column prop="shijian"></el-table-column>
          </el-table>
        </el-col>
        <el-col :span="12" class="right">
          <!--人员列表-->
          <el-table :data="joinData" style="width: 100%">
            <el-table-column prop="name"></el-table-column>
            <el-table-column prop="bumen"></el-table-column>
            <el-table-column prop="shijian"></el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="staffFlag = false">
          确 定
          <img src="@/assets/images/organization/kq_qjbs.png" alt="">
        </el-button>
        <el-button @click="staffFlag = false" class="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import OrganizationDetailsBread from '../detailsBread.vue'

  export default {
    name: "person-manage",
    data() {
      return {
        formData: {name: ''},
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }],
        // 表格数据
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        addFlag: false,
        // 参与员工数据
        joinData: [
          {name: 'abc', bumen: '部门', shijian: '25151'},
          {name: 'abc', bumen: '部门', shijian: '25151'},
          {name: 'abc', bumen: '部门', shijian: '25151'},
          {name: 'abc', bumen: '部门', shijian: '25151'},
          {name: 'abc', bumen: '部门', shijian: '25151'}
        ]
      }
    },
    methods: {
      // 树节点渲染时候的样式
      // renderContent(h, { node, data, store }) {
      //   return (
      //     <span class="custom-tree-node">
      //     <i class={data.className}></i>
      //   <span style="margin-left:5px;">{node.label}</span>
      //   </span>
      // );
    },
    components: {
      OrganizationDetailsBread
    }
  }
</script>

<style scoped lang="less">
  .person-manage-box {
    .body {
      > .el-row {
        display: flex;
        padding-top: 24px;
        .left {
          width: 400px;
          height: 410px;
          border: 1px solid #BEC5EA;
          border-radius: 5px;
        }
        .right-box {
          flex: 1;
          padding-left: 40px;
          /deep/ .el-table th {
            background-color: #EEF0FA;
            color: #61688D;
            font-size: 16px;
          }
          /deep/ .el-table td {
            color: #61688D;
            font-size: 14px;
          }
          /deep/ .el-table td, /deep/ .el-table th {
            padding: 0;
            height: 40px;
            line-height: 40px;
          }
          .title {
            border-bottom: 1px solid #EEF0FA;
            overflow: hidden;
          }

        }
        .right {
          min-width: 400px;
          /deep/ .el-form {
            float: left;
          }
          .el-form-item {
            margin-bottom: 0;
            display: inline-block;
          }
          .el-input {
            width: 136px;
            height: 30px;
            line-height: 30px;
            /deep/ .el-input__inner {
              height: 30px;
              line-height: 30px;
            }
          }
          /deep/ .el-form-item__label {
            padding: 0;
            text-align: left;
            font-size: 14px;
            color: #3B4059;
          }
          a {
            text-decoration: none;
            display: inline-block;
            &.search {
              width: 70px;
              height: 30px;
              margin-left: 40px;
              line-height: 30px;
              text-align: center;
              background-color: #58A1F4;
              color: #fff;
            }
            &.reset {
              margin-left: 20px;
              color: #61688D;
            }
          }
        }
        .addMember {
          margin-top: 4px;
          float: right;
          text-decoration: none;
          width: 102px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          background-color: #58A1F4;
          color: #fff;
        }
      }
    }
    .el-dialog__wrapper {
      .search-img{
        position: absolute;
        left: 265px;
        top: 7px;
      }
      /deep/.el-dialog {
        width: 720px;
      }
      .el-row {
        height: 440px;
      }
      /deep/.el-dialog__header {
        padding: 0 24px;
        height: 40px;
        line-height: 40px;
        font-size:16px;
        font-family:MicrosoftYaHei-Bold;
        font-weight:bold;
        border-bottom: 1px solid #eef0fa;
        /deep/.el-dialog__headerbtn{
          top: 13px;
        }
      }
      /deep/ .el-dialog__body {
        padding-top: 12px;
        /deep/.el-table td{
          padding: 0;
          height: 60px;
          line-height: 60px;
        }
        .left {
          /*搜索框样式*/
          /deep/.el-input {
            display: block;
            padding: 0 0 10px 0;
            border-bottom: 1px solid #eef0fa;
            input {
              width: 300px;
              border-radius: 20px;
              background-color: #eef0fa;
              height: 32px;
            }
          }
          /*员工表格第一行不显示*/
          .el-table__header-wrapper {
            display: none;
          }
        }
        .right {
          height: 100%;
          background-color: #eef0fa;
          /*员工表格第一行不显示*/
          .el-table__header-wrapper {
            display: none;
          }
          /deep/.el-table__row {
            width: 312px;
            height: 70px;
            margin: 10px auto;
          }
        }
      }
      /deep/.el-dialog__footer {
        margin: 0 24px;
        height: 70px;
        padding-bottom: 0;
        padding-top: 14px;
        border-top: 1px solid #eef0fa;
        text-align: left;
        .el-button--primary {
          width: 240px;
          height: 42px;
          background-color: #58a1f4;
          color: #fff;
          text-align: center;
          /*line-height: 42px;*/
        }
      }
      .cancel{
        border: none;
      }
    }
  }
</style>
