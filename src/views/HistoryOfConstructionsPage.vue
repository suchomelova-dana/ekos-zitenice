<template>
  <HeadingBanner heading="Historie staveb"/>

  <ConstructionsOfOneYear v-for="year in yearsToRender" :year="year" :key="year"></ConstructionsOfOneYear>

  <ScrollArrow/>
</template>

<script setup lang="ts">
import HeadingBanner from "@/components/HeadingBanner.vue";
import ConstructionsOfOneYear from "@/components/ConstructionsOfOneYear.vue";
import ConstructionsArr from "../../public/data/HistoryOfConstructions";
import ScrollArrow from "@/components/ScrollArrow.vue";

const currentYear = new Date().getFullYear();

const arrayRange = (start: number, stop: number, step: number) =>
    Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step
    );

const allYears = arrayRange(currentYear, 2005, -1)

const yearsToRender = allYears.filter((year) => ConstructionsArr.find(construction => construction.year === year ))



</script>

<style scoped>

</style>