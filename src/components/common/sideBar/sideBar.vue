<template>
  <div class="toggle" ref="toggle">
    <el-row class="toggleTop">
      <el-col :span="24">
        <div ref="toggleSide" class="toggleSide" @click="toggle">
          <i></i>
        </div>
        <!-- 用户头像 -->
        <div class="picture">
          <img src="" alt>
          <p>费鹿</p>
        </div>
      </el-col>
    </el-row>
    <el-menu  class="el-menu-vertical" router>
      <el-menu-item index="/home">
        <i>
          <img src="../../../assets/images/sy_gzt.png" alt>
          <img src="../../../assets/images/sy_gztxz.png" alt>
        </i>
        <span slot="title">我的工作台</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i>
          <img src="../../../assets/images/tab_xx.png" alt>
          <img src="../../../assets/images/tab_xxxz.png" alt="">
        </i>
        <span slot="title">在线咨询</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i>
          <img src="../../../assets/images/sy_qyjz.png" alt>
          <img src="../../../assets/images/sy_qyjzxz.png" alt>
        </i>
        <span slot="title">企业机制建设</span>
      </el-menu-item>
      <el-menu-item index="/organization">
        <i>
          <img src="../../../assets/images/sy_zjjg.png" alt>
          <img src="../../../assets/images/sy_zjjgxz.png" alt>
        </i>
        <span slot="title">组织架构</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i>
          <img src="../../../assets/images/tab_wd.png" alt>
          <img src="../../../assets/images/tab_wdxz.png" alt>
        </i>
        <span slot="title">员工</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i>
          <img src="../../../assets/images/tab_txl.png" alt>
          <img src="../../../assets/images/tab_txlxz.png" alt>
        </i>
        <span slot="title">通讯录</span>
      </el-menu-item>
      <el-menu-item index="/attendance">
        <i>
          <img src="../../../assets/images/gzt_wdkq.png" alt>
          <img src="../../../assets/images/gzt_wdkqxz.png" alt>
        </i>
        <span slot="title">考勤</span>
        <!-- <router-link to="../../home/attendance/attendance-home"></router-link> -->
      </el-menu-item>
      <el-menu-item index="/human">
        <i>
          <img src="../../../assets/images/gzt_wdrw.png" alt>
          <img src="../../../assets/images/gzt_wdrwxz.png" alt>
        </i>
        <span slot="title">人资</span>
      </el-menu-item>
      <el-menu-item index="/approval">
        <i>
          <img src="../../../assets/images/sy_45.png" alt>
          <img src="../../../assets/images/sy_45xz.png" alt>
        </i>
        <span slot="title">审批</span>
      </el-menu-item>
      <el-menu-item index="10">
        <i>
          <img src="../../../assets/images/gzt_ygsc.png" alt>
          <img src="../../../assets/images/gzt_ygscxz.png" alt>
        </i>
        <span slot="title">减员定制方案</span>
      </el-menu-item>
      <el-menu-item index="11">
        <i>
          <img src="../../../assets/images/sy_123.png" alt>
          <img src="../../../assets/images/sy_123xz.png" alt>
        </i>
        <span slot="title">劳动纠纷救援</span>
      </el-menu-item>
      <el-menu-item index="12">
        <i>
          <img src="../../../assets/images/sy_12.png" alt>
          <img src="../../../assets/images/sy_12xz.png" alt>
        </i>
        <span slot="title">社保代缴</span>
      </el-menu-item>
      <el-menu-item index="13">
        <i>
          <img src="../../../assets/images/gzt_qj.png" alt>
          <img src="../../../assets/images/gzt_qjxz.png" alt>
        </i>
        <span slot="title">求职者黑名单</span>
      </el-menu-item>
      <el-menu-item index="14">
        <i>
          <img src="../../../assets/images/xx_xttz.png" alt>
          <img src="../../../assets/images/xx_xttzxz.png" alt>
        </i>
        <span slot="title">公告</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    methods: {
      toggle() {
        if (!this.$refs.toggle.classList.contains('active')) {
          this.$refs.toggle.classList.add('active')
          this.$refs.toggleSide.classList.add('active')
          // 给侧边栏的父元素添加active
          this.$parent.$el.classList.add('active')
          // 给侧边栏和头部的父元素添加active
          this.$parent.$parent.$el.classList.add('active')
        } else {
          this.$refs.toggle.classList.remove('active')
          this.$refs.toggleSide.classList.remove('active')
          // 给侧边栏的父元素移除active
          this.$parent.$el.classList.remove('active')
          // 给侧边栏和头部的父元素移除active
          this.$parent.$parent.$el.classList.remove('active')
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .el-menu {
    border-right: 0;
  }

  img {
    padding-left: 20px;
    padding-right: 8px;
  }

  .is-active:hover {
    background-color: #58a1f4;
  }

  .el-menu-vertical {
    background: transparent;
    position: absolute;
  }

  .el-menu-vertical li {
    width: 200px;
    background-color: #3b4059;
    color: #bec5ea;
    transition: width .5s;
    overflow: hidden;
    &:last-child{
      margin-bottom: 100px;
    }
  }

  span {
    display: inline-block;
    font-size: 12px;
    padding: 10px 0;
    text-align: center;
  }

  .el-menu-item {
    height: 46px;
    line-height: 46px;
  }

  .el-menu-item.is-active {
    color: #fff;
    width: 180px;
    height: 46px;
    line-height: 46px;
    background-color: #58a1f4;
    border-radius: 10px 22px 22px 22px;
    box-sizing: content-box;
    transition: border-radius 0s;
  }

  .toggle {
    position: absolute;
    width: 240px;
    overflow-y: scroll;
    color: #333;
    height: 100%;
    transition: width .5s;
    &.active {
      width: 70px;
      transition: width .5s;
      /deep/.el-aside{
        width: 30px;
      }
    }
    .toggleTop {
      /*width: 200px;*/
      background-color: #3B4059;
    }
    .el-menu {
      width: 200px;
      background-color: #3B4059;
    }
  }

  .toggleSide {
    width: 50px;
    margin-top: 20px;
    margin-left: 35px;
    transition: width .5s;
    i {
      // float: left;
      display: block;
      width: 16px;
      height: 2px;
      background-color: #BEC5EA;
      margin: 5px 0;
    }
    &::before,
    &::after {
      // float: left;
      content: "";
      display: block;
      width: 20px;
      height: 2px;
      background-color: #BEC5EA;
    }
  }

  // 有active的时候切换效果
  .toggle.active {
    .toggleSide {
      transform: rotate(90deg);
      transition: all .5s;
      transform-origin: left top;
    }
    .el-menu {
      width: 50px;
      overflow: hidden;
      transition: width .5s;
      .el-menu-item {
        width: 50px;
        padding: 0;
        padding-left: 0 !important;
        overflow: hidden;
        white-space: no-wrap;
        transition: width .5s;
        i {
          padding: 0;
          transition: padding .5s;
        }
        span {
          width: 0px;
          overflow: hidden;
          // opacity: 0;
          transition: width .5s;
        }
      }
    }
  }

  .picture {
    text-align: center;
    height: 50px;
    line-height: 50px;
    width: 50px;
    background-color: green;
    border-radius: 50%;
    border: 1px solid #fff;
    margin: 40px 75px;
    p {
      font-size: 14px;
      color: #fff;
    }
  }

  // 切换小图片
  .el-menu-item.is-active {
    img:first-child {
      display: none;
    }
    img:nth-child(2) {
      display: inline-block;
    }
  }

  .el-menu-item {
    img:first-child {
      display: inline-block;
    }
    img:nth-child(2) {
      display: none;
    }
  }
</style>
