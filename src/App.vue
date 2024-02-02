<template>
  <HeaderArea @change="changeMobileMenuOpenedState" :mobile="mobile" :mobileMenuOpened="mobileMenuOpened"/>
  <div class="contentArea" v-show="!mobile || !mobileMenuOpened ">
    <router-view/>
  </div>
  <CopyRight/>
</template>


<script setup lang="ts">
import HeaderArea from "@/components/HeaderArea";
import CopyRight from "@/components/CopyRight";
import {onMounted, ref} from "vue";

const mobile = ref<boolean>(false)
const mobileMenuOpened = ref(false)

onMounted(() => {
  window.addEventListener('resize', checkScreen);
  checkScreen();
})

function checkScreen(){
  if(window.innerWidth <= 672){
    mobile.value = true
    return
  }
  mobile.value = false
  mobileMenuOpened.value = false
}

function changeMobileMenuOpenedState(){
  mobileMenuOpened.value = !mobileMenuOpened.value
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  padding: 0;
  margin: 0;
}

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.contentArea{
  background-color: white;
  min-height: calc(100vh - 70px - 40px);
  padding-top: 20px;
}

/* Phones */
@media only screen and (max-width: 672px) {
  .contentArea{
    padding-top: 0;
  }

}

/* Tablets */
@media only screen and (min-width: 673px) and (max-width: 990px) {

  .contentArea{
    padding-top: 0;
  }
}


/* Laptops */
@media only screen and (min-width: 991px) {

}

/*nav {*/
/*  padding: 30px;*/
/*}*/

/*nav a {*/
/*  font-weight: bold;*/
/*  color: #2c3e50;*/
/*}*/

nav a.router-link-exact-active {
  font-weight: 600;
}


</style>