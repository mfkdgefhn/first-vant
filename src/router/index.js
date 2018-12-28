import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import TV from '@/view/tv.vue'
import game from '@/view/game.vue'
import novel from '@/view/novel.vue'
import user from '@/view/user.vue'
import home from '@/view/home.vue'

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
          component: game
        }, {
          path: 'novel',
          component: novel
        }, {
          path: 'user',
          component: user
        }, {
          path: 'home',
          component: home
        }
      ]
    }

  ]
})
