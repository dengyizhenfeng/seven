<template>
  <div>
    <span></span>
    <h4>登录</h4>
    <el-form
      :rules="rules1"
      :model="ruleForm1"
      ref="ruleForm1"
      label-width="50px"
      class="demo-ruleForm">
      <el-form-item>
        <el-input
          v-model="ruleForm1.tel"
          type="text"
          autocomplete="off"
          class="logininput"
          placeholder="请输入邮箱/用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="ruleForm1.pwd"
          type="password"
          autocomplete="off"
          class="logininput"
          placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="" prop="smsCode" class="yanc">
        <el-input
          v-model="ruleForm1.smsCode"
          class="logininput"
          placeholder="请输入验证码"></el-input>
        <span class="yanzheng" type="primary" @click="getsmsCode">获取验证码</span>
      </el-form-item>
      <el-form-item class="submit">
        <el-button type="primary" @click="showModal">立即登录</el-button>
      </el-form-item>
      <el-form-item>
        <div class="register">
          <router-link to="/login/zhaohui">忘记密码</router-link>
          <span class="freeReg" @click="register">免费注册</span>
        </div>
      </el-form-item>
    </el-form>
    <!--注册用户区域-->
    <el-dialog title="新用户注册" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <!--分成两列-->
        <el-row>
          <el-col :span="12">
            <el-form-item>
              <el-input v-model="form.companyName" autocomplete="off" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.companyEmail" autocomplete="off" placeholder="企业邮箱"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.companyPassword" autocomplete="off" placeholder="设置密码"></el-input>
            </el-form-item>
            <!--营业照片暂时只是占位-->
            <el-form-item class="img">
              <span>营业执照图片</span>
              <el-upload
                class="avatar-uploader"
                action="http://192.168.1.156:8080/common/fileUpload"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item>
              <el-input v-model="form.companyContactName" autocomplete="off" placeholder="联系人姓名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.companyContactTel" autocomplete="off" placeholder="联系人电话"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.companyContactAddress" autocomplete="off" placeholder="联系人地址"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="newRegister">注册</el-button>
        <el-button @click="dialogFormVisible = false">立即登录</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

export default {
  name: 'login-default',
  data () {
    // 验证码验证规则
    var validateYzm = (rule, value, callback) => {
      value = value.trim()
      if (value === '') {
        this.yzFlag = false
        callback(new Error('请输入验证码'))
      } else if (value.length !== 4) {
        this.yzFlag = false
        callback(new Error('验证码的长度要为4'))
      } else {
        this.yzFlag = true
        callback()
      }
    }
    return {
      yzFlag: false,
      dialogFormVisible: false,
      // 登录form数据
      ruleForm1: {
        tel: '',
        pwd: '',
        smsCode: ''
      },
      rules1: {
        smsCode: [
          { validator: validateYzm, trigger: 'blur' }
        ]
      },
      form: {
        companyName: '', // 用户名
        companyPassword: '', // 企业密码
        companyEmail: '', // 企业邮箱
        companyContactName: '', // 联系人姓名
        companyContactTel: '', // 联系人电话
        companyContactAddress: '', // 联系人住址
        companyBusinessLicense: '' // 营业执照
      },
      imageUrl: '', // 图片
      // 协议模态框的文本数据
      modalData: '<strong>这是 <i>文本数据</i> 的</strong><strong>这是 <i>文本数据</i> 的</strong><strong>这是 <i>文本数据</i> 的</strong><strong>这是 <i>文本数据</i> 的</strong><strong>这是 <i>文本数据</i> 的</strong><strong>这是 <i>文本数据</i> 的</strong><strong>这是 <i>文本数据</i> 的</strong><strong>这是 <i>文本数据</i> 的</strong><strong>这是 <i>文本数据</i> 的</strong><strong>这是 <i>文本数据</i> 的</strong><strong>这是 <i>文本数据</i> 的</strong>'
    }
  },
  methods: {
    // 发送验证码
    getsmsCode () {
      this.$http({
        method: 'post',
        url: 'common/sendCode',
        params: {
          tel: Number(this.ruleForm1.tel)
        }
      }).then(res => {
        console.log(res)
      })
    },
    // 注册协议
    showModal: () => {
      if (!this.yzFlag) {
        return
      }
      this.$alert(this.modalData, '71管家用户注册协议', {
        dangerouslyUseHTMLString: true,
        confirmButtonText: '同意并继续',
        callback () {
          this.$refs.ruleForm1.validate((valid) => {
            if (valid) {
              this.$http({
                method: 'post',
                url: 'company/login',
                params: this.ruleForm1
              }).then(res => {
                console.log(res)
              })
            } else {
              console.log('error submit!!')
              return false
            }
          })
        }
      })
    },
    // 注册用户
    register () {
      this.dialogFormVisible = true
    },
    // 注册新用户
    newRegister () {
      this.$http({
        method: 'post',
        url: 'company/add',
        data: this.form,
        success: function (res) {
          console.log(res)
        }
      })
      this.dialogFormVisible = false
    },
    // 图片的有关事件
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
      if (res.meta.code === 200) {
        this.form.companyBusinessLicense = res.data
      }
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    // 在注册里点击立即登录为什么没有跳转到登录页
    // 这是直接登录还是跳转到登录页
    showModal () {
      this.$router.push('/login/default')
    }
  }
}
</script>

<style scoped lang="less">
  .el-form{
    padding-top: 30px;
  }
  /*营业照片*/
  .img {
    position: relative;
    span {
      font-size: 11px;
      font-weight: 700;
    }
  }
  .avatar-uploader{
    position: absolute;
    left: 96px;
    top: 10px;
    .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .el-upload:hover {
      border-color: #409EFF;
    }
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    border: 1px solid;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .yanzheng {
    cursor: pointer;
  }
</style>
