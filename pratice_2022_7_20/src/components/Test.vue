<template>


    <!-- 外层 -->
  <div class="root">

    <!-- 遍历数据的 -->
    <div v-for="(shopItem, index) in shopList" :key="index">
      <img style="width: 200px;" :src="shopItem.url" alt="" />
    </div>

  </div>
</template>

<script>
import dataList from "@/data/test.json";
export default {
  name: "",
  data() {
    return {
      shopList: [],
    };
  },
  mounted() {
    this.shopList = dataList.shopList;
  },
};
</script>

<style scoped>
.root{
    display: flex;
    width: 400px;
    flex-wrap: wrap;
    justify-content: space-around
}
.root img{
    width: 200px;
    height: 200px;
}

.root::after{
    content: "";
    width: 200px;
    /* 不可以提供高度 */
    /* height: 200px; */
    background: red;
    /* flex-basis:0; */
    /* flex-basis: auto; */
    /* flex-basis: content; */
    height: auto;
}

</style>
