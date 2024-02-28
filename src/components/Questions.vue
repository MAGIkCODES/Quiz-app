<script setup>
import { defineProps, defineEmits } from 'vue';

const {question} = defineProps(['question'])
const emit = defineEmits(['selectOption'])

const emitSelectedOption = (isCorrect) => {
  emit('selectOption', isCorrect)
}

</script>

<template>
    <div class="question-container">
        <h1 class="question">
           {{question.text}}
        </h1>
    </div>

    <!-- quiz question starts here -->
    <div class="options-container">
        <div v-for="option in question.options" 
          :key="option.id" 
          class="option"
          @click="emitSelectedOption(option.isCorrect)"
        >
            <p class="option-label">{{ option.label }}</p>
            <div class="option-value">
                <p>{{option.text}}</p>
            </div>
        </div> 
    </div>
</template>

<style script>
.question {
  font-size: 40px;
  margin-bottom: 20px;
}

.option {
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
  margin-top: 20px;
}
.option-label {
  display: flex;
  background-color: rgb(228, 129, 8);
  width: 50px;
  height: 50px;
  font-size: 30px;
  align-items: center;
  justify-content: center;
}

.option-label:hover {
  color: white;
  background-color: rgb(255, 142, 3);
}

.option-value {
  width: 100%;
  background-color: rgb(221, 209, 209);
  font-size: 25px;
  margin-left: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.option-value p {
  margin-left: 20px;
}
.question-container {
  margin-top: 20px;
}
.question {
  font-size: 40px;
  margin-bottom: 20px;
}

.option {
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
  margin-top: 20px;
}
.option-label {
  display: flex;
  background-color: rgb(228, 129, 8);
  width: 50px;
  height: 50px;
  font-size: 30px;
  align-items: center;
  justify-content: center;
}

.option-label:hover {
  color: white;
  background-color: rgb(255, 142, 3);
}

.option-value {
  width: 100%;
  background-color: rgb(221, 209, 209);
  font-size: 25px;
  margin-left: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.option-value p {
  margin-left: 20px;
}
</style>