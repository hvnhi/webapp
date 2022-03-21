<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <div class="w-[350px] mt-8 bg-white overflow-hidden shadow-lg sm:rounded-lg px-8 py-10">
        <div class="flex justify-center mb-8 mt-4 sm:pt-0">
          <img src="~assets/images/logo_cube.png">
        </div>
        <el-form ref="form" :model="user" label-position="top" status-icon :rules="rules">
          <el-form-item label="Username" prop="username">
            <el-input v-model="user.username" type="text" autocomplete="off"></el-input>
          </el-form-item>
            <el-form-item label="Password" prop="password">
            <el-input v-model="user.password" type="password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item class="text-center pt-4">
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
        this.$refs.form.validate(async (valid) => {
          if (valid) {
            try {
              await this.$auth.login({
                data: {
                  username: this.user.username,
                  password: this.user.password
                }
              })
            } catch (error) {
              this.$message.error(error.response.data.message)
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
