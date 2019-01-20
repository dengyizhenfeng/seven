<template>
  <div class="yanzheng">
    <p>您好！感谢您注册<span>71管家,</span>请在24小时内点击下面的链接验证您的Email</p>
    <div class="wancheng">
      <el-button type="primary" @click="newPassword"><a href="#">完成验证</a></el-button>
    </div>
    <div class="details">
      <p>您可以点击以下链接来完成验证：<a href="http://www.71guanjia.com">http://www.71guanjia.com</a></p>
      <p>如果以上链接无法点击，请将上面的地址复制到您的浏览器的地址栏进入71管家。</p>
      <p>如果我们的邮箱误入到您的垃圾箱中,<a href="#">[点击查看]</a>&nbsp;设置常用的邮箱白名单的方法，以免您错过我们的通知邮件</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      newPassword() {
        this.$router.push('/login/newpassword')
      }
    }
  }
</script>

<style scoped lang="less">
  .yanzheng {
    position: absolute;
    width: 700px;
    height: 400px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 100px auto 0;
    padding: 50px 30px 0 30px;
    border-radius: 5px;
    box-shadow: #666 0 0 10px;

    & > p:first-child {
      text-align: center;
    }

  }

  .el-button a {
    color: #fff;
    font-size: 18px;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .wancheng {
    margin-top: 70px;
    padding-bottom: 60px;
    text-align: center;
    border-bottom: 1px solid #ccc;
  }

  .details {
    color: #ccc;
    padding-top: 30px;

    a {
      color: #53c8eb;
    }

  }
</style>
