<template>
  <div>
    <van-nav-bar title="纸鹤视界"
                 left-text="返回"
                 right-text="按钮"
                 left-arrow
                 @click-left="onClickLeft"
                 @click-right="onClickRight" />
    <!-- 菜单 -->
    <div class="ment">
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
      <van-swipe-item v-for="img in images"
                      :key="img.id">
        <img :src="img.name"
             width="100%">
      </van-swipe-item>
    </van-swipe>

    <hr class="separate">

    <!-- 全网热播 -->
    <div class="quote">
      <span>全网热播</span>
    </div>

    <!-- 影视列表 -->
    <van-row type="flex"
             justify="space-around">
      <van-col span="6"><img src="../assets/images/s-1.jpg"
             style="width:100%"
             alt=""></van-col>
      <van-col span="6"><img src="../assets/images/s-2.jpg"
             style="width:100%"
             alt=""></van-col>
      <van-col span="6"><img src="../assets/images/s-3.jpg"
             style="width:100%"
             alt=""></van-col>
    </van-row>

    <div></div>

  </div>
</template>

<script>
// import Swiper from 'swiper'

export default {
  data () {
    return {
      value: '',
      icon: '\ue604  搜你想看',
      activeKey: 0
    }
  },

  mounted () {

  },
  methods: {
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
    images () {
      return this.$store.state.images
    }
  }
}
</script>

<style scoped>
.ment {
  display: flex;
}
.ment-left {
  flex: 0.9;
}
.ment-right {
  flex: 0.1;
  text-align: center;
}
.points {
  line-height: 44px;
  font-weight: 600;
}
.select {
  display: flex;
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
