import Vue from "vue";
import VueRouter from "vue-router";

const AddShop = () => import("@/views/AddShop/AddShop.vue");
const ShopList = ()=> import("@/views/ShopList/ShopList.vue");

Vue.use(VueRouter);

const routes = [
    {
        path:"/",
        component:ShopList
    },
    {
        path:"/addshop",
        component:AddShop
    }
];

const router = new VueRouter({
    mode:"history",
    routes,
})

export default router;