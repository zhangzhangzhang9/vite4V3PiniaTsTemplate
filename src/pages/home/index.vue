<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const handleManage = () => {
  router.push({
    path: '/home/manage',
    query: {
      plan: '123',
    },
  });
};
</script>

<template>
  <div @click="handleManage">
    菜单栏
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped></style>
