<script setup>
import Cards from '../components/Cards.vue'

import q from "../data/quizes.json";
import { ref, watch } from "vue";

const quizes = ref(q);
const search = ref("");

watch(search, () => {
  // console.log("type to search")
  quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
}) 
</script>

<template>
  <header>
    <h1>Quizes</h1>
    <input v-model.trim="search" type="text" placeholder="search...">
  </header>

  <div class="options-container">
    <Cards v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
  </div>
  
</template>

<style scoped>

header {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  margin-top: 30px;
  display: flex;
  /* align-items: center; */
}

header h1 {
  font-size: 40px;
  font-weight: bold;
  margin-right: 20px;
}

header input {
  height: 40px;
  border: 0;
  background-color: rgba(128,128,128,0.1);
  padding: 10px;
  border-radius: 5px;
  outline: none;
  margin-top: 18px;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}

@media (max-width: 768px) {
  /* Adjustments for mobile screens */
  header {
    flex-direction: column;
    align-items: flex-start;
  }

  header h1 {
    font-size: 30px;
    margin-right: 0; 
    margin-bottom: 10px; 
  }

  header input {
    width: 100%;
    margin-top: 10px;
  }
}
</style>