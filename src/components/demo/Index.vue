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
      <!--轮播图开始-->
      <el-row>
        <el-col :span="24">
          <el-carousel indicator-position="outside" style="height:401px" >
            <el-carousel-item v-for="x in imgList" :key="x" style="height:401px" >
              <a href="/productClass">
                <img :src="require('../../assets/images/'+x)" width="1450" height="401"  >
              </a>
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>
      <!--轮播图结束-->
    <br>
    <!--女装-->
    <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label"><i class="el-icon-date"></i>女装精品</span>
          <template v-for="x in imgGirl" >
 
            <el-col :span="12">
              <el-result :title="x.title">
                <template slot="icon">
                  <a href="/productClass">
                  <img :src="require('../../assets/images/index/'+x.src)" width="678px">
                  </a>
                </template>
              </el-result>
            </el-col>
    
          </template>
        </el-tab-pane>
      </el-tabs>
    <br>
    <!--男装-->
    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i>男装精品</span>
        <template v-for="x in imgBoy">
     
          <el-col :span="12">
            <el-result :title="x.title">
              <template slot="icon">
                <a href="/productClass">
                <img :src="require('../../assets/images/index/'+x.src)" width="678px">
                </a>
              </template>
            </el-result>
          </el-col>

        </template>
      </el-tab-pane>
    </el-tabs>
    <br>
    <!--鞋包-->
    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i>鞋包精品</span>

          <template v-for="x in imgXieBao">
          <el-col :span="12">
            <el-result :title="x.title">
              <template slot="icon">
                <a href="/productClass">
                <img :src="require('../../assets/images/index/'+x.src)"  width="678px">
                </a>
              </template>
            </el-result>
          </el-col>
          </template>

      </el-tab-pane>
    </el-tabs>

    </el-main>
      <Footer></Footer>
  </el-container>
</template>


<script>
  import Footer from "./myComponents/Footer";  import Header from "./myComponents/Header";
  import Search from "./myComponents/Search";

    export default {
        name: "Index",
        components:{
            Header,
            Search,
            Footer
        },
        methods:{
          toProduct(){
            this.$router.push("/productClass");
          }
        },
        data(){
          return{
          //轮播
            imgList:[
              "ban1.jpg",
              "ban2.jpg",
              "ban3.jpg",
              "ban4.jpg"
            ],//轮播
            imgGirl:[//女装
              {
                title:"依奴珈ENAGA女皮衣皮草专场",
                src:"girl01.jpg",

              },
              {
                title:"AUI女装专场",
                src:"girl02.jpg",
              }
            ],
            imgBoy:[//男装
              {
                title:"suamoment男装专场",
                src:"boy01.jpg",

              },
              {
                title:"法派FAPAI男装专场",
                src:"boy02.jpg",
              }
            ],
            imgXieBao:[//鞋包
              {
                title:"米熙mixi箱包专场",
                src:"xiebao01.jpg",

              },
              {
                title:"环球户外出行专场",
                src:"xiebao02.jpg",
              }
            ]

        }


      }
    }
</script>

<style scoped>

</style>
