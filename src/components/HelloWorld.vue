<template>
  <div>
    <home-hander></home-hander>
    <hello-swiper></hello-swiper>
    <hello-classify></hello-classify>
    <div class="fenge"></div>
  </div>
</template>

<script>
import HomeHander from "./homeHander";
import HelloSwiper from './helloSwiper';
import HelloClassify from'./helloClassify';
export default {
  name: "HelloWorld",
  //引入组件
  components: {
    HomeHander,
    HelloSwiper,
    HelloClassify,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fenge{
    margin:0 auto;
    width:90%;
    height:.1rem;
    border-bottom:solid 0.01rem #e2e2e2;
  }
</style>
