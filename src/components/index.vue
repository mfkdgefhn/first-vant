<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar title="纸鹤视界"
                 left-text="返回"
                 right-text="按钮"
                 left-arrow
                 @click-left="onClickLeft"
                 @click-right="onClickRight" />

    <!-- 过渡动画 -->
    <!-- <transition :name="$store.state.states"> -->
    <keep-alive>
      <router-view />
    </keep-alive>
    <!-- </transition> -->

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

export default {
  data () {
    return {
      activeKey: 0,
      active: 0
      // transitionName: 'slide-right' // 默认动态路由变化为slide-right
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
    // clickLink () {
    //   this.$store.commit('setTransition', 'turn-on')
    // }
  },
  computed: {
    // 底部菜单
    tabbars () {
      return this.$store.state.tabbars
    }
  },
  // watch: {
  //   '$route' (to, from) {
  //     let isBack = this.$router.isBack //  监听路由变化时的状态为前进还是后退
  //     if (isBack) {
  //       this.transitionName = 'slide-right'
  //     } else {
  //       this.transitionName = 'slide-left'
  //     }
  //     this.$router.isBack = false
  //   }
  // }
  watch: {
    // '$route' (to, from) {
    //   const toDepth = to.path.split('/').length
    //   const fromDepth = from.path.split('/').length
    //   this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    // }
  },
  mounted () {
    var _this = this
    window.addEventListener(
      'popstate',
      function (e) {
        _this.$store.commit('setTransition', 'turn-off')
      },
      false
    )
  }
}
</script>

<style lang="scss" scoped>
.iconfont {
  font-size: 1.125rem;
}
</style>

<style>
.Router {
  position: absolute;
  width: 100%;
  transition: all 0.8s ease;
  top: 2.875rem;
}
.turn-on-enter {
  transform: translate3d(100%, 0, 0);
}
/* .turn-on-leave-to {
  transform: translate3d(-20%, 0, 0);
} */
.turn-on-enter-active,
.turn-on-leave-active {
  transition: transform 0.4s ease;
}
/* .turn-off-enter {
   transform: translate3d(-20%, 0, 0);
} */
.turn-off-leave-to {
  transform: translate3d(100%, 0, 0);
}
.turn-off-enter-active,
.turn-off-leave-active {
  transition: transform 0.4s ease;
}
.turn-off-leave-active {
  z-index: -2;
}
</style>
