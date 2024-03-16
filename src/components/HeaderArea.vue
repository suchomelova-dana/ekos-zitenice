<template>

  <div style="position: relative">
    <div class="logoArea">
      <router-link to="/">
        <img src='../../public/foto/homepage/logo.jpg' alt="logo" id="logoImg">
      </router-link>

      <div class="burgerIconArea">
        <i @click="$emit('change')" v-if="props.mobile" class="icon">
          <div id="bar1" class="bars" :class="{'bar1-active' : props.mobileMenuOpened}"></div>
          <div id="bar2" class="bars" :class="{'bar2-active' : props.mobileMenuOpened}"></div>
          <div id="bar3" class="bars" :class="{'bar3-active' : props.mobileMenuOpened}"></div>
        </i>
      </div>
    </div>


    <div v-if="mobile">
      <Transition name="mobile-nav" >
        <MainMenu class="menuArea" :mobile="props.mobile" :mobileMenuOpened="props.mobileMenuOpened" @routerClick="$emit('change')"></MainMenu>
      </Transition>
    </div>

    <div v-if="!mobile">
      <MainMenu class="menuArea" :mobile="props.mobile" :mobileMenuOpened="props.mobileMenuOpened" @routerClick="$emit('change')"></MainMenu>
    </div>

  </div>
</template>

<script setup lang="ts">

import MainMenu from "@/components/MainMenu.vue";
import {defineProps, defineEmits, onMounted} from 'vue'

const props = defineProps<{
  mobile: boolean,
  mobileMenuOpened: boolean
}>()

console.log('mobileMenuOpened: ' + props.mobileMenuOpened)

defineEmits(['change',])

</script>

<style scoped>
.logoArea{
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 70px;
  align-items: center;
  padding-left: 20px;
  position: relative;
}

#logoImg{
  width: 250px;
}

.burgerIconArea{
  padding: 10px 30px;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  /*background-color: red;*/
}

.burgerIconArea .icon{
  height: 30px;
  width: 30px;
  position: relative;
  z-index: 100;
}

.burgerIconArea .icon:hover{
  cursor: pointer;
}

/* Phones */
@media only screen and (max-width: 672px) {
  .menuArea{
    position: relative;
    ovrflow: hidden;
  }
}

/* Tablets */
@media only screen and (min-width: 673px) and (max-width: 990px) {
  .menuArea{
    position: relative;
  }
}

/* Laptops */
@media only screen and (min-width: 991px) {
  .menuArea {
    position: absolute;
    top: 60px;
    right: 0;
  }
}


.burgerIconArea i {
  cursor: pointer;
  font-size: 24px;
  transition: 0.8s ease all;
}

.bar1-active {
  transform: rotate(-44deg) translate(-6px,7px);
  background-color: white !important;
}

.bar2-active {
  opacity: 0%;
}

.bar3-active {
  transform: rotate(45deg) translate(-6px,-7px);
  background-color: white !important;
}

.bars {
  width: 25px;
  height: 2px;
  border-radius: 25px;
  background-color: black;
  margin: 7px;
  transition: 0.4s;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active{
  transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to{
  transform: translateX(1000px);
}

.mobile-nav-enter-to{
  transform: translateX(0);
}

</style>