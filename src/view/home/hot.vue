<template>
  <div>
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

    <!-- 菜单 -->
    <div>
      <ul class="middle-navs">
        <li v-for="item in navsItem"
            :key="item.id">
          {{item.name}}
        </li>
      </ul>

    </div>

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
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      icon: '\ue604  搜你想看',
      active: 0
    }
  },
  computed: {
    // 幻灯片
    imagesH () {
      return this.$store.state.imagesH
    },
    // 影片标题
    viders () {
      return this.$store.state.viders
    },
    // 影片列表
    imagesS () {
      return this.$store.state.imagesS
    },
    navsItem () {
      return this.$store.state.navsItem
    }

  }
}
</script>

<style lang="scss" scoped>
// 搜索
.select {
  display: flex;
  margin-top: 0.125rem;
}
.van-search {
  flex: 0.8;
  padding: 0;
  // border: 0.0625rem solid #000;
}
.van-search .van-cell {
  // border-radius: 1.375rem;
  padding: 0;
  background: rgb(158, 158, 158);
}
.search-right {
  flex: 0.2;
  background: #f1f4f8;
  border-radius: 1.375rem;
  height: 1.5rem;
  margin: 0.1875rem 0rem;
  margin-right: 0.5rem;
}
.search-right span {
  color: #969799;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5rem;
}
#select-search {
  border: 0.0625rem solid #000;
}
// 幻灯片
.van-swipe {
  margin-top: 0.625rem;
  height: 11.25rem;
}
// 间隔
.van-row {
  margin-top: 0.625rem;
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
.van-col {
  border: 0.0625rem solid #000;
}
//中间菜单
.middle-navs {
  height: 1.25rem;
  line-height: 1.25rem;
  background: #fff;
  li {
    width: 30%;
    border: 1px solid #000;
  }
}
// 影片列表
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
.content {
  margin-bottom: 3.125rem;
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
</style>

<style>
#select-search {
  background: #f1f4f8;
  border-radius: 1.375rem;
  font-family: "iconfont";
}
.van-search .van-cell__left-icon {
  display: none;
}
</style>
