<template>
  <div>
    <div class="container">
      <div class="left"></div>
      <span>全部车型</span>
      <div class="right"></div>
    </div>
  </div>

</template>

<script>
export default {
  name: "FullType"
}
</script>



<style scoped>
  .container{
    max-width:940px;
    margin:40px auto;
    display: flex;

  }
.left{
  width:400px;
  height:1px;
  background:gray;
  margin-top:20px;
}
span{
  font-size: 30px;
  padding:0 10px;
}
  .right{
    width:400px;
    height:1px;
    background:gray;
    margin-top:20px;
  }
</style>
