import { Home, Test } from '../pages/index'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
      {
        name:"index",
        path:"/",
        component: Home,
        props:true,
      },
      {
        path:"/test",
        component: Test,
        props:true,
      },
      {
        path: '/:pathMatch(.*)*',
        redirect: { name: 'Home' },
      },
  ],
})

export default router