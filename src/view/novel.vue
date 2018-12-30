<template>
  <div>
    <div id="box">
      <div class="inner">1</div>
      <div class="inner">2</div>
      <div class="inner">3</div>
      <div class="inner">4</div>
      <div class="inner">5</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
#box {
  display: flex;
  justify-content: space-around;
}
.inner {
  width: 100px;
  height: 100px;
  background: #8a4182;
  margin: 10px;
}
</style>
