<template>
  <HeadingBanner heading="Pronájem strojů"/>

  <div class="pageArea">
    <a href="/PDFs/pronajem_stroju_s_obsluhou.pdf" target="_blank" class="box">
      <h2>Pronájem strojů</h2>
      <h3>s obsluhou</h3>
      <div class="image">
        <img src="../../public/foto/stavby/2016/2016-Zatec.jpg" alt="">
      </div>
      <BtnComp btn-text="Ceník" href="PDFs/pronajem_stroju_s_obsluhou.pdf" uppercase></BtnComp>
    </a>

    <a href="/PDFs/pronajem_stroju_bez_obsluhy.pdf" target="_blank" class="box">
      <h2>Pronájem strojů</h2>
      <h3>bez obsluhy</h3>
      <div class="image">
          <img src="../../public/foto/vybavení/40.jpg" alt="">
      </div>
      <BtnComp btn-text="Ceník" href="PDFs/pronajem_stroju_s_obsluhou.pdf" uppercase></BtnComp>
    </a>
  </div>

</template>

<script setup lang="ts">
import HeadingBanner from "@/components/HeadingBanner.vue";
import BtnComp from "@/components/BtnComp.vue";

</script>

<style scoped>

.pageArea{
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 100px 10%;
  gap: 10%;
}

.box{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 30px;
  width: 40%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: white;
  text-decoration: none;
  position: relative;
}

.box:hover{
  background-color: #EAF3E9;
  box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;

}

.box h2, .box h3{
  text-transform: uppercase;
  text-decoration: none;
  text-underline: none;
}

.box h2{
  color: black;
}

.box h3{
  color: #0A9E09;
}

.box .image{
  height: 250px;
  width: 80%;
  margin: 20px;
  background-color: whitesmoke;
  display: inline-block;
  overflow: hidden;
  position: relative;
  transition: transform .5s ease;
}

.box .image img{
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: transform .5s ease;
  position: relative;
}

.box:hover .image img{
  transform: scale(120%);
}

/* Phones */
@media only screen and (max-width: 672px) {
  .pageArea{
    flex-direction: column;
    padding: 100px 10%;
    gap: 40px;
  }

  .box{
    width: 100%;
    padding: 30px 30px;
  }
  .box .image{
    height: 150px;
  }
}

/* Tablets */
@media only screen and (min-width: 673px) and (max-width: 990px) {

}


/* Laptops */
@media only screen and (min-width: 991px) {

}
</style>
