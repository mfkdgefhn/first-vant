<template>
  <div id="home">
    <!-- 公告 -->
    <van-notice-bar text="这个是公告，目前就是一个公告。能够滚动的广告，10秒后自动关闭的广告！！！"
                    left-icon="volume-o"
                    v-if="newshow" />
    <!-- 菜单 -->
    <div class="ment"
         id='ment'
         ref="reference"
         :class="searchBarFixed === true ? 'isFixed':''">
      <!-- 菜单左 -->
      <van-tabs class="ment-left"
                @click="onClick">
        <van-tab v-for="nav in navs"
                 :key=nav.id
                 :title="nav.name"
                 animated
                 swipeable
                 sticky>
        </van-tab>
      </van-tabs>
      <!-- 菜单右 -->
      <div class="ment-right"
           @click="bulletMenu">
        <van-icon name="points"
                  class="points" />
      </div>
    </div>

    <router-view></router-view>

  </div>
</template>

<script>
export default {
  data () {
    return {
      searchBarFixed: false,
      newshow: true,
      orderScroll: 0
    }
  },
  mounted () {
    // 10秒后自动关闭公告
    let _this = this
    setTimeout(function () {
      _this.newshow = false
    }, 10000)

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
    },
    onClick (index, title) {
      console.log(index + ' ' + title)
      let path = this.navs[index].path
      this.$router.push(path)
    }
  },
  computed: {
    // 头部菜单
    navs () {
      return this.$store.state.navs
    },
    // 影片列表
    viders () {
      return this.$store.state.viders
    }
  }
}
</script>

<style lang="scss" scoped>
// 公告
.van-notice-bar {
  height: 1.5rem;
}
//菜单
.ment {
  display: flex;
}
.isFixed {
  position: fixed;
  background-color: #fff;
  width: 100%;
  top: 0;
  z-index: 999;
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
</style>
