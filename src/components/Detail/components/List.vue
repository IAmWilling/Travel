<template>
  <div>
      <div  v-for="(item,index) in list" :key="index">
      <div class="item-title"> <span class="item-title-icon"></span>
        {{item.title}}</div>
       <div v-if="item.children" class="item-children">
       <!-- 组件的递归过程写法 -->
            <detail-list :list="item.children"></detail-list>
       </div>
      </div>
  </div>
  
</template>

<script>
export default {
  name: 'DetailList',
  props:{
      list:Array,
  }
}
</script>

<style lang="stylus" scoped>

.item-title{
    height:2rem;
    line-height 2rem;
    padding:.2rem;
    padding-left:1.2rem;
    border-bottom:solid 0.01rem #efefef;
}
.item-children{
    padding:0 2rem;
}
</style>
