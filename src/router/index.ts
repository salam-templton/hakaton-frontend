import { createRouter, createWebHistory } from 'vue-router'
import StudentsList from '@/containers/pages/students-list/StudentsList.vue'
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
      component: StudentsList,
    },
    {
      path: '/settings',
      component: SettingsView,
    },
  ],
})

export default router
