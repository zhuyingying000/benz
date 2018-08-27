<template>
  <div>
    <div class="block space">
      <el-carousel height="520px">
        <el-carousel-item v-for="item in items" :key="item.id">
          <img v-bind:src="item.picture">
        </el-carousel-item>
      </el-carousel>
    </div>

  </div>


</template>

<script>
import picture1 from '../assets/picture/01.jpg'
import picture2 from '../assets/picture/02.jpg'
import picture3 from '../assets/picture/03.jpg'


export default {
  name: "CarsImg",
  data(){
    return{
      items:[
        {
          id: 1,
          picture: picture1
        },
        {
          id: 2,
          picture: picture2
        },
        {
          id: 3,
          picture: picture3
        },
      ]
    }
  }

}



</script>

<style scoped>


</style>
