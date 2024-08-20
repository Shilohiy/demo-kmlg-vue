<template>
  <div>
  <h1>我的订单</h1>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="订单编号" prop="orderNo"></el-table-column>
    <el-table-column label="下单时间">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column label="订单金额" >
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.money }}元</span>
      </template>
    </el-table-column>
    <el-table-column label="订单状态" >
      <template slot-scope="scope">
        <el-tag type="primary">{{ scope.row.state }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <div v-if="scope.row.isSure==true">
          <el-tag type="success">已确认</el-tag>
        </div>
        <div v-else>
          <el-button size="mini" type="danger">取消订单</el-button>
        </div>
      </template>
    </el-table-column>
  </el-table>

  </div>
</template>

<script>
  export default {
    name: "MemberOrder",
    data(){
      return{
        tableData: [{
          orderNo:"2015092823056",
          date: '2016-05-02',
          money: 456,
          state: '未确认',
          isSure:false
        },
          {
            orderNo:"2022092823016",
            date: '2022-05-02',
            money: 456,
            state: '已付款',
            isSure:true
          },
          {
            orderNo:"2012092823016",
            date: '2023-05-02',
            money: 4256,
            state: '未付款',
            isSure:false
          },
          {
            orderNo:"2012092123016",
            date: '2023-07-02',
            money: 1456,
            state: '已发货',
            isSure:true
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
