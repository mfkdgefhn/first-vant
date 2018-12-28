<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item>
        <span>自定义</span>
        <img slot="icon"
             slot-scope="props"
             :src="icon.normal">

      </van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      icon: {
        normal: '&#xe605;'
      }
    }
  }
}
</script>
