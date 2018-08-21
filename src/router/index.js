import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import WindCondition from '@/components/WindCondition'
import AirCondition from '@/components/AirCondition'
import City from '@/components/City'

import Dressing from '@/components/Dressing'
import Sunshine from '@/components/Sunshine'
import Sports from '@/components/Sports'
import Health from '@/components/Health'
import Transport from '@/components/Transport'
import Entertainment from '@/components/Entertainment'
import MakeUp from '@/components/MakeUp'
import Cal from '@/components/Cal'

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
      path: '/Dressing',
      name: 'Dressing',
      component: Dressing
    },
    {
      path: '/Sunshine',
      name: 'Sunshine',
      component: Sunshine
    },
    {
      path: '/Sports',
      name: 'Sports',
      component: Sports
    },
    {
      path: '/Health',
      name: 'Health',
      component: Health
    },
    {
      path: '/Transport',
      name: 'Transport',
      component: Transport
    },
    {
      path:'/Entertainment',
      name: 'Entertainment',
      component: Entertainment
    },
    {
      path:'/MakeUp',
      name:'MakeUp',
      component:MakeUp
    },
    {
      path:'/City',
      name:'City',
      component:City
    },
    {
      path:'/Cal',
      name:'Cal',
      component:Cal
    }
  ]
})
