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
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-button type="primary">批量删除</el-button>
      </div>
    </el-row>
    <el-row>
      <el-table
    ref="multipleTable"
    :data="tableData3"
    tooltip-effect="dark"
    style="width: 100%"
    >
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="岗位名称"
      width="120">
    </el-table-column>
    <el-table-column
      prop="name"
      label="在职人数"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="全职人数"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="address"
      label="人员编制"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="address"
      label="已离职员工数"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="address"
      label="岗位编码"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="address"
      label="岗位类别"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="address"
      label="默认岗位职级"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="address"
      label="操作"
      show-overflow-tooltip>
      <template slot-scope="scope">
        <el-button
          size="mini"
         >调整岗位编制</el-button>
      </template>
    </el-table-column>
  </el-table>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        }
      ],
      // 表格的数据
      tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
    };
  },

  methods: {}
};
</script>
<style lang='less' scoped>
.post-manage-box{
  /*头部区域*/
  .manage-box{
    padding-top: 10px;
    height: 50px;
    overflow: hidden;
    font-size: 14px;
    color: #3B4059;
    border-bottom: 1px solid #EEF0FA;
    .ml40{
      margin-left: 40px;
    }
    .left{
      float: left;
      .search{
        display: inline-block;
        width: 70px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 4px;
        background-color: #58A1F4;
        color: #fff;
        text-decoration: none;
      }
      .reset{
        display: inline-block;
        text-align: center;
        margin-left: 20px;
        color: #61688D;
        text-decoration: none;
      }
      .el-input{
        width: auto;
      }
      /deep/.el-input__inner{
        width: 136px;
        height: 30px;
      }
    }
    .right{
      float: right;
    }
  }
  /*表格区域*/
  .el-table{
    margin-top: 24px;
    /deep/.el-table td, /deep/.el-table th{
      padding: 0;
    }
    /deep/.el-table th{
      height: 40px;
      line-height: 40px;
      background-color: #EEF0FA;
      font-size: 16px;
      color: #61688D;
    }
    /deep/.el-table td{
      height: 60px;
      line-height: 60px;
    }
  }
}
</style>
