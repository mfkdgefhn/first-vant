<template>
  <div>
    <van-tabs v-model="active"
              animated>
      <van-tab v-for="nav in navs"
               :key="nav.id"
               :title="nav.name">
        <router-view />
      </van-tab>
    </van-tabs>

    <!-- 菜单左 -->
    <van-tabs class="ment-left"
              @click="onClick">
      <van-tab v-for="nav in navs"
               :key=nav.id
               :title="nav.name">
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  },
  computed: {
    navs () {
      return this.$store.state.navs
    }
  },
  methods: {
    onClick () {
      console.log('1')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
