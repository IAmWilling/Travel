import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);      //使用Vuex库
//创建Vuex 仓库 通过Store
export default new Vuex.Store({
    state: {
        city: '保定'
    },
   
    mutations: {
        changeCity(state, name) {
            state.city = name;
        },
        changeAllCity(state, nameCity) {
            state.city = nameCity;
        }, 
        changeSearchCity(state,searchCity) {
            state.city = searchCity;

        }
    }
})