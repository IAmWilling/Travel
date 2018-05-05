// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import router from './router';
import "./assets/iconfont.css";
import 'swiper/dist/css/swiper.css';
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App //实际上就是定义App:App
  },
  template: '<App/>'
});
