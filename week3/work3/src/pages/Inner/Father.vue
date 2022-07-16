<template>
  <div class="father">
    我是外部的
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Father",
};
</script>

<style scoped>
.father {
  border: 1px solid red;
}
</style>
