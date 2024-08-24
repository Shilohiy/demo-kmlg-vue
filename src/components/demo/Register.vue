<template>
  <el-container style="height: 100%">
    <el-header>
      <!--头部-->
      <Header></Header>
    </el-header>
    <br>
    <el-main class="register">
      <el-col :span="14" style="padding-top: 60px">
        <img src="../../assets/images/rigster.png">
      </el-col>
      <el-col :span="10">
        <el-form ref="form" :rules="rules" :model="form" label-width="80px" style="width:500px;padding:5px;background-color: white;border-radius: 5px">
          <h1 align="center">用户注册</h1>
          <el-form-item label="用户名" prop="userName">
            <el-input v-model="form.userName" style="width: 400px"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input show-password v-model="form.password" style="width: 400px"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="surePassword">
            <el-input show-password v-model="form.surePassword" style="width: 400px"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <div style="display: flex; align-items: center;">
              <el-input v-model="form.email" style="width: 300px; margin-right: 10px;"></el-input>
              <el-button @click="sendVerificationCode">发送验证码</el-button>
            </div>
          </el-form-item>

          <el-form-item label="手机" prop="tel">
            <el-input v-model="form.tel" style="width: 400px"></el-input>
          </el-form-item>
          <el-form-item label="验证码">
            <el-input v-model="form.code" placeholder="请输入验证码" style="width: 400px"></el-input>
          </el-form-item>

          <el-form-item>
            <a href="#">用户协议</a>
            <el-checkbox v-model="isRead">我已阅读并接受《用户协议》</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit('form')" style="width: 350px">注册</el-button>
          </el-form-item>

        </el-form>
      </el-col>
    </el-main>
    <Footer></Footer>
  </el-container>
</template>

<script>
import Header from "./myComponents/Header";
import Footer from "./myComponents/Footer";

export default {
  name: "Register",
  components: {
    Header,
    Footer
  },
  data() {
    /*自定义表单验证：验证两次输入密码是否正确*/
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };

    return {
      form: { //用户注册表单
        userName: '',
        password: '',
        surePassword: '',
        email: '',
        tel: '',
        code: ''  // 验证码字段
      },
      isRead: false,
      rules: { //用户注册表单的验证规则
        userName: [ //用户名验证
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [ //密码验证
          { required: true, message: "请输入密码", trigger: "blur" },
          { validator: validatePass, trigger: 'blur' },
          { min: 6, max: 8, message: '长度在 6 到 8 个字符', trigger: 'blur' }
        ],
        surePassword: [ //确认密码验证
          { required: true, message: "请输入确认密码", trigger: "blur" },
          { validator: validatePass, trigger: 'blur' },
          { min: 6, max: 8, message: '长度在 6 到 8 个字符', trigger: 'blur' }
        ],
        email: [ //邮箱验证
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          { type: "email", message: "请输入正确的邮箱", trigger: "blur" }
        ],
        tel: [ //手机验证
          { required: true, message: "请输入手机号", trigger: "blur" },
          { pattern: /^1[3-9]\d{9}$/, message: "请输入正确的手机号", trigger: "blur" }
        ],
        code: [ //验证码验证
          { required: true, message: "请输入验证码", trigger: "blur" }
        ]
      }
    }
  },
  methods: {
    onSubmit(formName) { //注册
      const self = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (!self.isRead) {
            self.$alert("请勾选用户协议");
          } else {
            console.log('用户输入的验证码:', this.form.code); // 打印验证码
            this.$http.post("/user/register", this.form)
              .then((rs) => {
                console.log('注册响应:', rs.data); // 打印后端响应
                if (rs.data.code === "200") {
                  self.$message({ message: "注册成功", type: "success" });
                  self.$router.push('/login');
                } else {
                  self.$message({ message: rs.data.message, type: "error" });
                }
              })
              .catch((error) => {
                console.error('注册错误:', error); // 打印错误信息
                self.$message({ message: "注册失败", type: "error" });
              });
          }
        } else {
          self.$message({ message: '请输入正确的信息!', type: "warning" });
          return false;
        }
      });
    },
    sendVerificationCode() {
      const email = this.form.email;
      if (!email) {
        this.$message({ message: '请输入邮箱地址!', type: 'warning' });
        return;
      }
      this.$http.post("/api/email/sendVerificationCode", { email: email })
        .then((rs) => {
          console.log('验证码响应:', rs.data); // 打印后端响应
          if (rs.data === "Verification code sent successfully") {
            this.$message({ message: "验证码已发送", type: "success" });
          } else {
            this.$message({ message: "发送验证码失败", type: "error" });
          }
        })
        .catch((error) => {
          console.error('发送验证码错误:', error); // 打印错误信息
          this.$message({ message: "发送验证码失败", type: "error" });
        });
    }
  }
}
</script>

<style scoped>
.register {
  background-color: wheat;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  height: 100%;
}
</style>
