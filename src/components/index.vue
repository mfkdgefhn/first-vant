<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar title="纸鹤视界"
                 left-text="返回"
                 right-text="按钮"
                 left-arrow
                 @click-left="onClickLeft"
                 @click-right="onClickRight" />

    <!-- 内容区 -->
    <keep-alive>
      <router-view />
    </keep-alive>

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
      // Toast 这些都是在网上粘的别人的。但是找不到出处了，大佬见谅。
      function Toast (msg, duration) {
        duration = isNaN(duration) ? 3000 : duration
        var m = document.createElement('div')
        m.innerHTML = msg
        m.style.cssText = 'width: 60%;min-width: 150px;opacity: 0.7;height: 30px;color: rgb(255, 255, 255);line-height: 30px;text-align: center;border-radius: 5px;position: fixed;bottom: 70px;left: 20%;z-index: 999999;background: rgb(0, 0, 0);font-size: 12px;'
        document.body.appendChild(m)
        setTimeout(function () {
          var d = 0.5
          m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in'
          m.style.opacity = '0'
          setTimeout(function () { document.body.removeChild(m) }, d * 1000)
        }, duration)
      }
      var time = '' // 用来存上一次按键时间；
      setTimeout(() => {
        // 监听返回按钮
        document.addEventListener('backbutton', function (evt) {
          var url = location.hash.split('/')[1]
          if (url === 'home') { // 处于app首页,满足退出app操作
            if (new Date() - time < 2000) { // 小于2s,退出程序
              navigator.app.exitApp()
            } else { // 大于2s，重置时间戳，
              time = new Date()
              Toast('再次点击退出', 2000)
            }
          } else {
            history.back() // 不满足退出操作，，返回上一页
          }
        }, false)
      }, 10)
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

  },
  mounted () {
    document.addEventListener('backbutton', function () {
      // TODO 实现自己的后退逻辑
      console.log('你点击了返回键 ')
    }, false)
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
</style>
