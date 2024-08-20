<template>
  <div class="login">
      <el-row>
            <el-col :span="8">&nbsp;</el-col>
            <el-col :span="8">
              <br> <br> <br><br> <br> <br><br> <br> <br><br><br>
              <el-form :model="userInfo" ref="userInfo" :rules="rules" label-width="80px" style="background-color: white;border-radius: 5px">
                  <br>
                  <h1 align="center">商城后台登录</h1>
                <el-form-item label="用户名" prop="userName">
                  <el-col :span="22">
                    <el-input v-model="userInfo.userName" ></el-input>
                  </el-col>

                </el-form-item>

                <el-form-item label="密码" prop="password" >
                  <el-col :span="22">
                    <el-input v-model="userInfo.password" show-password></el-input>
                  </el-col>
                </el-form-item>

                <el-form-item >
                  <el-col :span="4">&nbsp;</el-col>
                  <el-col :span="12">
                    <el-button type="success" round @click="login('userInfo')">登录</el-button>
                    <el-button type="success" round @click="reset('userInfo')">重置</el-button>
                  </el-col>
                  <el-col :span="8">&nbsp;</el-col>

                </el-form-item>
                <br>
              </el-form>
            </el-col>
            <el-col :span="8">&nbsp;</el-col>
      </el-row>

  </div>
</template>

<script>
   import {setCookie} from "../../assets/js/cookieUtil";

   export default {
      name: "Login",
      data(){
          return{
              userInfo:{
                  userName:"",//用户名
                  password:""//密码
              },
              rules:{ //定义表单的验证规则
                 userName:[ //定义用户名的验证
                   {
                     required:true,//是否验证为空
                     message:"用户名不能为空",//提示信息
                     trigger:"blur"//定义的文档事件，blur 失去焦点事件
                   }
                 ],
                password:[ //定义密码的验证
                  {
                    required:true,//是否验证为空
                    message:"密码不能为空",//提示信息
                    trigger:"change"//定义的文档事件，change 值改变的事件
                  },
                  {
                    min:3,//密码的长度最小是3 位字符
                    max:6,//密码的长度最大是6 位字符
                    message:"密码长度必须是3到6位",//提示信息
                    trigger:"change"//定义的文档事件，change 值改变的事件
                  }
                ]

              }
          }
      },
      methods:{//定义函数
          login(form){
            const self = this;
            //验证表单
            this.$refs[form].validate(function (val) {
                if(val){
                  //1 定义请求后端服务器的地址，并把参数传给后端
                  const http = self.$http.post("/login/loginPost",self.userInfo);
                  //2 接收后端返回的信息
                  http.then(function (rs) {
                       //打印返回的信息
                       console.log(rs.data);
                        if(rs.data.code==200){
                            //本地存储
                            localStorage.setItem("name",self.userInfo.userName);
                            //设置cookie
                            setCookie("role",rs.data.data.roleName,7);
                            //跳转到系统主页面
                           self.$router.push("/Index/UserInfoList");
                        }else{
                           self.$alert(rs.data.msg);
                        }
                  })
                }else{
                  self.$message("验证失败");
                }
            })
          },
          reset(form){
              //清空表单元素
              this.$refs[form].resetFields();
          }

      }
    }
</script>

<style scoped>
  .login{
    background-image:url(../../assets/images/bj.jpg);
    background-size: cover;
    background-repeat:no-repeat;
    overflow:hidden;
    height: 100%;
  }
</style>
