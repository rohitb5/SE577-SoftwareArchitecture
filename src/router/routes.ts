import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AppPages/Home.vue') },
      { path: '/about', component: () => import('pages/AppPages/About.vue') },
      {
        path: '/aboutme',
        component: () => import('pages/AppPages/AboutModular.vue'),
      },
      {
        path: '/dynamic',
        component: () => import('pages/AppPages/Dynamic.vue'),
      },
      {
        path: '/props',
        component: () => import('pages/AppPages/PropsPage.vue'),
      },
      {
        path: '/github_api',
        component: () => import('pages/AppPages/GithubApi.vue'),
      },
      {
        path: '/github_info',
        component: () => import('pages/AppPages/GithubInfo.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
