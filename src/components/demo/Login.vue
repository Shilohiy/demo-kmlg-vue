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
      <el-col :span="10" style="padding-top: 100px">
        <el-form ref="form" :model="form" :rules="rules" label-width="80px" style="width:500px;padding:5px;background-color: white;border-radius: 5px">
          <h1 align="center">用户登录</h1>
          <el-form-item label="用户名" prop="userName">
            <el-input v-model="form.userName" placeholder="请输入用户名" style="width: 400px"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input show-password v-model="form.password"  placeholder="请输入密码" style="width: 400px"></el-input>
          </el-form-item>


          <el-form-item>
            <el-button type="primary" @click="onSubmit('form')"  style="width: 350px">登录</el-button>
          </el-form-item>
          <el-form-item >
            <el-link type="success">忘记密码</el-link>
            <el-link type="success" href="/register">用户注册</el-link>
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
    name: "login",
    components:{
      Header,
      Footer
    },
    data(){
      return{
        form: {
          userName: '',
          password: ''
        },
        rules: { //用户注册表单的验证规则
          userName: [ //用户验证
            {required: true, message: "请输入用户名", trigger: "blur"},//用户名不能为空的验证
            {min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur'}//用户名长度的验证
          ],
          password: [ //密码验证
            {required: true, message: "请输入密码", trigger: "blur"},//密码不能为空的验证
            {min: 6, max: 8, message: '长度在 6 到 8 个字符', trigger: 'blur'}//密码长度的验证
          ],
        }
      }
    },
    methods:{
      onSubmit:function (formName){ //注册
        const self = this;
        this.$refs[formName].validate((valid) => {

          if (valid) {
            this.$http.post("/user/login",this.form)
              .then(function (rs) {
                if(rs.data.code==200){
                  self.$message("登录成功");
                  // 跳转到index页面
                  self.$router.push('/');
                }else{
                  self.$message("登录失败");
                }
              })
            // self.$message({message:'输入正确!',type:"success"});
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
