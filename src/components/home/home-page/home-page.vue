<template>
  <div class="box">
    <el-row>
      <!-- 左侧 -->
      <el-col :span="18">
        <div class="grid-content bg-purple">
          <!-- 日历 -->
          <el-row class="calendar">
            <el-col :span="16">
              <div class="grid-content bg-purple">
                <vue-event-calendar title="title" :events="demoEvents" @dayChanged=""></vue-event-calendar>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple-light"></div>
            </el-col>
          </el-row>
          <!-- 快捷操作 用的路由 -->
          <el-row class="operation">
            <el-col :span="16">
              <div class="grid-content bg-purple allicon">
                <div class="title">
                  <span>快捷操作</span>
                  <a href="#">
                    <img src="../../../assets/images/sy_sz.png" alt>
                  </a>
                </div>
                <!-- 第一排 -->
                <el-row :gutter="20" class="icon">
                  <el-col :span="6">
                    <div class="grid-content bg-purple shortcut">
                      <router-link to="/">
                        <img src="../../../assets/images/tab_xxb.png" alt>
                        <h4>在线咨询</h4>
                      </router-link>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="grid-content bg-purple shortcut">
                      <router-link to="/">
                        <img src="../../../assets/images/sy_qyjzjsb.png" alt>
                        <h4>企业机制建设</h4>
                      </router-link>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="grid-content bg-purple shortcut">
                      <router-link to="/">
                        <img src="../../../assets/images/tab_wdj5b.png" alt>
                        <h4>减员制定方案</h4>
                      </router-link>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="grid-content bg-purple shortcut">
                      <router-link to="/">
                        <img src="../../../assets/images/soso.png" alt>
                        <h4>劳动纠纷救援</h4>
                      </router-link>
                    </div>
                  </el-col>
                </el-row>
                <!-- 第二排 -->
                <el-row :gutter="20" class="icon">
                  <el-col :span="6">
                    <div class="grid-content bg-purple shortcut">
                      <router-link to="/">
                        <img src="../../../assets/images/tab_wd3b.png" alt>
                        <h4>导入花名册</h4>
                      </router-link>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="grid-content bg-purple shortcut">
                      <router-link to="/">
                        <img src="../../../assets/images/tab_wds2b.png" alt>
                        <h4>添加在职员工</h4>
                      </router-link>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="grid-content bg-purple shortcut">
                      <router-link to="/">
                        <img src="../../../assets/images/tab_wd4bb.png" alt>
                        <h4>添加待入职</h4>
                      </router-link>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="grid-content bg-purple shortcut">
                      <router-link to="/">
                        <img src="../../../assets/images/gzt_sqlb2.png" alt>
                        <h4>入职/转正管理</h4>
                      </router-link>
                    </div>
                  </el-col>
                </el-row>
                <!-- 第三排 -->
                <el-row :gutter="20" class="icon">
                  <el-col :span="6">
                    <div class="grid-content bg-purple shortcut">
                      <router-link to="/">
                        <img src="../../../assets/images/gzt_ygscb.png" alt>
                        <h4>离职管理</h4>
                      </router-link>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="grid-content bg-purple shortcut">
                      <router-link to="/">
                        <img src="../../../assets/images/gzt_bzgz.png" alt>
                        <h4>电子工资条</h4>
                      </router-link>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="grid-content bg-purple shortcut">
                      <router-link to="/">
                        <img src="../../../assets/images/gzt_sqlwjb.png" alt>
                        <h4>查看账单</h4>
                      </router-link>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="grid-content bg-purple shortcut">
                      <router-link to="/">
                        <img src="../../../assets/images/fpb.png" alt>
                        <h4>申请发票</h4>
                      </router-link>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <!-- 常用工具  用的a标签 -->
            <el-col :span="8">
              <div class="grid-content bg-purple-light alltool">
                <div class="title">
                  <span>常用工具</span>
                </div>
                <el-row class="tool">
                  <el-col :span="24">
                    <div class="grid-content bg-purple-dark">
                      <a href="#">
                        <img src="../../../assets/images/gzt_wdtd.png" alt>
                      </a>
                      <p>人力成本变化速算器</p>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="tool">
                  <el-col :span="24">
                    <div class="grid-content bg-purple-dark">
                      <a href="#">
                        <img src="../../../assets/images/sy_rsbg.png" alt>
                      </a>
                      <p>人事常用表格</p>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="tool">
                  <el-col :span="24">
                    <div class="grid-content bg-purple-dark">
                      <a href="#">
                        <img src="../../../assets/images/gzt_wdtd.png" alt>
                      </a>
                      <p>人事计算器</p>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="tool">
                  <el-col :span="24">
                    <div class="grid-content bg-purple-dark add">
                      <div class="add-item">
                        <a href="#">
                          <img src="../../../assets/images/bo_tjx.png" alt>
                        </a>
                        <i>添加新功能</i>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <!-- 右侧认证企业 -->
      <el-col :span="6">
        <div class="grid-content right">
          <!-- 第一行图片 -->
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple-dark authentication">
                <a href="#">
                  <img src="../../../assets/images/renzheng.png" alt>
                </a>
              </div>
            </el-col>
          </el-row>
          <!-- 第二行 -->
          <el-row  class="details progress">
            <el-col :span="24">
              <div class="grid-content bg-purple-dark">
                <div class="details-title">
                  <span>业务进展</span>
                  <a href="#">查看详情</a>
                </div>
                <div class="ongoing">
                  <span><img src="../../../assets/images/jxz_ic.png" alt="">进行中</span>
                </div>
                <p class="txt">There are moments in life when you miss someone so much that you just want to pick them from your dreams and hug them for real!</p>
                <p class="time">2019-01-03&nbsp;&nbsp;20:24:30</p>
              </div>
            </el-col>
          </el-row>
          <!-- 第三行 -->
          <el-row class="details account">
            <el-col :span="24">
              <div class="grid-content bg-purple-dark">
                <div class="details-title">
                  <span>账户余额</span>
                  <a href="#">查看详情</a>
                </div>
                <div class="money">
                  ￥100.00
                </div>
                <p>优惠券 ：3</p>
                <p>预计支持 ：56天</p>
                <div class="btn">
                  <span>立即充值</span>
                </div>
              </div>
            </el-col>
          </el-row>
          <!-- 第四行 -->
          <el-row class="details list">
            <el-col :span="24">
              <div class="grid-content bg-purple-dark">
                <div class="details-title">
                  <span>创建工单</span>
                  <a href="#">查看详情</a>
                </div>
                <p>申请技术部门内部用测试手机</p>
                <div class="no">
                  <span>未解决</span>
                </div>
                <p>随着技术部门工作进展，按照目前的开发状态需要测试手机。特此申请：1部iphone-5、一部iPhone-x、一部iPhone6、一部iPhone-7p。</p>
                <br/>
                <p>申请技术部门内部用测试手机</p>
                <div class="yes">
                  <span>已解决</span>
                </div>
                <p>随着技术部门工作进展，按照目前的开发状态需要测试手机。特此申请：1部iphone-5、一部iPhone-x、一部iPhone6、一部iPhone-7p。</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      demoEvents: [{
        date: '2016/11/12', // 必填
        title: 'Foo' // 必填
      }, {
        date: '2016/12/15',
        title: 'Bar',
        desc: 'description',
        customClass: 'disabled highlight' // 自定义日历单元格的Class，会加到对应的日历单元格上
      }]
    }
  },
  methods: {
    monthChange (month) {
      console.log(month)
    },
    dayChange (day) {
      console.log(day)
    }
  }
}
</script>

<style scoped lang="less">
  /*内容区域最外面大盒子*/
  .box{
    margin-bottom: -20px;
  }
  // 栅格样式
  .el-row {
    margin-bottom: 16px;
    &:last-child {
      margin-bottom: 0;
    }
    .grid-content {
      border-radius: 4px;
      /*min-width: 410px;*/
      min-height: 36px;
      margin-right: 16px;
    }
  }
  /* 一、日历样式*/
  .calendar {
    /*min-width: 750px;*/
    height: 500px;
    background-color: #fff;
    /deep/.cal-wrapper {
      width:850px;
      height:500px;
      background:rgba(255,255,255,1);
      box-shadow:0px 8px 21px 0px rgba(54,130,216,0.1);
      border-radius:10px;
    }
    overflow: hidden;
    .events-wrapper {
      float: right;
    }
  }
  // 日历左侧
  /deep/.__vev_calendar-wrapper .cal-wrapper .cal-header {
        text-align: center;
        width:290px;
        height:45px;
        border-radius:60px;
        margin-bottom: 10px;
        margin-top: 16px;
        padding-top: -10px;
        border: 1px solid #BEC5EA;
      }
      // 日历右侧
      /deep/.events-wrapper {
        // float: right;
        background-color: #fff !important;
        margin-left: 240px;
        width:370px;
        height:500px;
        background:rgba(255,255,255,1);
        border:1px solid rgba(238,240,250,1);
        border-radius:10px;
        }
        // .el-col-16 {
        //   width: 100%;
        // }
  /* 二、快捷操作样式 */
  .operation {
    /*min-width: 750px;*/
    background-color: #fff;
    // 公共样式
    span{
        display: inline-block;
        padding-left: 6px;
        padding-top: 18px;
        padding-bottom: 6px;
        // 小竖线
          &::before{
            content: '';
            display: inline-block;
            margin-right: 6px;
            // vertical-align: 0;
            width:4px;
            height:10px;
            background:rgba(88,161,244,1);
            border-radius:2px;
          }
        }
    // 1. 快捷操作图标
    .allicon {
      h4 {
        font-size: 14px;
        font-weight: 400;
        color: #61688D;
      }
      // 快捷操作标题
      .title {
        // height: 450px;
        padding-top: 10px;
        padding-left: 10px;
        padding-bottom: 30px;
        a {
        float: right;
        margin-right: 20px;
        padding-top: 10px;
        }
      }
      .icon {
        a {
          text-decoration: none;
          color: inherit;
          font-size: 12px;
        }
        .el-col {
          border-radius: 4px;
          text-align: center;
        }
      }

    }
    // 2. 常用工具
    .alltool {
      border-left: 1px solid #EEF0FA;
      padding-left: 24px;
      .tool {
        .el-col{
          position: relative;
          &:last-child{
            min-height: 40px;
          }
        }
        p {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          color: #fff;
        }
        a {
          display: block;
        }
        img {
          width: 100%;
          display: block;
          margin-bottom: -10px;
        }
        .add {
          position: absolute;
          margin-right: 16px;
          width: 94%;
          padding-left: 20px;
          /*height: 134%;*/
          min-height: 40px;
          border: 1px solid #bec5ea;
          opacity: 0.9;
          border-radius: 10px;
          .add-item{
            position: absolute;
            /*left: 50%;*/
            top: 50%;
            transform: translate(0, -50%);
            a {
              display: inline-block;
              vertical-align: 4px;
            }
            i {
              color: #61688D;
              font-style:normal;
            }
            img{
              width: 20px;
            }
          }
        }
      }
    }
  }
   /* 三、右侧认证企业样式 */
  .right {
    background-color: #fff;
    // 公共样式
    .details {
      padding: 0 20px;
      .grid-content{
        padding-left: 10px;
        padding-top: 10px;
      }
      .details-title{
        padding: 15px 0;
        height: 30px;
        line-height: 30px;
        box-sizing: content-box;
        a {
          float: right;
          text-decoration: none;
          font-size: 12px;
          color: #58A1F4;
        }
        span{
          display: inline-block;
          padding-left: 5px;
          font-size: 16px;
          font-family:MicrosoftYaHei;
          font-weight: 400;
          color: #3B4059;
          // 小竖线
          &::before{
            content: '';
            display: inline-block;
            margin-right: 6px;
            // vertical-align: 0;
            width:4px;
            height:10px;
            background:rgba(88,161,244,1);
            border-radius:2px;
          }
        }
      }
    }
    // 1. 认证企业图片
    /* 认证的图片其实.0高166px width: 400px但是设置之后为啥不到边儿呢？？？ */
    .authentication {
      a {
        display: block;
        img {
          width: 100%;
          height: 165px;
        }
      }
    }
    // 2. 业务进展
    .progress {
      .ongoing {
        text-align: center;
        line-height: 20px;
        background-color: #3FC871;
        width: 80px;
        height: 20px;
        border-radius: 15px;
        margin-bottom: 10px;
          span {
            color: #fff;
            font-size: 12px;
            img {
              display: inline-block;
              padding-right: 4px;
              vertical-align: -2px;
            }
          }
      }
      .txt {
        color: #61688D;
        font-size: 14px;
        line-height:22px;
      }
      .time {
        // height:11px;
        font-size:14px;
        color:rgba(190,197,234,1);
        line-height:22px;
        padding: 12px 0;
        border-bottom: 1px solid #EEF0FA;
      }

    }
    //3. 账户余额
    .account {
      .money {
        width:168px;
        height:32px;
        font-size:40px;
        font-family:MicrosoftYaHei-Bold;
        font-weight:bold;
        color:rgba(88,161,244,1);
        line-height:22px;
        padding-top: 10px;
        margin-bottom: 20px;
      }
      p {
        font-size:14px;
        color:rgba(97,104,141,1);
        line-height:22px;

      }
      // 立即充值按钮
      .btn {
        text-align: center;
        line-height: 20px;
        /*width:340px;*/
        height:38px;
        background:rgba(88,161,244,1);
        border-radius:19px;
        margin-bottom: 10px;
        margin-top: 16px;
        padding-top: 8px;
        border-bottom: 1px solid #EEF0FA;
          span {
            color: #fff;
            font-size: 16px;
          }
      }
    }
    // 4. 创建工单
    .list {
      p {
        font-size: 16px;
      }
      p:nth-child(2) {
        color: #3B4059;
        font-size: 16px;
      }
      .no {
        width:74px;
        height:20px;
        background:rgba(247,108,108,1);
        border-radius:5px 10px 10px 10px;
        text-align: center;
        margin: 16px 0;
        line-height: 20px;
        span {
          font-size: 12px;
          color: #fff;
        }
      }
      p:nth-child(4) {
        /*height:58px;*/
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(97,104,141,1);
        line-height:22px;
      }
      p:nth-child(6) {
        /*height:15px;*/
        font-size:16px;
        color:rgba(97,104,141,1);
        line-height:22px;
      }
      .yes {
        width:74px;
        height:20px;
        background:rgba(63,200,113,1);
        border-radius:5px 10px 10px 10px;
        text-align: center;
        margin: 16px 0;
        line-height: 20px;
        span {
          font-size: 12px;
          color: #fff;
        }
      }
      p:nth-child(8) {
        /*height:58px;*/
        font-size:14px;
        font-family:MicrosoftYaHei;
        font-weight:400;
        color:rgba(97,104,141,1);
        line-height:22px;
      }
    }

  }

</style>
