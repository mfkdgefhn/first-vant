<template>
  <div>
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

