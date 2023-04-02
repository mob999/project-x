import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Capture from '../views/Capture.vue'
import Upload from '../views/Upload.vue'
import Settings from '../views/Settings.vue'
import Help from '../views/Help.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/capture',
      component: Capture
    },
    {
      path: '/upload',
      component: Upload
    },
    {
      path: '/settings',
      component: Settings
    },
    {
      path: '/help',
      component: Help
    }
  ]
})

export default router
