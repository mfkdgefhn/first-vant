<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar title="纸鹤视界"
                 left-text="返回"
                 right-text="按钮"
                 left-arrow
                 @click-left="onClickLeft"
                 @click-right="onClickRight" />

    <!-- 公告 -->
    <van-notice-bar text="这个是公告，目前就是一个公告。"
                    left-icon="volume-o"
                    v-if="newshow" />

    <!-- 过渡动画 -->
    <transition :name="transitionName">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>

    <!-- 底部 -->
    <van-tabbar v-model="active">
      <van-tabbar-item v-for="item in tabbars"
                       :key="item.id"
                       :icon="item.icon"
                       :to="item.to"
                       :info="item.info==='0'? '' : item.info">{{item.title}}
        <div slot="icon">
          <van-icon class-prefix="iconfont"
                    :name="item.icon" />
        </div>
      </van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script>
// import Swiper from 'swiper'

export default {
  data () {
    return {
      activeKey: 0,
      active: 0,
      newshow: true,
      transitionName: '0'
    }
  },

  methods: {
    onClickLeft () {
      alert('返回')
    },
    onClickRight () {
      alert('按钮')
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
    // 底部菜单
    tabbars () {
      return this.$store.state.tabbars
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style lang="scss" scoped>
.iconfont {
  font-size: 1.125rem;
}
.van-notice-bar {
  height: 1.125rem;
}
</style>
