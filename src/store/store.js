import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 顶部菜单
    navs: [
      { id: 1, name: '推荐' },
      { id: 2, name: '电影' },
      { id: 3, name: '动漫' },
      { id: 4, name: '国剧' },
      { id: 5, name: '韩剧' },
      { id: 6, name: '日剧' },
      { id: 7, name: '美剧' },
      { id: 8, name: '综艺' },
      { id: 9, name: '其他' }],
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
    // 影片标题
    viders: [
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
    states: 'turn-on'
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,

    setTransistion (state, states) {
      state.states = states
    }
  }
})
