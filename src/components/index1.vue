<template>
  <div>
    <!-- 菜单 -->
    <!-- <div class="ment"
         id='ment'
         :class="searchBarFixed === true ? 'isFixed':''"> -->
    <!-- 菜单左 -->
    <van-tabs class="ment-left">
      <van-tab v-for="nav in navs"
               :key=nav.id
               :title="nav.name">
      </van-tab>
    </van-tabs>
    <!-- 菜单右 -->
    <!-- <div class="ment-right"
           @click="bulletMenu">
        <van-icon name="points"
                  class="points" />
      </div> -->
    <!-- </div> -->

  </div>
</template>

<script>
export default {
  data () {
    return {
      searchBarFixed: false
    }
  },
  computed: {
    navs () {
      return this.$store.state.navs
    }
  }
}
</script>

<style>
.van-tabs {
  position: fixed;
  width: 100%;
}
</style>
