import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
    imagesH: [{
      id: 1, name: require('../assets/images/h-1.jpg')
    }, {
      id: 2, name: require('../assets/images/h-2.jpg')
    }, {
      id: 3, name: require('../assets/images/h-3.jpg')
    }],
    imagesS: [
      { id: 1, img: require('../assets/images/s-1.jpg'), title: '影片1', remarks: '影片详情信息' },
      { id: 2, img: require('../assets/images/s-2.jpg'), title: '影片2', remarks: '影片详情信息' },
      { id: 3, img: require('../assets/images/s-3.jpg'), title: '影片3', remarks: '影片详情信息' }
    ]
  }
  // mutations: {
  //   increment: state => state.count++,
  //   decrement: state => state.count--
  // }
})
