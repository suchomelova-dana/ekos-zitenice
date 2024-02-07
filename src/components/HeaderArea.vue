<template>

  <div style="position: relative">
  <div class="logoArea">
    <router-link to="/">
      <img src='../../public/images/homepage/logo.jpg' alt="logo" id="logoImg">
    </router-link>

    <div class="burgerIconArea" v-if="mobile" @click="$emit('change')">
      <font-awesome-icon v-show="!mobileMenuOpened" :icon="['fas', 'bars']" class="icon"/>
      <font-awesome-icon v-show="mobileMenuOpened" :icon="['fas', 'xmark']" color="white" class="icon"/>
    </div>

  </div>
  <MainMenu class="menuArea" :mobile="props.mobile" :mobileMenuOpened="props.mobileMenuOpened" @routerClick="$emit('change')"></MainMenu>

  </div>


</template>

<script setup lang="ts">

import MainMenu from "@/components/MainMenu.vue";
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  mobile: boolean,
  mobileMenuOpened: boolean
}>()

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
  .menuArea{
    position: absolute;
    top: 60px;
    right: 0;
  }
}
</style>