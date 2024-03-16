<template>
  <div class="footer">
    <div class="left box">
      <div class="text">
        <p>Naše společnost zajišťuje kvalitu poskytovaných služeb a ochranu životního prostředí formou tzv. integrovaného systému a jsme tedy držiteli certifikátů již dle nových norem "2016":</p>
        <div class="buttonsArea">
          <div class="btnSet">
            <BtnComp btn-text="Čsn en iso 14001:2016" href="/PDFs/ISO_14001.pdf" uppercase></BtnComp>
            <BtnComp btn-text="Čsn en iso 9001:2016" href="/PDFs/ISO_9001.pdf" uppercase></BtnComp>
          </div>
        </div>
      </div>
      <div class="imageArea">
        <img class="ISOimg" src="/foto/homepage/ISO.png" alt="">
      </div>
    </div>

    <div class="right box">
      <p>Zde si také můžete přečíst <a href="/PDFs/politika_kvality.pdf" target="_blank">Politiku kvality a environmentu</a> naší organizace</p>
    </div>
  </div>
</template>

<script setup lang="ts">

import BtnComp from "@/components/BtnComp.vue";
</script>

<style scoped>

.footer{
  width: 100%;
  display: flex;
  flex-direction: row;
}

.footer .box{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
}

.footer .left{
  background-color: #353535;
  color: white;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 30px;
  flex-direction: row;
}

.footer .left .text{
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.footer .right{
  background-color: #0A9E09;
  color: #353535;
}

.footer .right a{
  text-decoration: underline;
  font-weight: 600;
  color: #353535;
}

.footer .btnSet{
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 30px;

}

.footer .buttonsArea{
  display: flex;
  flex-direction: row;
  width: 100%;
}

.ISOimg{
  height: 100px;
  width: 100px;
  background-color: white;
  border-radius: 100%;
}

/* Phones */
@media only screen and (max-width: 672px) {

  .footer{
    flex-direction: column;
  }

  .footer .left{
    flex-direction: column;
    width: 100%;
  }

  .footer .right{
    width: 100%;
  }

  .footer .left .btnSet{
    flex-direction: column;
    gap: 15px;
  }
}

/* Tablets */
@media only screen and (min-width: 673px) and (max-width: 990px) {

}


/* Laptops */
@media only screen and (min-width: 991px) {

}
</style>