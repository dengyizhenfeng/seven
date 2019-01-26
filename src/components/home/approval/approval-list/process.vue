<template>
  <div class="process-box">
    <div class="body">
      <div class="left">
        <div class="title">
          <img src="@/assets/images/approval/icon.jpg" class="user-icon">
          <div>
            <h3>{{ data.user_name }}</h3>
            <span>{{ data.org_name }}</span>
          </div>
        </div>
        <div class="body">
          <ul>
            <li>申请时间：{{ data.final_time }}</li>
            <li>申请类型：{{ data.appr_type }}申请</li>
            <li>打卡时间：2019-01-08 09:02:23</li>
            <li>出差原因：去上海拜访客户</li>
          </ul>
        </div>
        <div class="footer">
          <a href="javascript:;" class="agree">同意</a>
          <a href="javascript:;" class="reject">驳回</a>
        </div>
      </div>
      <div class="right">
        <div class="title">审批进度</div>
        <el-steps direction="vertical" :active="1">
          <el-step title="审批结束" description></el-step>
          <el-step title="最终审批人" description="管理人邓雅丹 待审核"></el-step>
          <el-step title="发起人" description="黄晓丹"></el-step>
        </el-steps>
        <img class="right-icon" src="@/assets/images/approval/sp_wxz.png" alt>
        <div class="time time2 blue">2019-01-03 11:44:23</div>
        <div class="time time3 gray">2019-01-03 11:44:23</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {} //本页面渲染用的数据
    
    };
  },

  methods: {},
  //   更改步骤条顺序
  mounted() {
    [...document.querySelectorAll(".el-steps .el-step__icon div")].forEach(
      (el, index, arr) => {
        console.log(el, arr.length - index); // 3,2,1
        el.innerHTML = arr.length - index;
      }
    );
  },
  props: ['processdata'],
  watch: {
    processdata(newV, oldV) {
      this.data = newV
    }
  }
};
</script>
<style lang='less' scoped>
.process-box {
  overflow: hidden;
  // 左侧部分
  > .body {
    .left {
      float: left;
      width: 640px;
      height: 520px;
      border: 1px solid #bec5ea;
      border-radius: 5px;
      .title {
        display: flex;
        height: 130px;
        padding-left: 30px;
        padding-top: 30px;
        border-bottom: 1px solid #eef0fa;
        .user-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
        }
        div {
          padding-top: 20px;
          padding-left: 15px;
        }
        h3 {
          font-size: 20px;
          color: #3b4059;
          font-weight: 400;
        }
        span {
          color: #61688d;
        }
      }
      .body {
        padding-left: 30px;
        padding-right: 30px;
        li {
          height: 50px;
          line-height: 50px;
          border-bottom: 1px solid #eef0fa;
          list-style: none;
          font-size: 16px;
          color: #61688d;
          &:last-child {
            height: 100px;
          }
        }
      }
    }
    // 右侧部分
    .right {
      position: relative;
      float: left;
      margin-left: 20px;
      width: 340px;
      height: 330px;
      background-color: #eef0fa;
      border-radius: 5px;
      .right-icon {
        position: absolute;
        left: 156px;
        top: 65px;
      }
      .title {
        height: 40px;
        line-height: 40px;
        padding-left: 22px;
        border-bottom: 1px solid #fff;
        color: #61688d;
        font-size: 16px;
      }
      //   步骤条
      /deep/.el-steps--vertical {
        padding-top: 20px;
        height: auto;
        .el-step__head.is-finish {
          color: #58a1f4;
          border-color: #58a1f4;
        }
        .el-step__icon.is-text {
          border-width: 1px;
        }
        .el-step.is-vertical .el-step__line {
          display: none;
        }
        .el-step.is-vertical .el-step__main {
          padding-left: 14px;
        }
        .el-step.is-vertical {
          margin-left: 50%;
          transform: translateX(-14px);
          &:nth-child(1),
          &:nth-child(2) {
            margin-bottom: 65px;
            &::after {
              content: "";
              position: absolute;
              left: 8px;
              top: 27px;
              width: 0;
              height: 52px;
              border: 1px dashed #bec5ea;
            }
          }
          &:nth-child(2) {
            margin-bottom: 45px;
          }
        }
        .el-step__icon {
          width: 20px;
          height: 20px;
          font-size: 14px;
          font-weight: 400;
        }
        .el-step__title.is-wait {
          font-size: 14px;
          color: #61688d;
          font-weight: 400;
          margin-top: -4px;
        }
        .el-step__title.is-process {
          font-size: 14px;
          color: #61688d;
          font-weight: 400;
          margin-top: -4px;
        }
        .el-step__title.is-finish {
          margin-top: 0px;
        }
        .el-step__description.is-wait {
          color: #58a1f4;
        }
        .el-step__description.is-process {
          color: #58a1f4;
        }
        .el-step__icon-inner {
          font-weight: 400;
        }
        .el-step.is-vertical:first-child .el-step__icon-inner {
          font-size: 0;
        }
      }
      //   时间
      .time {
        position: absolute;
        padding-top: 3px;
        width: 100px;
        height: 44px;
        border-radius: 16px 5px 16px 16px;
        font-size: 14px;
        text-align: center;
      }
      .time2 {
        left: 47px;
        top: 151px;
      }
      .time3 {
        left: 47px;
        top: 239px;
      }
      .blue {
        background-color: #58a1f4;
        color: #fff;
      }
      .gray {
        background-color: #bec5ea;
        color: #fff;
      }
    }
  }
  .footer {
    padding-top: 50px;
    .agree {
      display: inline-block;
      width: 240px;
      height: 42px;
      margin-left: 47px;
      line-height: 42px;
      text-align: center;
      background-color: #58a1f4;
      color: #fff;
      text-decoration: none;
      border-radius: 3px;
    }
    .reject {
      display: inline-block;
      text-decoration: none;
      width: 180px;
      height: 42px;
      line-height: 42px;
      margin-left: 30px;
      text-align: center;
      border: 1px solid #f76c6c;
      color: #f76c6c;
      border-radius: 3px;
    }
  }
}
</style>