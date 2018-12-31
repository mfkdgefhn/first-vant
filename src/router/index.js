import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import TV from '@/view/tv.vue'
import Game from '@/view/game.vue'
import Novel from '@/view/novel.vue'
import User from '@/view/user.vue'
import Home from '@/view/home.vue'
import Hot from '@/view/home/hot.vue'
import Film from '@/view/home/film.vue'
import Comic from '@/view/home/comic.vue'
import DomesticDrama from '@/view/home/domesticDrama.vue'
import KoreanDrama from '@/view/home/KoreanDrama.vue'
import JapaneseDrama from '@/view/home/JapaneseDrama.vue'
import UsaDrama from '@/view/home/UsaDrama.vue'
import Variety from '@/view/home/Variety.vue'
import Other from '@/view/home/Other.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: '主页'
    },
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
          component: Home,
          redirect: '/home/hot',
          children: [
            {
              path: 'hot',
              component: Hot
            }, {
              path: 'film',
              component: Film
            }, {
              path: 'comic',
              component: Comic
            }, {
              path: 'DomesticDrama',
              component: DomesticDrama
            }, {
              path: 'KoreanDrama',
              component: KoreanDrama
            }, {
              path: 'JapaneseDrama',
              component: JapaneseDrama
            }, {
              path: 'UsaDrama',
              component: UsaDrama
            }, {
              path: 'Variety',
              component: Variety
            }, {
              path: 'Other',
              component: Other
            }
          ]
        }
      ]
    }

  ]
})
