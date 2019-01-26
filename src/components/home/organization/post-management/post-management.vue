<template>
  <div class="post-manage-box">
    <el-row class="manage-box">
      <div class="left">
        <label>岗位名称
          <el-input class="post-name" v-model="input" placeholder="请输入"></el-input>
        </label>
        <label class="ml40">岗位人数：
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </label>
        <label class="ml40">岗位编制：
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </label>
        <a href="javascript" class="ml40 search">搜索</a>
        <a href="javascript:;" class="reset">重置</a>
      </div>
      <div class="right">
        <a href="javascript:;" class="add" @click="addFlag = true">
          添加岗位
          <img src="@/assets/images/organization/zzjg_xx_ic_ls.png" alt>
        </a>
        <a href="javascript:;" class="delete">批量删除</a>
      </div>
    </el-row>
    <el-row>
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%">
        <el-table-column type="selection" width="55" prop="address"></el-table-column>
        <el-table-column label="岗位名称" width="120" prop="address"></el-table-column>
        <el-table-column prop="address" label="在职人数" width="120"></el-table-column>
        <el-table-column prop="address" label="全职人数"></el-table-column>
        <el-table-column prop="address" label="人员编制"></el-table-column>
        <el-table-column prop="address" label="已离职员工数"></el-table-column>
        <el-table-column prop="address" label="岗位编码"></el-table-column>
        <el-table-column prop="address" label="岗位类别"></el-table-column>
        <el-table-column prop="address" label="默认岗位职级"></el-table-column>
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <a href="javascrpt:;" class="adjustment">调整岗位编制</a>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <!-- 新增职位 -->
    <el-dialog class="add-position" title="提示" :visible.sync="addFlag">
      <el-form>
        <el-form-item
          label="岗位名称"
          prop="name"
          :rules="rules"
          ref="addPositon"
          :model="addPosition"
          label-width="100px"
        >
          <el-input placeholder="请输入姓名" v-model="addPosition.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <a href="javascrpt:;" @click="addFlag = false" class="sure">确 定</a>
        <a href="javascript:;" @click="addFlag = false" class="cancel">取 消</a>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 添加职位验证
      rules: {
        name: [{ required: true, trigger: "blur", message: "请输入岗位名称" }]
      },
      // 添加职位数据
      addPosition: {
        name: ""
      },
      addFlag: false,
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        }
      ],
      // 表格的数据
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },

  methods: {}
};
</script>
<style lang='less' scoped>
.post-manage-box {
  /*头部区域*/
  .manage-box {
    padding-top: 10px;
    height: 50px;
    overflow: hidden;
    font-size: 14px;
    color: #3b4059;
    border-bottom: 1px solid #eef0fa;
    .ml40 {
      margin-left: 40px;
    }
    .left {
      float: left;
      .search {
        display: inline-block;
        width: 70px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 4px;
        background-color: #58a1f4;
        color: #fff;
        text-decoration: none;
      }
      .reset {
        display: inline-block;
        text-align: center;
        margin-left: 20px;
        color: #61688d;
        text-decoration: none;
      }
      .el-input {
        width: auto;
      }
      /deep/.el-input__inner {
        width: 136px;
        height: 30px;
      }
    }
    .right {
      float: right;
      .add {
        display: inline-block;
        width: 102px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        text-decoration: none;
        color: #fff;
        background-color: #58a1f4;
        border-radius: 4px;
      }
      .delete {
        display: inline-block;
        width: 102px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #58a1f4;
        border: 1px solid #58a1f4;
        text-decoration: none;
        border-radius: 4px;
      }
    }
  }
  /*表格区域*/
  /deep/.el-checkbox__inner {
    border-radius: 3px;
  }
  /deep/.el-table td,
  /deep/.el-table th {
    padding: 0;
  }
  /deep/.el-table {
    margin-top: 24px;
  }
  /deep/.el-table th {
    height: 40px !important;
    line-height: 40px;
    background-color: #eef0fa;
    font-size: 16px;
    color: #61688d;
    font-weight: 400;
  }
  /deep/.el-table td {
    height: 60px;
    line-height: 60px;
  }
  .adjustment {
    font-size: 14px;
    color: #58a1f4;
    text-decoration: none;
  }
  // 新增弹出框
  /deep/.el-dialog {
    width: 420px;
    height: 170px;
    /deep/.el-dialog__header {
      padding: 0 24px;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #eef0fa;
      font-size: 16px;
      font-weight: 700;
      /deep/.el-dialog__headerbtn{
        display: none;
      }
    }
    /deep/.el-dialog__body {
      padding: 0 24px;
      height: 60px;
      padding-top: 13px;
      /deep/.el-form-item__label {
        text-align: left;
      }
      /deep/.el-input__inner {
        width: 273px;
        height: 34px;
        line-height: 34px;
      }
    }
    /deep/.el-dialog__footer {
      padding: 18px 24px 0;
      height: 70px;
      text-align: left;
      .sure {
        display: inline-block;
        width: 102px;
        height: 34px;
        line-height: 34px;
        text-align: center;
        background-color: #58a1f4;
        text-decoration: none;
        color: #fff;
        border-radius: 3px;
        font-size: 14px;
      }
      .cancel {
        text-decoration: none;
        margin-left: 37px;
        color: #61688d;
      }
    }
  }
}
</style>
