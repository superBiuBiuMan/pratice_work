<template>
  <div class="add">
    <h3>添加商品信息</h3>
    <label for="">
      商品名称:
      <input type="text" v-model="shopInfo.name" /> </label
    ><br />
    <label for="">
      商品图片:
      <select v-model="selectPic">
        <option value="-1">请选择图片</option>
        <option
          v-for="(picItem, index) in selectPicList"
          :key="index"
          :value="index"
        >
          {{ picItem }}
        </option>
      </select> </label
    ><br />
    <label for="">
      商品价格:
      <input type="text" v-model="shopInfo.price" /> </label
    ><br />
    <label for="">
      商品数量:
      <input type="text" v-model="shopInfo.count" /> </label
    ><br />
    <div class="operation">
      <button @click="addItem">添加</button>
      <button @click="resetValue">重置</button>
    </div>
    <h3><router-link to="/">返回查看</router-link></h3>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddShop",
  data() {
    return {
      //选择图片
      selectPic: -1,
      //可选择图片数据
      selectPicList: ["chocolate.jpg", "honor.jpg", "js.png"],
      //商品信息
      shopInfo: {
        //名称
        name: "",
        //价格
        price: "",
        //数量
        count: "",
      },
    };
  },
  methods: {
    ...mapActions(["expandData"]),
    //添加按钮
    addItem() {
      let { selectPic } = this;
      if (selectPic === -1) {
        alert("请选择图片");
        return;
      }
      let { shopInfo } = this;
      if (!shopInfo.name || !shopInfo.price || !shopInfo.count) {
        alert("请填写完整的信息");
        return;
      }
      //计算图片路径
      let imgName = this.selectPicList[selectPic]; //获取图片名称
      let imgData = require("@/assets/images/" + imgName); //获取图片数据
      //完整信息
      this.expandData({
        img: imgData,
        name: shopInfo.name,
        num: shopInfo.count,
        price: shopInfo.price,
      });
      //提示
      alert("添加成功");
      //重置
      this.resetValue();
    },
    //重置按钮操作
    resetValue() {
      // 重置数据
      this.selectPic = -1;
      Object.keys(this.shopInfo).forEach((keyValue) => {
        this.shopInfo[keyValue] = "";
      });
    },
  },
};
</script>

<style scoped>
.add {
  width: 400px;
  margin: 50px auto;
  text-align: left;
}
.operation {
  text-align: center;
}
</style>
