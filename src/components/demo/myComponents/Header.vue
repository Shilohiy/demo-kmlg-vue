<template>
    <div>
      <el-menu   class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">华清购物商城</el-menu-item>
        <el-menu-item index="2"  @click="toAddress('/')">首页</el-menu-item>
        <el-menu-item index="2" style="color:red" @click="toAddress('/login')">你好,请登录!</el-menu-item>
        <el-menu-item index="3" @click="toAddress('/member/order')">我的订单</el-menu-item>
        <el-menu-item index="4" @click="toAddress('/buyCar')">我的购物车</el-menu-item>
        <el-menu-item index="5" @click="toAddress('/member/collection')">我的收藏</el-menu-item>

      </el-menu>
    </div>
</template>

<script>
    export default {
        name: "Header",
        methods:{
          toAddress(address){
            this.$router.push(address);
          }
        }
    }
</script>

<style scoped>

</style>
