import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'

import './assets/css/style.css';

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.use(VueRouter);
Vue.use(VueResource);
// Vue.http.interceptors.push((req, next) => {
//   router.push({ name: 'login' });
// });
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
