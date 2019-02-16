<template>
  <div>
  <p :class="p1" class="red-bg">买车指南</p>
  <p :class="p2">买车指南{{p2}}</p>
  <p v-bind:class="p3">买车指南</p>
<button @click="demo">点我</button>
  </div>
</template>

<script>
export default {
  name: "BuyCarGuide",
  data(){
    return{
      p1:'',
      p2:'',
      p3:''
    }
  },
  methods:{
    demo:function(){
      this.p1 = 'red-text';
      this.p2 = 'red-bg';
      this.p3 = 'red-text red-bg'
    }
  }
}
</script>

<style scoped>
.red-text{
  color:red
}
  .red-bg{
    background-color: red;
  }
</style>



