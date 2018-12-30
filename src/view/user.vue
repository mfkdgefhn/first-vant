<template>
  <div>
    <!-- 用户头部 -->
    <div class="header">
      <div class="header-left">
        <img src="../assets/images/s-3.jpg">
      </div>
      <div class="header-middle">
        <span class="span1">点击登录</span>
        <span class="span2">追剧大全-追剧党必备神器</span>
      </div>
      <div class="header-right">
        <van-icon name="arrow" />
      </div>
    </div>

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

    <!-- 列表 -->
    <div class="liebiao">
      <ul>
        <li v-for="item in users"
            :key="item.id">
          <van-icon class-prefix="iconfont"
                    :name="item.icon"
                    class="liebiao-left" />
          <span>{{item.name}}</span>
          <van-icon name="arrow"
                    class="liebiao-right" />
        </li>
      </ul>

      <!-- 设置 -->
      <div class="setup">
        <van-icon class-prefix="iconfont"
                  name="shezhi" />
        <span>设置</span>
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchBarFixed: false,
      name: ''
    }
  },
  computed: {
    navs () {
      return this.$store.state.navs
    },
    users () {
      return this.$store.state.users
    }
  },
  methods: {
    bulletMenu () {
      alert('弹窗口')
    }
  }
}
</script>

<style lang="scss" scoped>
// 头部
.header {
  width: 100%;
  height: 6.25rem;
  line-height: 6.25rem;
  background: rgb(76, 131, 250);
  // 左
  .header-left {
    float: left;
    width: 25%;
    height: 100%;
    img {
      width: 3.125rem;
      height: 3.125rem;
      border-radius: 50%;
      vertical-align: middle;
    }
  }
  // 中
  .header-middle {
    float: left;
    width: 50%;
    height: 100%;
    span {
      display: block;
      line-height: 1.25rem;
      float: left;
      margin-left: 0.625rem;
      color: #fff;
    }
    .span1 {
      margin-top: 1.875rem;
      font-size: 1rem;
    }
    .span2 {
      margin-bottom: 1.875rem;
      font-size: 0.5rem;
    }
  }
  // 右
  .header-right {
    float: left;
    width: 25%;
    height: 100%;
    .van-icon {
      color: #fff;
    }
  }
}
// 菜单
.ment {
  display: flex;

  .ment-left {
    flex: 0.9;
  }
  .ment-right {
    flex: 0.1;
    text-align: center;
    font-size: 0.875rem;
    font-weight: 700;
  }
}
.points {
  line-height: 2.75rem;
  font-weight: 600;
}
.isFixed {
  position: fixed;
  background-color: #fff;
  width: 100%;
  top: 0;
  z-index: 999;
}
// 列表
.liebiao {
  position: fixed;
  background: #eee;
  width: 100%;
  top: 12.1875rem;
  bottom: 3.125rem;
  ul {
    margin: 0.625rem 0;
    li {
      background: #fff;
      border-bottom: 1px solid #eee;
      height: 2.25rem;
      font-size: 0.75rem;
      .liebiao-left {
        float: left;
        margin-left: 10px;
        margin-top: 10px;
      }
      span {
        float: left;
        margin-top: 10px;
        margin-left: 10px;
      }
      .liebiao-right {
        float: right;
        margin: 10px;
      }
    }
  }
  .setup {
    background: #fff;
    width: 100%;
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: 0.625rem;
  }
}
</style>
