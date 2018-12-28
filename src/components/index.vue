<template>
  <div>
    <van-nav-bar title="纸鹤视界"
                 left-text="返回"
                 right-text="按钮"
                 left-arrow
                 @click-left="onClickLeft"
                 @click-right="onClickRight" />
    <van-notice-bar text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"
                    left-icon="volume-o" />

    <!-- 菜单 -->
    <div class="ment"
         id='ment'
         :class="searchBarFixed === true ? 'isFixed':''">
      <!-- 菜单左 -->
      <van-tabs class="ment-left">
        <van-tab v-for="nav in navs"
                 :key=nav.id
                 :title="nav.name">
        </van-tab>
      </van-tabs>
      <!-- 菜单右 -->
      <div class="ment-right"
           @click="bulletMenu">
        <van-icon name="points"
                  class="points" />
      </div>
    </div>

    <!-- 搜索 -->
    <div class="select">
      <van-search :placeholder="icon"
                  v-model="value"
                  background="#fff"
                  id="select-search"
                  input-align="center" />

      <div class="search-right"><span>片库</span></div>
    </div>

    <!-- 幻灯片 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="img in imagesH"
                      :key="img.id">
        <img :src="img.name"
             width="100%">
      </van-swipe-item>
    </van-swipe>

    <hr class="separate">

    <div class="content">
      <!-- 全网热播 -->
      <div class="quote">
        <span>全网热播</span>
      </div>

      <!-- 影视列表 -->
      <ul>
        <li v-for="item in imagesS"
            :key="item.id">
          <img :src="item.img"
               style="width:100%;" />
          <span>
            {{item.title}}
          </span>
          <span class="span-remarks">
            {{item.remarks}}
          </span>
        </li>
      </ul>

      <hr class="separate">
      <!-- 新鲜网络剧 -->
      <div class="quote">
        <span>新鲜网络剧</span>
      </div>
      <!-- 影视列表 -->
      <ul>
        <li v-for="item in imagesS"
            :key="item.id">
          <img :src="item.img"
               style="width:100%;" />
          <span>
            {{item.title}}
          </span>
          <span class="span-remarks">
            {{item.remarks}}
          </span>
        </li>
      </ul>

      <hr class="separate">
      <!-- 国剧正当时 -->
      <div class="quote">
        <span>国剧正当时</span>
      </div>
      <!-- 影视列表 -->
      <ul>
        <li v-for="item in imagesS"
            :key="item.id">
          <img :src="item.img"
               style="width:100%;" />
          <span>
            {{item.title}}
          </span>
          <span class="span-remarks">
            {{item.remarks}}
          </span>
        </li>
      </ul>

      <hr class="separate">
      <!-- 港台值得追 -->
      <div class="quote">
        <span>港台值得追</span>
      </div>
      <!-- 影视列表 -->
      <ul>
        <li v-for="item in imagesS"
            :key="item.id">
          <img :src="item.img"
               style="width:100%;" />
          <span>
            {{item.title}}
          </span>
          <span class="span-remarks">
            {{item.remarks}}
          </span>
        </li>
      </ul>

      <hr class="separate">
      <!-- 私享片单 -->
      <div class="quote">
        <span>私享片单</span>
      </div>
      <!-- 影视列表 -->
      <ul>
        <li v-for="item in imagesS"
            :key="item.id">
          <img :src="item.img"
               style="width:100%;" />
          <span>
            {{item.title}}
          </span>
          <span class="span-remarks">
            {{item.remarks}}
          </span>
        </li>
      </ul>

      <hr class="separate">
      <!-- 国产电影 -->
      <div class="quote">
        <span>国产电影</span>
      </div>
      <!-- 影视列表 -->
      <ul>
        <li v-for="item in imagesS"
            :key="item.id">
          <img :src="item.img"
               style="width:100%;" />
          <span>
            {{item.title}}
          </span>
          <span class="span-remarks">
            {{item.remarks}}
          </span>
        </li>
      </ul>

      <hr class="separate">
      <!-- 国产综艺 -->
      <div class="quote">
        <span>国产综艺</span>
      </div>
      <!-- 影视列表 -->
      <ul>
        <li v-for="item in imagesS"
            :key="item.id">
          <img :src="item.img"
               style="width:100%;" />
          <span>
            {{item.title}}
          </span>
          <span class="span-remarks">
            {{item.remarks}}
          </span>
        </li>
      </ul>

      <hr class="separate">
      <!-- 仙侠玄幻 -->
      <div class="quote">
        <span>仙侠玄幻</span>
      </div>
      <!-- 影视列表 -->
      <ul>
        <li v-for="item in imagesS"
            :key="item.id">
          <img :src="item.img"
               style="width:100%;" />
          <span>
            {{item.title}}
          </span>
          <span class="span-remarks">
            {{item.remarks}}
          </span>
        </li>
      </ul>

      <hr class="separate">
      <!-- 虐恋情深 -->
      <div class="quote">
        <span>虐恋情深</span>
      </div>
      <!-- 影视列表 -->
      <ul>
        <li v-for="item in imagesS"
            :key="item.id">
          <img :src="item.img"
               style="width:100%;" />
          <span>
            {{item.title}}
          </span>
          <span class="span-remarks">
            {{item.remarks}}
          </span>
        </li>
      </ul>

      <hr class="separate">
      <!-- 甜蜜互宠 -->
      <div class="quote">
        <span>甜蜜互宠</span>
      </div>
      <!-- 影视列表 -->
      <ul>
        <li v-for="item in imagesS"
            :key="item.id">
          <img :src="item.img"
               style="width:100%;" />
          <span>
            {{item.title}}
          </span>
          <span class="span-remarks">
            {{item.remarks}}
          </span>
        </li>
      </ul>

      <hr class="separate">
      <!-- 悬疑推理 -->
      <div class="quote">
        <span>悬疑推理</span>
      </div>
      <!-- 影视列表 -->
      <ul>
        <li v-for="item in imagesS"
            :key="item.id">
          <img :src="item.img"
               style="width:100%;" />
          <span>
            {{item.title}}
          </span>
          <span class="span-remarks">
            {{item.remarks}}
          </span>
        </li>
      </ul>

      <hr class="separate">
      <!-- 青涩校园 -->
      <div class="quote">
        <span>青涩校园</span>
      </div>
      <!-- 影视列表 -->
      <ul>
        <li v-for="item in imagesS"
            :key="item.id">
          <img :src="item.img"
               style="width:100%;" />
          <span>
            {{item.title}}
          </span>
          <span class="span-remarks">
            {{item.remarks}}
          </span>
        </li>
      </ul>

      <hr class="separate">
      <!-- 都市职场 -->
      <div class="quote">
        <span>青涩校园</span>
      </div>
      <!-- 都市职场 -->
      <ul>
        <li v-for="item in imagesS"
            :key="item.id">
          <img :src="item.img"
               style="width:100%;" />
          <span>
            {{item.title}}
          </span>
          <span class="span-remarks">
            {{item.remarks}}
          </span>
        </li>
      </ul>

      <hr class="separate">
      <!-- 宫廷斗争 -->
      <div class="quote">
        <span>宫廷斗争</span>
      </div>
      <!-- 都市职场 -->
      <ul>
        <li v-for="item in imagesS"
            :key="item.id">
          <img :src="item.img"
               style="width:100%;" />
          <span>
            {{item.title}}
          </span>
          <span class="span-remarks">
            {{item.remarks}}
          </span>
        </li>
      </ul>

      <hr class="separate">
      <!-- 快意江湖 -->
      <div class="quote">
        <span>快意江湖</span>
      </div>
      <!-- 都市职场 -->
      <ul>
        <li v-for="item in imagesS"
            :key="item.id">
          <img :src="item.img"
               style="width:100%;" />
          <span>
            {{item.title}}
          </span>
          <span class="span-remarks">
            {{item.remarks}}
          </span>
        </li>
      </ul>
    </div>

    <!-- 底部 -->
    <van-tabbar v-model="active">
      <van-tabbar-item v-for="item in tabbar"
                       :key="item.id"
                       :icon="item.icon"
                       :info="tabbar.info==='0'? dot : tabbar.info">{{item.title}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// import Swiper from 'swiper'

export default {
  data () {
    return {
      value: '',
      searchBarFixed: false,
      icon: '\ue604  搜你想看',
      activeKey: 0,
      items: [
        { id: 1, img: require('../assets/images/s-1.jpg'), title: '影片1', remarks: '影片详情信息' },
        { id: 2, img: require('../assets/images/s-2.jpg'), title: '影片2', remarks: '影片详情信息' },
        { id: 3, img: require('../assets/images/s-3.jpg'), title: '影片3', remarks: '影片详情信息' }
      ],
      active: 0,
      tabbar: [
        { id: 1, icon: 'home-o', info: '0', title: '首页' },
        { id: 2, icon: 'search', info: '0', title: '搜索' },
        { id: 3, icon: 'freinds-o', info: '5', title: '通知' },
        { id: 4, icon: 'setting-o', info: '20', title: '设置' }
      ],
      orderScroll: 0
    }
  },

  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

      var offsetTop = document.querySelector('#ment').offsetTop
      console.log(scrollTop, offsetTop)
      if (scrollTop > offsetTop) {
        this.searchBarFixed = true
      } else {
        this.searchBarFixed = false
      }
    },
    onClickLeft () {
      alert('返回')
    },
    onClickRight () {
      alert('按钮')
    },
    bulletMenu () {
      alert('弹窗口')
    },
    onSearch () {
      if (this.value === '') {
        alert('请输入值')
      } else {
        alert('你输入了' + this.value)
      }
    }
  },
  computed: {
    navs () {
      return this.$store.state.navs
    },
    imagesH () {
      return this.$store.state.imagesH
    },
    imagesS () {
      return this.$store.state.imagesS
    }
  },
  watch: {

  }
}
</script>

<style scoped>
html {
  font-size: 12px;
}

.van-notice-bar {
  height: 18px;
}
.content {
  margin-bottom: 50px;
}
.ment {
  display: flex;
}
.ment-left {
  flex: 0.9;
}
.ment-right {
  flex: 0.1;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
}
.points {
  line-height: 44px;
  font-weight: 600;
}
.select {
  display: flex;
  margin-top: 2px;
}
.van-search {
  flex: 0.8;
  padding: 0;
  /* border: 1px solid #000; */
}
.van-search .van-cell {
  /* border-radius: 22px; */
  padding: 0;
  background: rgb(158, 158, 158);
}
.search-right {
  flex: 0.2;
  background: #f1f4f8;
  border-radius: 22px;
  height: 24px;
  margin: 3px 0px;
  margin-right: 8px;
}
.search-right span {
  color: #969799;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
}
#select-search {
  border: 1px solid #000;
}
.van-swipe {
  margin-top: 10px;
  height: 180px;
}
.van-row {
  margin-top: 10px;
}
.separate {
  margin: 0;
  border: 0px;
  height: 10px;
  background: #f1f4f8;
}
.quote {
  height: 24px;
  border-left: 3px solid #ff4444;
  text-align: left;
  padding: 0 0 0 10px;
}
.quote span {
  font-size: 12px;
  font-weight: 500;
  line-height: 24px;
}
.van-col {
  border: 1px solid #000;
}
ul {
  width: 100%;
  display: flex;
  margin: 0 auto;
  /* border: 1px solid #000; */
}
ul li {
  flex: 0.3333333;
  margin: 5px;
  font-size: 12px;
  text-align: left;
}
ul li img {
  border-radius: 5px;
  height: 159px;
}
ul li span {
  display: block;
}
.span-remarks {
  color: rgba(44, 62, 80, 0.5);
}
.isFixed {
  position: fixed;
  background-color: #fff;
  width: 100%;
  top: 0;
  z-index: 999;
}
</style>

<style>
#select-search {
  background: #f1f4f8;
  border-radius: 22px;
  font-family: "iconfont";
}
.van-search .van-cell__left-icon {
  display: none;
}
</style>
