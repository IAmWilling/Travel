<template>
<div>
    
    <div v-show="showAbs" class="header-abs" @click="handleHeadeReturn">
        <div class="iconfont header-abs-back">&#xe624;</div>
    </div>
    <div class="header-fixed" 
    :style="opacityStyle"
    v-show="!showAbs"
   >
       <div class="iconfont ico"  @click="handleHeadeReturn2">&#xe624;</div>景点详情
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  //页面一旦被展示则钩子执行
  activated() {
      
      
    window.addEventListener("scroll", this.handleScroll);
  },
  deactivated() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleHeadeReturn() {
      this.$router.push("/");
    },
    handleHeadeReturn2() {
      this.$router.push("/");
    },
    handleScroll() {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 60) {
        let opacity = scrollTop / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
  }
};
</script>
<style scoped>
.header-abs {
  position: absolute;
  left: 0.8rem;
  top: 0.8rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.8);
  text-align: center;
}
.header-abs-back {
  color: #fff;
  line-height: 3rem;
}
.header-fixed {
  display: flex;
  position: fixed;
  top: 0;
  line-height: 2.7rem;
  font-size: 0.9rem;
  color: #fff;
  height: 3rem;
  width: 100%;
  background: #00b4c8;
  text-align: center;
}
.ico{
  margin-right:1rem;
  margin-left:1rem;
}
</style>
