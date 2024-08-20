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
      <el-steps :active="1" finish-status="success" simple style="margin-top: 20px">
        <el-step title="查看购物车" ></el-step>
        <el-step title="确认订单信息" ></el-step>
        <el-step title="成功提交订单" ></el-step>
      </el-steps>
      <br>
      <h1>购物车列表</h1>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="商品名称" prop="title" style="width: 40%"></el-table-column>
        <el-table-column label="单价" prop="price" width="100px"></el-table-column>
        <el-table-column label="购买数量" width="300px">
          <template slot-scope="scope">
            <el-input-number v-model="scope.row.num"></el-input-number>
          </template>
        </el-table-column>
        <el-table-column label="小计" prop="sum" width="200px"></el-table-column>
        <el-table-column label="操作" width="200px">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div align="right" style="padding-top: 5px">
          <el-tag  type="primary">商品总价:300</el-tag>
          <el-button type="primary" size="small">继续购物</el-button>
          <el-button type="primary" size="small" @click="toBuyCartwo">确认结算</el-button>
      </div>
    </el-main>
    <Footer></Footer>
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
        tableData:[
          {"title":"上衣女短款秋季新款V领长袖微弹金属扣针织衫女上衣","price":100,"num":1,"sum":100},
          {"title":"上衣女短款秋季新款V领长袖微弹金属扣针织衫女上衣","price":100,"num":1,"sum":100},
          {"title":"上衣女短款秋季新款V领长袖微弹金属扣针织衫女上衣","price":100,"num":1,"sum":100}
        ]
      }
    },
    methods:{
      toBuyCartwo(){
        this.$router.push("/buyCarTwo");
      }
    }

  }
</script>

<style scoped>

</style>
