<template>
  <transition name="slide">
    <nav v-show="!mobile || mobileMenuOpened">
      <router-link to="/strojni-vybaveni" @click="handleClick">Strojní vybavení</router-link>
      <router-link to="/pronajem-stroju" @click="handleClick">Pronájem strojů</router-link>
      <router-link to="/historie-staveb" @click="handleClick">Historie staveb</router-link>
      <router-link to="/kontakty" @click="handleClick">Kontakty</router-link>
    </nav>
  </transition>

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
  text-decoration: none;
}



/* Phones */
@media only screen and (max-width: 672px) {
  nav{
    width: 100%;
    padding: 15vh 10px;
    flex-direction: column;
    height: 100vh;
    position: absolute !important;
    top: 0;
    left: 0;
    /*animation: slide-from-right 0.5s ease-in-out;*/
  }

  nav a{
    padding: 5px 10px;
    font-weight: 600;
    font-size: 17px;
  }

  .slide-enter-active, .slide-leave-active {
    transition: transform 0.5s ease-in-out;
  }

  .slide-enter-from, .slide-leave-to{
    transform: translateX(100%);
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