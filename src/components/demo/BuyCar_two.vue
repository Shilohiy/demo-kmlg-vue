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
      <el-steps :active="2" finish-status="success" simple style="margin-top: 20px">
        <el-step title="查看购物车" ></el-step>
        <el-step title="确认订单信息" ></el-step>
        <el-step title="成功提交订单" ></el-step>
      </el-steps>
      <br>
      <h1>商品列表</h1>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="商品名称" prop="title" style="width: 40%"></el-table-column>
        <el-table-column label="单价" prop="price" width="100px"></el-table-column>
        <el-table-column label="购买数量" prop="num" width="300px"></el-table-column>
        <el-table-column label="小计" prop="sum" width="200px"></el-table-column>

      </el-table>
      <div align="right" style="padding-top: 5px">
        <el-tag  type="primary">商品总价:{{totalPrice}}元</el-tag>
      </div>
      <h1>收货人信息</h1>

      <el-form ref="form" :inline="true" :model="dataForm" label-width="80px" >

        <el-form-item label="收货人">
          <el-select v-model="dataForm.name" placeholder="请选择收货人" @change="changeInfo">
            <template v-for="x in nameList">
              <el-option :label="x" :value="x"></el-option>
            </template>
          </el-select>
        </el-form-item>

        <el-form-item label="邮政编码">
          <el-input v-model="dataForm.postCode" ></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="dataForm.tel" ></el-input>
        </el-form-item>
        <el-form-item label="电子邮件">
          <el-input v-model="dataForm.email"></el-input>
        </el-form-item>

        <el-form-item label="收货地址">
          <el-input v-model="dataForm.address" style="width: 700px"></el-input>
        </el-form-item>
      </el-form>
      <h1>配送方式</h1>
        <el-radio-group v-model="postType" size="medium" @change="changePostPrice">
          <el-radio border label="申通"></el-radio>
          <el-radio border label="邮局平邮"></el-radio>
        </el-radio-group>
        <span v-show="stShow">申通配送费用：{{postPrice}}元</span>
       <span v-show="yjShow">邮局平邮配送费用：{{postPrice}}元</span>
      <h1>支付方式</h1>
      <el-radio-group v-model="payType" size="medium">
        <el-radio border label="微信"></el-radio>
        <el-radio border label="支付宝"></el-radio>
      </el-radio-group>
      <h1>订单附言</h1>
      <el-input type="textarea" placeholder="请输入订单附言" v-model="orderRemark"></el-input>
      <!-- 二维码生成-->
       <el-dialog :visible.sync="isShow" width="50%">
             <div v-if="coderUrl">
                <img :src="coderUrl" width="300" height="200">
             </div>
       </el-dialog>

       <div align="right">
         <br>
         <el-tag  type="primary">应付金额:{{payPrice}}元</el-tag>
         <el-button type="primary" @click="sureOrder">确认订单</el-button>
       </div>

    </el-main>
    <Footer></Footer>
  </el-container>
</template>

<script>
  import Header from "./myComponents/Header";
  import Search from "./myComponents/Search";
  import Footer from "./myComponents/Footer";
  import QRCode from 'qrcode';
  export default {
    name: "buyCarTwo",
    components:{
      Header,
      Search,
      Footer
    },
    data(){
      return{
        parameter:{
           orderId:"100",
           money:"200",
           title:"手机",
           desc:"这是一个华为手机"
        },
        isShow:false,//是否显示二维码弹窗
        coderUrl:"",//付款链接地址
        totalPrice:300,//总价
        tableData:[
          {"title":"上衣女短款秋季新款V领长袖微弹金属扣针织衫女上衣","price":100,"num":1,"sum":100},
          {"title":"上衣女短款秋季新款V领长袖微弹金属扣针织衫女上衣","price":100,"num":1,"sum":100},
          {"title":"上衣女短款秋季新款V领长袖微弹金属扣针织衫女上衣","price":100,"num":1,"sum":100}
        ],
        nameList:["张三","李四"],//收货人列表
        dataForm: {
          name: '',//收货人
          postCode: '',//邮政编码
          tel: '',//电话
          email: '',//电子邮件
          address: ''//收货人地址
        },
        postType: "申通",//配送方式
        payType:"支付宝",//支付方式
        postPrice:15,//配送费用
        stShow:true,//默认显示申通费用信心
        yjShow:false,//默认不显示邮局费用信心
        orderRemark:"",//订单附言
        payPrice:350//应付金额
      }
    },
    methods: {
      changeInfo() {//收货人信息改变
        const data = [
          {name: "张三", postCode: 6600, tel: 15008266434, email: "4556677@qq.com", address: "成都市锦江区东光南二巷7号"},
          {name: "李四", postCode: 4600, tel: 17228266434, email: "8555477@qq.com", address: "成都市武侯区红牌楼1号"}
        ]
        if (this.dataForm.name == "张三") {
          this.dataForm = data[0]
        } else {
          this.dataForm = data[1]
        }
      },
      changePostPrice() {//配送方式信息改变
        if (this.postType == "申通") {
          this.stShow = true;
          this.yjShow = false;
          this.postPrice = 15
        } else {
          this.stShow = false;
          this.yjShow = true;
          this.postPrice = 5
        }
        //计算应付金额
        this.payPrice = this.totalPrice + this.postPrice;
      },
      sureOrder() {//确认订单
        const info = this.$confirm("你确定要付款" + this.payPrice + "元吗?", "付款提示", {type: "warning"});
        const self = this;
        //确定触发事件
        info.then(function (){
           //请求参数
           self.$http.get("/order-info/getCode",{params:self.parameter})
           .then(function (rs) {
             console.log(rs.data)
             self.generateQRCode(rs.data);
           })


          // self.$message({message:"付款成功",type:"success"});
          // self.$router.push("/buyCarThree");
        });
        //取消触发事件
        info.catch(function () {
          self.$message({message: "取消付款", type: "warning"});
        })


      },
      async generateQRCode(text) {// 生成支付二维码
        this.isShow = true;
        try {
          const url = await QRCode.toDataURL(text);
          this.coderUrl = url;
        } catch (error) {
          console.error('生成二维码出错:', error);
        }

      }
    }
  }
</script>

<style scoped>

</style>
