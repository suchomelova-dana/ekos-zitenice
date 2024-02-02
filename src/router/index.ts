import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'homePage',
    component: () => import ('../views/HomePage.vue')
  },
  {
    path: '/equipment',
    name: 'equipment',
    component: () => import ('../views/EquipmentPage.vue')
  },
  {
    path: '/machineRental',
    name: 'machineRental',
    component: () => import ('../views/MachineRentalPage.vue')
  },
  {
    path: '/historyOfConstructions',
    name: 'historyOfConstructions',
    component: () => import ('../views/HistoryOfConstructionsPage.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import ('../views/ContactsPage.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes
})

export default router
