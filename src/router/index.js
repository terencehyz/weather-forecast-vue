import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import WindCondition from '@/components/WindCondition'
import AirCondition from '@/components/AirCondition'
import SunDial from '@/components/SunDial'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
      component:SunDial
    }
  ]
})
