<template>
  <el-container style="height: 100%">
    <el-header>
      <!--头部-->
      <Header></Header>
      <br>
      <Search></Search>
    </el-header>
    <br>
    <el-container style="height: 100%">
      <!--左边 菜单栏-->
      <el-aside style="width: 230px">
        <el-menu
          :default-openeds=menu
          class="el-menu-vertical-demo"
          background-color="snow" router>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span>会员中心</span>
            </template>
            <el-menu-item index="/member/user">
              <i class="el-icon-user"></i>
              <span>用户信息</span>
            </el-menu-item>
            <el-menu-item index="/member/collection">
              <i class="el-icon-star-on"></i>
              <span>我的收藏</span>
            </el-menu-item>
            <el-menu-item  index="/member/safe">
              <i class="el-icon-s-check"></i>
              <span>账号安全</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-present"></i>
              <span>订单中心</span>
            </template>
            <el-menu-item  index="/member/order">
              <i class="el-icon-shopping-bag-2"></i>
              <span >我的订单</span>
            </el-menu-item>
            <el-menu-item index="/member/address">
              <i class="el-icon-s-home"></i>
              <span >收货地址</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container style="height: 100%">
      <el-main style="margin-top: 120px;">
        <router-view></router-view>
    </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
  import Header from "./myComponents/Header";
  import Search from "./myComponents/Search";
  import Footer from "./myComponents/Footer";
  export default {
    name: "buyCar",
    components:{
      Header,
      Search,
      Footer
    },
    data(){
      return{
        menu:["1","2"],//菜单编号
      }
    }

  }
</script>

<style scoped>
  .el-aside{
    background-color:snow;
    height: 73%;
    margin-top: 120px;
    border: 2px solid snow;

  }
</style>
