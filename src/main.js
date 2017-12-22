import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.root = 'https://face-2-face.herokuapp.com/';//'http://localhost:3000/';
Vue.http.interceptors.push((req, next) => {
  var token = localStorage.getItem('token');
  if (token) {
    req.headers.set('Authorization', `Bearer ${token}`);
  } else {
    if (response.status == 401) {
      router.push({
        name: 'login'
      });
    }
  }
  next();
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
