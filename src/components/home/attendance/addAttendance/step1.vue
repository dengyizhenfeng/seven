<template>
  <div>
    <el-form :model="addForm1" label-width="107px" class="demo-ruleForm" :rules="rules" ref="step1">
      <!--考勤组名称-->
      <el-form-item label="考勤组名称" prop="groupName">
        <el-input v-model="addForm1.groupName"></el-input>
      </el-form-item>
      <!--考勤标准时长-->
      <el-form-item label="考勤标准时长" prop="attnDuration">
        <el-input v-model="addForm1.attnDuration"></el-input>小时/天
        <el-row>用于请假天数、请假小时数之间的折算</el-row>
      </el-form-item>
      <!--考勤类型-->
      <el-form-item label="考勤类型" prop="attnType" class="attnType">
        <!--value值待定-->
        <el-row>
          <label>
            <input v-model="addForm1.attnType" name="type" type="radio" value="1">固定班制(每周固定日期出勤)
          </label>
        </el-row>
        <el-row>
          <label>
            <input v-model="addForm1.attnType" name="type" type="radio" value="2">不打卡(使用与企业中上下班无需打卡，但需要记录请假的人员，如长期外勤人员)
          </label>
        </el-row>
      </el-form-item>
      <!--打卡地点-->
      <el-form-item label="打卡地点" class="address">
        <span>可添加多个打卡地点</span>
        <el-table border style="width: 100%">
          <el-table-column prop="address" label="考勤地址"></el-table-column>
          <el-table-column label="操作" width="150">
            <template slot-scope="scope">
              <el-button type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item>
        <a href="javascript:;" class="add-address">
          <img src="../../../../assets/images/kq_tjmm.png" alt>
          添加
        </a>
      </el-form-item>
      <!--适用员工-->
      <el-form-item label="适用员工">
        <el-row class="choose-staff">
          <a href="javascript:;" @click="showDepartment">选择参与的部门</a>
          <a href="javascript:;" @click="showStaff">选择参与的员工</a>
        </el-row>建议按部门设置考勤组的使用范围，若员工无部门或已离职，请按员工选择将其加入使用的考勤组
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="stepNext" class="nextStep">
          下一步
          <img src="../../../../assets/images/bo_qj.png" alt>
        </el-button>
      </el-form-item>
    </el-form>
    <!--显示选择部门-->
    <el-dialog title="选择参与部门" :visible.sync="departmentFlag">
      <el-row>
        <el-col :span="12" class="left">
          <div class="switch-choose">
            <!--别加换行-->
            <a :class="{'active': classFlag}" @click="bumen">部门</a>
            <a :class="{'active': !classFlag}" @click="zuijinbumen">最近选择</a>
          </div>
          <!--搜索框-->
          <el-input placeholder="输入关键字进行过滤" v-model="filterDepartmentText"></el-input>
          <!--树形-->
          <el-tree
            class="filter-tree"
            show-checkbox
            :props="treeOpt"
            :data="data2"
            node-key="orgId"
            default-expand-all
            ref="departmentTree"
            :filter-node-method="filterNode"
          ></el-tree>
        </el-col>
        <el-col :span="12" class="right">
          已经选择

        </el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="chooseDepartment">确 定</el-button>
        <el-button @click="departmentFlag = false">取 消</el-button>
      </div>
    </el-dialog>
    <!--显示选择人员-->
    <el-dialog title="选择参与员工" :visible.sync="staffFlag">
      <el-row>
        <el-col :span="12" class="left">
          <div class="switch-choose">
            <!--别加换行-->
            <a :class="{'active': classFlag}" @click="bumen">部门</a>
            <a :class="{'active': !classFlag}" @click="zuijinbumen">最近选择</a>
          </div>
          <!--搜索框-->
          <el-input placeholder="输入关键字进行过滤" :disabled="true" v-model="filterDepartmentText"></el-input>
          <!--人员列表-->
          <el-table :data="staffData" style="width: 100%" ref="userTable" :select="getUserId">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column>
              <template slot-scope="scope">
                <img :src="scope.row.user_icon" alt class="user-icon">
              </template>
            </el-table-column>
            <el-table-column prop="name"></el-table-column>
            <el-table-column prop="shijian"></el-table-column>
          </el-table>
        </el-col>
        <el-col :span="12" class="right">
          <!--人员列表-->
          <el-table :data="staffData" style="width: 100%">
            <el-table-column prop="name"></el-table-column>
            <el-table-column prop="bumen"></el-table-column>
            <el-table-column prop="shijian"></el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="staffFlag = false">确 定</el-button>
        <el-button @click="staffFlag = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "step1",
  data() {
    return {
      rules: {
        groupName: [
          { required: true, message: "请输入考勤组名称", trigger: "blur" }
        ],
        attnDuration: [
          { required: true, message: "请输入考勤组名称", trigger: "blur" }
        ],
        attnType: [
          { required: true, message: "请输入考勤组名称", trigger: "change" }
        ]
      },
      treeOpt: {
        label: "org_name"
      },
      classFlag: true, //控制弹出框内部头切换显示不同样式
      addForm1: {
        //新增考勤组表单数据
        groupName: "", //考勤组名称
        attnDuration: "", //考勤标准时长
        attnType: "", //考勤类型
        attnLocation: "abc" //打卡地点
      },
      // 因为直接修改父元素的active会报错，所以添加这个变量
      step1Active: 0,
      departmentFlag: false, //控制显示选择部门
      staffFlag: false, //控制显示选择员工
      filterDepartmentText: "", //搜索部门关键字
      // 部门数据
      data2: [
        {
          companyId: 1,
          org_name: "北京好的科技有限公司",
          children: []
        }
      ],
      // 人员列表数据
      staffData: []
    };
  },
  methods: {
    // 部门搜索
    filterNode(value, data) {
      console.log(value)
      console.log(data)
if (!value) return true;
        return data.children['org_name'].indexOf(value) !== -1;
    },
    // 发射一个事件，值是addAttendance组件中active自加后的值
    stepNext() {
      this.$refs.step1.validate(valid => {
        if (valid) {
          this.step1Active = this.value + 1;
          this.$emit("input", this.step1Active);
          this.$emit("formData1", this.addForm1);
        } else {
          // this.$message.error('请输入完成之后再点击下一步');
          return false;
        }
      });
    },
    // 显示选择部门
    showDepartment() {
      this.departmentFlag = true;
      this.$http({
        method: "post",
        url: "attendance/company/queryOrgList",
        params: {
          companyId: 1
        }
      }).then(res => {
        let { state, datas } = res.data;
        if (state === 200) {
          this.data2[0].children = datas;
        }
      });
    },
    chooseDepartment() {
      this.departmentFlag = false;
      let orgs = this.$refs.tree.getCheckedKeys();
      let newOrgs = orgs.filter(item => {
        return item !== undefined;
      });
      this.addForm1.orgs = newOrgs.join(",");
    },
    // 显示选择员工
    showStaff() {
      this.staffFlag = true;
      this.$http({
        method: "post",
        url: "attendance/company/queryUserList",
        params: {
          companyId: 1
        }
      }).then(res => {
        let { state, datas } = res.data;
        console.log(datas);
        if (state === 200) {
          this.staffData = datas;
        }
      });
    },
    // 下面两个控制弹出框切换部门和最近选择
    bumen() {
      this.classFlag = true;
    },
    zuijinbumen() {
      this.classFlag = false;
    },
    getUserId() {
      console.log(1);
    }
  },
  watch: {
    filterDepartmentText(val) {
      this.$refs.departmentTree.filter(val);
    }
  },
  mounted() {},
  // 接收父组件v-model传递过来的值
  props: ["value"]
};
</script>

<style lang="less" scoped>
// 打卡地点图标
.add-address {
  display: inline-block;
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  text-decoration: none;
  color: #58a1f4;
  border: 1px dashed #58a1f4;
  border-radius: 5px;
  img {
    vertical-align: middle;
  }
}
// 地点样式
.address {
  span {
    color: #bec5ea;
  }
  /deep/.el-table--border th {
    padding: 0;
    height: 40px;
    line-height: 40px;
    background-color: #eef0fa;
    font-weight: 400;
  }
}
.user-icon {
  width: 38px;
  height: 38px;
  border-radius: 50%;
}
.choose-staff a {
  display: inline-block;
  width: 138px;
  height: 30px;
  line-height: 30px;
  border: 1px solid #58a1f4;
  color: #58a1f4;
  border-radius: 3px;
  text-align: center;
  text-decoration: none;
  margin-right: 30px;
}
/*弹出框样式*/
.el-dialog__wrapper {
  /deep/.el-dialog {
    width: 720px;
  }
  .el-row {
    height: 440px;
  }
  /deep/.el-dialog__header {
    border-bottom: 1px solid #eef0fa;
  }
  /deep/ .el-dialog__body {
    padding-top: 12px;
    .left {
      /*弹出框头部切换样式*/
      .switch-choose {
        display: inline-block;
        width: 245px;
        height: 34px;
        margin-bottom: 30px;
        border: 1px solid #bec5ea;
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
          background-color: #58a1f4;
          color: #fff;
          box-shadow: 0 0 0 1px #58a1f4;
          border-radius: 17px;
        }
      }
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
}
// 错误提示有关样式
.el-form-item__content {
  position: relative;
}
/deep/.el-form-item__error {
  position: absolute;
  top: 10px;
  left: 14px;
}
.attnType {
  /deep/.el-form-item__error {
    position: absolute;
    top: 74px;
    left: 6px;
  }
}
.nextStep {
  width: 240px;
  height: 42px;
  text-align: center;
  line-height: 42px;
  padding: 0 !important;
  background-color: #eef0fa;
  color: #61688d;
  border: none;
  margin-bottom: 50px;
}
</style>
