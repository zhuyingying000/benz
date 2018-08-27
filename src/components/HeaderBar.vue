<template>
  <div class="top-bar">
    <div class="nav-bar">
      <div class="benz-logo">
        <img src="../assets/picture/logo.png" alt="">
      </div>
      <nav>
        <a href="">车型</a>
        <a href="">购车指南</a>
        <a href="">客户服务</a>
        <a href=""> Mercedes-me</a>
        <a href="">梅赛德斯-AMG</a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderBar',
}
</script>

<style scoped>
  .top-bar {
    height: 108px;
    background: black;
  }

  .nav-bar {
    max-width: 940px;
    height: 100%;
    margin: 0 auto;
    display: flex;
  }
    .benz-logo{
      margin-top:20px;
    }
  .benz-logo img {
    width: 250px;
    height: 64px;
    padding-right: 20px;
  }

  nav{
   margin-top:60px;
  }
  a {
    text-decoration: none;
    color: #fff;
    font-size: 15px;
    padding:0 20px;
  }
  nav a:hover{
    color:#00ADEf;
  }
</style>
