<template>
<div>
<city-header></city-header>
<city-search :cities="cities"></city-search>
<city-list :cities="cities" :hot="hotCities" :alphabet="Alphabet"></city-list>
<city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
</div>
</template>
<script>
import axios from "axios";    //引入axios ajax
import CityHeader from "./CityHeader"; //头部组件
import CitySearch from "./CitySearch.vue"; //搜索框组件
import CityList from "./CityList.vue"; //城市列表
import CityAlphabet from "./CityAlphabet.vue"; //字母表
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data: function() {
    return {
      cities: {},
      hotCities: [],
      Alphabet: ""
    };
  },
  methods: {
    //利用axios进行ajax请求
    getCityData: function() {
      axios.get("/api/city.json").then(this.getCityDataInfo);
    },
    getCityDataInfo: function(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    },
    handleLetterChange(lter) {
      this.Alphabet = lter;
    }
  },
  mounted() {
    this.getCityData();
  }
};
</script>
<style lang="stylus" scoped>
</style>

