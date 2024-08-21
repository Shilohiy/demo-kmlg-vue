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
        <el-table-column label="图片"  style="width: 40%">
          <template slot-scope="scope">
          <img :src="require('../../assets/images/'+scope.row.src)" width="100" height="80">
        </template>
        </el-table-column>
        <el-table-column label="商品编号" prop="goodsId" style="width: 40%"></el-table-column>
        <el-table-column label="商品名称" prop="goodsName" style="width: 40%"></el-table-column>
        <el-table-column label="单价" prop="price" width="100px"></el-table-column>
        <el-table-column label="购买数量" width="300px">
          <template slot-scope="scope">
            <el-input-number v-model="scope.row.num" min="1" max="10" @change="count()"></el-input-number>
          </template>
        </el-table-column>
        <el-table-column label="小计"  width="200px">
          <template slot-scope="scope">
             <span>{{scope.row.price*scope.row.num}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200px">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row.id)">删除</el-button>
            <!-- @click="handleDelete(scope.$index, scope.row) -->
          </template>
        </el-table-column>
      </el-table>
      <div align="right" style="padding-top: 5px">
          <el-tag  type="primary">商品总价:{{totalPrice}}</el-tag>
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
        tableData:[],
        totalPrice:0

      }
    },
    methods:{
      handleDelete(index){
        const self = this;
        this.$http.get("/car/del",{params:{"id":index}})
          .then(function (rs) {
              if(rs.data.code==200){
                self.tableData = rs.data.data;
                self.count();
              }else{
                self.$message("购物车数据删除失败");
              }
          })
      },
      count(){//计算总价
          //初始化总价
         this.totalPrice = 0;
          for(var i=0;i<this.tableData.length;i++){
            this.totalPrice +=this.tableData[i].price*this.tableData[i].num;
          }
      },
      toBuyCartwo(){
        this.$router.push("/buyCarTwo");
      },
      queryMyCar(){//查询我的购物车
        const self = this;
        //登录成功后，把用户idf赋值给查询参数
        const userId = 1;
        this.$http.get("/car/query",{params:{"userId":userId}})
        .then(function (rs) {
            if(rs.data.code==200){
                 self.tableData = rs.data.data;
                 self.count();
            }else{
               self.$message("购物车没有数据");
            }
        })
      }


    },
    mounted() {
       this.queryMyCar();

    }

  }
</script>

<style scoped>

</style>
