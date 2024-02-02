<template>
  <a :href="href" target="_blank">
    <button>{{ btnText }}</button>

  </a>
</template>

<script setup lang="ts">

import {defineProps} from 'vue'

const props = defineProps({
  btnText: String,
  href: String,
})


</script>

<style scoped>

button{
  padding: 10px 20px;
  background-color: #0A9E09;
  color: white;
  border-radius: 20px;
  border: none;
  font-size: 15px;
}

button:hover{
  cursor: pointer;
  background-color: #076D06;
}

</style>