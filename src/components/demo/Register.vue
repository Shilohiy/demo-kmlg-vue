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
          <!--  :rules="rules" 指向验证规则      -->
        <el-form ref="form"  :rules="rules" :model="form" label-width="80px" style="width:500px;padding:5px;background-color: white;border-radius: 5px">
          <h1 align="center">用户注册</h1>
          <el-form-item label="用户名" prop="userName" >
              <el-input v-model="form.userName" style="width: 400px"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
              <el-input show-password v-model="form.password" style="width: 400px"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="surePassword">
            <el-input show-password v-model="form.surePassword" style="width: 400px"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="form.email" style="width: 400px"></el-input>
          </el-form-item>
          <el-form-item label="手机" prop="tel">
            <el-input v-model="form.tel" style="width: 400px"></el-input>
          </el-form-item>

          <el-form-item >
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
    components:{
      Header,
      Footer
    },
    data(){
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
      return{
        form: { //用户注册表单
          userName: '',
          password: '',
          surePassword: '',
          email: '',
          tel: '',
        },
        isRead:false,
        rules:{ //用户注册表单的验证规则
            userName:[ //用户验证
              {required:true,message:"请输入用户名",trigger:"blur"},//用户名不能为空的验证
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }//用户名长度的验证
            ],
          password:[ //密码验证
            {required:true,message:"请输入密码",trigger:"blur"},//密码不能为空的验证
            { validator: validatePass, trigger: 'blur' },
            { min: 6, max: 8, message: '长度在 6 到 8 个字符', trigger: 'blur' }//密码长度的验证
          ],
          surePassword:[ //确认密码验证
            {required:true,message:"请输入确认密码",trigger:"blur"},//确认密码不能为空的验证
            { validator: validatePass, trigger: 'blur' },
            { min: 6, max: 8, message: '长度在 6 到 8 个字符', trigger: 'blur' }//确认密码长度的验证
          ],
          email:[ //邮箱验证
            {required:true,message:"请输入邮箱地址",trigger:"blur"},//邮箱不能为空的验证
            {type:"email",message:"请输入正确的邮箱",trigger:"blur"},//邮箱格式的验证
          ],
          tel:[ //手机验证
            {required:true,message:"请输入手机号",trigger:"blur"},//手机不能为空的验证
            {pattern: /^1[3-9]\d{9}$/,message:"请输入正确的手机号",trigger:"blur"},//手机格式的验证
          ],

        }
      }
    },
    methods:{
      onSubmit:function (formName){ //注册
        const self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if (!self.isRead){
              self.$alert("请勾选用户协议");
            }else{
              self.$message({message:'输入正确!',type:"success"});
            }

          } else {
            self.$message({message:'请输入正确的信息!',type:"warning"});
            return false;
          }
        });
      }
    }

  }
</script>

<style scoped>
  .register{
    background-color: wheat;
    background-size: cover;
    background-repeat:no-repeat;
    overflow:hidden;
    height: 100%;
  }
</style>
