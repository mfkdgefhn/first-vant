<template>
  <div id="tv">
    <!-- 幻灯片 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="img in imagesH"
                      :key="img.id">
        <img :src="img.name"
             width="100%">
      </van-swipe-item>
    </van-swipe>

    <!-- 菜单 -->
    <div class="ment"
         id='ment'
         ref="reference"
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

    <!-- 用户 -->
    <div class="user">

    </div>

    <!-- 追剧列表 -->
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

  </div>
</template>

<script>
export default {
  data () {
    return {
      isFixed: true,
      searchBarFixed: false,
      orderScroll: 0
    }
  },
  computed: {
    // 头部菜单
    navs () {
      return this.$store.state.navs
    },
    // 幻灯片
    imagesH () {
      return this.$store.state.imagesH
    },
    // 影片列表
    imagesS () {
      return this.$store.state.imagesS
    },
    // 影片列表
    viders () {
      return this.$store.state.viders
    }
  },
  mounted () {
    // 页面加载好后，监听滚动事件
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    bulletMenu () {
      alert('弹窗口')
    },
    handleScroll () {
      if (this.orderScroll === 0) {
        this.orderScroll = this.$refs.reference.offsetTop
      }
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

      if (scrollTop > this.orderScroll) {
        this.searchBarFixed = true
      } else {
        this.searchBarFixed = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ment {
  display: flex;
}
.ment-left {
  flex: 0.9;
}
.ment-right {
  flex: 0.1;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 700;
}
.points {
  line-height: 2.75rem;
  font-weight: 600;
}
.user {
  width: 100%;
  height: 6.25rem;
}
.content {
  margin-bottom: 3.125rem;
}
.separate {
  margin: 0;
  border: 0rem;
  height: 0.625rem;
  background: #f1f4f8;
}
.quote {
  height: 1.5rem;
  border-left: 0.1875rem solid #ff4444;
  text-align: left;
  padding: 0 0 0 0.625rem;
}
.quote span {
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.5rem;
}
ul {
  width: 100%;
  display: flex;
  margin: 0 auto;
  // border: .0625rem solid #000;
}
ul li {
  flex: 0.3333333;
  margin: 0.3125rem;
  font-size: 0.75rem;
  text-align: left;
}
ul li img {
  border-radius: 0.3125rem;
  height: 9.9375rem;
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
