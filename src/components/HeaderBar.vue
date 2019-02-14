<template>
  <div class="nav">

    <div class="nav-logo">
      <img  v-bind:src="imgUrl"/>
    </div>
    <div class="top-bar">
      <router-link to="./CarType" class="nav-bar">车型</router-link>
      <router-link to="./BuyCarGuide" class="nav-bar">购车指南</router-link>
      <router-link to="./CustomerService" class="nav-bar">购车指南</router-link>
      <router-link to="./MercedesMe" class="nav-bar">Mercedesme</router-link>
      <router-link to="./MercedesAmg" class="nav-bar">Mercedes-AMG</router-link>
    </div>
  </div>
</template>

<script>
import LOGO from '../assets/picture/nav-logo.png'
export default {
  name: 'HeaderBar',
  data() {
    return {
      imgUrl: LOGO
    }
  }
}
</script>

<style scoped>
  .top-bar {

  }

  /*.nav-bar {*/
  /*max-width: 940px;*/
  /*height: 100%;*/
  /*margin: 0 auto;*/
  /*display: flex;*/
  /*}*/
  .nav-bar{
    color:#fff;
    text-decoration: none;
  }
  .nav-bar:hover {
    color: #00ADEf;
  }
.nav{
  height: 108px;
  background: black;
  display: flex;
}
.nav-logo{
  padding-top:20px;
  padding-left:120px;
}
  .nav-logo img{
    width:250px;
    height:64px;

  }
  /*a {*/
  /*text-decoration: none;*/
  /*color: #fff;*/
  /*font-size: 15px;*/
  /*padding:0 20px;*/
  /*}*/
  /*nav a:hover{*/
  /*color:#00ADEf;*/
  /*}*/


</style>
