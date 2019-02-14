import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/HomePage'
import CarType from '../components/CarType'
import BuyCarGuide from '../components/BuyCarGuide'
import CustomerService from '../components/CustomerService'
import MercedesMe from '../components/MercedesMe'
import MercedesAmg from '../components/MercedesAmg'



Vue.use(Router)
//定义路由
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }, {
      path: '/CarType',
      name: 'CarType',
      component:CarType
    },{
      path: '/BuyCarGuide',
      name: 'BuyCarGuide',
      component:BuyCarGuide
    },{
      path: '/CustomerService',
      name: 'CustomerService',
      component:CustomerService
    },{
      path: '/MercedesMe',
      name: 'MercedesMe',
      component:MercedesMe
    },{
      path: '/MercedesAmg',
      name: 'MercedesAmg',
      component:MercedesAmg
    },





  ]

})
