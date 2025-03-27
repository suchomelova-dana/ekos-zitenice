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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2534.957654620994!2d14.15364111214318!3d50.55355747149356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47097f24d547685f%3A0x63e95b02c7a5416d!2sEKOS-%C5%BDitenice%20s.r.o.!5e0!3m2!1scs!2sit!4v1707759748132!5m2!1scs!2sit" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
        <a href="mailto:oznamovaci.linka@ekos-zitenice.cz" class="mailAdress">oznamovaci.linka@ekos-zitenice.cz</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeadingBanner from "@/components/HeadingBanner.vue";
import ContactArray from "../../public/data/Kontakty";
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
  width: 50%;
  align-items: center;
  margin-bottom: 50px;

}

.contactsContent{
  display: flex;
  flex-direction: column;
  align-items: start;
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
}

.contactItem .value{
  font-weight: 500;
  width: 70%;
  display: flex;
  flex-wrap: wrap;
}


.location{
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 3%;
  margin-bottom: 50px;
}

.locationContent{
  display: flex;
  flex-direction: column;
  align-items: start;
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
  width: 100%;
  height: 100%;
  padding-bottom: 10px;
}

.location .locationContent iframe{
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
    align-items: center;
    justify-content: center;
  }

  .contactsContent{
    align-items: center;
  }

  .contacts .heading{
    padding-left: 0;
  }

  .location{
    width: 100%;
    padding-left: 0;
  }

  .locationContent{
    align-items: center;
  }

  .whistleblowing{
    width: 100%;
    padding: 0 5%;
    align-items: center;
    text-align: center;
  }

}

/* Tablets */
@media only screen and (min-width: 673px) and (max-width: 990px) {
  .contacts{
    width: calc(100% + 50px);
    left: -50px !important;
    position: relative;
  }

  .location{
    width: 100%;
    padding-left: 0;
  }

  .content{
    gap: 50px;
    margin: 40px 70px;
  }

  .whistleblowing{
    width: 100%;
  }
}


/* Laptops */
@media only screen and (min-width: 991px) {

  .contacts{
    width: calc(50% + 50px);
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
