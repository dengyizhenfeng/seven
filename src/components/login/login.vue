<template>
  <div class="login">
        <Logo></Logo>
      <el-row class="loginform" type="flex">
       <!-- 登录页左侧 -->
        <el-col :span="12" class="loginleft">
          <h1><span>2000</span><span class="logincontent">万中小企业的云端人力</span></h1>
          <h5>开箱即用的人力资源管理系统</h5>
          <div class="loginfuwu">
            <p>服务内容</p>
            <p>服务内容一.服务内容二.服务内容三</p>
          </div>
          <h3>注册企业数量</h3>
          <p><span>1</span><span>9</span><span>6</span><span>8</span><span>0</span></p>
          <h3>服务覆盖员工数量</h3>
          <p><span>9</span><span>8</span><span>7</span><span>6</span><span>5</span><span>0</span><span>9</span></p>
        </el-col>
        <!-- 登录页右侧 -->
        <el-col :span="12" class="loginright">
          <div class="rightf">
            <!--注册等等修改为路由-->
           <router-view></router-view>
          </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import Logo from '../common/logo/logo.vue'
export default {
  data () {
    return {
      loginObj: {
        username: 'admin',
        password: '123456'
      }
    }
  },
  methods: {

  },
  components: {
    Logo
  }
}
</script>

<style lang="less">
  .login {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    .loginform {
      flex: 1;
      padding-top: 118px;
      position: relative;
      width: 100%;
      background-image: url('../../assets/images/DL_bg.png');
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: cover;
      /*左侧*/
      .loginleft {
        height: 600px;
        top: 100px;
        padding-left: 218px;
        h1 span {
          font-size: 40px;
          color: #fff;
        }
        h1 .logincontent {
          font-size: 40px;
          color: #53c8eb;
        }
        h5 {
          margin-top: 20px;
          font-size: 20px;
          color: #fff;
        }
        .loginfuwu {
          margin-top: 30px;
          p {
            font-size: 12px;
            color: #fff;
          }
        }
        h3 {
          margin-top: 30px;
          font-size: 16px;
          color: #fff;
        }
        p span {
          display: inline-block;
          width: 30px;
          height: 38px;
          line-height: 38px;
          text-align: center;
          font-size: 18px;
          color: #323232;
          background-color: #fff;
          margin-left: 15px;
          margin-top: 15px;
          font-weight: 900;
          border-radius: 10%;
          border: 1px solid #4f3634;
        }
      }
      /*右侧*/
      .loginright {
        height: 478px;
        width: 438px;
        border-radius: 2%;
        border: 1px solid #5e4f43;
        margin: 0 100px;
        .el-form {
          padding-top: 50px;
        }
        &> span {
          display: block;
          height: 60px;
          width: 5px;
          background-color: #ccc;
        }
        .el-input__inner {
          border: 0 none;
          outline: 0;
          border-bottom: 1px solid #ccc;
          border-radius: 0;
          padding-left: 0;
        }
        .el-input {
          width: 350px;
        }
        h1 {
          position: relative;
          left: 50px;
          font-weight: 900;
          font-size: 3em;
          .logincontent {
            font-size: 34px;
            font-weight: 600;
          }
        }
        .rightf {
          position: relative;
          width: 500px;
          background-color: #fff;
          border-radius: 2%;
          height: 500px;
          overflow: hidden;
          padding-right: 100px;
          &> el-form-item__content {
            margin-left: 50px;
          }
          h4 {
            margin-top: 55px;
            margin-left: 50px;
            border-left: 5px solid #287aff;
            height: 30px;
            line-height: 30px;
            padding-left: 5px;
            font-size: 20px;
          }
        }
      }
    }
  }
  .el-form-item__label {
    font-size: 22px;
  }
  .logininput {
    border-left: 17px;
    background-color: #fef0eb;
  }
  .yanzheng {
    position: absolute;
    right: 0;
    top: 0;
    color: #287aff;
  }
  .yanc {
    position: relative;
  }

  .submit button {
    width: 100%;
    background-color: #287aff;
  }
  .register {
    float: right;
    a {
      color: #bebebe;
      text-decoration: none;
    }
    .freeReg{
      color: #287aff;
      &::before{
        content: '';
        display: inline-block;
        height: 12px;
        margin: 0 5px;
        width: 1px;
        background-color: #000;
      }
    }
    span{
      cursor: pointer;
    }
  }

  /*下面是协议的样式*/
  .el-message-box__header{
    height: 50px;
    background-color: #ccc;
    line-height: 50px;
  }
  .el-message-box__title{
    line-height: 50px;
  }
  .el-message-box{
    width: 600px;
    height: 400px;
    overflow: auto;
    position: relative;
    padding-bottom: 50px;
  }
  .el-message-box .el-message-box__btns .el-button{
    position: absolute;
    width: 200px;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 10px;
  }

  /*用户注册样式*/
  .el-dialog{
    width: 850px;
    height: 500px;
    box-sizing: border-box;
    padding: 50px 50px 0 50px;
    input {
      width: 350px;
    }
    div{
      padding: 0;
    }
  }
</style>
