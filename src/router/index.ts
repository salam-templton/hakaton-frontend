import { createRouter, createWebHistory } from 'vue-router'
import PersonsView from '@/containers/pages/persons/PersonsView.vue'
import SettingsView from '@/containers/pages/settings/SettingsView.vue'

export const pathRoutes = {
  main: '/',
  settings: '/settings',
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: PersonsView,
    },
    {
      path: '/settings',
      component: SettingsView,
    },
  ],
})

export default router
