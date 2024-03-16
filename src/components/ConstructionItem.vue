<template>
  <div class="itemBox" :class="index % 2 === 0 ? 'bg-green' : 'bg-white'">
    <div class="imageArea">
      <img :src="'/foto/stavby/' + item.year + '/' + item.image">
    </div>

    <div class="itemTextArea">
      <h2>{{item.name}}</h2>
      <h3>{{item.description}}</h3>
      <div class="titleAndValue">
        <div class="title">Investiční náklad:</div>
        <div class="value">{{item.cost}}</div>
      </div>
      <div class="titleAndValue">
        <div class="title">Termín realizace:</div>
        <div class="value">{{item.date}}</div>
      </div>
      <div class="titleAndValue">
        <div class="title">Objednavatel:</div>
        <div class="value">{{item.customer}}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'
import {Construction} from "@/interfaces/Interfaces";

defineProps<{
  item: Construction,
  index: number
}>()
</script>

<style scoped>

.bg-green{
  background-color: #EAF3E9;
}

.gb-white{
  background-color: white;
}

.itemBox{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 40px 5%;
  gap: 5%;
}

.itemTextArea{
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
  width: 70%;
}

.itemTextArea h2{
  color: #0A9E09;
  font-weight: 700;
}

.itemTextArea h3{
  font-weight: 700;
}

.itemTextArea .titleAndValue{
  display: flex;
  flex-direction: row;
  width: 100%;
  text-align: left;

}

.itemTextArea .title{
  width: 200px
}

.itemTextArea .value{
  font-weight: 600;
  width: calc(100% - 200px);
}

.imageArea{
  height: 250px;
  width: 25%;
  min-width: 300px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.imageArea img{
  object-fit: cover;
  height: 100%;
  width: 100%;
}


/* Phones */
@media only screen and (max-width: 672px) {
  .itemBox{
    flex-direction: column-reverse;
    gap: 50px;
    align-items: start;
  }

  .imageArea{
    width: 100%;
  }

  .itemTextArea{
    width: 100%;
  }

}

/* Tablets */
@media only screen and (min-width: 673px) and (max-width: 990px) {

}


/* Laptops */
@media only screen and (min-width: 991px) {

}
</style>