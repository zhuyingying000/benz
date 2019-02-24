<template>
  <div v-bind:class="{ active: isActive }">
    <div class="flex">
      <a v-for="item in linkData" v-bind:class="{gray: isGray}">
        {{item.name}}
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "FooterPage",
  data() {
    return {
      isActive: true,
      isGray: true,

      linkData: [
        {name: '梅赛德斯-奔驰版权所有'},
        {name: '网站地图'},
        {name: '隐私条款'},
        {name: '京icp备09046804号-2'},
        {name: '法律声明'},
        {name: '京公网安备11010502035702'},
        {name: '投诉电话'},

      ]
    }
  },
  mounted:function () {
axios.get('https://yesno.wtf/api/')
  .then(function( res){
    alert(JSON.stringify(res))
  })
  }


}
</script>

<style scoped>

  .active {
    background: #262626;
    height: 50px;
  }

  .gray {
    color: gray;
    font-size: 14px;
  }

  .flex {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1e1e1e;
  }

  .flex a {
    padding-right: 30px;
  }

  .flex a:hover {
    color: #1477ff;
  }
</style>`
