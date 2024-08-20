<template>
<div>
  <el-card class="box-card">
    <div class="text item">
      <el-descriptions title="用户信息">
        <el-descriptions-item label="用户名">
          <el-input style="width: 100px" size="mini" v-model="name" :disabled="isUpdate"></el-input>
          <el-button type="warning" size="mini" @click="updateName">修改</el-button>
        </el-descriptions-item>
        <el-descriptions-item label="用户等级">一级会员</el-descriptions-item>
        <el-descriptions-item label="上一次登录时间">2022-11-11 12:00:00</el-descriptions-item>
        <el-descriptions-item label="备注">
          <el-tag size="small">你还差1000积分，就可以分到100元消费红包</el-tag>
        </el-descriptions-item>

      </el-descriptions>
    </div>
  </el-card>
    <br>
  <el-card class="box-card">
    <div class="text item">
      <el-descriptions title="账号信息">
        <el-descriptions-item label="用户编号">12345678</el-descriptions-item>
        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
        <el-descriptions-item label="邮箱">5555555@qq.com</el-descriptions-item>
        <el-descriptions-item label="红包个数">
          <el-tag size="small">1</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="注册时间">2022-12-12</el-descriptions-item>
      </el-descriptions>
    </div>
  </el-card>
  <br>
  <el-card class="box-card">
    <div class="text item">
      <el-descriptions title="资产信息">
        <el-descriptions-item label="订单提醒">
          待付款&nbsp;<el-tag size="small">0</el-tag>
          &nbsp;待收货&nbsp; <el-tag size="small">1</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="消费金额"> <el-tag size="small">1000元</el-tag></el-descriptions-item>
        <el-descriptions-item label="积分"> <el-tag size="small">1000分</el-tag></el-descriptions-item>

      </el-descriptions>
    </div>
  </el-card>
</div>




</template>

<script>
    export default {
        name: "MemberUser",
        data(){
          return{
              name:"rock",
              isUpdate:true

          }
        },
        methods:{
          updateName(){
             this.isUpdate = false;
          }
        }
    }
</script>

<style scoped>

</style>
