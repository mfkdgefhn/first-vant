<template>
  <div>
    <van-tabs v-model="active"
              animated
              swipeable>
      <van-tab v-for="nav in navs"
               :key="nav.id"
               :title="nav.name">
        <v-hot v-if="active===0"></v-hot>
        <v-film v-else-if="active===1"></v-film>
        <v-comic v-else-if="active===2"></v-comic>
        <v-domestic-drama v-else-if="active===3"></v-domestic-drama>
        <v-korean-drama v-else-if="active===4"></v-korean-drama>
        <v-japanese-drama v-else-if="active===5"></v-japanese-drama>
        <v-usa-drama v-else-if="active===6"></v-usa-drama>
        <v-variety v-else-if="active===7"></v-variety>
        <v-other v-else></v-other>
        <!-- {{index}} -->
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
import vHot from './home/hot.vue'
import vComic from './home/comic.vue'
import vFilm from './home/film.vue'
import vDomesticDrama from './home/domesticDrama.vue'
import vKoreanDrama from './home/KoreanDrama.vue'
import vJapaneseDrama from './home/JapaneseDrama.vue'
import vUsaDrama from './home/UsaDrama.vue'
import vVariety from './home/Variety.vue'
import vOther from './home/Other.vue'

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
  },
  components: {
    vHot, vComic, vFilm, vDomesticDrama, vKoreanDrama, vJapaneseDrama, vUsaDrama, vVariety, vOther
  }
}
</script>

<style lang="scss" scoped>
</style>
