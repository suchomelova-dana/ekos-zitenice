<template>
  <div class="headingArea">
    <h1>{{props.heading}}</h1>
  </div>
</template>

<script setup lang="ts">
  import {defineProps} from 'vue'

  const props = defineProps<{
    heading: string
  }>()
</script>

<style scoped>
  .headingArea{
    background-color: #076D06;
    padding: 40px 60px;
    display: flex;
    justify-content: left;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }

  .headingArea h1{
    color: white;
    font-size: 60px;
    text-transform: uppercase;
    animation: 1s slide-from-left;
  }

  @keyframes slide-from-left {
    0%{
      opacity: 0;
      transform: translateX(-20px);
    }
    80%{
      opacity: 1;
      transform: translateX(0);
    }
  }
</style>