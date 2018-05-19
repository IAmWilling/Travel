// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import router from './router';
import "./assets/iconfont.css";
import 'swiper/dist/css/swiper.css';
import './assets/reset.css';
import 'babel-polyfill' //解决手机组件化卡顿现象不支持proimigvms
import store from './store/index.js' //引入仓库

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store: store,
    components: {
        App //实际上就是定义App:App
    },
    template: '<App/>'
});