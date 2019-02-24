<template>
  <div>
    <div class="bg-white">
      <div class="wrapper">
        <div>{{msg}}</div>
      </div>
    </div>
<div class="bg-gray">
  <div>
    <span>{{type}}</span>

  </div>
</div>




<!--<div class="box">-->
  <!--<div class="box1">1</div>-->
  <!--<div class="box2">2</div>-->
<!--</div>-->
  </div>
</template>

<script>
export default {
  name: "Introduce",
  data() {
    return {
      msg: '分享到',
      type:'车型'
    }
  }
}
</script>

<style scoped>
  .bg-white {
    height: 172px;
  }

  .wrapper {
    margin:0 180px;
    text-align: right;
    position: relative;
    top:60px;

  }


  /*.box{*/
    /*width:200px;*/
    /*height:300px;*/
    /*background-color: aqua;*/
    /*font-size: 0;*/
  /*}*/
  /*.box1{*/
    /*display: inline-block;*/
    /*background-color: yellow;*/
    /*width: 50%;*/
    /*font-size: 18px;*/
  /*}*/
  /*.box2{*/
    /*font-size: 18px;*/
    /*display: inline-block;*/
    /*background-color: yellowgreen;*/
    /*width:50%;*/
  /*}*/
</style>
