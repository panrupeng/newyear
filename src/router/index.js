import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Menu from '@/components/Menu'
import Activity from '@/components/Activity'
import talkOne from '@/components/talkOne'
import talkTwo from '@/components/talkTwo'
import Vote from '@/components/Vote'
import Detailed from '@/components/Detailed'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },{
      path:'/menu',
      name: 'menus',
      component:Menu
    },{
      path:'/activity',
      name:'activity',
      component:Activity
    },{
      path:'/talkOne',
      name:'talkOne',
      component:talkOne
    },{
      path:'/talkTwo',
      name:'talkTwo',
      component:talkTwo
    },{
      path:'/Vote',
      name:'Vote',
      component:Vote
    }
    ,{
      path:'/Detailed/:id',
      name:'Detailed',
      component:Detailed
    }
  ]
})
