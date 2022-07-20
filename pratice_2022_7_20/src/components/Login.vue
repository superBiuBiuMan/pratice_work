<template>
  <div>
    <label> 账号:<input type="text" v-model="account" /> </label>
    <br />
    <label> 密码:<input type="password" v-model="password" /> </label>
    <br />
    <button :disabled="!(account && password)" @click="userLogin">登录</button>
    <div>
      <router-link to="/register">还没有账号?点击我去注册</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      account: "",
      password: "",
    };
  },
  methods: {
    //单击登录
    userLogin() {
        let {account,password} = this;
        this.$store.dispatch("login",{account,password})
    },
  },
};
</script>

<style scoped></style>
