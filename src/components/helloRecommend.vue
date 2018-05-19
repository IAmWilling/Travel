<template>
<div>
  <div class="title">热销推荐</div>
  <ul>
   
    <router-link tag="li" :to="'/detail/'+item.id" class="item" v-for="item in recommed" :key="item.id">
      
        <img class="item-img" :src="item.imgUrl" alt=""/>
     
      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p class="item-text">{{item.text}}</p>
        <div class="item-button">查看详情</div>
      </div>
    
      
    </router-link>
  </ul>
</div>
</template>
<script>
export default {
  name: "HelloRecommend",
  props: {
    recommed: {
      //接收json
      type: Array
    }
  },
  data: function() {
    return {};
  }
};
</script>
<style lang="stylus" scoped>
.title {
  font-size: 0.8rem;
  line-height: 2rem;
  background: rgba(238, 237, 237, 0.966);
}

.item {
  display: flex;
  margin-top: 0.6rem;
  height: 5.5rem;
  overflow: hidden;
  font-size: 0.8rem;
}

.item-img {
  width: 7.5rem;
  height: 5rem;
  padding: 0.25rem;
}

.item-info {
  flex: 1;
  padding: 0.25rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-title {
  font-size: 1rem;
  color:black;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-text {
  margin-top: 0.45rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: gray;
  line-height: 1rem;
  padding: 0.1rem;
  padding-left: 0rem;
}

.item-button {
  background: #ff9300;
  padding: 0.1rem;
  border-radius: 0.2rem;
  width: 3.5rem;
  line-height: 1rem;
  text-align: center;
  height: 1rem;
  margin-top: 0.6rem;
  color: #fff;
}
</style>
