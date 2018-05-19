<template>
  <ul class="list">
    <li @click="handleLetterClick" 
    class="item" v-for="(item) of letters" 
    :key="item" 
    :ref="item"
    @touchstart.prevent="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    >{{item}}</li>
  </ul>
</template>
<script>
// 这是字母表

export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  computed: {
    //将所有字母表加入到数组中去
    letters() {
      const letters = [];
      //将Json数据中的cities对象的key键值 也就是字母加入到letters中去
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters; //返回一个数组
    }
  },
  data() {
    return {
      //给出一个标记开始和结尾
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  //页面更新完毕后
  updated() {
    this.startY = this.$refs["A"][0].offsetTop; //计算出第一个字母'A'到顶部的距离
  },
  methods: {
    handleLetterClick: function(e) {
      this.$emit("change", e.target.innerText); //向外触发事件 传递点击的字母
    },
    // ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓手指拖动字母表的计算 ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓~
    handleTouchStart() {
      //当手指触碰到字母表后进行设置
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      //触碰后并且滑动 就会进行相应滑动对应的字母计算
      if (this.touchStatus) {
       
      
          const touchY = e.touches[0].clientY - 72; ///减去蓝色区域部分 头部
          const index = Math.floor((touchY - this.startY) / 18); //计算出当前手指对字母滑动的位置的的下标 18是li标签的高度 顶部字母高度减去手指移动的高度 除以 li标签高度就会得到一个下标
          if (index >= 0 && index < this.letters.length)
            this.$emit("change", this.letters[index]);
        
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
    //↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑手指拖动字母表的计算↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑
  }
};
</script>
<style lang="stylus" scoped>
@import '../../assets/bgcolor.styl'; // 引入全局变量背景色

.list {
  position: absolute;
  right: 0;
  top: 4.5rem;
  // *垂直方向居中
  display: flex;
  flex-direction: column;
  justify-content: center;
  bottom: 0;
  font-size: 0.7rem;
  width: 0.9rem;
  text-align: center;
  color: $bgColr;
}

.item {
}
</style>

