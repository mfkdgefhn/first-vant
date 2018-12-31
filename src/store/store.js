import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 顶部菜单
    navs: [
      { id: 1, name: '推荐', path: '/home/hot', component: '<v-hot></v-hot>' },
      // { id: 2, name: '电影', path: '/home/film', component: '<v-film></v-film>' },
      // { id: 3, name: '动漫', path: '/home/comic', component: '<v-comic></v-comic>' },
      { id: 4, name: '国剧', path: '/home/DomesticDrama', component: '<v-domestic-drama></v-domestic-drama>' },
      { id: 5, name: '韩剧', path: '/home/KoreanDrama', component: '<v-koreandrama></v-koreandrama>' },
      { id: 6, name: '日剧', path: '/home/JapaneseDrama', component: '<v-japanese-drama></v-japanese-drama>' },
      { id: 7, name: '美剧', path: '/home/UsaDrama', component: '<v-usa-drama></v-usa-drama>' }
      // { id: 8, name: '综艺', path: '/home/Variety', component: '<v-variety></v-variety>' },
      // { id: 9, name: '其他', path: '/home/Other', component: '<v-other></v-other>' }
    ],
    // 幻灯片
    imagesH: [{
      id: 1, name: require('../assets/images/h-1.jpg')
    }, {
      id: 2, name: require('../assets/images/h-2.jpg')
    }, {
      id: 3, name: require('../assets/images/h-3.jpg')
    }],
    // 影片图片列表
    imagesS: [
      { id: 1, img: require('../assets/images/s-1.jpg'), title: '影片1', remarks: '影片详情信息' },
      { id: 2, img: require('../assets/images/s-2.jpg'), title: '影片2', remarks: '影片详情信息' },
      { id: 3, img: require('../assets/images/s-3.jpg'), title: '影片3', remarks: '影片详情信息' }
    ],
    // 中间菜单
    navsItem: [
      { id: 1, name: '童年回忆' },
      { id: 2, name: '最萌年龄差CP' },
      { id: 3, name: '人妖情未了' }
    ],

    // 国产主题
    viders: [
      {
        // 国产
        domesticDramas: [
          { id: 1, title: '全网热播' },
          { id: 2, title: '新鲜网络剧' },
          { id: 3, title: '国剧正当时' },
          { id: 4, title: '港台值得追' },
          { id: 5, title: '私享片单' },
          { id: 6, title: '国产电影' },
          { id: 7, title: '国产综艺' },
          { id: 8, title: '仙侠玄幻' },
          { id: 9, title: '虐恋情深' },
          { id: 10, title: '甜蜜互宠' },
          { id: 11, title: '悬疑推理' },
          { id: 12, title: '青涩校园' },
          { id: 13, title: '都市职场' },
          { id: 14, title: '宫廷斗争' },
          { id: 15, title: '快意江湖' }
        ]
      }, {
        // 韩国主题
        koreanDramas: [
          { id: 1, title: '新剧思密达' },
          { id: 2, title: '本月人气榜' },
          { id: 3, title: '殿堂级经典' },
          { id: 4, title: '本周韩星-花样男子李敏镐' },
          { id: 5, title: '私享片单-韩星门面担当' },
          { id: 6, title: '韩国电影' },
          { id: 7, title: '韩国综艺' },
          { id: 8, title: '花痴偶像在这里' },
          { id: 9, title: '翘课也要谈恋爱' },
          { id: 10, title: '编剧大神金恩淑' },
          { id: 11, title: '颜值高好会撩' },
          { id: 12, title: '泪目好剧' },
          { id: 13, title: '青春大爆炸' },
          { id: 14, title: '温情碎碎念' },
          { id: 15, title: '都市情感' }
        ]
      }
    ],
    // 底部菜单
    tabbars: [
      { id: 1, icon: 'shouye', info: '0', title: '首页', to: '/' },
      { id: 2, icon: 'dianshiju', info: '0', title: '追剧', to: '/TV' },
      // { id: 3, icon: require('../assets/images/youxi.png'), info: '5', title: '游戏' },
      { id: 3, icon: 'youxi', info: '0', title: '游戏', to: '/game' },
      { id: 4, icon: 'xiaoshuo', info: '0', title: '小说', to: '/novel' },
      { id: 5, icon: 'wode', info: '0', title: '我的', to: '/user' }
    ],

    // 用户
    users: [
      { id: 1, icon: 'jilu', name: '观看记录', iconright: 'arrow' },
      { id: 2, icon: 'fankui', name: '用户反馈', iconright: 'arrow' },
      { id: 3, icon: 'touping', name: '投屏教程', iconright: 'arrow' },
      { id: 4, icon: 'falvshengming', name: '免责声明', iconright: 'arrow' }
    ],
    states: 'turn-on'
  },
  getters: {

    getNavs (state) {
      return state.navs
    }
  },
  mutations: {

    setTransistion (state, states) {
      state.states = states
    }
  }
})
