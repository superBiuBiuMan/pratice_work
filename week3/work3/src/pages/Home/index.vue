<template>
  <div>
    我是Home组件
    <button @click="toFather">单击我跳转到嵌套路由</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    toFather() {
      // push和命名路由的使用
      this.$router.push({ name: "Father" });
    },
  },
};
</script>

<style lang="less" scoped>
</style>
