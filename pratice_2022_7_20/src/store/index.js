import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//初始化读取storage数据
function initData(){
    let userInfo = window.sessionStorage.getItem("userInfoMy");
    if(userInfo){
        //含有数据
        return JSON.parse(userInfo);
    }
    //没有数据就返回一个空数组
    return [];
}

const state = {
  //用户信息列表
  userList:initData(),
};
const mutations = {
  //用户注册操作
  USERREGISTER(state, info) {
    //信息存在
    if (info.account && info.password) {
      //判断用户信息是否已经存在
      let result = state.userList.find((item) => item.account === info.account);
      if (result) {
        alert("用户信息已存在");
      } else {
        //存入信息
        state.userList.push({
          account: info.account,
          password: info.password,
        });
        //也存入sessionStorage
        window.sessionStorage.setItem("userInfoMy",JSON.stringify(state.userList));
        alert("注册成功");
      }
    }
  },
  //用户登录操作
  USERLOGIN(state, info) {
    let userInfo = state.userList.find((item) => item.account === info.account);
    if (userInfo) {
      //比对密码
      if (userInfo.password === info.password) {
        alert("登录成功");
      } else {
        alert("登录失败,密码错误!");
      }
    } else {
      alert("用户名不存在!");
    }
  },
};
const actions = {
  //用户注册
  register({ commit }, info) {
    commit("USERREGISTER", info);
  },
  //用户登录操作
  login({ commit }, info) {
    commit("USERLOGIN", info);
  },
};
const getters = {};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});

export default store;
