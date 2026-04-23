import { createRouter, createWebHistory } from 'vue-router'
import Basic from '@/layout/Basic.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Basic,
      children: [
        {
          path: '', // 當路徑為 '/' 時，載入首頁
          name: 'home',
          component: () => import('../views/HomeView.vue'), // 假設您有這個檔案
        },
        {
          path: 'about', // 當路徑為 '/about' 時，載入 About 頁面並顯示在 Basic 的 <RouterView /> 內
          name: 'about',
          component: () => import('../views/AboutView.vue'),
        },
      ],
    },
  ],
})

export default router
