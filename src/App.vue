<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<script setup lang="ts">
import { watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { manageRoute } from '@/router/routes';

const router = useRouter();
const route = useRoute();
watch(route, async (newVal) => {
  const role = localStorage.getItem('role');
  if (role && role === 'admin') {
    router.addRoute('Home', manageRoute);
    /* 防止页面刷新，路由丢失 */
    if (newVal.fullPath === '/home/manage，会返回404页面') {
      await router.replace('/home/manage');
    }
  }
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}
</style>
