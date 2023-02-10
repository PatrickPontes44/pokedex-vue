import { Home, StarterPokemonPage } from '../pages/index'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
      {
        name:"VueDex",
        path:"/",
        component: Home,
        props:true,
      },
      {
        path:"/my-starter",
        component: StarterPokemonPage,
        props:true,
        name:"VueDex - My Starter",
      },
      {
        path: '/:pathMatch(.*)*',
        redirect: { name: 'VueDex' },
      },
  ],
})
router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router
