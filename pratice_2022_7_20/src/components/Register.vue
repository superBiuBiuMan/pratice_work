<template>
  <div>
    <label> 账号:<input type="text" v-model="account" /> </label>
    <br />
    <label> 密码:<input type="password" v-model="password" /> </label>
    <br />
    <label> 重复输入密码:<input type="password" v-model="rePassword" /> </label>
    <br />
    <button @click="userRegister">注册</button>
    <br />
    <div>
      <router-link to="/login">已有账号?点击我去登录</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Register",
  data() {
    return {
      account: "",
      password: "",
      // 重复密码
      rePassword: "",
    };
  },
  methods: {
    ...mapActions(["register"]),
    //用户单击注册
    userRegister() {
      let { account, password, rePassword } = this;
      if (password !== rePassword) {
        alert("二次输入的密码不正确");
        return;
      }
      if (account && password && rePassword) {
        //调用vuex当中的register方法
        this.register({ account, password });
        //清空数据
        this.resetData();
        //跳转到登录界面
        this.$router.push("/login");
      } else {
        alert("请填写完整的信息");
      }
    },
    //初始化数据
    resetData(){
        this.account = "";
        this.password = "";
        this.rePassword = "";
    }
  },
};
</script>

<style scoped></style>
