import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

import App from './App.vue';
import router from './router';
import { currency, date } from './methods/filters';
import $httpMessageState from './methods/pushMessageState';

const app = createApp(App);
app.config.globalProperties.$filters = {
  date,
  currency,
};

// $httpMessageState 此函式的用途是整合 Ajax 的錯誤事件，統一整理發送給予 Toast
// 正常來說不建議太多方法掛 Global，這裡可以使用 provide 來處理
app.config.globalProperties.$httpMessageState = $httpMessageState;

app.use(VueAxios, axios);
app.use(router);
app.component('Loading', Loading);
app.mount('#app');
