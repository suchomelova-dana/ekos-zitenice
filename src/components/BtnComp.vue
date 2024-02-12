<template>
  <a :href="href" target="_blank">
    <button :class="{'uppercase': uppercase}">{{ btnText }}</button>
  </a>
</template>

<script setup lang="ts">

import {defineProps} from 'vue'

defineProps({
  btnText: String,
  href: String,
  uppercase: Boolean
})


</script>

<style scoped>

.uppercase{
  text-transform: uppercase;
}

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