<script setup>
    import { defineProps } from 'vue';
    import {useRouter} from 'vue-router'

    const {quiz} = defineProps(['quiz'])
    const router = useRouter()

    const navigateToQuiz = () => {
      router.push(`/quiz/${quiz.id}`)
    }

    // console.log(quiz)
</script>
<template>
    <div class="card" @click="navigateToQuiz">
        <img :src="quiz.img" alt="photo">
        <div class="card-text">
            <h2>{{ quiz.name }}</h2>
            <p>{{quiz.questions.length}} Questions</p>
        </div>
    </div>
</template>

<style scoped>
.card {
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 3px 3px 10px rgba(0,0,0,0.30);
  margin-bottom: 35px;
  margin-right: 20px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.card img {
   width: 100%;
   height: 200px;
   margin: 0;
}

.card .card-text {
  padding: 0 5px;
}

.card .card-text h2 {
  font-weight: bold;
}

.card .card-text p {
  font-weight: 600;
}

.card:hover {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  /* Adjustments for mobile screens */
  .card {
    width: 100%; 
    height: auto; 
    margin-bottom: 20px;
    margin-right: 0; 
  }

  .card img {
    height: auto; 
  }
}
</style>