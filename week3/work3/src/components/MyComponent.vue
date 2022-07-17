<template>
  <div class="my">
    这是我的组件
    <!-- 用于触发给其绑定的自定义事件 -->
    <button @click="chufa">触发自定义事件</button>
    <!-- 简写 -->
    <!-- <input type="text" v-model="userInput" /> -->
    <input type="text" :value="userInput" @input="userInput = $event.target.value">
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data(){
    return {
      //用户输入
      userInput:"",
    }
  },
  methods:{
    //触发自定义事件click,并传入一个参数100
    chufa(){
        this.$emit("click",1000);
    }
  }
}
</script>

<style scoped>
.my {
  border: 1px solid red;
}
</style>
