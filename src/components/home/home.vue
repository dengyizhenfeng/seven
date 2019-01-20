<template>
  <el-container class="box-container">
    <el-header>
      <Top />
    </el-header>
    <el-container>
      <el-aside>
        <SideBar />
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// 导入 top
import Top from '@/components/common/top/top.vue'
// 导入 sidebar
import SideBar from '@/components/common/sideBar/sideBar.vue'
// attendance相当于home    
// 三个选项相当于top
// 三个文件相当于home-page
export default {
  components: {
    Top,
    SideBar
  }
  // beforeCreate() {
  //   // 权证是否存在token
  //   var token = window.localStorage.getItem('token')
  //   if (!token) {
  //     this.$router.push({ name: 'login' });
  //   }
  //   // 给所有的 axios 请求设置请求头：
  //   this.$http.defaults.headers.common['Authorization'] = token;
  // }
}
</script>

<style lang="less" scoped>
  /*顶部*/
/deep/.el-header {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  min-width: 1280px;
  color: #333;
  line-height: 60px;
  z-index: 999;
  padding:0 30px;
  text-align: left;
  background-color: #fff;
}
/*侧边栏*/
.el-aside {
  position: fixed;
  left: 0;
  top: 0;
  padding-top: 60px;
  width: 220px !important;
  color: #333;
  height: 100%;
  overflow: hidden;
  z-index: 998;
  transition: width .5s;
  /deep/.toggleTop {
    width: 200px !important;
    transition: width .3s;
  }
}
/*右侧内容区域*/
.el-main {
  background-color: #F5F6FB;
  color: #333;
  margin: 60px 0 0 200px;
  transition: margin-left .5s;
  /deep/.box {
    background-color: #fff;
  }
}
/*侧边激活的时候，侧边及右侧内容区域的样式*/
.el-container.active {
  .el-aside.active {
    width: 50px !important;
    transition: width .5s;
    /deep/.toggleTop{
      width: 50px !important;
      transition: width .5s;
    }
  }
  .el-main {
    margin-left: 50px;
    transition: margin-left .5s;
  }
}
</style>
