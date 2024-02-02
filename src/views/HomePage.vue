<template>
  <div id="imageArea">
    <div class="headingArea">
      <h2>Vítejte na stránkách firmy</h2>
      <h1>EKOS - Žitenice s.r.o.</h1>
    </div>
  </div>

  <div class="hiringArea">
    <div class="hiringBox">
      <p>Hledáme nové spolupracovníky !!!</p>
      <BtnComp btnText="Volné pozice" href="PDFs/volna_mista.pdf"></BtnComp>
    </div>
  </div>

  <div class="oFirmeArea">
    <h3>O firmě</h3>
    <div class="oFirmeContent">
      <img src="../../public/zitenice-building.png" alt="" class="imageShadow">
      <div class="box">
        <p>Organizace EKOS-Žitenice s.r.o. je ryze českou vodohospodářskou společností s 30ti letou historií, s vlastním vybavením v řádech desítek mil. Kč a s celkovým počtem cca 50 zaměstnanců.</p>
        <a href="PDFs/struktura_spolecnosti.pdf" target="_blank">Organizační struktura společnosti</a>
      </div>
    </div>
  </div>

  <h3 id="realizujemeHeading">Co realizujeme</h3>

  <div class="realizujemeArea">
      <ul class="darkGreenArea">
        <li><div class="point"/><div class="text">kompletní výstavbu vodovodů a kanalizací (gravitační a tlakové kanalizační řady, vodovodní řady a čerpací stanice)</div></li>
        <li><div class="point"/><div class="text">výstavbu ORL</div></li>
        <li><div class="point"/><div class="text">odlučovače</div></li>
        <li><div class="point"/><div class="text">výstavbu retenčních nádrží</div></li>
        <li><div class="point"/><div class="text">výstavbu a rekonstrukci čistíren odpadních vod, úpraven vod a nádrží</div></li>
        <li><div class="point"/><div class="text">rozpočty sítí a zpracování nákladové části projektu</div></li>
        <li><div class="point"/><div class="text">geodetické práce, zaměření polohopisu a výškopisu staveniště, ověření průběhu inženýrských sítí staveništěm, vytyčení stavby
          před realizací či její zaměření po dokončení apod.</div></li>
      </ul>

      <div class="lightGreenArea">
        <div class="lightGreenText">
          <p>Mimo standardní činnosti v realizaci inženýrských sítí máme také zkušenosti s prácemi prováděnými pomocí speciálního zakládání (tryskové injektáže, záporové stěny, štětové stěny apod.)</p>
          <p>Kromě realizace vlastních vodohospodářských staveb nabízíme také realizaci komplexních inženýrských sítí (VO, NN, plyn, sděl. vedení, komunikace, HTU + ČTU atd.)</p>
        </div>
      </div>

    <div class="whiteBg"></div>
  </div>

    <div class="space"></div>
    
    <div class="paragraphArea">
      <div class="paragraphs">
        <div class="par1 par">
          <div class="greenRectangle"></div>
          <span class="par1Text">Strategickou vizí naší organizace je vytvořit společnost, která je stabilní, schopna dlouhodobě dosahovat očekávaných výsledků a prosperity v oblasti realizace vodohospodářských staveb a současně tak v důsledku své činnosti podporovat ochranu životního prostředí.</span>
        </div>
        <div class="par2 par">
          <div class="greenRectangle"></div>
          <span class="par2Text">Posláním firmy v oblasti kvality je trvalé zlepšování poskytovaných služeb tak, aby potřeby našich zákazníků byly plně uspokojeny a tím byly zabezpečeny přiměřené výnosy pro další rozvoj firmy. Hlavním cílem environmentu v naší společnosti je podporování ochrany životního prostředí spočívající v prevenci vůči znečištění v rovnováze se sociálními a ekonomickými potřebami společnosti.</span>
        </div>
      </div>
      <div class="imageArea">
        <img src="../../public/historyOfConstructions/2016/2016-PrahaMecholupyKaufland.jpg" alt="" class="imageShadow">
      </div>
    </div>

  <div class="space"></div>

  <FooterComp></FooterComp>



</template>

<script setup lang="ts">

import BtnComp from "@/components/BtnComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import router from "@/router";

function getFile(){
  const pdfPath = 'PDFs/volna_mista.pdf';
  window.open(pdfPath, '_blank');
}
</script>

<style scoped>
  #imageArea{
    width: 100%;
    height: 500px;
    /*background-color: greenyellow;*/
    background-image: linear-gradient(rgba(0,0,0,0) 30%, rgba(0,0,0,0.9)), url('../../public/landing_page.jpg');
    background-repeat: no-repeat;
    background-size: cover ;
    background-position: center;
    display: flex;
    align-items: flex-end;
  }

  .headingArea{
    /*background-color: orange;*/
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: calc(2vw) 30px;
  }

  .headingArea h2{
    font-size: 1.5vw;
    color: white;
    text-shadow: rgba(0, 0, 0, 0.7) 0px 3px 8px ;
    font-weight: 600;
    /*background-color: orange;*/
    padding-left: 5px;
    margin-bottom: -1.3vw;
  }

  .headingArea h1{
    font-size: 7vw;
    color: #0A9E09;
    font-weight: 700;
    text-shadow: rgba(0, 0, 0, 0.3) 0px 3px 8px ;
    height: auto;
  }

  .hiringArea{
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 40px;
  }

  .hiringBox{
    display: flex;
    flex-direction: row;
    background-color: #E2F3E1;
    width: 50%;
    gap: 50px;
    font-size: 20px;
    padding: 20px 40px;
    align-items: center;
    justify-content: center;
  }

  .oFirmeArea{
    display: flex;
    flex-direction: column;
    padding: 40px;
  }

  .oFirmeArea h3{
    font-size: 40px;
    font-weight: 900;
    color: #353535;
  }

  .oFirmeContent{
    display: flex;
    flex-direction: row;
    /*background-color: greenyellow;*/
    justify-content: center;
    align-items: center;
  }

  .oFirmeArea .box{
    background-color: white;
    padding: 50px;
    width: 50%;
    border-radius: 0 20px 20px 0;
    /*margin-bottom: auto;*/
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
    z-index: 5;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  }

  .oFirmeArea a{
    color: #0A9E09;
    text-transform: uppercase;
    padding: 5px;
    text-align: left;
    font-weight: 600;
    text-decoration: underline;
  }

  .oFirmeArea p{
    text-align: left;
  }

  .oFirmeContent img{
    object-fit: cover;
    display: flex;
    width: 300px;
    height: 400px;
  }

  .imageShadow{
    box-shadow: rgba(149, 157, 165, 0.3) 0px 8px 24px;
  }



  .realizujemeArea{
    width: 100%;
    position: relative;
    /*margin-top: 100px;*/
    background-color: #E2F3E1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 140px;
    overflow: hidden;
  }

  #realizujemeHeading{
    font-size: 40px;
    font-weight: 900;
    color: #076D06;
    text-align: left;
    padding: 10px 20px;
  }

  .realizujemeArea .darkGreenArea{
    background-image: linear-gradient( rgba(7, 125, 6, 0.9), rgba(7, 125, 6, 0.9) ), url("../../public/equipment/09.jpg") ;
    /*min-height: 500px;*/
    width: 65%;
    gap: 20px;
    padding: 80px 7%;
    color: white;
    text-align: start;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 5;
    /*top: -100px;*/
    /*left: 0;*/
  }

  .realizujemeArea .darkGreenArea li{
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 100%;
    list-style: none;
  }

  .realizujemeArea .darkGreenArea li .point{
    height: 20px;
    width: 20px;
    background-color: white;
  }

  .realizujemeArea .darkGreenArea li .text{
    width: calc(100% - 20px - 20px);
  }


  .realizujemeArea .lightGreenArea{
    background-color: white;
    /*min-height: 500px;*/
    width: 35%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: end;
    position: absolute;
    bottom: 0;
    right: 0;

  }

  .realizujemeArea .lightGreenArea .lightGreenText{
    /*width: 70%;*/
    /*height: 100%;*/
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 70px 10% ;
    align-items: center;
    justify-content: center;
    background-color: #E2F3E1;
  }

  .realizujemeArea .lightGreenText p{
    padding: 20px;
    text-align: left;
  }

  .realizujemeArea .whiteBg{
    width: 100%;
    height: 100px;
    background-color: white;
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
  }



  .paragraphArea{
    /*background-color: red;*/
    width: 100%;
    /*height: 300px;*/
    display: flex;
    flex-direction: row;
    align-items: center;
    /*justify-content: center;*/
    padding: 30px;
    /*overflow: hidden;*/
  }

  .paragraphArea .paragraphs{
    display: flex;
    flex-direction: column;
    width: 60%;
    gap: 70px;
    align-items: center;
    justify-content: center;
    /*background-color: orange;*/
    padding: 30px;
  }

  .paragraphArea .paragraphs .par{
    text-align: left;
    /*background-color: blueviolet;*/
    width: 70%;
    position: relative;
    z-index: 3;
    /*background-color: blueviolet;*/
  }

  .paragraphArea .paragraphs .par1{
    font-size: 18px;
    font-weight: 600;
  }

  .paragraphArea .paragraphs .par2{
    font-size: 16px;
  }

  .paragraphArea .paragraphs .greenRectangle{
    height: 80px;
    width: 100px;
    background-color: #E2F3E1;
    position: absolute;
    z-index: -1;
  }

  .paragraphArea .paragraphs .par2 .greenRectangle{
    top: -20px;
    right: -20px;
  }

  .paragraphArea .paragraphs .par1 .greenRectangle{
    top: -20px;
    left: -20px;
  }

  .space{
    height: 100px;
    width: 100%;
    background-color: white;
  }

  .paragraphArea .imageArea{
    height: 400px;
    width: 40%;
    margin: 0 40px;
    background-color: #076D06;

  }

  .paragraphArea img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }


  /* Phones */
  @media only screen and (max-width: 672px) {
    #imageArea{
      height: 300px;
      padding-bottom: 20px;
      /*justify-content: center;*/
      /*text-align: center;*/
    }

    .headingArea h2{
      font-size: 3vw;
      padding-left: 0;
      /*background-color: orange;*/
    }

    .headingArea h1{
      font-size: 8vw;
      font-weight: 800;
      /*background-color: purple;*/
    }

    .hiringBox{
      flex-direction: column;
      gap: 15px;
      width: 80%;
    }

    .oFirmeContent{
      flex-direction: column-reverse;
    }

    .oFirmeContent .box{
      width: 90%;
      border-radius: 20px;
      padding: 40px 20px;
      box-shadow: none;
    }

    .oFirmeArea a, .oFirmeArea p{
      text-align: center;
    }

    #realizujemeHeading{
      font-size: 30px;
      font-weight: 800;
    }

    .realizujemeArea{
      /*background-color: #E2F3E1;*/
      flex-direction: column;
      align-items: center;
      padding-bottom: 30px;
    }

    .realizujemeArea .darkGreenArea{
      width: 90%;
    }


    .realizujemeArea .lightGreenArea{
      background-color: #E2F3E1;
      width: 100%;
      height: auto;
      align-items: center;
      position: relative;
    }

    .realizujemeArea .lightGreenArea .lightGreenText{
      padding: 40px 10% ;
    }

    .realizujemeArea .lightGreenText p{
      padding: 20px;
      text-align: left;
    }

    .realizujemeArea .whiteBg{
      display: flex;
    }

    .paragraphArea{
      flex-direction: column-reverse;
    }

    .paragraphArea .paragraphs{
      width: 100%;
    }

    .paragraphArea .paragraphs .par{

      width: 85%;
    }

    .paragraphArea .imageArea{
      height: 300px;
      width: 100%;
      margin-bottom: 50px;
    }

  }

  /* Tablets */
  @media only screen and (min-width: 673px) and (max-width: 990px) {
    #imageArea{
      height: 400px;
    }
    .headingArea h1{
      font-size: 8.5vw;
    }
    .headingArea h2{
      font-size: 2.5vw;
    }
    .hiringBox{
      width: 70%;
    }

    .paragraphArea .paragraphs .par{
      width: 90%;
    }

    .oFirmeContent .box{
      box-shadow: none;
    }

  }


  /* Laptops */
  @media only screen and (min-width: 991px) {

  }
</style>