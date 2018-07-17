import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/Home';
import Project from '@/Project';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/projetos',
      component: Project,
    },
  ],
});
