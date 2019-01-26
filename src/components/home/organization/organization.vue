<template>
  <div class="organiztion">
    <el-row class="organiztion-link">
      <router-link
        to="/organization/organizational-structure"
        active-class="organiztion-active"
      >组织机构</router-link>
      <!-- <router-link to="/organization/post-management" active-class="organiztion-active">岗位管理</router-link> -->
    </el-row>
    <el-row>
      <router-view></router-view>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "organizational-structure"
    };
  },

  methods: {}
};
</script>
<style lang='less' scoped>
.organiztion {
  background-color: #fff;
  padding: 0 40px;
  // 链接盒子
  .organiztion-link {
    height: 60px;
    line-height: 60px;
    // text-align: center;
    border-bottom: 1px solid #EEF0FA;
    a {
      position: relative;
      text-decoration: none;
      font-size: 16px;
      color: #61688d;
      &:first-child{
        margin-right: 57px;
      }
      &.organiztion-active {
        font-weight: 700;
        // &::after {
        //   content: "";
        //   position: absolute;
        //   width: 24px;
        //   height: 4px;
        //   border-radius: 2px;
        //   background-color: #58a1f4;
        //   left: 50%;
        //   transform: translateX(-50%);
        //   bottom: -19px;
        // }
      }
    }
  }
}
</style>