<template>
  <nav v-show="!mobile || mobileMenuOpened">
    <router-link to="/equipment" @click="handleClick">Strojní vybavení</router-link>
    <router-link to="/machineRental" @click="handleClick">Pronájem strojů</router-link>
    <router-link to="/historyOfConstructions" @click="handleClick">Historie staveb</router-link>
    <router-link to="/contacts" @click="handleClick">Kontakty</router-link>
  </nav>

</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  mobile: boolean,
  mobileMenuOpened: boolean
}>()

const emit = defineEmits(['routerClick'])

function handleClick(){
  if(props.mobile){
    emit('routerClick')
  }
}

</script>

<style scoped>

nav{
  background-color: #0A9E09;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /*width: 50%;*/
  align-items: center;
  padding: 20px;
  position: relative;
  z-index: 90;

}

@keyframes slide-from-right {
  0%{
    transform: translateX(100%);
    opacity: 0;
  }
  80%{
    transform: translateX(0);
    opacity: 1;
  }
}

nav a{
  color: white;
  padding: 5px 30px;
  /*background-color: red;*/
  text-decoration: none;
}



/* Phones */
@media only screen and (max-width: 672px) {

  nav{
    width: 100%;
    padding: 10vh 10px;
    flex-direction: column;
    height: 100vh;
    position: absolute !important;
    top: 0;
    left: 0;
    animation: slide-from-right 0.5s;
    /*background-color: white;*/
    /*color: #076D06;*/
  }

  nav a{
    padding: 5px 10px;
    /*color: #0A9E09;*/
    font-weight: 600;
    font-size: 17px;
  }
}

/* Tablets */
@media only screen and (min-width: 673px) and (max-width: 990px) {

  nav{
    width: 100%;
  }

  nav a{
    padding: 5px 15px;
  }
}


/* Laptops */
@media only screen and (min-width: 991px) {

}
</style>