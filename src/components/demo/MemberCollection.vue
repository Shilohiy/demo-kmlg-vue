<template>
  <div>
    <h1>我的收藏</h1>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="商品名称" prop="name"></el-table-column>
      <el-table-column label="商品金额" >
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.money }}元</span>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
            <el-button size="mini" type="success">加入购物车</el-button>
            <el-button size="mini" type="danger">删除</el-button>

        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
  export default {
    name: "MemberCollection",
    data(){
      return{
        tableData: [{
          name:"法颂浪漫梦境50ML 香水女士持久清新淡香 送2ML小样3只",
          money: 456,
        },
          {
            name:"法颂浪漫梦境50ML 香水女士持久清新淡香 送2ML小样3只",
            money: 456,
          },
          {
            name:"法颂浪漫梦境50ML 香水女士持久清新淡香 送2ML小样3只",
            money: 456,
          },
          {
            name:"法颂浪漫梦境50ML 香水女士持久清新淡香 送2ML小样3只",
            money: 456,
          },
          {
            name:"法颂浪漫梦境50ML 香水女士持久清新淡香 送2ML小样3只",
            money: 456,
          }



        ]
      }
    }
  }
</script>

<style scoped>

</style>
