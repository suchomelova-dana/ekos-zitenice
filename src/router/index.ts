import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'homePage',
    component: () => import ('../views/HomePage.vue')
  },
  {
    path: '/strojni-vybaveni',
    name: 'strojni-vybaveni',
    component: () => import ('../views/EquipmentPage.vue')
  },
  {
    path: '/pronajem-stroju',
    name: 'pronajem-stroju',
    component: () => import ('../views/MachineRentalPage.vue')
  },
  {
    path: '/historie-staveb',
    name: 'historie-staveb',
    component: () => import ('../views/HistoryOfConstructionsPage.vue')
  },
  {
    path: '/kontakty',
    name: 'kontakty',
    component: () => import ('../views/ContactsPage.vue')
  },

]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes
})

export default router
