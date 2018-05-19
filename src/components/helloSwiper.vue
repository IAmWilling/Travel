<template>
<div class="div-swiper">


    <swiper :options='swiperOption' ref="mySwiper" v-if="List.length">
    <!-- slides -->
    <swiper-slide v-for='item in List'>
        <img class="swiper-img" :src="item.url" alt="" :key='item.id'>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>
<script>
export default {
  name: "HelloSwiper",
  props:{
      List:Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop:true,      //意思是增加循环
      },
    };
  }
};
</script>
<style lang="stylus" scoped>
.div-swiper >>> .swiper-pagination-bullet-active { // 表示只要div-swiper中子组件出现此class就进行样式增加 <<<具有穿透意义
    background: #fff;
}

.swiper-img {
    width: 100%;
    height: 9.6rem;
}
</style>

