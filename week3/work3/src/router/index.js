import VueRouter from "vue-router";
import Vue from "vue";

//5.引入路由
const Home = ()=>import("@/pages/Home")
const Father = ()=>import("@/pages/Inner/Father");
const Nest = ()=>import("@/pages/Inner/Nest");
//1.使用插件
Vue.use(VueRouter);

//2.编写路由
const routes = [
    //  基本路由
    {
        name:"Home",
        path:"/home",
        component:Home
    },
    //嵌套路由(二级路由)
    {  
        name:"Father",
        path:"/father",
        component:Father,
        // 设置默认二级路由
        redirect:"/father/nest",
        children:[
            {
                name:"Nest",
                path:"nest",
                component:Nest,
            },
        ]
    }, 
    //路由重定向
    {
        path:"/",
        redirect:"/home"
    }
]

//3.创建路由实例
const router = new VueRouter({
    routes,
    mode:"history"
})

//4.暴露
export default router;