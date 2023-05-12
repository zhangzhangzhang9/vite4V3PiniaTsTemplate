<script setup lang="ts">
import Transitoin from '@/components/Transitoin.vue';
localStorage.setItem('role', 'admin'); //在登录页存储用户等级
</script>

<template>
  <Transitoin />
</template>

<style scoped></style>
