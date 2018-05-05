<template>
  <div class="classify-div">
     <div class="icon">
         <img class="img-content" src="../assets/icons/jiudian.png" alt=""  @touchstart="touch">
         <p>酒店</p>
     </div>
       <div class="icon">
         <img class="img-content" src="../assets/icons/jipiao.png" alt="">
         <p>机票</p>
     </div>
       <div class="icon">
         <img class="img-content" src="../assets/icons/huochepiao.png" alt="">
         <p>火车票</p>
     </div>
       <div class="icon">
         <img class="img-content" src="../assets/icons/zhuanche.png" alt="">
         <p>专车·租车</p>
     </div>
       <div class="icon">
         <img class="img-content" src="../assets/icons/qichepiao.png" alt="">
         <p>汽车票·船票</p>
     </div>
       <div class="icon">
         <img class="img-content" src="../assets/icons/lvyou.png" alt="">
         <p>旅游</p>
     </div>
       <div class="icon">
         <img class="img-content" src="../assets/icons/jingdian.png" alt="">
         <p>景点</p>
     </div>
       <div class="icon">
         <img class="img-content" src="../assets/icons/minsu.png" alt="">
         <p>民宿·客栈</p>
     </div>
  </div>
</template>
<script>
export default {
  name: "HelloClassify",
  data() {
    return {

    };
  },
  methods:{
    touch:function(){
      alert("酒店")
    }
  }
};
</script>
<style lang="stylus" scoped>
.classify-div {
    margin:0 auto;
    overflow: hidden;
    padding-bottom: 0.3%;
   
}

.icon {
    margin-right:.4rem;
    text-align: center;
    width: 6rem;
    height: 6rem;
    float: left;
}

.icon img {
    height: 3.6rem;
}

.icon p {
    margin-top: 0rem;
    font-size:.6rem;
}
</style>
