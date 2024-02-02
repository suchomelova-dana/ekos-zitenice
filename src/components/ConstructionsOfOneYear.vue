<template>
  <div class="yearTitle">Výběr realizovaných staveb <div class="year">{{year}}</div></div>

  <div class="items">
    <ConstructionItem v-for="(construction, index) in constructionData" :index="index" :item="construction" :key="construction.name" class="item"/>
  </div>
</template>

<script setup lang="ts">
import {defineProps, onMounted, ref} from 'vue'
import ConstructionItem from "@/components/ConstructionItem.vue";
import ConstructionsArr from "../../public/data/HistoryOfConstructions";
import {Construction} from "@/interfaces/Interfaces";
import {nextTick} from "vue";

const constructionData = ref<Construction[]>([])

function getConstructionsOfSpecificYear(){
  constructionData.value = ConstructionsArr.filter((item) => item.year === props.year)
}

let items = document.getElementsByClassName('item')

onMounted(() => {
  getConstructionsOfSpecificYear()

  nextTick(() => {
    items = document.getElementsByClassName('item');
    // checkAnimation();
  })
})


function checkAnimation() {
  console.log('animation')
  console.log(items)
  for(let item of items){
    console.log('ahoj')
    let top = window.scrollY;
    let offset = item.offsetTop;
    let height = item.offsetHeight;

    if(top >= (offset -500) && top < offset + height){
      console.log('pridano')
      item.classList.add('show-animate')
    }
  }
}

// window.onscroll = () => checkAnimation()

const props = defineProps<{
  year: number,
}>()

</script>

<style scoped>
.yearTitle {
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  /*background-color: orange;*/
  margin: 30px 0;
  align-items: center;
  font-weight: 600;
  font-size: 20px;
  position: sticky;
  top: 0;
  z-index: 80;
  background-color: white;
  /*box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;*/
}


.yearTitle .year{
  color: #0A9E09;
  font-weight: 800;
  font-size: 30px;
  padding: 10px;
}

.hide-animate{
  opacity: 0.5%;
  transition: 1s;
  transform: translateY(5%);
}

.show-animate{
  opacity: 1;
  transition: 1s;
  transform: translateY(0);
}
</style>