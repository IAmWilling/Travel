<template>
  <div class="hander">
      <div class="hander-left">
          <span class="iconfont">&#xe624;</span>
      </div>
      <div class="hander-input"><span class="iconfont">&#xe632;输入城市/景点/游玩主题</span>

      </div>
      <div class="hander-right">城市
          <span class="iconfont arrow-icon">&#xe8c3;</span>
      </div>
  </div>
</template>

<script>
export default {
  name: "HomeHander"
};
</script>

<style lang="stylus" scoped>
@import "../assets/bgcolor.styl";       //引入全局变量背景色
.hander {
    display: flex;
    background: $bgColr;
    line-height: 2.7rem;
    font-size: 0.8rem;
    color: #fff;
}

.hander-left {
    margin-left: -0.2rem;
    width: 3rem;
    float: left;
    text-align: center;
}

.hander-input {
    margin-top: 0.3rem;
    flex: 1;
    background: #fff;
    color: #ccc;
    line-height: 2rem;
    border-radius: 0.32rem;
    height: 2rem;
}

.hander-right {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    text-align: center;
    float: right;
    width: 3rem;
}

.arrow-icon {
    font-size: 0.24rem;
}
</style>


