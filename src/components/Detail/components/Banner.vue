<template>
<div>
    <div class="banner" @click="handleBannerClick">
        <img class="banner-img" :src="bannerImg"/>
        <div class="banner-info">
            <div class="banner-title">{{this.sightName}}</div>
            <div class="banner-number"><span class="iconfont">&#xe600;</span>{{this.bannerImgs.length}}</div>
        </div>
    </div>
    <transition name="fade">
    
    
    <common-gallary @close="handleGallaryClose" v-show="showGallary" :imgs="bannerImgs"></common-gallary>
    </transition>
  </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: "DetailBanner",
  props:{
      sightName:String,
      bannerImg:String,
      bannerImgs:Array,
  },
  components:{
      CommonGallary,
  },
  data(){
      return{
          showGallary:false,
      }
  },
  methods:{
      handleBannerClick(){
          this.showGallary = true;
      },
      handleGallaryClose(){
          this.showGallary = false;
      }
  }
};
</script>
<style scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.banner{
 position:relative;
}
.banner-img{
    height:15rem;
    width:100%;

}
.banner-info{
    position:absolute;
    display:flex;
    left:0;
    right: 0;
    bottom:0;
    top:87%;
    line-height: .8rem;
    color:#fff;
    background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
}
.banner-title{
    flex:1;
}
.banner-number{
    padding:0.4rem;
    height:.8rem;
    line-height: .8rem;
    border-radius:.2rem;

    background: rgba(0,0,0,.5);
}
</style>
