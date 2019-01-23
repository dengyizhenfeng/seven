<template>
  <div class="set-box">
    <el-row>
      <el-form :inline="true" :model="formData">
        <!--关键字-->
        <el-form-item label="关键字">
          <el-input v-model="formData.groupName" placeholder="关键字"></el-input>
        </el-form-item>
        <!--排序-->
        <!-- <el-form-item label="排序">
          <el-select v-model="formData.sort" placeholder="排序">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>-->
        <el-form-item>
          <el-button type="primary" @click="search">查询</el-button>
          <el-button type="primary" @click="resetForm">重置</el-button>
        </el-form-item>
        <el-form-item class="add">
          <el-button type="primary" @click="add" class="add">新增考勤组</el-button>
        </el-form-item>
      </el-form>
    </el-row>
    <!--表格区域-->
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="groupName" label="考勤组名称"></el-table-column>
      <el-table-column label="考勤类型">
        <template slot-scope="scope">
          <div v-if="scope.row.attnType === 1">
            固定班制
          </div>
          <div v-else-if="scope.row.attnType === 2">
            不打卡
          </div>
        </template>
      </el-table-column>
      <el-table-column label="出勤时间">
        <template slot-scope="scope">
          <div v-if="scope.row.attnType === 1">
            上下班：9:00-6:30；休息：12:00-13：30
          </div>
          <div v-else-if="scope.row.attnType === 2">
            --
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="users" label="适用范围"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <img src="../../../../../assets/images/kq_bssz.png" alt="">
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "attendance-set",
  data() {
    return {
      formData: {
        //表单数据
        groupName: "" //关键字
      },
      //表格数据
      tableData: []
    };
  },
  methods: {
    bianji() {
      //编辑
    },
    search() {
      //查找
      let formData = { companyId: 1 };
      if (this.formData.groupName.trim() !== "") {
        formData.groupName = this.formData.groupName;
      }
      this.$http({
        method: "post",
        url: "attendance/company/setAttendance",
        params: formData
      }).then(res => {
        let {state, datas} = res.data
        if(state === 200) {
          this.tableData = datas
        }
      });
    },
    resetForm() {
      //重置表单
    },
    add() {
      //新增考勤组
      this.$router.push("/attendance/addAttendance");
    }
  }
};
</script>

<style scoped lang="less">
.set-box {
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
.add {
  float: right;
  width: 102px;
  height: 30px;
  // margin-top: 6px;
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
  font-weight: 400;
  height: 40px;
  line-height: 40px;
  color: #61688D;
  background-color: #eef0fa;
}
</style>
