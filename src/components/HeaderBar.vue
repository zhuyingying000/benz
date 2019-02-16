<template>
  <div class="nav">
    <div class="nav-bar">
      <div class="nav-logo">
        <img v-bind:src="imgUrl"/>
      </div>
      <div class="nav-top">
        <router-link to="./CarType" class="nav-style">车型</router-link>
        <router-link to="./BuyCarGuide" class="nav-style">购车指南</router-link>
        <router-link to="./CustomerService" class="nav-style">购车指南</router-link>
        <router-link to="./MercedesMe" class="nav-style">Mercedesme</router-link>
        <router-link to="./MercedesAmg" class="nav-style">梅赛德斯-AMG</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import LOGO from '../assets/picture/nav-logo.png'

export default {
  name: 'HeaderBar',
  data() {
    return {
      imgUrl: LOGO,

    }
  }
}
</script>

<style scoped>
  .nav {
    height: 108px;
    background: black;
  }

  .nav-bar {
    max-width: 940px;
    display: flex;
    margin: 0 auto;
  }

  .nav-logo {
    position: relative;
    top: 20px;
  }

  .nav-logo img {
    width: 250px;
    height: 64px;

  }

  .nav-top {
    position: relative;
    top: 61px;
  }

  .nav-style {
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    padding-left: 50px;
  }

  .nav-style:hover {
    color: #00ADEf;
  }


</style>
