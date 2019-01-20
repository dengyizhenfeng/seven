<template>
  <div>
    <el-form :inline="true" :model="formData">
      <!--关键字-->
      <el-form-item label="关键字">
        <el-input v-model="formData.keyword" placeholder="关键字"></el-input>
      </el-form-item>
      <!--排序-->
      <el-form-item label="排序">
        <el-select v-model="formData.sort" placeholder="排序">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="search">查询</el-button>
        <el-button type="success" @click="resetForm">重置</el-button>
      </el-form-item>
      <el-form-item class="add">
        <el-button type="success" @click="add">新增考勤组</el-button>
      </el-form-item>
    </el-form>
    <!--表格区域-->
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="name"
        label="考勤组名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="type"
        label="考勤类型"
        width="180">
      </el-table-column>
      <el-table-column
        prop="time"
        label="出勤时间">
      </el-table-column>
      <el-table-column
        prop="fanwei"
        label="适用范围">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="bianji">编辑</el-button>
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
        formData: { //表单数据
          keyword: '', //关键字
          sort: '' //排序
        },

        //表格数据
        tableData: [
          {name: '企业不考勤人员', type: '不打卡', time: '上下班：9.00-11.00', fanwei: '研发部等'},
          {name: '企业不考勤人员', type: '不打卡', time: '上下班：9.00-11.00', fanwei: '研发部等'}
        ],
        options1: [{  // 排序中的选项
          value: '后台需要的值',
          label: '前台展示的文本'
        }],
      }
    },
    methods: {
      bianji() { //编辑

      },
      search() { //查找

      },
      resetForm() { //重置表单

      },
      add() { //新增考勤组
        this.$router.push('/attendance/addAttendance')
      }
    }
  }
</script>

<style scoped>

</style>
