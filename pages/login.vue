<template>
  <div class="bg-gray-100 flex flex-col h-full w-full absolute">
    <div class="mx-auto">
      <div class="mt-24 mb-10 flex flex-1 justify-center">
        <img src="~assets/images/logo_cube.png">
      </div>
      <div class="w-[300px]">
        <el-form ref="form" :model="user" label-position="top" status-icon :rules="rules" label-width="120px">
          <el-form-item label="Username" prop="username">
            <el-input v-model="user.username" type="text" autocomplete="off"></el-input>
          </el-form-item>
            <el-form-item label="Password" prop="password">
            <el-input v-model="user.password" type="password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item class="text-center pt-8">
            <el-button type="primary" @click="submitForm('user')">Login</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LoginPage',
    data() {
      return {
        user: {
          username: '',
          password: '',
          token: ''
        },

        rules: {
          username: [
            { required: true, message: 'Please enter username', trigger: 'blur' },
            { max: 50, message: 'Length should be 50', trigger: 'blur' }
          ],
          password: [
            { required: true, message: 'Please enter password', trigger: 'blur' },
            { min: 8, max: 16, message: 'Length should be 8 to 16', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            try {
              // await this.$auth.loginWith('local', {
              //   data: {
              //     username: this.user.username,
              //     password: this.user.password
              //   },
              // })
            } catch (error) {
              this.$message.error('Tên đăng nhập và mật khẩu không chính xác')
            }
          } else {
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped>
div >>> .el-form-item__label {
  padding-bottom: 0;
}
</style>
