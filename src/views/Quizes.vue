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
 <div>
  <header>
    <h1>Quizes</h1>
    <input v-model.trim="search" type="text" placeholder="search...">
  </header>

  <div class="options-container">
    <Cards v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
  </div>
  
 </div>
</template>

<style scoped>


header {
  margin-bottom: 10px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  /* justify-content: space-evenly; */
}

header h1 {
  font-size: 40px;
  font-weight: bold;
  margin-right: 20px;
}

header input {
  border: 0;
  background-color: rgba(128,128,128,0.1);
  padding: 15px;
  border-radius: 5px;
  outline: none;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}
</style>