import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Explore from '../views/Explore.vue'
import Notifications from '../views/Notifications.vue'
import Messages from '../views/Messages.vue'
import Profile from '../views/Profile.vue'
import Settings from '../views/Settings.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notifications
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
