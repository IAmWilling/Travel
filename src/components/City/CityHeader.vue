<template>
  <div class="header">
      城市选择
      <!-- 回到首页 -->
      <router-link to="/">
       <div class="iconfont header-back">&#xe624;</div>
       </router-link>
  </div>
</template>
<script>
export default {
  name: "CityHeader"
};
</script>
<style lang="stylus" scoped>
.header {
    position: relative;
    overflow: hidden;
    text-align: center;
    height: 2.5rem;
    background: #00b4c8;
    line-height: 2.5rem;
    color: #fff;
    font-size: 0.9rem;
}

.header-back {
    position: absolute;
    height:2.5rem;
    width:3rem;
    color:#fff;
    top:0.1rem;
}
</style>

