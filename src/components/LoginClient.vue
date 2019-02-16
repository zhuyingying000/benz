<template>
  <div class="container">
    <img v-bind:src="imgUrl" class="header-bg">
    <p class="content">{{msg}}</p>
    <input type="button" value="登录MercedeesMe客户端" class="btn">
  </div>
</template>


<script>
import login from '../assets/picture/login.jpg'

export default {
  name: "LoginClient",
  data() {
    return {
      imgUrl: login,
      msg: "为提升您的梅赛德斯-奔驰体验，Mercedes me创新设计了一系列在线服务。通过手机、" +
      "平板或个人电脑均可访问操作。Mercedes me，贴心更知心，在忙碌的生活为您提供出行的便利。" +
      " 您的个性化主页将涵盖与您相关的所有个人主题。 无论是娱乐，旅行还是其它生活方式，" +
      "Mercedes me都将随时随地为您提供更好的专属帮助。"
    }
  }
}
</script>

<style scoped>
  .container {
    position: relative;
  }

  .header-bg {
    width: 100%;
  }

  .content {
    position: absolute;
    top: 22%;
    left:20%;
    color:#fff;
    max-width:746px;
    height:124px;
    font-size: 18px;
    line-height:1.5em;
    /*margin-left:-300px;*/
    /*text-align: center;*/
  }


  .btn{
    position: absolute;
    top:50%;
    left:42%;
    background-color: #11b4bd;
    color:white;
    outline: none;
    border:none;
    border-radius: 3px;
    width:212px;
    height:40px;
    font-size: 16px;
  }
  .btn:hover{
    background-color: blue;
  }
</style>
