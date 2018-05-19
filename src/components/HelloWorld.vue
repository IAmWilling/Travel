<template>
  <div>
    <home-hander></home-hander>
    <hello-swiper :List="swiperImgList"></hello-swiper>
    <hello-classify></hello-classify>
   
  
     <hello-recommend :recommed="rexiaoList"></hello-recommend>
      <hello-weekend :weekend="weekendList"></hello-weekend>
  </div>
</template>

<script>
import HomeHander from "./homeHander";
import HelloSwiper from "./helloSwiper";
import HelloClassify from "./helloClassify";
import HelloRecommend from "./helloRecommend";
import HelloWeekend from "./helloWeekend";

import axios from 'axios';
export default {
  name: "HelloWorld",
  //引入组件
  components: {
    HomeHander,
    HelloSwiper,
    HelloClassify,
    HelloRecommend,
    HelloWeekend
  },
  data(){
    return {
     
      swiperImgList:[],
      rexiaoList:[],
      weekendList:[],
    }
  },
  methods:{
    getHomeInfo:function(){
      axios.get('/api/index.json')    //此时API被替换
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc:function(res){
      res = res.data;
      if(res.ret && res.data){
       
        this.swiperImgList = res.data.swiperImgList;
        this.rexiaoList = res.data.rexiaoList;
        this.weekendList = res.data.weekendList;
      }
    }
  },
  mounted() {
    this.getHomeInfo();
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
