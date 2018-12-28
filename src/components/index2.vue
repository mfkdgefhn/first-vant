<template>
  <div>
    <van-nav-bar title="纸鹤视界"
                 left-text="返回"
                 right-text="按钮"
                 left-arrow
                 @click-left="onClickLeft"
                 @click-right="onClickRight" />
    <van-notice-bar text="这个是公告，目前就是一个公告。"
                    left-icon="volume-o"
                    v-if="newshow" />

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

    <!-- 影视列表 -->
    <div class="content">
      <div v-for="vider in viders"
           :key="vider.id">
        <!-- 换行 -->
        <hr class="separate">
        <!-- 全网热播 -->
        <div class="quote">
          <span>{{vider.title}}</span>
        </div>
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
    </div>

    <!-- 底部 -->
    <van-tabbar v-model="active">
      <van-tabbar-item v-for="item in tabbars"
                       :key="item.id"
                       :icon="item.icon"
                       :info="item.info==='0'? '' : item.info">{{item.title}}</van-tabbar-item>
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
      active: 0,
      orderScroll: 0,
      newshow: true
    }
  },

  mounted () {
    // 页面加载好后，监听滚动事件
    window.addEventListener('scroll', this.handleScroll)
  },

  methods: {
    // 如果滚运条大于顶部菜单，则将置顶标识searchBarFixed设为true
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var offsetTop = document.querySelector('#ment').offsetTop
      // console.log(scrollTop, offsetTop)
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
    },
    viders () {
      return this.$store.state.viders
    },
    tabbars () {
      return this.$store.state.tabbars
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
