import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import TV from '@/view/tv.vue'
import Game from '@/view/game.vue'
import Novel from '@/view/novel.vue'
import User from '@/view/user.vue'
import Home from '@/view/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: 'tv',
          component: TV
        }, {
          path: 'game',
          component: Game
        }, {
          path: 'novel',
          component: Novel
        }, {
          path: 'user',
          component: User
        }, {
          path: 'home',
          component: Home
        }
      ]
    }

  ]
})
