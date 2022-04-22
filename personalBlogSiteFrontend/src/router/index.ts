import { createRouter, createWebHistory } from 'vue-router';
import BlogOverview from '../pages/BlogOverview.vue';
import BlogPreview from '../pages/BlogPreview.vue';
import LoginForm from '../pages/LoginForm.vue';
import WriteBlog from '../pages/WriteBlog.vue';

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
      component: LoginForm,
    },
    {
      path: '/write',
      component: WriteBlog,
    },
  ],
});
