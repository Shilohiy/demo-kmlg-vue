<template>
    <el-container class="myHeight">
        <el-header>
            <el-col :span="8">
                <el-tag type="success">电子商城后台管理系统</el-tag>
                <el-tag type="success">用户名:{{userName}}</el-tag>
                <el-tag type="success">角色:管理员</el-tag>
            </el-col>
            <el-col :span="8">&nbsp;</el-col>
            <el-col :span="8" align="right">
              <el-button v-power type="success" size="small" @click="updatePwd">修改密码</el-button>
              <el-button type="success" size="small" @click="exitSys">退出系统</el-button>
            </el-col>
        </el-header>

        <el-container class="myHeight">
          <!--左边 菜单栏-->
            <el-aside style="width: 230px">
                <el-menu
                  :default-openeds=menu
                  background-color="whitesmoke" router>

                    <el-submenu index="1">
                          <template slot="title">
                              <i class="el-icon-user-solid"></i>
                             <span>系统管理</span>
                          </template>
                      <el-menu-item index="/admin/index/default" >
                        <i class="el-icon-s-custom"></i>
                        <span >后台首页</span>
                      </el-menu-item>
                           <el-menu-item  index="/admin/index/list" >
                             <i class="el-icon-help"></i>
                                <span >商品信息管理</span>
                           </el-menu-item>

                    </el-submenu>



                </el-menu>
            </el-aside>
            <el-main>
              <!--视图标签-->
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "Index",
        data(){
          return{
            menu:["1","2"],//菜单编号
            userName:""
        }
      },
      methods:{
        exitSys(){
          this.$router.push("/");
        },
        updatePwd(){ //修改密码
          this.$router.push("/Index/SendCode");
        }
      },
      mounted() {
        //获取登录的用户名
        this.userName = localStorage.getItem("name");
        console.log("用户名="+this.userName);
      }
    }
</script>

<style scoped>
/*设置头部样式*/
  .myHeight{
     height: 100%;
  }
  .el-header{
    background-image:url(../../assets/images/bj.jpg);
    background-size: cover;
    background-repeat:no-repeat;
    overflow:hidden;
    height: 100%;
    padding: 10px;

  }
  .el-aside{
    background-color:whitesmoke;
    height: 100%;

  }
  .el-main{
      height: 100%;
      padding: 5px;
  }



</style>
