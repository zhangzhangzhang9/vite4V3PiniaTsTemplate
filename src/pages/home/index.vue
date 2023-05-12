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
    <router-link v-slot="{ href, navigate, isExactActive }" to="/home/user" custom>
      <div :class="{ active: isExactActive }" :href="href" @dblclick="navigate">跳转user</div>
    </router-link>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped></style>
