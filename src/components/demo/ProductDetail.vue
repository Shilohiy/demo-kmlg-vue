<template>
  <el-container>
    <el-header>
      <!--头部-->
      <Header></Header>
    </el-header>
    <br>
    <el-main>
      <!--搜索-->
      <Search :num="buyCarNum"></Search>
      <br>
      <el-row>
        <el-col :span="2" >&nbsp;</el-col>
        <el-col :span="10" >

          <img :src="require('../../assets/images/'+product.imgSrc)" width="470" height="450">

        </el-col>
        <el-col :span="10">
          <el-form ref="form"  label-width="80px">
            <el-form-item label="华清自营">
              <span>{{product.title}}</span>
            </el-form-item>
            <el-form-item label="颜色">
              <el-select v-model="product.color"  placeholder="请选择颜色">
                <el-option label="黄色" value="黄色"></el-option>
                <el-option label="白色" value="白色"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="品牌">
              <span>{{product.brand}}</span>
            </el-form-item>
            <el-form-item label="类型">
              <span>{{product.productType}}</span>
            </el-form-item>
            <el-form-item label="价格">
              <span>{{product.price}}</span>
            </el-form-item>
            <el-form-item label="数量">
              <el-input-number v-model="product.num" :min="1"></el-input-number>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="addBuyCar">加入购物车</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="2" >&nbsp;</el-col>
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
  name: "ProductDetail",
  components:{
    Header,
    Search,
    Footer
  },
  data(){
    return{
      product:{
        goodsId:"",
        title:"【小香风】上衣女短款秋季新款V领长袖微弹金属扣针织衫女上衣",
        color:"黄色",
        brand:"小香风",
        productType:"女装",
        price:200,
        num:1,
        imgSrc:"girl/girl10.jpg"
      },
      buyCarNum:3, //购物车数量
      parameter:{ //添加购物车请求参数
        goodsId:"",
        userId:"",
        goodsName:"",
        price:"",
        num:0,
        src:"",
      }
    }
  },
  mounted() {
    this.queryDetail();
  },
  methods:{
    queryDetail(){
      //获取商品id
      const goodsId = localStorage.getItem("goodsId");
      const self = this;
      //发送ajax请求
      this.$http.get("/goods/detail",{params:{"goodsId":goodsId}})
        .then(function (rs) {
          if(rs.data.code==200){
            self.product.goodsId = rs.data.data.goodsId;
            self.product.title = rs.data.data.title;
            self.product.brand = rs.data.data.brandName;
            if(rs.data.data.proType==1){
              self.product.productType="男装";
            }
            if(rs.data.data.proType==2){
              self.product.productType="女装";
            }
            if(rs.data.data.proType==3){
              self.product.productType="鞋包";
            }

            self.product.price = rs.data.data.price;
            self.product.imgSrc = rs.data.data.src;

          }else{
            self.$message("没有查询到数据");
            //清空
            self.product={};
          }
        })

    },
    addBuyCar(){//添加购物车
      const  self = this;
      //赋值给请求参数
      this.parameter.goodsId = this.product.goodsId;
      // 登录成功以后，把用户id存入到本地存储里
      this.parameter.userId = 1;
      this.parameter.goodsName = this.product.title;
      this.parameter.price = this.product.price;
      this.parameter.num = this.product.num;
      this.parameter.src = this.product.imgSrc;
      this.$http.post("/car/addCar",this.parameter)
        .then(function (rs) {
          if(rs.data.code == 200){
            const info =  self.$alert("加入成功","提示",{type:"success"});
            info.then(function () {
              //添加购物车数量
              self.buyCarNum = self.buyCarNum+self.product.num;
            })
          }else {
            self.$message("添加失败");
          }
        })


    }
  }

}
</script>

<style scoped>

</style>
