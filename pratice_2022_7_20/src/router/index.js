import Vue from "vue";
import VueRouter from "vue-router";
const Register = () => import("@/components/Register");
const Login = () => import("@/components/Login");
const Test = () => import("@/components/Test");
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/test",
      component: Test,
    },
    {
      path: "/register",
      component: Register,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/",
      component: Login,
    },
  ],
});

export default router;
