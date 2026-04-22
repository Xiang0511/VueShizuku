import { createRouter, createWebHistory } from 'vue-router'
import BasicLayout from '@/layout/Basic.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: BasicLayout, // 這是最外層的排版框架 (導覽列+側邊欄)
      children: [
        {
          path: '', // 當網址只有 / 的時候
          name: 'home',
          component: HomeView // 中間的主要內容顯示首頁 (商品列表)
        },
        // 以後如果要有「關於我們」或「購物車」頁面，都可以加在這裡
        // {
        //   path: 'about',
        //   name: 'about',
        //   component: () => import('../views/AboutView.vue')
        // }
      ]
    }
  ]
})

export default router