<script setup>
import { RouterView } from 'vue-router';
// import Quizes from './views/Quizes.vue'
</script>

<template>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  max-width: 80%;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .container {
    max-width: 100%; 
  }
}
</style>