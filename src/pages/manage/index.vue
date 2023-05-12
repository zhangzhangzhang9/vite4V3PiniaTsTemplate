<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();

console.log(route.query.plan); //query接参
</script>

<template>
  <div>manage</div>
</template>

<style scoped></style>
