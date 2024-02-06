<template>

  <div class="itemArea">
    <div class="itemImage" v-if="windowWidth >= 673" :class="{'bg-white': !equipment.image}">
      <img :src="'equipment/' + equipment.image" alt="" v-if="equipment.image" loading="lazy">
    </div>

    <div class="text">
      <h3>{{equipment.name}}</h3>
      <div class="itemImage" v-if="windowWidth <= 672">
        <img :src="'equipment/' + equipment.image" alt="" v-if="equipment.image" loading="lazy">
      </div>
      <div class="paragraph">
        <div class="rectangle" v-if="equipment.description !== ''"/>
        <p>{{equipment.description}}</p>
      </div>
      <div class="tags">
        <BtnComp v-for="tag in equipment.tags" :btn-text="tag" :key="tag"></BtnComp>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">

import {Equipment} from "@/interfaces/Interfaces";
import {defineProps, onMounted, ref} from 'vue'
import BtnComp from "@/components/BtnComp.vue";

defineProps<{
  equipment: Equipment
}>()


const windowWidth = ref(window.innerWidth)

onMounted(() => {
  window.addEventListener('resize', handleResize);
})

function handleResize(){
  windowWidth.value = window.innerWidth
}



</script>

<style scoped>
.itemArea{
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 70px;
  /*background-color: red;*/
}

.bg-white{
  background-color: white !important;
  height: 0 !important;
}

.itemArea .itemImage{
  height: 300px;
  width: 400px;
  /*aspect-ratio: 3/2;*/
  background-color: whitesmoke;
}

.itemArea .itemImage img{
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.itemArea h3{
  color: #0A9E09;
  text-transform: uppercase;
  font-size: 30px;
  /*background-color: #353535;*/

}

.itemArea .text{
  display: flex;
  flex-direction: column;
  /*background-color: #E2F3E1;*/
  text-align: left;
  gap: 20px;
  width: 60%;
}

.itemArea .text .paragraph{
  position: relative;
  z-index: 4;
}

.itemArea .tags{
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
  position: relative;
  z-index: 5;
}

.itemArea .text  .paragraph .rectangle{
  position: absolute;
  top: -10px;
  left: -30px;
  background-color: #E2F3E1;
  height: 45px;
  width: 60px;
  z-index: -1;
}


/* Phones */
@media only screen and (max-width: 672px) {
  .itemArea .itemImage{
    width: 100%;
    aspect-ratio: 16 / 9;
    height: auto;
  }
  .itemArea .text{
    width: 100%;
  }
}

/* Tablets */
@media only screen and (min-width: 673px) and (max-width: 990px) {
  .itemArea .itemImage{
    width: 300px;
    height: 250px;
  }
  /*.itemArea .text{*/
  /*  width: 50%;*/
  /*}*/
}


/* Laptops */
@media only screen and (min-width: 991px) {

}
</style>