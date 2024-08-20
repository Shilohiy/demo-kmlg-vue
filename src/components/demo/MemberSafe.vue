<template>
  <div>


  <el-tabs type="border-card">
    <el-tab-pane>
      <span slot="label"><i class="el-icon-date"></i>修改密码</span>
      <el-form ref="form"  label-width="100px" >

        <el-form-item label="原密码" >
          <el-input show-password  style="width: 400px"></el-input>
        </el-form-item>
        <el-form-item label="新密码">
          <el-input show-password  style="width: 400px"></el-input>
        </el-form-item>
        <el-form-item label="确认新密码">
          <el-input show-password  style="width: 400px"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" >保存</el-button>
        </el-form-item>

      </el-form>
    </el-tab-pane>
  </el-tabs>
    <br>
  <el-tabs type="border-card">
    <el-tab-pane>
      <span slot="label"><i class="el-icon-date"></i>修改邮箱</span>
      <el-form ref="form"  label-width="100px" >

        <el-form-item label="原邮箱" >
          <el-input show-password  style="width: 400px"></el-input>
        </el-form-item>
        <el-form-item label="新邮箱">
          <el-input show-password  style="width: 400px"></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input show-password  style="width: 400px"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" >发送验证码</el-button>
          <el-button type="primary" >保存</el-button>
        </el-form-item>

      </el-form>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
    export default {
        name: "MemberSafe"
    }
</script>

<style scoped>

</style>
