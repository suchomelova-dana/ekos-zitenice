import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
// import { faHouse } from '@fortawesome/free-solid-svg-icons'
// import { faPhone } from '@fortawesome/free-solid-svg-icons'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
// import { faXmark } from '@fortawesome/free-solid-svg-icons'
// import { faBars } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
// library.add(faHouse, faPhone, faEnvelope, faAngleUp, faXmark, faBars)

createApp(App).use(router).mount('#app')
// createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
