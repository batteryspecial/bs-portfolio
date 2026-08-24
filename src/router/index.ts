import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ExperienceView from '@/views/ExperienceView.vue'
import ProjectsView from '@/views/ProjectsView.vue'

// Explicitly type the routes array
const routes: RouteRecordRaw[] = [
  { 
    path: '/', 
    component: HomeView 
  },
  { 
    path: '/experience',
    component: ExperienceView 
  },
  { 
    path: '/projects',
    component: ProjectsView 
  },
]

// TypeScript automatically infers the 'Router' type here
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

export default router
