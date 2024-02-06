<template>
  <HeadingBanner heading="Kontakty"/>

  <div class="content">

    <div class="contacts">
      <div class="contactsContent">
        <div class="heading">Kontaktní údaje</div>
        <div class="contactItem"
             v-for="contact in ContactArray"
             :key="contact.title"
             :class="{'green-item': contact.icon, 'green-text': contact.title === 'Obchodní jméno'}"
        >
          <div  class="icon">
            <font-awesome-icon v-if="contact.icon" :icon="['fas', contact.icon]" />
          </div>
          <div class="title">{{contact.title}}:</div>
          <div class="value">{{contact.value}}</div>
        </div>
      </div>
    </div>

    <div class="location">
      <div class="locationContent">
        <div class="heading">Kde nás najdete</div>
        <div class="locationCenter">
          <div class="locationImage">
            <img src="../../public/map.png" alt="">
          </div>
          <BtnComp btn-text="Otevřít v mapách Google" href="https://maps.app.goo.gl/sL7R2TRUU3KXasZ66"></BtnComp>
        </div>
      </div>
    </div>

    <div class="whistleblowing">
      <div class="heading">Whistleblowing</div>
      <p>Na základě Směrnice Evropského parlamentu a Rady EU 2019/1937 ze dne 23. října 2019 o ochraně osob, oznamujících porušení práva, zavedla společnost EKOS-Žitenice s.r.o. tzv. whistleblowingový systém. Díky tomuto systému mohou zaměstnanci (a nejen oni) bezpečně hlásit svá podezření na nekalé praktiky uvnitř naší společnosti. Za tímto účele byla zřízena „oznamovací linka“ v podobě e-mailu, na kterou mohou oznamovatelé zasílat svá oznámení, kterými se bude zabývat tzv. příslušná osoba, která bude následné komunikovat s oznamující osobou.</p>
      <div>
        <span class="mailTitle">E-mail:</span>
        <span class="mailAdress">oznamovaci.linka@ekos-zitenice.cz</span>
      </div>
    </div>



  </div>
</template>

<script setup lang="ts">
import HeadingBanner from "@/components/HeadingBanner.vue";
import ContactArray from "../../public/data/Contacts";
import BtnComp from "@/components/BtnComp.vue";

</script>

<style scoped>

.content{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 40px 5%;

}

.contacts{
  display: flex;
  flex-direction: column;
  /*background-color: #353535;*/
  width: 50%;
  align-items: center;
  margin-bottom: 50px;

}

.contactsContent{
  display: flex;
  flex-direction: column;
  align-items: start;
  /*background-color: red;*/
}
.contacts .heading{
  padding-left: 45px;
}

.heading{
  color: #0A9E09;
  text-transform: uppercase;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 30px;
}

.contactItem{
  display: flex;
  flex-direction: row;
  text-align: left;
  width: 100%;
  position: relative;
  /*background-color: blueviolet;*/
  /*flex-wrap: wrap;*/
  padding: 8px 5px 8px 0;
}

.green-item{
  background-color: #E2F3E1;
}

.green-item .value{
  font-weight: 600 !important;
}

.green-text .value{
  color: #0A9E09;
  font-weight: 700 !important;
}

.contactItem .icon{
  /*position: absolute;*/
  /*left: -50px;*/
  /*top: 0;*/
  /*background-color: orange;*/
  height: 100%;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.green-item .icon{
  background-color: #E2F3E1;
}

.contactItem .title{
  width: 30%;
  display: flex;
  padding-right: 5px;
  /*background-color: #E2F3E1;*/
}

.contactItem .value{
  font-weight: 500;
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  /*background-color: blue;*/
}


.location{
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 3%;
  /*background-color: orange;*/
  margin-bottom: 50px;


}

.locationContent{
  display: flex;
  flex-direction: column;
  align-items: start;
  /*padding: 0 5%;*/
  /*width: 80%;*/
  /*background-color: black;*/
  /*gap: 20px;*/
  width: 100%;
  height: 100%;
}

.location .locationContent .locationCenter{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}


.location .locationContent .locationImage{
  /*background-color: #353535;*/
  width: 100%;
  height: 100%;
  padding-bottom: 10px;
}

.location .locationContent img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.whistleblowing{
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  text-align: left;
  margin-bottom: 50px;
}

.whistleblowing p{
  padding-bottom: 20px;
}

.whistleblowing .mailTitle{
  font-weight: bold;
  padding-right: 10px;
}

.whistleblowing .mailAdress{
  color: #0A9E09;
  font-weight: bold;
}



/* Phones */
@media only screen and (max-width: 672px) {

  .contacts{
    width: 100%;
    /*background-color: blue;*/
    align-items: center;
    justify-content: center;
  }

  .contactsContent{
    align-items: center;
    /*background-color: orange;*/
  }

  .contacts .heading{
    padding-left: 0;
  }

  .location{
    width: 100%;
    /*background-color: orange;*/
    padding-left: 0;

  }

  .locationContent{
    align-items: center;
  }

  .content{
    /*flex-direction: column;*/
    /*gap: 50px;*/
  }

  .whistleblowing{
    width: 100%;
    /*background-color: purple;*/
    padding: 0 5%;
    align-items: center;
    text-align: center;
  }

}

/* Tablets */
@media only screen and (min-width: 673px) and (max-width: 990px) {

  .contacts{
    width: calc(100% + 50px);
    /*background-color: blue;*/
    left: -50px !important;
    position: relative;
  }


  .location{
    width: 100%;
    /*background-color: orange;*/
    padding-left: 0;
  }

  .content{
    /*flex-direction: column;*/
    gap: 50px;
    margin: 40px 70px;
  }

  .whistleblowing{
    width: 100%;
    /*background-color: purple;*/

  }
}


/* Laptops */
@media only screen and (min-width: 991px) {

  .contacts{
    width: calc(50% + 50px);
    /*background-color: blue;*/
    left: -50px !important;
    position: relative;
  }

  .location{
    width: calc(50% - 50px);
  }

  .content{
    margin: 40px 70px;

  }
}


</style>