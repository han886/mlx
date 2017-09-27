import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import travelHotPage from '@/components/travelHotPage'
import guidePage from '@/components/guidePage'
import travelRoutePage from '@/components/travelRoutePage'
import tavelHotDetail from '@/components/details/travel_hot_detail'
import tavelRouteDetail from '@/components/details/travel_route_detail'
import aboutCar from '@/components/about_car'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/hotPage',
      name: 'travelHotPage',
      component: travelHotPage
    },
    {
      path: '/guidePage',
      name: 'guidePage',
      component: guidePage
    },
    {
      path: '/travelRoutePage',
      name: 'travelRoutePage',
      component: travelRoutePage
    },
    {
      path: '/tavelHotDetail',
      name: 'tavelHotDetail',
      component: tavelHotDetail
    },
    {
      path: '/tavelRouteDetail',
      name: 'tavelRouteDetail',
      component: tavelRouteDetail
    },
    {
      path: '/aboutCar',
      name: 'aboutCar',
      component: aboutCar
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 }
  }
})

