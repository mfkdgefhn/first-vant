import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import TV from '@/view/tv.vue'
import game from '@/view/game.vue'
import novel from '@/view/novel.vue'
import user from '@/view/user.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/tv',
      name: 'TV',
      component: TV
    },
    {
      path: '/game',
      name: 'game',
      component: game
    },
    {
      path: '/novel',
      name: 'novel',
      component: novel
    },
    {
      path: '/user',
      name: 'user',
      component: user
    }
  ]
})
