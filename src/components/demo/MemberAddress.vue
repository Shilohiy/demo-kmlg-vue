<template>
  <div>
    <h1>收货地址</h1>
    <el-button size="mini" type="primary">添加收货地址</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="收货人" prop="name" width="100px"></el-table-column>
      <el-table-column label="邮政编码" prop="code" width="100px"></el-table-column>
      <el-table-column label="邮箱" prop="email" width="170px"></el-table-column>
      <el-table-column label="电话" prop="tel" width="170px"></el-table-column>
      <el-table-column label="收货地址" prop="address" ></el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <template v-if="scope.row.isDefault==true">
            <el-tag type="success">默认收货地址</el-tag>
          </template>
          <template v-else>
            <el-button size="mini" type="success">设为默认地址</el-button>
          </template>

          <el-button size="mini" type="warning">修改</el-button>
          <el-button size="mini" type="danger">删除</el-button>

        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
  export default {
    name: "MemberAddress",
    data(){
      return{
        tableData: [{
          name:"张三",
          code: 5500,
          tel:"15008466434",
          email:"554433@qq.com",
          address:"成都市武侯区红牌楼",
          isDefault:true
        },
          {
            name:"李四",
            code: 5500,
            tel:"17008466434",
            email:"11554433@qq.com",
            address:"成都市锦江区春熙路",
            isDefault:false
          },
          {
            name:"王五",
            code: 5500,
            tel:"18008466434",
            email:"22554433@qq.com",
            address:"成都市高新区天府二街",
            isDefault:false
          }

        ]
      }
    }
  }
</script>

<style scoped>

</style>
