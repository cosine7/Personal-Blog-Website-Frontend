import { createRouter, createWebHistory } from 'vue-router';
import BlogOverview from '../pages/BlogOverview.vue';
import BlogPreview from '../pages/BlogPreview.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: BlogOverview,
      children: [
        {
          path: '',
          redirect: '/blogs/All',
        },
        {
          path: 'blogs/:category',
          component: BlogPreview,
        },
      ],
    },
    {
      path: '/login',
      component: BlogOverview,
    },
  ],
});
