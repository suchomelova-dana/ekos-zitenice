<template>

  <div class="itemArea" :class="index % 2 === 0 ? 'bg-green' : 'bg-white'">
    <div class="itemImage" v-if="windowWidth >= 673" :class="{'background-white': !equipment.image}">
      <img :src="'/images/equipment/' + equipment.image" alt="ahoj" v-if="equipment.image" loading="lazy">
    </div>

    <div class="text">
      <h3>{{equipment.name}}</h3>
      <div class="itemImage" v-if="windowWidth <= 672">
        <img :src="'/images/equipment/' + equipment.image" alt="ahoj" v-if="equipment.image" loading="lazy">
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
  equipment: Equipment,
  index: number,
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
  padding: 40px 10%;
}

.bg-green{
  background-color: #EAF3E9;
}

.bg-white{
  background-color: white;
}

.background-white{
  background-color: white !important;
  height: 0 !important;
}

.itemArea .itemImage{
  height: 250px;
  width: 340px;
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

}

.itemArea .text{
  display: flex;
  flex-direction: column;
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
  .itemArea .text  .paragraph .rectangle{
    left: -20px;
  }
}

/* Tablets */
@media only screen and (min-width: 673px) and (max-width: 990px) {
  .itemArea .itemImage{
    width: 300px;
    height: 250px;
  }
}


/* Laptops */
@media only screen and (min-width: 991px) {

}
</style>