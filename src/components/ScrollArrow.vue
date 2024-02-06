<template>
  <button class="btn" @click="scrollToTop()">
    <font-awesome-icon  :icon="['fas', 'angle-up']" class="icon"/>
  </button>
</template>

<script setup lang="ts">

function scrollToTop(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

let windowHeight = window.innerHeight

window.onresize = () => windowHeight = window.innerHeight

</script>

<style scoped>
.btn{
  height: 60px;
  width: 60px;
  background-color: #0A9E09;
  color: white;
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 100%;
  z-index: 80;
}



.icon{
  height: 30px;
  width: 30px;
}

/* Laptops */
@media only screen and (min-width: 991px) {
  .btn:hover{
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.1s ease-in-out;
    background-color: #076D06;
  }
}
</style>