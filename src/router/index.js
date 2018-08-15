import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import WindCondition from '@/components/WindCondition'
import AirCondition from '@/components/AirCondition'
import LifeData from '@/components/LifeData'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/AirCondition',
      name: 'AirCondition',
      component: AirCondition
    },
    {
      path: '/WindCondition',
      name: 'WindCondition',
      component: WindCondition
    },
    {
      path:'/test',
      component:LifeData
    }
  ]
})
