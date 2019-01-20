<template>
  <div>
    <span></span>
    <h4>找回密码</h4>
    <el-form status-icon ref="ruleForm2" label-width="50px" class="demo-ruleForm">
      <el-form-item prop="pass">
        <el-input type="text"
                  autocomplete="off"
                  class="logininput"
                  placeholder="请输入注册邮箱"
                  v-show="flag"
                  v-model="email"></el-input>
      </el-form-item>
      <el-form-item v-show="!flag" class="alreadyBox">
        <el-row>
          <el-col :span="24" class="alreadySend">
            <h5>邮件已发送</h5>
            邮件已发送至你的邮箱 {{ email }} 快去查看吧
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item class="submit">
        <el-button v-show="flag" type="primary" @click="sendEmail">发送验证邮箱</el-button>
        <el-button type="success" v-show="!flag" @click="yanzheng">邮件已发送</el-button>
      </el-form-item>
      <el-form-item class="register-box">
        <div class="register">
          <span class="freeReg" @click="login">立即登录</span>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'login-zhaohui',
  data () {
    return {
      flag: true, // 展示隐藏邮箱输入框
      email: ''
    }
  },
  methods: {
    sendEmail () {
      this.flag = !this.flag
    },
    login () {
      this.$router.push('/login/default')
    },
    yanzheng () {
      this.$router.push('/yanzheng')
    }
  }
}
</script>

<style scoped>
  .demo-ruleForm{
    position: relative;
    padding-top: 100px;
  }
  .submit{
    margin-top: 50px;
  }
  .register-box{
    margin-top: 60px;
  }
  .freeReg::before{
    border-left: 0;
    width: 0;
  }
  .el-button--success{
    margin-top: 100px;
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
  .alreadyBox{
    position: absolute;
    left: 0;
    top: 60px;
    right: 0;
    margin: auto;
  }
  .alreadySend{
    font-size: 18px;
    text-align: center;
  }
</style>
