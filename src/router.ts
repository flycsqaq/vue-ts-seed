import Vue from 'vue';
import Router from 'vue-router';
import homeRouter from './views/home/router';
import demoRouter from './views/demo/router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    homeRouter,
    demoRouter,
  ],
});
