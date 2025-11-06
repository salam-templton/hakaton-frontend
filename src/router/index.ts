import { createRouter, createWebHistory } from 'vue-router'
import StudentsList from '@/containers/pages/students-list/StudentsList.vue'
import SettingsView from '@/containers/pages/settings/SettingsView.vue'
import MainLayout from '@/containers/layout/main-layout/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
    },
    {
      path: '/settings',
      component: SettingsView,
    },
  ],
})

export default router
