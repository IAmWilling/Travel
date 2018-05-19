<template>
<div class="list" ref="wrapper">
    <div>
        <div class="area">
            <div class="title">当前城市</div>
            <div class="button-list">
                <div class="button-wraoer">
                    <div class="button">{{this.$store.state.city}}</div>
                </div>
            </div>
        </div>
        
        <div class="area" >
            <div class="title">热门城市 <span style="color:orange;margin-left:.5rem;">Hot</span></div>
            <div class="item-list" v-for="item of hot" :key="item.id">
                 <div class="item-city info-hot" @click="handleHotCityClick(item.name)"><span class="font-text">{{item.name}}</span></div>
                
            </div>
        </div>
        <!-- 所有城市 -->
        <div class="area" v-for="(item,key) of cities" :key="item.id" :ref="key"> <!--这里:ref="key" 表示 为了将其滚动到某一区域 需要添加特有的东西作为标志 由于key为键值 -->
            <div class="title">{{key}}</div>
            <div class="item-list" v-for="i of item" :key="i.id">
                <div class="item-city" @click="handleAllCityClick(i.name)"><span class="font-text">{{i.name}}</span></div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import Bscroll from "better-scroll";
export default {
  name: "CityList",
  methods: {
    //点击热门城市进行切换
    handleHotCityClick: function(name) {
      this.$store.commit("changeCity", name); //
      this.$router.push("/"); //路由跳转到首页
    },
    handleAllCityClick(nameCity) {
      this.$store.commit("changeAllCity", nameCity); //传入公共数据
      this.$router.push("/"); //路由跳转到首页
    }
  },
  mounted: function() {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true //开启点击事件默认为false
    }); //表示滑动组件
  },
  watch: {
    //当字母改变时候
    alphabet() {
      if (this.alphabet) {
        //当字母不是空的时候
        const element = this.$refs[this.alphabet][0]; //此时element是一个数组所以在后面加上索引0表示第一项为don元素
        this.scroll.scrollToElement(element); //这里是Better-Scroll插件的一个方法自动滚到某一区域
      }
    }
  },
  props: {
    cities: Object,
    hot: Array,
    alphabet: String //接收传递过来的字母
  }
};
</script>
<style lang="stylus" scoped>
@import '../../assets/bgcolor.styl'; // 引入全局变量背景色

.title {
    background: #eee;
    font-size: 0.8rem;
    padding-left: 0.5rem;
    border-bottom: solid 0.01rem #e3e3e8;
    color: #666;
}

.button-list {
    padding: 0.5rem;
    overflow: hidden;
    padding-right: 1.2rem;
}

.button-wraoer {
    margin-right: 0.6rem;
    margin-bottom: 0.6rem;
    float: left;
    width: 30%;
    height: 1.35rem;
    line-height: 1.35rem;
    text-align: center;
    color: $bgColr;
    border: solid 0.01rem $bgColr;
}

.item-list {
    color: #666;
}

.font-text {
    padding-left: 0.5rem;
}

.item-city {
    height: 1.86rem;
    line-height: 1.86rem;
    border-bottom: solid 0.01rem #e3e3e8;
}

.list {
    overflow: hidden;
    position: absolute;
    top: 4.5rem;
    left: 0;
    right: 0;
    bottom: 0;
}

.info-hot {
    color: orange;
}

.button {
}
</style>

