import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const initData = [
    {
      img: require("@/assets/images/oppo.jpg"),
      name: "OPPO R15 智能手机 全网通",
      num: 2,
      price: 599,
    },
    {
      img: require("@/assets/images/vivo.jpg"),
      name: "vivo X27 8GB+256GB大内存",
      num: 1,
      price: 699,
    },
  ];
//初始化值操作
function initVaue(){
    let localData = window.localStorage.getItem("myshoplist");
    if(localData){
        //本地值存在
        return JSON.parse(localData);
    }else{
        //本地值不存在
        return initData;
    }
}
const state = {
    shopList:initVaue(),
};
const mutations = {
    //添加
    ADD(state,info){
        //info为对象
        state.shopList.push(info);
        //重设localStorage数据
        window.localStorage.setItem("myshoplist",JSON.stringify(state.shopList));
    },
    //删除
    DELETE(state,index){
        state.shopList.splice(index,1);
        //重设localStorage数据
        window.localStorage.setItem("myshoplist",JSON.stringify(state.shopList));
    }
};
const actions = {
    //添加
    expandData({commit},info){
        commit("ADD",info);
    },
    //删除
    deleteData({commit},index){
        commit("DELETE",index);
    }
};
const getters = {

};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
export default store;
