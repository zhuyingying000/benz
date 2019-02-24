<template>
  <div>
    <div>
      <HeaderBar></HeaderBar>
      {{ipt}}
      <CarsImg></CarsImg>
    </div>
  </div>
</template>

<script>
import HeaderBar from './HeaderBar'
import CarsImg from './CarsImg'
import dsz from '../common/ipt'


export default {
  name: 'HomePage',
  components: {
    HeaderBar,
    CarsImg,
  },
  data() {
    return {
      ipt:dsz
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
