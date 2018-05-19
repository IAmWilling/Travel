<template>
  <div class="classify-div">
    
      <swiper ref="mySwiper" :options='swiperOption'>
        <swiper-slide v-for="(page,index) of pages" :key="index">
     <div class="icon" v-for="item in page" :key="item.id">
         <img class="img-content" v-bind:src="item.imgUrl" alt="">
         <p>{{item.text}}</p>
     </div>
     </swiper-slide>
       </swiper>
    
     
  </div>
</template>
<script>
export default {
  name: "HelloClassify",
  data() {
    return {
      swiperOption:{
        
      },
      iconsList: [
        {
          id:'001',
          imgUrl: "../../../static/icons/jiudian.png",
          text: "酒店"
        },
        {
           id:'002',
          imgUrl: "../../../static/icons/jipiao.png",
          text: "机票"
        },
        {
           id:'003',
          imgUrl: "../../../static/icons/huochepiao.png",
          text: "火车票"
        },
        {
           id:'004',
          imgUrl: "../../../static/icons/zhuanche.png",
          text: "专车·租车"
        },
        {
           id:'005',
          imgUrl: "../../../static/icons/qichepiao.png",
          text: "汽车票·船票"
        },
        {
           id:'006',
          imgUrl: "../../../static/icons/lvyou.png",
          text: "旅游"
        },
        {
           id:'0017',
          imgUrl: "../../../static/icons/jingdian.png",
          text: "景点"
        },
        {
           id:'008',
          imgUrl: "../../../static/icons/minsu.png",
          text: "民宿·客栈"
        },
        {
           id:'009',
          imgUrl: "../../../static/icons/jiudian.png",
          text: "酒店"
        }
      ]
    };
  },
  computed:{
    pages:function(){
      const pages = []
      this.iconsList.forEach((item,index)=>{
        const page = Math.floor(index/8)
        if(!pages[page]){
          pages[page]=[]
        }
        pages[page].push(item)
      })
      return pages
    }
  }
};
</script>
<style lang="stylus" scoped>
.classify-div >>> .swiper-container {
  height: 11rem;
}

.classify-div {
  margin: 0 auto;
  height: 11.5rem;
}

.icon {

  text-align: center;
  width: 5.6rem;
  height: 5.6rem;
  float: left;
}

.icon img {
  height: 3rem;
}

.icon p {
  margin-top: 0rem;
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
  font-size: 0.8rem;
}
</style>
