<script setup>
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';

import Questions from '../components/Questions.vue'
import QuizHeader from '../components/QuizHeader.vue';
import Result from '../components/Result.vue'
import quizes from '../data/quizes.json'

const route = useRoute();

const quizId = parseInt(route.params.id);

const quiz = quizes.find(q => q.id === quizId);

const currentQuestionIndex = ref(0);
const numberOfCorrectAnswer = ref(0);
const showResults = ref(false);

const questionStatus = computed(() => `${currentQuestionIndex.value + 1}/${quiz.questions.length}`);
const statusBarPercentage = computed(() => `${(currentQuestionIndex.value / quiz.questions.length) * 100}%`);

const onOptionSelected = (isCorrect) => {
  if (isCorrect) {
    numberOfCorrectAnswer.value++;
  }

  if (currentQuestionIndex.value === quiz.questions.length - 1) {
    showResults.value = true;
  }

  currentQuestionIndex.value++;
}
</script>

<template>
  <div>
    <QuizHeader :questionStatus="questionStatus" :statusBarPercentage="statusBarPercentage" />
    <div>
      <Questions v-if="!showResults" 
                 :question="quiz.questions[currentQuestionIndex]"
                 @selectOption="onOptionSelected"
    />
        <Result v-else
                :quizQuestionsLength="quiz.questions.length"
                :numberOfCorrectAnswer="numberOfCorrectAnswer"
        />
    </div>
  </div>
</template>

