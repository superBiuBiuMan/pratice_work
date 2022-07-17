<template>
  <div id="app">
    <!-- 给自定义组件绑定自定义事件为click事件,并将事件的回调函数绑定在事件check上 -->
    <MyComponent @click="check"></MyComponent>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
export default {
  name: 'App',
  components: {
    MyComponent,
  },
  methods:{
    //给自定义组件绑定的自定义事件
    check(event){
      console.log("event",event);
    }
  }
}
</script>

<style>

</style>
