<template>
  <HeadingBanner heading="Strojní vybavení"/>
  <div class="equipmentItems">
    <EquipmentItem v-for="(item, index) in equipmentArr" :equipment="item" :key="item.name" :index="index"/>
  </div>
  <ScrollArrow/>

</template>

<script setup lang="ts">

import EquipmentItem from "@/components/EquipmentItem.vue";
import equipmentArr from "../../public/data/Vybavení";
import HeadingBanner from "@/components/HeadingBanner.vue";
import ScrollArrow from "@/components/ScrollArrow.vue";

</script>

<style scoped>
.equipmentItems{
  display: flex;
  flex-direction: column;
  /*gap: 40px;*/
  padding: 60px 0;
  /*padding: 60px 10%;*/
}

/* Phones */
@media only screen and (max-width: 672px) {

}

/* Tablets */
@media only screen and (min-width: 673px) and (max-width: 990px) {
  .equipmentItems{
    padding: 60px 5%;
  }
}


/* Laptops */
@media only screen and (min-width: 991px) {

}

</style>