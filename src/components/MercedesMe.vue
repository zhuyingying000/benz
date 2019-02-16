<template>
  <div>

  <p>MercedesMe</p>
  <HeaderBar></HeaderBar>
    <LoginClient></LoginClient>
    <Introduce></Introduce>

  </div>
</template>

<script>
import HeaderBar from './HeaderBar'
import LoginClient from './LoginClient'
import Introduce from './Introduce'


export default {
  name: "MercedesMe",
  components:{
    HeaderBar,
    LoginClient,
    Introduce,


  }
}
</script>
<style scoped>

</style>
