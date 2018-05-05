<template>
<div class="div-swiper">


    <swiper :options='swiperOption' ref="mySwiper" >
    <!-- slides -->
    <swiper-slide v-for='item in imgList'>
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
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop:true,      //意思是增加循环
      },
      imgList: [{
          id:'img1',
          url:'https://img1.qunarzz.com/vc/c4/b7/c7/09c7b3fd2cea88ebaa594d1fb8.jpg'
      },
      {
          id:'img2',
          url:'https://img1.qunarzz.com/vc/54/d2/26/f1ea962ca736a76b80f3b67ddc.jpg'
      },
      {
          id:'img3',
          url:'https://img1.qunarzz.com/vc/56/c2/bc/94cd92692289c78770403648b5.jpg'
      },{
          id:'img4',
          url:'https://img1.qunarzz.com/vc/ae/36/6e/8dd68dfb2e7cc35a7e9d4d9552.jpg'
      }]
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

