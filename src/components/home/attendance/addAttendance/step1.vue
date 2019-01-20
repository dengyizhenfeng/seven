<template>
  <div>
    <el-form :model="addForm1" label-width="100px" class="demo-ruleForm">
      <!--考勤组名称-->
      <el-form-item label="考勤组名称">
        <el-input v-model="addForm1.groupName"></el-input>
      </el-form-item>
      <!--考勤标准时长-->
      <el-form-item label="考勤标准时长">
        <el-input v-model="addForm1.attnDuration"></el-input>
        小时/天
        <el-row>用于请假天数、请假小时数之间的折算</el-row>
      </el-form-item>
      <!--考勤类型-->
      <el-form-item label="考勤类型" >
        <!--value值待定-->
        <el-row><label><input v-model="addForm1.attnType" name="type" type="radio" value="1">固定班制(每周固定日期出勤)</label></el-row>
        <el-row><label><input v-model="addForm1.attnType" name="type" type="radio" value="2">不打卡(使用与企业中上下班无需打卡，但需要记录请假的人员，如长期外勤人员)</label></el-row>
      </el-form-item>
      <!--打卡地点-->
      <el-form-item label="打卡地点">
        <span>可添加多个打卡地点</span>
        <el-table
          :data="addForm1.attnLocation"
          border
          style="width: 100%">
          <el-table-column
            prop="address"
            label="考勤地址">
          </el-table-column>
          <el-table-column
            label="操作"
            width="150">
            <template slot-scope="scope">
              <el-button type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
      <!--外勤打卡-->
      <el-form-item label="外勤打卡" v-model="addForm1.attnDistance" prop="name">
        <el-row><label><input type="checkbox">允许外勤打卡，出差或者外出无需提交外勤审批</label></el-row>
      </el-form-item>
      <!--自动打卡-->
      <el-form-item label="自动打卡" prop="name">
        <el-row><label><input v-model="addForm1.ids" type="checkbox">下班时定时自动打卡开关</label></el-row>
      </el-form-item>
      <!--适用员工-->
      <el-form-item label="适用员工">
        <el-row class="choose-staff">
          <a href="javascript:;" @click="showDepartment">选择参与的部门</a>
          <a href="javascript:;" @click="showStaff">选择参与的员工</a>
        </el-row>
        建议按部门设置考勤组的使用范围，若员工无部门或已离职，请按员工选择将其加入使用的考勤组
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="stepNext">下一步</el-button>
      </el-form-item>
    </el-form>
    <!--显示选择部门-->
    <el-dialog title="选择参与部门" :visible.sync="departmentFlag">
      <el-row>
        <el-col :span="12" class="left">
          <div class="switch-choose">
            <!--别加换行-->
            <a :class="{'active': classFlag}" @click="bumen">部门</a><a :class="{'active': !classFlag}" @click="zuijinbumen">最近选择</a>
          </div>
          <!--搜索框-->
          <el-input
            placeholder="输入关键字进行过滤"
            v-model="filterDepartmentText">
          </el-input>
          <!--树形-->
          <el-tree
            class="filter-tree"
            show-checkbox
            :data="data2"
            default-expand-all
            ref="tree2">
          </el-tree>
        </el-col>
        <el-col :span="12" class="right"></el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="departmentFlag = false">确 定</el-button>
        <el-button @click="departmentFlag = false">取 消</el-button>
      </div>
    </el-dialog>
    <!--显示选择人员-->
    <el-dialog title="选择参与员工" :visible.sync="staffFlag">
      <el-row>
        <el-col :span="12" class="left">
          <div class="switch-choose">
            <!--别加换行-->
            <a :class="{'active': classFlag}" @click="bumen">部门</a><a :class="{'active': !classFlag}" @click="zuijinbumen">最近选择</a>
          </div>
          <!--搜索框-->
          <el-input
            placeholder="输入关键字进行过滤"
            :disabled="true"
            v-model="filterDepartmentText">
          </el-input>
          <!--人员列表-->
          <el-table
            :data="staffData"
            style="width: 100%">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              prop="name">
            </el-table-column>
            <el-table-column
              prop="bumen">
            </el-table-column>
            <el-table-column
              prop="shijian">
            </el-table-column>
          </el-table>
        </el-col>
        <el-col :span="12" class="right">
          <!--人员列表-->
          <el-table
            :data="staffData"
            style="width: 100%">
            <el-table-column
              prop="name">
            </el-table-column>
            <el-table-column
              prop="bumen">
            </el-table-column>
            <el-table-column
              prop="shijian">
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="staffFlag = false">确 定</el-button>
        <el-button @click="staffFlag = false">取 消</el-button>
      </div>
    </el-dialog>
    {{ addForm1 }}
  </div>
</template>

<script>
  export default {
    name: "step1",
    data() {
      return {
        classFlag: true, //控制弹出框内部头切换显示不同样式
        addForm1: { //新增考勤组表单数据
          groupName: '', //考勤组名称
          attnDuration: '', //考勤标准时长
          attnType: '', //考勤类型
          attnLocation: '', //打卡地点
          attnDistance: '', //外勤打卡
          ids: '', //自动打卡
          // attnDistance: [
          //   {address: '这是考勤地址'}
          // ]
        },
        // 因为直接修改父元素的active会报错，所以添加这个变量
        step1Active: 0,
        departmentFlag: false, //控制显示选择部门
        staffFlag: false, //控制显示选择员工
        filterDepartmentText: '', //搜索部门关键字
        // 部门数据
        data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }],
        // 人员列表数据
        staffData: [
          {name: '麋鹿', bumen: '研发部', shijian: '2019-01-02转正'},
          {name: '麋鹿', bumen: '研发部', shijian: '2019-01-02转正'}
        ]
      }
    },
    methods: {
      // 发射一个事件，值是addAttendance组件中active自加后的值
      stepNext() {
        this.step1Active = this.value + 1
        this.$emit('input', this.step1Active)
        this.$emit('formData', this.addForm1)
      },
      // 显示选择部门
      showDepartment() {
        this.departmentFlag = true
      },
      // 显示选择员工
      showStaff() {
        this.staffFlag = true
      },
      // 下面两个控制弹出框切换部门和最近选择
      bumen() {
        this.classFlag = true
      },
      zuijinbumen() {
        this.classFlag = false
      }
    },
    // 接收父组件v-model传递过来的值
    props: ['value']
  }
</script>

<style lang="less" scoped>
  .choose-staff a {
    display: inline-block;
    width: 138px;
    height: 35px;
    line-height: 35px;
    border: 1px solid #58A1F4;
    color: #58A1F4;
    border-radius: 3px;
    text-align: center;
    text-decoration: none;
  }
  /*弹出框样式*/
  .el-dialog__wrapper{
    /deep/.el-dialog{
      width: 720px;
    }
    .el-row{
      height: 440px;
    }
      /deep/.el-dialog__header {
        border-bottom: 1px solid #EEF0FA;
      }
      /deep/ .el-dialog__body {
        padding-top: 12px;
        .left{
          /*弹出框头部切换样式*/
          .switch-choose {
            display: inline-block;
            width: 240px;
            height: 34px;
            margin-bottom: 30px;
            border: 1px solid #BEC5EA;
            border-radius: 17px;
            box-sizing: content-box;
            a {
              display: inline-block;
              width: 120px;
              height: 34px;
              line-height: 34px;
              text-align: center;
              text-decoration: none;
            }
            .active {
              text-decoration: none;
              background-color: #58A1F4;
              color: #fff;
              box-shadow: 0 0 0 1px #58A1F4;
              border-radius: 17px;
            }
          }
          /*搜索框样式*/
          /deep/.el-input{
            display: block;
            padding: 0 0 10px 0;
            border-bottom: 1px solid #EEF0FA;
            input {
              width: 300px;
              border-radius: 20px;
              background-color: #EEF0FA;
              height: 32px;
            }
          }
          /*员工表格第一行不显示*/
          .el-table__header-wrapper{
            display: none;
          }
        }
        .right{
          height: 100%;
          background-color: #EEF0FA;
          /*员工表格第一行不显示*/
          .el-table__header-wrapper{
            display: none;
          }
          /deep/.el-table__row{
            width: 312px;
            height: 70px;
            margin: 10px auto;
          }
        }
      }
      /deep/.el-dialog__footer{
        margin: 0 24px;
        padding-top: 14px;
        border-top: 1px solid #EEF0FA;
        text-align: left;
        .el-button--primary{
          width: 240px;
          height: 42px;
          background-color: #58A1F4;
          color: #fff;
          text-align: center;
          /*line-height: 42px;*/
        }
      }
  }
</style>
