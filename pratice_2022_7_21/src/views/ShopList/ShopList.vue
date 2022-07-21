<template>
  <div>
    <h2><a href="javascript:;" @click="addItem">添加商品</a></h2>
    <table cellpading="0" cellspacing="0">
      <thead class="table-head">
        <tr>
          <th>商品信息</th>
          <th>单价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody class="table-body">
        <tr v-for="(item, index) in shopList" :key="index">
          <!-- 商品信息展示 -->
          <td class="showinfo">
            <img :src="item.img" />
            <span>{{ item.name }}</span>
          </td>
          <td>{{ item.price }}元</td>
          <td><a href="javascript:;" @click="removeItem(index)">删除</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState,mapActions } from "vuex";
export default {
  name: "ShopList",
  data() {
    return {};
  },
  computed: {
    ...mapState(["shopList"]),
  },
  methods: {
    ...mapActions(["deleteData"]),
    //用户单击删除
    removeItem(index) {
        this.deleteData(index);
    },
    //跳转到添加商品
    addItem(){
        this.$router.push("/addshop");
    }
  },
};
</script>

<style scoped>
table {
  width: 800px;
  text-align: center;
  margin: 50px auto;
}
a{
    text-decoration: none;
}
button {
  border: none;
  color: white;
  background-color: #cccccc;
}
/* 可以活动时候的按钮样式 */
.showinfo {
  position: relative;
  width: 400px;
}
.showinfo span {
  position: absolute;
  top: 50%;
  left: 140px;
}
tbody img {
  float: left;
  margin-left: 20px;
  width: 100px;
  /* height: 100px; */
}
tfoot {
  background-color: #eeeeee;
}
</style>
