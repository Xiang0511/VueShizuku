import { createRouter, createWebHistory } from 'vue-router'
import Basic from '../layout/Basic.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Basic, 
      children: [
        {
          path: '', // 當網址是 / 時
          component: () => import('../views/HomeView.vue') // 顯示首頁內容
        },
        
      ]
    }
  ]
})

export default router
