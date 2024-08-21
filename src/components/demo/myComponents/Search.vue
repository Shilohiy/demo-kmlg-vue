<template>
  <div>
  <el-row>
    <el-col :span="8">
      <img src="../../../assets/images/logo.png">
    </el-col>
    <el-col :span="12">
      <el-form :inline="true" >
        <el-form-item >
          <el-input style="width: 400px"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchInfo">搜索</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="4">
      <el-badge :value="num" class="item">
        <el-button size="small" @click="toBuyCar">我的购物车</el-button>
      </el-badge>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="8">&nbsp;</el-col>
    <el-col :span="12">
      <el-link  type="primary" style="font-size: 20px">推荐</el-link>
      <el-link  type="primary" style="margin-left: 30px;font-size: 20px" @click="toProductClass(1)">男装</el-link>
      <el-link  type="primary" style="margin-left: 30px;font-size: 20px" @click="toProductClass(2)">女装</el-link>
      <el-link  type="primary" style="margin-left: 30px;font-size: 20px" @click="toProductClass(3)">鞋包</el-link>
      <el-link  type="primary" style="margin-left: 30px;font-size: 20px" @click="toProductClass(4)">内衣</el-link>
      <el-link  type="primary" style="margin-left: 30px;font-size: 20px" @click="toProductClass(5)">运动</el-link>
    </el-col>
    <el-col :span="4">&nbsp;</el-col>
  </el-row>
  </div>
</template>

<script>
    export default {
        name: "Search",
        props:{
           num:{
             default:3,
             type:Number
           }

        },
        methods:{
          toBuyCar(){
            this.$router.push("/buyCar");
          },
          searchInfo(){
            this.$router.push("/productClass");
          },
          toProductClass(num) { // 跳转到商品分类
            // 本地存储
            localStorage.setItem("type",num);
            // 跳转到商品分类
            window.location.href = "/productClass";
          }
        }

    }
</script>

<style scoped>

</style>
