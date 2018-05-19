<template>
  <div class="container" @click="handleGallaryClick">
      <div class="wrapper">
          <swiper :options='swiperOption' ref="mySwiper">
                <!-- slides -->
                <swiper-slide v-for="(item,index) in imgs" :key="index">
                    <img class="swiper-img" :src="item" >
                    
                </swiper-slide>
                
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
          </swiper>
      </div>
  </div>
</template>
<script>

export default {
  name: "CommonGallary",
  props:{
      imgs:{
          type:Array,
          default(){
              return [
              ]
          }
      }
  },
  components:{
    
  },
  data(){
      return{
          swiperOption:{
              pagination:'.swiper-pagination',
              paginationType:'fraction',
              observeParents:true,      //swiper插件只要监听到我这个发生了dom结构的变化时候 自动的自我刷新一次
              observer:true,
          }
      }
  },
  methods:{
      handleGallaryClick(){
          this.$emit("close")
      }
  }
};
</script>
<style scoped>
.container >>> .swiper-container{
    overflow:inherit;
}
.container{
    display:flex;
    flex-direction: column;
    justify-content: center;
    position:fixed;
    top:0;
    right:0;
    left:0;
    bottom:0;
    z-index:99;
    background:#000;
}
.wrapper{
  
   width:100%;
   height:0;
   padding-bottom:100%;
}
.swiper-img {
    width: 100%;
    height: 18.5rem;
}
.swiper-pagination{
    color:#fff;
    bottom:-7rem;
    
}
</style>
