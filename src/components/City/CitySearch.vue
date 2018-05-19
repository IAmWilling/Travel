<template>
<div>
  <div class="search">
    <input v-model="keyword" type="text" class="search-input" placeholder="输入城市名或拼音">
  </div>
  <div class="search-content" ref="itemSearch" v-show="keyword">
   <ul>
     <li  class="search-content-item" @click="handleSearchCity(item.name)" v-for="item in list" :key="item.id">{{item.name}}</li>
     <li  class="search-content-item" v-show="!list.length">没有找到匹配数据</li>
   </ul>
  </div>
</div>
</template>
<script>
import Bscroll from "better-scroll";
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.itemSearch, {
      click: true
    });
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null,
      clickSearch: true
    };
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.timer = setInterval(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  },
  methods: {
    handleSearchCity(searchCity) {
      this.$store.commit("changeSearchCity", searchCity);
      this.$router.push("/"); //路由跳转到首页
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../assets/bgcolor.styl'; // 引入全局变量背景色

.search {
  background: #00b4c8;
  height: 2rem;
  line-height: 2rem;
}

.search-input {
  padding: 0.2rem;
  width: 95%;
  margin: 0 auto;
  display: block;
  text-align: center;
  border-radius: 0.4rem;
  color: #666;
}

.search-content {
  z-index: 10;
  overflow: hidden;
  position: absolute;
  top: 4.5rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;
}

.search-content-item {
  height: 1.86rem;
  border-bottom: solid 0.01rem #e3e3e8;
  background: #fff;
  line-height: 1.86rem;
}
</style>

