const routes = [
  {
    path: '/login',
    component: () => import('@/pages/login/index.vue'), //路由懒加载
  },
  {
    path: '/home',
    component: () => import('@/pages/home/index.vue'),
    redirect: '/home/user', //新增
    children: [
      {
        path: '/home/user',
        component: () => import('@/pages/user/index.vue'),
      },
      {
        path: '/home/manage',
        component: () => import('@/pages/manage/index.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/notFound/index.vue'),
  },
];

export default routes;
