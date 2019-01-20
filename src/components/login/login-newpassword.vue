<template>
  <div>
    <span></span>
    <h4>找回密码</h4>
    <el-form
      :rules="rules1"
      :model="ruleForm1"
      ref="ruleForm1"
      label-width="50px"
      class="demo-ruleForm">
      <el-form-item class="text">
        <el-input
          v-model="ruleForm1.tel"
          type="text"
          autocomplete="off"
          class="logininput"
          placeholder="请输入新密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="ruleForm1.pwd"
          type="password"
          autocomplete="off"
          class="logininput"
          placeholder="请确认新密码"></el-input>
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
              <el-input v-model="form.username" autocomplete="off" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.email" autocomplete="off" placeholder="企业邮箱"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.password" autocomplete="off" placeholder="设置密码"></el-input>
            </el-form-item>
            <!--营业照片暂时只是占位-->
            <el-form-item class="img">
              <span>营业执照图片</span>
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                >
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item>
              <el-input v-model="form.name" autocomplete="off" placeholder="联系人姓名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.tel" autocomplete="off" placeholder="联系人电话"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.address" autocomplete="off" placeholder="联系人地址"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
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
        callback(new Error('请输入验证码'))
      } else if (value.length !== 6) {
        callback(new Error('验证码的长度要为6'))
      } else {
        callback()
      }
    }
    return {
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
        name: '', // 联系人姓名
        username: '', // 用户名
        email: '', // 企业邮箱
        password: '', // 密码
        tel: '', // 电话
        address: ''// 住址
      },
      imageUrl: '', // 图片
      // 协议模态框的文本数据
      modalData: '<strong>这是 <i>文本数据</i> 的</strong><strong>这是 <i>文本数据</i> 的</strong><strong>这是 <i>文本数据</i> 的</strong><strong>这是 <i>文本数据</i> 的</strong><strong>这是 <i>文本数据</i> 的</strong><strong>这是 <i>文本数据</i> 的</strong><strong>这是 <i>文本数据</i> 的</strong><strong>这是 <i>文本数据</i> 的</strong><strong>这是 <i>文本数据</i> 的</strong><strong>这是 <i>文本数据</i> 的</strong><strong>这是 <i>文本数据</i> 的</strong>'
    }
  },
  methods: {
    // 发送验证码
    getsmsCode () {
      this.$http.post('login', this.ruleForm1.tel)
        .then((res) => {
          console.log(res)
        })
    },
    // 注册协议
    showModal () {
      var that = this
      this.$alert(this.modalData, '71管家用户注册协议', {
        dangerouslyUseHTMLString: true,
        confirmButtonText: '同意并继续',
        callback () {
          that.$refs.ruleForm1.validate((valid) => {
            if (valid) {
              that.$http.post('login', that.ruleForm1)
                .then((res) => {
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
    // 图片的有关事件
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
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
      &:hover {
        border-color: #409EFF;
      }
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
  .submit {
   padding-top: 100px;
  }
  .text {
    padding-top: 50px;
  }
</style>
