<template>
 <div>
    <h1 >学生信息管理</h1>
   <el-form :inline="true" class="demo-form-inline" >
     <el-form-item label="姓名">
       <el-input v-model="studentQuery.name"></el-input>
     </el-form-item>

     <el-form-item label="学历">
       <el-select v-model="studentQuery.xueli">
         <el-option label="本科"  value="本科"></el-option>
         <el-option label="硕士"  value="硕士"></el-option>
         <el-option label="大专"  value="大专"></el-option>
         <el-option label="高中"  value="高中"></el-option>
       </el-select>
     </el-form-item>

     <el-form-item >
       <el-button type="success" >查询</el-button>
       <el-button type="success" @click="addPage">新增</el-button>
     </el-form-item>
   </el-form>


   <el-table border :data="list" style="width:100%">
     <el-table-column label="编号" prop="id"   width="100px"></el-table-column>
     <el-table-column label="姓名" prop="name" ></el-table-column>
     <el-table-column label="学历" prop="xueli"	></el-table-column>
     <el-table-column>
       <template slot-scope="x">
         <el-button type="success" size="mini" @click="query(x.$index,x.row)">查看</el-button>
         <el-button type="warning" size="mini" @click="edit(x.$index,x.row)">编辑</el-button>
         <el-button type="danger" size="mini" @click="del(x.$index,x.row)">删除</el-button>
       </template>
     </el-table-column>
   </el-table>
   <!-- 分页组件 -->
   <div align="right">
     <el-pagination
       @size-change="selectChange"
       @current-change="pageChange"
       :current-page="form.page"
       :page-sizes="[5,10,15,20]"
       :page-size="form.row"
       :total="form.total"
       layout="sizes,prev,pager,next,jumper,total"
     ></el-pagination>
   </div>


   <!-- 编辑- 对话框组件 -->
   <el-dialog :visible.sync="isShow" width="30%" title="学生信息编辑">
     <el-form label-width="80px">
       <el-form-item label="编号">
         <el-input v-model="form.id"></el-input>
       </el-form-item>
       <el-form-item label="姓名">
         <el-input v-model="form.name"></el-input>
       </el-form-item>
       <el-form-item label="学历">
         <el-select v-model="form.xueli">
           <el-option label="高中" value="高中"></el-option>
           <el-option label="大专" value="大专"></el-option>
           <el-option label="本科" value="本科"></el-option>
           <el-option label="硕士" value="硕士"></el-option>
         </el-select>
       </el-form-item>
       <el-form-item >
         <el-button type="success" size="mini">保存</el-button>
         <el-button type="success" size="mini">重置</el-button>
       </el-form-item>
     </el-form>
   </el-dialog>

   <!-- 新增- 对话框组件 -->
   <el-dialog :visible.sync="addShow" width="30%" title="学生信息新增">
     <el-form label-width="80px">
       <el-form-item label="编号">
         <el-input ></el-input>
       </el-form-item>
       <el-form-item label="姓名">
         <el-input></el-input>
       </el-form-item>
       <el-form-item label="学历">
         <el-select >
           <el-option label="高中" value="高中"></el-option>
           <el-option label="大专" value="大专"></el-option>
           <el-option label="本科" value="本科"></el-option>
           <el-option label="硕士" value="硕士"></el-option>
         </el-select>
       </el-form-item>
       <el-form-item >
         <el-button type="success" size="mini">保存</el-button>
         <el-button type="success" size="mini">重置</el-button>
       </el-form-item>
     </el-form>
   </el-dialog>


 </div>
</template>

<script>
    export default {
        name: "LIst",
        data(){
          return{
            studentQuery:{
              name:"",
              xueli:""
            },
            list:[
              {"id":1,"name":"张三","xueli":"本科","age":25,"birthday":"1999-01-21"},
              {"id":2,"name":"李四","xueli":"硕士","age":24,"birthday":"1998-01-21"},
              {"id":3,"name":"王五","xueli":"大专","age":23,"birthday":"1997-01-21"}
            ],
            isShow:false, //编辑对话框是否显示
            isQuery:false,//详情对话框是否显示
            addShow:false,
            form:{
              id:"",
              name:"",
              xueli:"",
              age:"",
              birthday:"",
              page:1,//页码
              row:5,//每页显示条数
              total:10,//总条数
              totalPage:3//总页码
            },
          }
        },
      methods:{
        edit:function(index,x){
          this.isShow = true;
          //数据回显
          this.form = x;
        },
        del:function(inde,x){
          //把vue对象赋值给一个变量
          var self  = this;

          //2 完整写法
          this.$confirm("你确定要删除吗?","删除提示",{
            confirmButtonText:"确定删除",
            cancelButtonText:"取消删除",
            type:"warning"
          }).then(function(){
            //消息提示
            self.$message({
              message:"删除成功",
              type:"success"
            })
          }).catch(function(){
            //消息提示
            self.$message({
              message:"删除失败",
              type:"error"
            })
          })

        },
        query:function(index,x){

          this.isQuery = true;
          this.form= x;
        },
        addPage:function(){
          this.addShow = true;
        },
        selectChange:function(val){//分页下拉框触发的事件,val下拉框选中条数
          //把选中的每页条数赋值给分页参数对象的每页条数
          this.form.row = val;
          //调用后端的查询方法
        },
        pageChange:function(page){//选中页码触发的事件,page值选中的页码
          this.form.page=page;
          //调用后端的查询方法
        }
      }
    }
</script>

<style scoped>

</style>
