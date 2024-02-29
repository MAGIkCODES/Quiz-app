<script setup>
  import { defineProps, ref, onMounted } from 'vue';
  import { RouterLink } from 'vue-router';

  const {numberOfCorrectAnswer, quizQuestionsLength } = defineProps(['numberOfCorrectAnswer', 'quizQuestionsLength'])
  const percentageCorrect = (numberOfCorrectAnswer / quizQuestionsLength) * 100;
  const showResult = ref(false);
  let message = '';

  if (percentageCorrect >= 80) {
    message = 'Great Job!';
} else if (percentageCorrect >= 50) {
    message = 'Not Bad!';
} else {
    message = 'Better Luck Next Time';
}

 onMounted(() => {
  // Trigger animation when component is mounted
    showResult.value = true;
 })

</script>

<template>
    <!-- Tried to add a transition here but its not working -->
    <transition name="fade" >
      <div v-if="showResult" class="result">
        <p>Your Result</p>
        <h1>
            {{numberOfCorrectAnswer}}/{{quizQuestionsLength}}
        </h1>
        <p>{{ message }}</p>
        <RouterLink to="/">Go Back</RouterLink>
      </div>
    </transition>
</template>

<style scoped>
  .result {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 0;
    /* margin-left: 20%; */
  }  

  p {
    font-size: 30px;
    font-weight: 600;
  }

  h1 {
    font-size: 30px;
  }

  a {
    margin-top: 20px;
    font-size: 20px;
    text-decoration: none;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  @media (max-width: 768px) {
  /* Styles for mobile screens */
  .result {
    padding: 50px 0; 
  }

  p {
    font-size: 20px;
  }

  h1 {
    font-size: 24px;
  }

  a {
    font-size: 16px; 
  }
}

</style>