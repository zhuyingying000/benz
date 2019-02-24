<template>
  <div>

  <p>MercedesMe</p>
  <HeaderBar></HeaderBar>
    <LoginClient></LoginClient>
    <Introduce></Introduce>
    <FooterPage></FooterPage>

  </div>
</template>

<script>
import HeaderBar from './HeaderBar'
import LoginClient from './LoginClient'
import Introduce from './Introduce'
import FooterPage from './FooterPage'


export default {
  name: "MercedesMe",
  components:{
    HeaderBar,
    LoginClient,
    Introduce,
    FooterPage


  }
}
</script>
<style scoped>

</style>
