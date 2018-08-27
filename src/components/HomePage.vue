<template>
  <div>
    <div>
      <HeaderBar></HeaderBar>
      <CarsImg></CarsImg>
      <FullType></FullType>
      <FullTypeImg></FullTypeImg>
      <MoreFind></MoreFind>
      <MoreFindImg></MoreFindImg>
      <Second></Second>
    </div>
  </div>
</template>

<script>
import HeaderBar from './HeaderBar'
import CarsImg from './CarsImg'
import FullType from './FullType'
import FullTypeImg from './FullTypeImg'
import MoreFind from './MoreFind'
import MoreFindImg from './MoreFindImg'
import Second from './Second'



export default {
  name: 'HomePage',
  components: {
    HeaderBar,
    CarsImg,
    FullType,
    FullTypeImg,
    MoreFind,
    MoreFindImg,
    Second,
  },
  data() {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
