import Vue from 'vue';
import axios from 'axios';

axios.defaults.baseURL = 'https://bookstore-982f8.firebaseio.com/';

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios;
  },
});
