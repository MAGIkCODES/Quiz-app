<script setup>
import { useRoute } from 'vue-router';
import { ref, watch, computed } from 'vue';

import  Questions from '../components/Questions.vue'
import QuizHeader from '../components/QuizHeader.vue';
import Result from '../components/Result.vue'
import quizes from '../data/quizes.json'

const route = useRoute();

const quizId = parseInt(route.params.id);

const quiz = quizes.find(q => q.id === quizId);

const currentQuestionIndex = ref(0);
const numberOfCorrectAnswer = ref(0);


// const questionStatus = ref(`${currentQuestionIndex.value}/${quiz.questions.length}`
// )

// watch( () => currentQuestionIndex.value, () => {
//   questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`
// })
const questionStatus = computed( () => `${currentQuestionIndex.value}/${quiz.questions.length}`)
const statusBarPercentage = computed ( () => `${currentQuestionIndex.value/quiz.questions.length * 100}%`)

const onOptionSelected = (isCorrect) => {
  if(isCorrect){
    numberOfCorrectAnswer.value++;
  }

  currentQuestionIndex.value++;
}
</script>

<template>
  <div>
    <QuizHeader :questionStatus="questionStatus" :statusBarPercentage="statusBarPercentage " />
    <div>
      <Questions 
      :question="quiz.questions[currentQuestionIndex]"
      @selectOption="onOptionSelected"
    />
    </div>
    <Result />
  </div>
</template>

<style scoped>

button {
  display: flex;
  align-items: flex-end;
  background-color: rgb(221, 209, 209);
  border: none;
  color: rgb(156, 145, 145);
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-right: 20px;
  margin-bottom: 20px;
  border-top-right-radius: 10px;
  cursor: pointer;
}

button:hover {
  color: white;
  background-color: rgb(230, 133, 15)
}
</style>

