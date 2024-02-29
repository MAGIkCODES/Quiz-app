<script setup>
import { useRouter } from 'vue-router';
import { defineProps } from 'vue';

const {questionStatus, statusBarPercentage } = defineProps(['questionStatus', 'statusBarPercentage'])
const router = useRouter()

const goBack = () => {
        router.go(-1)
}
</script>

<template>
    <header>
      <button @click="goBack" class="back-button">Back</button>
      <h4>Question {{questionStatus}}</h4>
      <div class="status-bar">
        <div class="completion" :style="{width: statusBarPercentage}" />
      </div> 
    </header>
</template>

<style scoped>

  header {
    margin-top: 50px;
  }

  .back-button {
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

  .back-button:hover {
    color: white;
    background-color: rgb(230, 133, 15)
  }

  h4 {
    font-size: 30px;
  }

  .status-bar {
    margin-top:20px ;
    width: 300px;
    height: 50px;
    max-width: 85%;
    border: 3px solid rgb(230, 133, 15);
    border-radius: 5px;
  }

  .completion {
    height: 100%;
    width: 0%;
  
    background-color: rgb(230, 133, 15);
  }

  /* Media query for mobile devices */
  @media (max-width: 768px) {
    /* Adjustments for mobile screens */
    header {
      margin-top: 30px;
    }

    .back-button {
      font-size: 14px; 
      padding: 8px 16px;
    }

    h4 {
      font-size: 24px;
    }

    .status-bar {
      width: 200px;
      height: 40px;
    }
  }

</style> 