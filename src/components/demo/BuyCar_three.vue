<template>
  <el-container>
    <el-header>
      <!--头部-->
      <Header></Header>
    </el-header>
    <br>
    <el-main>
      <!--搜索-->
      <Search></Search>
      <el-steps :active="3" finish-status="success" simple style="margin-top: 20px">
        <el-step title="查看购物车" ></el-step>
        <el-step title="确认订单信息" ></el-step>
        <el-step title="成功提交订单" ></el-step>
      </el-steps>
      <br>
      <el-alert
        title="成功提交订单！感谢您在本店购物！您的订单已提交成功，请记住您的订单号: 2015092598275"
        type="success"
        center
        description="您选定的配送方式为: 申通快递；    您选定的支付方式为: 支付宝；    您的应付款金额为: ￥305.00"
        :closable="false"  show-icon>
      </el-alert>

    </el-main>
    <Footer></Footer>
  </el-container>
</template>

<script>
  import Header from "./myComponents/Header";
  import Search from "./myComponents/Search";
  import Footer from "./myComponents/Footer";
  export default {
    name: "buyCarThree",
    components:{
      Header,
      Search,
      Footer
    },
    data(){
      return{

      }
    }

  }
</script>

<style scoped>

</style>
