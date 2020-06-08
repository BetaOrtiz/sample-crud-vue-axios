import Vue from 'vue';
import Router from 'vue-router';

import AddBooks from './components/books/AddBooks';
import ShowBooks from './components/books/ShowBooks';
import Wellcome from './components/Wellcome';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Wellcome,
    },
    {
      path: '/add',
      component: AddBooks,
    },
    {
      path: '/show',
      component: ShowBooks,
    },
  ],
});
