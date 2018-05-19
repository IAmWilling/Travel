<template>
<div>
  <div class="title">周末去哪儿</div>
  <ul>
    <li class="item" v-for="item in weekend" :key="item.id">
      <div class="item-img-re">
        <img class="item-img" :src="item.imgUrl" alt=""/>
     </div>
      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p class="item-text">{{item.text}}</p>
       
      </div>
    
      
    </li>
  </ul>
</div>
</template>
<script>
export default {
  name: "HelloWeekend",
  props:{
    weekend:{
      type:Array,
    }
  },
  data: function() {
    return {
    };
  }
};
</script>
<style lang="stylus" scoped>
.title {
    font-size: 0.8rem;
    line-height: 2rem;
    background: rgba(238, 237, 237, 0.966);
}

.item-img-re {
    overflow: hidden;
}

.item {
}

.item-img {
    width: 100%;
    height: 9.3rem;
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


</style>
