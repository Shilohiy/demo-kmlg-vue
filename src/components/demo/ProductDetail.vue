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
          title:"【小香风】上衣女短款秋季新款V领长袖微弹金属扣针织衫女上衣",
          color:"黄色",
          brand:"小香风",
          productType:"女装",
          price:200,
          num:1,
          imgSrc:"girl/girl10.jpg"
        },
        buyCarNum:3 //购物车数量
      }
    },
    methods:{
      addBuyCar(){//添加购物车
         const  self = this;
         const info =  this.$alert("加入成功","提示",{type:"success"});
         info.then(function () {
           //添加购物车数量
           self.buyCarNum = self.buyCarNum+self.product.num;
         })
      }
    }

  }
</script>

<style scoped>

</style>
