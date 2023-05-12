// const auth = () => {
//   if (!localStorage.getItem("token")) {
//     // 未登陆,重定向到登录页面
//     return "/login";
//   }
// };
const routes = [
  {
    path: '/login',
    component: () => import('@/pages/login/index.vue'), //路由懒加载
  },
  {
    path: '/home',
    name: 'Home',
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
        meta: {
          title: '管理页', // 页面标题
          auth: true, //需要登录权限
        },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/notFound/index.vue'),
  },
];

//将/home/manage拆出来
export const manageRoute = {
  path: '/home/manage',
  component: () => import('@/pages/manage/index.vue'),
};

export default routes;

// //定义路由
// {
//   path: '/register/:plan', // 动态字段以冒号开始
//   component: () => import('@/pages/register.vue'),
// },

// //页面传参
// <script setup lang="ts">
// import { useRouter } from 'vue-router';
// const router = useRouter();

// const handleManage = () => {
// router.push('/register/123');
// };
// </script>

// //页面接参
// <script setup lang="ts">
// import { useRoute } from 'vue-router';
// const route = useRoute();

// console.log(route.params.plan); //params接参
// </script>
