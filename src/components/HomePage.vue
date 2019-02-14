<template>
  <div>
    <div>
      <HeaderBar></HeaderBar>
      <CarsImg></CarsImg>
    </div>
  </div>
</template>

<script>
import HeaderBar from './HeaderBar'
import CarsImg from './CarsImg'


export default {
  name: 'HomePage',
  components: {
    HeaderBar,
    CarsImg,
  },
  data() {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
