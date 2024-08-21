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
      <el-row>
          <el-col :span="1">&nbsp;</el-col>
          <el-col :span="22">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item>全部</el-breadcrumb-item>
              <el-breadcrumb-item>{{type}}</el-breadcrumb-item>
            </el-breadcrumb>
            <br>
            <table width="100%" style="border: 2px solid whitesmoke;padding: 20px;font-size: 14px">
              <tr >
                <td><span>品牌:</span></td>
                <template v-for="x in brand">
                  <td><el-link type="primary" @click="queryBrand(x)">{{x.brandName}}</el-link></td>
                </template>
              </tr>
              <tr >
                <td><span>价格:</span></td>
                <td><el-link type="primary" @click="queryPrice(1,199)">1-199</el-link></td>
                <td><el-link type="primary" @click="queryPrice(200,299)">200-299</el-link></td>
                <td><el-link type="primary" @click="queryPrice(300,399)">300-399</el-link></td>
                <td><el-link type="primary" @click="queryPrice(400,499)">400-499</el-link></td>
                <td><el-link type="primary" @click="queryPrice(500,599)">500-599</el-link></td>
                <td><el-link type="primary" @click="queryPrice(600,699)">600-699</el-link></td>
                <td><el-link type="primary" @click="queryPrice(700,999)">700-999</el-link></td>
                <td><el-link type="primary" @click="queryPrice(1000,10000)">1000以上</el-link></td>
                <td><el-link type="primary" @click="queryPrice(0,0)">全部</el-link></td>
              </tr>
            </table>
            <br>
            <div>
              <el-button type="danger" size="small"  @click="queryOrderBy">销量:从高到低</el-button>
              <el-button type="primary" size="small" @click="queryOrderBy">销量:从低到高</el-button>
              <el-button type="primary" size="small" @click="queryOrderBy">价格:从高到低</el-button>
              <el-button type="primary" size="small" @click="queryOrderBy">价格:从低到高</el-button>
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="parameter.page"
                :page-sizes="[5, 10, 15, 30]"
                :page-size="5"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
              </el-pagination>
            </div>

            <div v-for="x in imgGirl"  >
            <div style="float:left;width: 260px;height: 300px">
              <ul style="list-style-type: none">
                <li>
                  <a href="/productDetail">
                    <img :src="require('../../assets/images/'+x.src)" width="220px" height="220px">
                  </a>

                </li>
                <li>
                  <ul style="list-style-type: none;font-size: 12px">
                    <li><el-tag type="danger">特卖价:{{x.price}}元</el-tag></li>
                    <li>
                      <el-link style="font-size: 12px">{{x.title}}</el-link>
                    </li>

                  </ul>
                </li>
              </ul>


            </div>
            </div>


          </el-col>
          <el-col :span="1">&nbsp;</el-col>
      </el-row>



    </el-main>
    <Footer></Footer>
  </el-container>
</template>

<script>
  import Header from "./myComponents/Header";
  import Search from "./myComponents/Search";
  import Footer from "./myComponents/Footer";
    export default {
        name: "ProductClass",
        components:{
          Header,
          Search,
          Footer
      },
        data(){
           return{
               parameter:{ //请求查询参数
                  proType:1,
                  brandId:0,//默认查询所有品牌
                  startPrice:0,//默认查询价格
                  endPrice:0,
                  page:1,
                  row:5
               },
               total:0,//总条数
               type:"男装",
               brand:[
               ],//品牌
               imgGirl:[]//女装,
           }
        },
        methods:{
          queryPrice(a,b){//价格区间查询
            this.parameter.startPrice = a;
            this.parameter.endPrice = b;
            this.queryOrderBy();
          },
          queryBrand(x){//查询品牌
             //更改请求的参数品牌
             this.parameter.brandId = x.brandId;
             this.queryOrderBy();
          },
          handleSizeChange(row){//选择每页显示条数的值改变事件
             //更改每页显示的条数
            this.parameter.row = row;
            this.queryOrderBy();
          },
          handleCurrentChange(page){ //用户选择页码或者上一下，下一页按钮触发的事件
            //更改页数
            this.parameter.page = page;
            this.queryOrderBy();
          },
          queryOrderBy(){//查询商品分类
            const self = this;
            //发送ajax请求
            this.$http.get("/goods/query",{params:this.parameter})
            .then(function (rs) {
               console.log(rs);
               if(rs.data.code==200){
                  self.imgGirl = rs.data.data.list;
                  self.total = rs.data.data.total;
               }else{
                 //清空
                 self.imgGirl = [];
               }

            })
          }

      },
      mounted() {
        this.queryOrderBy();
      }

    }
</script>

<style scoped>

</style>
